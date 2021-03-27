import React, { useState, useRef } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  removeElements,
  Controls,
  Background
} from 'react-flow-renderer';
import Sidebar from './SketchpadSidebar.js';
import Button from '@material-ui/core/Button';
import WebHookNode from './WebHookNode';
import TelegramNode from './TelegramNode';
import SpotifyNode from './SpotifyNode';
import SSHNode from './SSHNode';
import GithubNode from './GithubNode';

const initialElements = [
  // {
  //   id: '0',
  //   type: 'input',
  //   data: { label: 'input node' },
  //   position: { x: 250, y: 5 },
  // },
  // {
  //   id: '-1',
  //   type: 'output',
  //   data: { label: 'output node' },
  //   position: { x: 250, y: 250 },
  // },
  // {
  //   id: 'e0-1',
  //   source: '0',
  //   target: '-1'
  // },
];

const nodeTypes = {
  WebhookNode: WebHookNode,
  TelegramNode: TelegramNode,
  SSHNode: SSHNode,
  SpotifyNode: SpotifyNode,
  GithubNode: GithubNode
};

let id = 0;
const getId = () => `${++id}`;
const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [elements, setElements] = useState(initialElements);
  const onConnect = (params) => setElements((els) => addEdge(params, els));
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

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
      id: getId(),
      type,
      position,
      data: {},
    };

    setElements((es) => es.concat(newNode));
  };
  
  const onSaveClicked = (event) => {
    console.log(elements);
  }

  return (
    <div className="sketchpad">
      <div className="dndflow">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              elements={elements}
              onConnect={onConnect}
              onElementsRemove={onElementsRemove}
              onLoad={onLoad}
              onDrop={onDrop}
              onDragOver={onDragOver}
              nodeTypes={nodeTypes}
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
        </ReactFlowProvider>
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
export default DnDFlow;