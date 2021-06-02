import connectionsReducer from '../../reducers/connections';

test('should set default state for connections', () => {
  const action = {
    type: '@@INIT',
  };
  const state = connectionsReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should set connections', () => {
  const connections = [
    { name: 'connection', id: 3, type: 'gmail' },
    { name: 'connection2', id: 7, type: 'github' },
  ];

  const action = {
    type: 'GET_CONNECTIONS',
    connections,
  };
  const state = connectionsReducer([], action);
  expect(state).toEqual(connections);
});

test('should add connection', () => {
  const connections = [
    { name: 'connection', id: 3, type: 'gmail' },
    { name: 'connection2', id: 7, type: 'github' },
  ];

  const newConnection = { name: 'connection3', id: 12, type: 'spotify' };

  const action = {
    type: 'ADD_CONNECTION',
    connection: newConnection,
  };
  const state = connectionsReducer(connections, action);
  expect(state).toEqual([
    { name: 'connection', id: 3, type: 'gmail' },
    { name: 'connection2', id: 7, type: 'github' },
    { name: 'connection3', id: 12, type: 'spotify' },
  ]);
});

test('should edit connection', () => {
  const connections = [
    { name: 'connection', id: 3, type: 'gmail' },
    { name: 'connection2', id: 7, type: 'github' },
  ];

  const id = 3;
  const updates = { name: 'new name' };

  const action = {
    type: 'EDIT_CONNECTION',
    id,
    updates,
  };
  const state = connectionsReducer(connections, action);
  expect(state).toEqual([
    { name: 'new name', id: 3, type: 'gmail' },
    { name: 'connection2', id: 7, type: 'github' },
  ]);
});

test('should remove connection', () => {
  const connections = [
    { name: 'connection', id: 3, type: 'gmail' },
    { name: 'connection2', id: 7, type: 'github' },
  ];

  const id = 3;

  const action = {
    type: 'REMOVE_CONNECTION',
    id,
  };
  const state = connectionsReducer(connections, action);
  expect(state).toEqual([{ name: 'connection2', id: 7, type: 'github' }]);
});
