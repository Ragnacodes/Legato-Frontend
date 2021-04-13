import Axios from '../utils/axiosConfig';
import { v4 as uuid } from 'uuid';
import { backToFront } from '../utils/sketchpadConverter';

export const getElements = (elements) => {
    return {
        type: 'GET_ELEMENTS',
        elements: elements === undefined ? [] : elements
    };
};

export const startGetElements = (id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/scenarios/${id}/nodes`)
        .then(res => {
            const nodes = res.data.nodes;
            const elements = backToFront(nodes);
            dispatch(getElements(elements));
        })
        .catch(err => {
            console.log(err);
        });
    }
};

export const addNode = (element) => {
    return {
        type: 'ADD_ELEMENT',
        element
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

export const startAddElement = (id, element) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        if (element.type === 'customEdge') {
            const childNodeID = element.target;
            const updates = {
                parentId: parseInt(element.source)
            };
            dispatch(startEditElement(id, childNodeID, updates))
            .then(() => {
                dispatch(addEdge(element));
            })
            .catch(() => {
                console.log('Error');
            });
        }
        else {
            const node = {
                parentId: null,
                name: 'name',
                type: element.type,
                position: element.position,
                data: {},
            };
            const body = JSON.stringify(node);
            return Axios.post(`/users/${username}/scenarios/${id}/nodes`, body)
            .then(res => {
                dispatch(addNode({
                    id: res.data.node.id,
                    ...element
                }));
            })
            .catch(err => {
                console.log(err);
            });
        } 
    };
};

export const removeElement = (id) => {
    return {
        type: 'REMOVE_ELEMENT',
        id
    };
};

export const startRemoveElement = (scenarioID, nodeID) => {

};

export const editElement = (id, updates) => {
    return {
        type: 'EDIT_ELEMENT',
        id,
        updates
    };
};

export const startEditElement = (scenarioID, nodeID, updates) => {
    console.log("sdsdsdsd")
    const body = JSON.stringify(updates);
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.put(`/users/${username}/scenarios/${scenarioID}/nodes/${nodeID}`, body)
        .then(res => {
            if (!updates.hasOwnProperty('parentId')) {
                dispatch(editElement(nodeID, updates));
            }
        })
        .catch(err => {
            console.log(err);
        });
    };
};