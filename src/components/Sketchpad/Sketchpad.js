import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { setElements, addElement, removeElement } from '../../actions/sketchpad';
import ReactFlow, {
  Controls,
  Background
} from 'react-flow-renderer';
import Sidebar from './SketchpadSidebar.js';
import Button from '@material-ui/core/Button';
import AbstractNode from './AbstractNode';
import CustomEdge from './CustomEdge';

const nodeTypes = {
  spotify: AbstractNode,
  github: AbstractNode,
  webhook: AbstractNode,
  ssh: AbstractNode,
  telegram: AbstractNode
};

const Sketchpad = ( { elements, setElements, addElement, removeElement } ) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onLoad = (_reactFlowInstance) =>
    setReactFlowInstance(_reactFlowInstance);

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  };

  const onDrop = (event) => {
    event.preventDefault();
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const type = event.dataTransfer.getData('application/reactflow');
    const position = reactFlowInstance.project({
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    });
    const newNode = {
      type,
      position,
      data: {},
    };
    addElement(newNode);
  };

  const onConnect = (params) => {
    const customParams = {
      ...params,
      type: 'customEdge',
      animated: true,
      data : {}
    };
    addElement(customParams);
  };

  const onElementsRemove = (elementsToRemove) => {
    elementsToRemove.forEach(element => {
      removeElement(element.id)
    });
  };
  
  const onSaveClicked = () => {
    console.log(elements);
  };

  return (
    <div className="sketchpad">
      <div className="dndflow">
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
              edgeTypes={{ customEdge: CustomEdge }}
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

      <div className="control-box">
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onSaveClicked}
            className="button"
        >
            Save
        </Button>
        <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={onSaveClicked}
            className="button"
        >
            Run
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    elements: state.sketchpad
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setElements: (type, data) => dispatch(setElements(type, data)),
    addElement: (type, data) => dispatch(addElement(type, data)),
    removeElement: (type, data) => dispatch(removeElement(type, data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);