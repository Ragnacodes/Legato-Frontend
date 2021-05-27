import React, { useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  startGetSketchpad,
  startAddElement,
  startRemoveNode,
  startRemoveEdge,
  startEditElement
} from '../../actions/sketchpad';
import ReactFlow, {
  Controls,
  Background,
  isNode,
  isEdge
} from 'react-flow-renderer';
import Sidebar from './Sidebar/SketchpadSidebar';
import CustomEdge from './Edges/CustomEdge';
import SketchpadControl from './SketchpadControl';
import { nodeTypes } from '../Services/nodeTypes';

const Sketchpad = ({
  id,
  elements,
  getSketchpad,
  addEdge,
  removeNode,
  removeEdge,
  editElement 
}) => {

  const reactFlowWrapper = useRef(null);

  useEffect(() => {
    getSketchpad(id)
    .then(() => {
    })
    .catch(() => {
    });
  }, [getSketchpad, id]);

  const onConnect = (params) => {
    addEdge({...params, animated: true, type: 'edge'});
  };

  const onElementsRemove = (elementsToRemove) => {
    const element = elementsToRemove[0];
    if (isNode(element)) {
      removeNode(element.id);
    }
    else if (isEdge(element)) {
      removeEdge(element);
    }
  };

  const onNodeDragStop = (event, node) => {
    editElement(node.id, {position: node.position});
  }

  return (
    <div className="sketchpad">
      <div className="dndflow">
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              nodeTypes={nodeTypes}
              edgeTypes={{ customEdge: CustomEdge }}
              onNodeDragStop={onNodeDragStop}
            >
              <Background
                variant="lines"
                gap={16}
                size={0.5}
              />
              <Controls showInteractive={false} />
            </ReactFlow>
          </div>
          <Sidebar />
      </div>
      <SketchpadControl />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    elements: state.sketchpad.elements
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSketchpad: (scenarioID) => dispatch(startGetSketchpad(scenarioID)),
    removeNode: (id) => dispatch(startRemoveNode(id)),
    removeEdge: (edge) => dispatch(startRemoveEdge(edge)),
    addEdge: (edge) => dispatch(startAddElement(edge)),
    editElement: (id, updates) => dispatch(startEditElement(id, updates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);