import Axios from '../utils/axiosConfig';
import { v4 as uuid } from 'uuid';
import {
    elementsBackToFront,
    nodeFrontToBack,
    nodeBackToFront
} from '../utils/sketchpadConverter';
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
            throw err;
        });
    }
};

export const startAddNode = (node) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        const nodeBack = nodeFrontToBack(node);
        const body = JSON.stringify(nodeBack);
        return Axios.post(`/users/${username}/scenarios/${scenarioID}/nodes`, body)
        .then(res => {
            const returnedNode = res.data.node;
            const nodeFront = nodeBackToFront(returnedNode);
            dispatch(addNode(nodeFront));
        })
        .catch(err => {
            throw err;
        });
    } 
}

export const startAddEdge = (edge) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        const childNodeID = edge.target;
        const backUpdates = {
            parentId: parseInt(edge.source)
        };
        const body = JSON.stringify(backUpdates);
        return Axios.put(`/users/${username}/scenarios/${scenarioID}/nodes/${childNodeID}`, body)
        .then(res => {
            return dispatch(startGetSketchpad(scenarioID));
        })
        .catch(err => {
            throw err;
        });
    };
};

export const startRemoveNode = (id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        const scenario = getState().sketchpad.scenario;
        return Axios.delete(`/users/${username}/scenarios/${scenarioID}/nodes/${id}`)
        .then(res => {
            const newNodesBack = res.data.nodes;
            const newElementsFront = elementsBackToFront(newNodesBack);
            dispatch(getSketchpad(scenario, newElementsFront));
        })
        .catch(err => {
            throw err;
        });
    };
};

export const startRemoveEdge = (edge) => {
    const childNodeID = edge.target;
    const updates = { parentId: null };
    const body = JSON.stringify(updates);
    return (dispatch, getState) => {
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        return Axios.put(`/users/${username}/scenarios/${scenarioID}/nodes/${childNodeID}`, body)
        .then(res => {
            return dispatch(startGetSketchpad(scenarioID));
        })
        .catch(err => {
            throw err;
        });
    };
};

export const startEditElement = (id, updates) => {
    return (dispatch, getState) => {
        const parentId = getState().sketchpad.elements.find(element => element.id === id).data.parentId;
        const username = getState().auth.username;
        const scenarioID = getState().sketchpad.scenario.id;
        const body = JSON.stringify({parentId: parseInt(parentId), ...updates});
        return Axios.put(`/users/${username}/scenarios/${scenarioID}/nodes/${id}`, body)
        .then(res => {
            dispatch(editElement(id, updates));
        })
        .catch(err => {
            throw err;
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
        const isActive = getState().sketchpad.scenario.isActive;
        const scenarioID = getState().sketchpad.scenario.id;
        dispatch(startEditScenario(scenarioID, {isActive, ...updates}));
        dispatch(editSketchpadScenario(updates));
    };
};

export const startSchedulingScenario = (id, scheduling) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.post(`/users/${username}/scenarios/${id}/schedule`, scheduling)
        .then(res => {
            dispatch(editSketchpadScenario(res.data.scenario));
        })
        .catch(err => {
            throw err;
        });
    };
};