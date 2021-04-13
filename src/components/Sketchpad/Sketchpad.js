import React, { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import { startGetElements, startAddElement, startRemoveElement } from '../../actions/sketchpad';
import ReactFlow, {
  Controls,
  Background,
} from 'react-flow-renderer';
import Sidebar from './SketchpadSidebar.js';
import AbstractNode from './AbstractNode';
import CustomEdge from './CustomEdge';
import Appbar from '../Layout/Appbar';
import SketchpadControl from './SketchpadControl';
import SketchpadTitle from './SketchpadTitle';

const nodeTypes = {
  spotifys: AbstractNode,
  githubs: AbstractNode,
  webhooks: AbstractNode,
  sshs: AbstractNode,
  telegrams: AbstractNode
};

const Sketchpad = ( { elements, getElements, addElement, removeElement, match } ) => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [scenario, setScenario] = useState();
  const [loading, setLoading] = useState();

  useEffect(() => {
    setLoading(true);
    getElements(match.params.id)
    .then((scenario) => {
      setScenario(scenario);
      setLoading(false);
    })
    .catch(() => {
      setLoading(false);
    });
  }, [getElements, match.params.id]);

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
    // setLoading(true);
    addElement(match.params.id, newNode)
    // .then(() => {
    //   setLoading(false);
    // })
    // .catch(() => {
    //   setLoading(false);
    // });
  };

  const onConnect = (params) => {
    const customParams = {
      ...params,
      type: 'customEdge',
      animated: true,
      data : {}
    };
    // setLoading(true);
    addElement(match.params.id, customParams)
    // .then(() => {
    //   setLoading(false);
    // })
    // .catch(() => {
    //   setLoading(false);
    // });
  };

  const onElementsRemove = (elementsToRemove) => {
    elementsToRemove.forEach(element => {
      removeElement(element.id)
    });
  };

  if (loading) {
    return (<div>Loading</div>)
  }
  else {
    return (
      <>
      <Appbar leftChildren={<SketchpadTitle />} />
      <main className="main">
      <div className="app-bar-spacer" />
  
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
          <SketchpadControl />
        </div>
  
      </main>
      </>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    elements: state.sketchpad
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getElements: (id) => dispatch(startGetElements(id)),
    addElement: (id, element) => dispatch(startAddElement(id, element)),
    removeElement: (id) => dispatch(startRemoveElement(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);