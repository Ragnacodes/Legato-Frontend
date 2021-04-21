import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { addEdge, removeElement } from '../../actions/sketchpad';
import ReactFlow, {
  Controls,
  Background,
} from 'react-flow-renderer';
import Appbar from '../Layout/Appbar';
import SketchpadTitle from './SketchpadTitle';
import Sidebar from './Sidebar/SketchpadSidebar';
import CustomEdge from './Nodes/CustomEdge';
import SketchpadControl from './SketchpadControl';
import TriggerNode from './Nodes/TriggerNode';
import ActionNode from './Nodes/ActionNode';

const nodeTypes = {
  trigger: TriggerNode,
  action: ActionNode
};

const Sketchpad = ( { elements, addEdge, removeElement } ) => {
  const reactFlowWrapper = useRef(null);

  const onConnect = (params) => {
    addEdge({...params, animated: true});
  };

  const onElementsRemove = (elementsToRemove) => {
    elementsToRemove.forEach(element => {
      removeElement(element.id)
    });
  };

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
};

const mapStateToProps = (state) => {
  return {
    elements: state.sketchpad
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeElement: (id) => dispatch(removeElement(id)),
    addEdge: (edge) => dispatch(addEdge(edge))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);