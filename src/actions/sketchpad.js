import { v4 as uuid } from 'uuid';

export const setElements = (elements) => {
    return {
        type: 'SET_ELEMENTS',
        elements
    };
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