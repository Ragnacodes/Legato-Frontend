import { v4 as uuid } from 'uuid';

export const backToFront = (back) => {
    const edges = [];
    const nodes = back.map(node => {
        const element = {
            id: node.id,
            data: node.data,
            position: node.position,
            type: node.type
        };

        if (node.parentId !== null) {
            const edge = {
                id: uuid(),
                animated: true,
                data: {},
                source: node.parentId,
                sourceHandle: null,
                target: node.id,
                targetHandle: null,
                type: 'customEdge'
            };
            edges.push(edge);
        }
        return element;
    })
    return [...nodes, ...edges];
};

export const frontToBack = (front) => {
    return [];
};