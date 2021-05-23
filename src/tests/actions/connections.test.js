import * as actions from '../../actions/connections';

test('should setup get connections action object', () => {
  const connections = [];
  const action = actions.getConnections(connections);
  expect(action).toEqual({
    type: 'GET_CONNECTIONS',
    connections,
  });
});

test('should setup add connection action object', () => {
  const connection = { name: 'connection', id: 3, type: 'gmail' };
  const action = actions.addConnection(connection);
  expect(action).toEqual({
    type: 'ADD_CONNECTION',
    connection,
  });
});

test('should setup edit connection action object', () => {
  const id = '123';
  const updates = { name: 'newname' };
  const action = actions.editConnection(id, updates);
  expect(action).toEqual({
    type: 'EDIT_CONNECTION',
    id,
    updates,
  });
});

test('should setup remove connection action object', () => {
  const id = '123';
  const action = actions.removeConnection(id);
  expect(action).toEqual({
    type: 'REMOVE_CONNECTION',
    id,
  });
});
