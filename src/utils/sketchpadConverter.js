import { v4 as uuid } from 'uuid';

export const elementsBackToFront = (nodesBack) => {
    const edges = [];
    const nodesFront = nodesBack.map(nodeBack => {
        const ancestors = nodeAncestors(nodeBack, nodesBack);
        const nodeFront = nodeBackToFront(nodeBack, ancestors);

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

export const nodeBackToFront = (nodeBack, ancestors=[]) => {
    const nodeFront = {
        id: nodeBack.id.toString(),
        type: nodeBack.hasOwnProperty('subType') ? `${nodeBack.type}_${nodeBack.subType}` : `${nodeBack.type}_`,
        position: nodeBack.position,
        data: {
            ...nodeBack.data,
            name: nodeBack.name,
            service: nodeBack.type,
            subService: nodeBack.subType,
            parentId: nodeBack.parentId ? nodeBack.parentId.toString() : null,
            ancestors,
            schema: null,
        }
    };
    return nodeFront;
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
            schema: parent.schema
        }
        ancestors.push(ancestor);
        parentId = parent.parentId;
    }
    return ancestors;
};

export const nodeFrontToBack = (nodeFront) => {
    const {
        parentId,
        name,
        service,
        subService,
        ...other
    } = nodeFront.data;
    const nodeBack = {
        parentId: parentId ? parseInt(parentId).toString() : null,
        name,
        type: service,
        subType: subService,
        position: nodeFront.position,
        data: other,
    };
    return nodeBack;
};
