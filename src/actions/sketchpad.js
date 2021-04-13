import Axios from '../utils/axiosConfig';
import { v4 as uuid } from 'uuid';

export const getElements = (elements) => {
    return {
        type: 'GET_ELEMENTS',
        elements: elements === undefined ? [] : elements
    };
};

export const startGetElements = (id) => {
    return (dispatch, getState) => {
        const username = getState().auth.username;
        return Axios.get(`/users/${username}/scenarios/${id}`)
        .then(res => {
            const elements = res.data.scenario.services;
            const scenario =  {
                id: res.data.scenario.id,
                name: res.data.scenario.name,
                isActive: res.data.scenario.is_active
            };
            dispatch(getElements(elements));
            return scenario;
        })
        .catch(err => {
            console.log(err);
        });
    }
};

export const addElement = (element) => {
    return {
        type: 'ADD_ELEMENT',
        element: {
            id: uuid(),
            ...element
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