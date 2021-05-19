import Axios from '../utils/axiosConfig';
import { v4 as uuid } from 'uuid';
import { elementsBackToFront, nodeFrontToBack } from '../utils/sketchpadConverter';
import { startEditScenario } from './scenarios';

export const getSketchpad = (scenario, elements) => {
    return {
        type: 'GET_SKETCHPAD',
        scenario,
        elements: elements === undefined ? [] : elements
    };
};

export const addNode = (node) => {
    return {
        type: 'ADD_ELEMENT',
        element: {
            ...node
        }
    };
};

export const addEdge = (edge) => {
    return {
        type: 'ADD_ELEMENT',
        element: {
            id: uuid(),
            ...edge
        }
    };
};

export const removeElement = (id) => {
    return {
        type: 'REMOVE_ELEMENT',
        id
    };
};

export const editElement = (id, updates) => {
    return {
        type: 'EDIT_ELEMENT',
        id,
        updates
    };
};

export const startGetSketchpad = (id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/scenarios/${id}`)
        .then(res => {
            const scenario = {
                id: res.data.scenario.id,
                name: res.data.scenario.name,
                isActive: res.data.scenario.isActive,
                lastScheduledTime: res.data.scenario.lastScheduledTime,
                interval: res.data.scenario.interval
            };
            const nodesBack = res.data.scenario.services;
            const elementsFront = elementsBackToFront(nodesBack);
            dispatch(getSketchpad(scenario, elementsFront));
        })
        .catch(err => {
            console.log(err);
        });
    }
};

export const startAddElement = (element) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;

        if (element.type === 'edge') {
            const childNodeID = element.target;
            const updates = {
                parentId: parseInt(element.source)
            };
            dispatch(startEditElement(childNodeID, updates))
            .then(() => {
                dispatch(addEdge(element));
            })
            .catch(() => {
                console.log('Error in creating edge.');
            });
        }
        else {
            const nodeBack = nodeFrontToBack(element);
            const body = JSON.stringify(nodeBack);
            return Axios.post(`/users/${username}/scenarios/${scenarioID}/nodes`, body)
            .then(res => {
                const backData = res.data.node.data;
                const newElement = {
                    ...element,
                    data: {
                        ...element.data,
                        ...backData
                    }
                };
                dispatch(addNode({
                    id: res.data.node.id.toString(),
                    ...newElement,
                }));
            })
            .catch(err => {
                console.log(err);
            });
        } 
    };
};

export const removeElements = (elements) => {
    return (dispatch) => {
        
        if (elements.length === 1) {
            if (elements[0].type === 'edge') {
                const edge = elements[0];
                const childNodeID = edge.target;
                const updates = {
                    parentId: null
                };
                dispatch(startEditElement(childNodeID, updates))
                .then(() => {
                    dispatch(removeElement(edge.id));
                })
                .catch(() => {
                    console.log('Error in removing edge.');
                });
            }
            else {
                const node = elements[0];
                dispatch(startRemoveNode(node.id))
            }
        }

        else if (elements.length === 2) {
            const edge = elements[0].type === 'edge' ? elements[0] : elements[1];
            const node = elements[0].type === 'edge' ? elements[1] : elements[0];
                dispatch(startRemoveNode(node.id));
                dispatch(removeElement(edge.id));
        }

        else if (elements.length === 3) {
            const node = elements.find(element => element.type !== 'edge');
            const leftEdge = elements.find(element => element.target === node.id);
            const rightEdge = elements.find(element => element.source === node.id);
            const newEdge = {
                source: leftEdge.source,
                sourceHandle: null,
                target: rightEdge.target,
                targetHandle: null,
                animated: true,
                type: 'edge',
            };
            dispatch(startRemoveNode(node.id));
            dispatch(removeElement(leftEdge.id));
            dispatch(removeElement(rightEdge.id));
            dispatch(addEdge(newEdge));
        }

    };
};

export const startRemoveNode = (id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        return Axios.delete(`/users/${username}/scenarios/${scenarioID}/nodes/${id}`)
        .then(res => {
            dispatch(removeElement(id));
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const startEditElement = (id, updates) => {
    const body = JSON.stringify(updates);
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        return Axios.put(`/users/${username}/scenarios/${scenarioID}/nodes/${id}`, body)
        .then(res => {
            if (!updates.hasOwnProperty('parentId')) {
                dispatch(editElement(id, updates));
            }
        })
        .catch(err => {
            console.log(err);
        });
    };
};

export const editSketchpadScenario = (updates) => {
    return {
        type: 'EDIT_SKETCHPAD_SCENARIO',
        updates
    };
};

export const startEditSketchpadScenario = (updates) => {
    return (dispatch, getState) => {
        const scenarioID = getState().sketchpad.scenario.id;
        dispatch(startEditScenario(scenarioID, updates));
        dispatch(editSketchpadScenario(updates));
    };
};

export const startSchedulingScenario = (id, scheduling) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`/users/${username}/scenarios/${id}/schedule`, scheduling)
        .then(res => {
            dispatch(startEditScenario(id, res.scenario));
            dispatch(editSketchpadScenario(res.scenario));
        })
        .catch(err => {
            console.log(err);
        });
    };
};