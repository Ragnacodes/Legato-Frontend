import { v4 as uuid } from 'uuid';

export const addScenario = ({
    name = '',
    isActive = false,
    interval = 0,
    nodes = []
}) => {
    return {
        type: 'ADD_SCENARIO',
        scenario: {
            id: uuid(),
            name,
            isActive,
            interval,
            nodes
        }
    };
};

export const removeScenario = (id) => {
    return {
        type: 'REMOVE_SCENARIO',
        id
    };
}

export const editScenario = (id, updates) => {
    return {
        type: 'EDIT_SCENARIO',
        id,
        updates
    };
};