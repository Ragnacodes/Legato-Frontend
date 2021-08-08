import { v4 as uuid } from 'uuid';

export const elementsBackToFront = (nodesBack) => {
    const edges = [];
    const nodesFront = nodesBack.map(nodeBack => {
        const nodeFront = {
            id: nodeBack.id.toString(),
            type: nodeBack.hasOwnProperty('subType') ? `${nodeBack.type}_${nodeBack.subType}` : `${nodeBack.type}_`,
            position: nodeBack.position,
            data: {
                ...nodeBack.data,
                name: nodeBack.name,
                service: nodeBack.type,
                subService: nodeBack.subType,
                parentId: nodeBack.parentId,
                ancestors: nodeAncestors(nodeBack, nodesBack),
                schema: nodeBack.schema
            }
        };

        if (nodeBack.parentId !== null) {
            const edge = {
                id: uuid(),
                animated: true,
                data: {},
                source: nodeBack.parentId.toString(),
                sourceHandle: null,
                target: nodeBack.id.toString(),
                targetHandle: null,
                type: 'edge'
            };
            edges.push(edge);
        }
        return nodeFront;
    })
    return [...nodesFront, ...edges];
};

export const nodeFrontToBack = (nodeFront) => {
    const nodeBack = {
        parentId: null,
        name: nodeFront.data.name,
        type: nodeFront.data.service,
        subType: nodeFront.data.subService,
        position: nodeFront.position,
        data: nodeFront.data,
    };
    return nodeBack;
};

const nodeAncestors = (node, nodes) => {
    const ancestors = [];
    let parentId = node.parentId;
    while (parentId) {
        // eslint-disable-next-line no-loop-func
        const parent = nodes.find(el => el.id === parentId);
        const ancestor = {
            id: parent.id,
            name: parent.name,
            schema: parent.data.schema
        }
        ancestors.push(ancestor);
        parentId = parent.parentId;
    }
    return ancestors;
};