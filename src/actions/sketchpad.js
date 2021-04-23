import Axios from '../utils/axiosConfig';
import { v4 as uuid } from 'uuid';
import { elementsBackToFront, nodeFrontToBack } from '../utils/sketchpadConverter';

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
            id: uuid(),
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
                isActive: res.data.scenario.isActive
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
                dispatch(addNode({
                    id: res.data.node.id.toString(),
                    ...element
                }));
            })
            .catch(err => {
                console.log(err);
            });
        } 
    };
};

export const startRemoveElement = (id) => {
    return (dispatch, getState) => {};
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