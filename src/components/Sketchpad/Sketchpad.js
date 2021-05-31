import React, { useRef, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { updateStatus } from '../../actions/sketchpadStatus';
import {
  startGetSketchpad,
  startAddEdge,
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
import NodePopover from './Nodes/NodePopover';
import Sidebar from './Sidebar/SketchpadSidebar';
import CustomEdge from './Edges/CustomEdge';
import SketchpadControl from './SketchpadControl';
import { nodeTypes } from '../Services/nodeTypes';

const Sketchpad = ({
  id,
  fetched,
  elements,
  getSketchpad,
  addEdge,
  removeNode,
  removeEdge,
  editElement 
}) => {

  const dispatch = useDispatch();
  const reactFlowWrapper = useRef(null);

  useEffect(() => {
    dispatch(updateStatus({
      fetched: false
    }));
    getSketchpad(id)
    .then(() => {
      dispatch(updateStatus({
        fetched: true
      }));
    })
    .catch(() => {
      dispatch(updateStatus({
        fetched: false
      }));
    });
  }, [getSketchpad, id, dispatch]);

  const onConnect = (params) => {
    dispatch(updateStatus({
      loading: true,
      failed: false
    }));
    addEdge({...params, animated: true, type: 'edge'})
    .then(() => {
      dispatch(updateStatus({
        loading: false,
        failed: false
      }));
    })
    .catch(() => {
      dispatch(updateStatus({
        loading: false,
        failed: true
      }));
    });
  };

  const onElementsRemove = (elementsToRemove) => {
    dispatch(updateStatus({
      loading: true,
      failed: false
    }));
    const element = elementsToRemove[0];
    if (isNode(element)) {
      removeNode(element.id)
      .then(() => {
        dispatch(updateStatus({
          loading: false,
          failed: false
        }));
      })
      .catch(() => {
        dispatch(updateStatus({
          loading: false,
          failed: true
        }));
      });
    }
    else if (isEdge(element)) {
      removeEdge(element)
      .then(() => {
        dispatch(updateStatus({
          loading: false,
          failed: false
        }));
      })
      .catch(() => {
        dispatch(updateStatus({
          loading: false,
          failed: true
        }));
      });
    }
  };

  const onNodeDragStop = (event, node) => {
    dispatch(updateStatus({
      loading: true,
      failed: false
    }));
    editElement(node.id, {position: node.position})
    .then(() => {
      dispatch(updateStatus({
        loading: false,
        failed: false
      }));
    })
    .catch(() => {
      dispatch(updateStatus({
        loading: false,
        failed: true
      }));
    });
  };

  return (
    <div className="sketchpad">
      <NodePopover />
      <div className="dndflow">
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              elements={fetched ? elements : []}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              nodeTypes={nodeTypes}
              edgeTypes={{ customEdge: CustomEdge }}
              onNodeDragStop={onNodeDragStop}
              deleteKeyCode={46}
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
    elements: state.sketchpad.elements,
    fetched: state.sketchpadStatus.fetched,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSketchpad: (scenarioID) => dispatch(startGetSketchpad(scenarioID)),
    removeNode: (id) => dispatch(startRemoveNode(id)),
    removeEdge: (edge) => dispatch(startRemoveEdge(edge)),
    addEdge: (edge) => dispatch(startAddEdge(edge)),
    editElement: (id, updates) => dispatch(startEditElement(id, updates))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);