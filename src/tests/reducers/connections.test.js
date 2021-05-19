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
    { Name: 'connection', Id: 3, Token_Type: 'gmail' },
    { Name: 'connection2', Id: 7, Token_Type: 'github' },
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
    { Name: 'connection', Id: 3, Token_Type: 'gmail' },
    { Name: 'connection2', Id: 7, Token_Type: 'github' },
  ];

  const newConnection = { Name: 'connection3', Id: 12, Token_Type: 'spotify' };

  const action = {
    type: 'ADD_CONNECTION',
    connection: newConnection,
  };
  const state = connectionsReducer(connections, action);
  expect(state).toEqual([
    { Name: 'connection', Id: 3, Token_Type: 'gmail' },
    { Name: 'connection2', Id: 7, Token_Type: 'github' },
    { Name: 'connection3', Id: 12, Token_Type: 'spotify' },
  ]);
});

test('should edit connection', () => {
  const connections = [
    { Name: 'connection', Id: 3, Token_Type: 'gmail' },
    { Name: 'connection2', Id: 7, Token_Type: 'github' },
  ];

  const Id = 3;
  const updates = { Name: 'new name' };

  const action = {
    type: 'EDIT_CONNECTION',
    Id,
    updates,
  };
  const state = connectionsReducer(connections, action);
  expect(state).toEqual([
    { Name: 'new name', Id: 3, Token_Type: 'gmail' },
    { Name: 'connection2', Id: 7, Token_Type: 'github' },
  ]);
});

test('should remove connection', () => {
  const connections = [
    { Name: 'connection', Id: 3, Token_Type: 'gmail' },
    { Name: 'connection2', Id: 7, Token_Type: 'github' },
  ];

  const Id = 3;

  const action = {
    type: 'REMOVE_CONNECTION',
    Id,
  };
  const state = connectionsReducer(connections, action);
  expect(state).toEqual([{ Name: 'connection2', Id: 7, Token_Type: 'github' }]);
});
