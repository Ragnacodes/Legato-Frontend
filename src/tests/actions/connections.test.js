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
  const connection = { Name: 'connection', Id: 3, Token_Type: 'gmail' };
  const action = actions.addConnection(connection);
  expect(action).toEqual({
    type: 'ADD_CONNECTION',
    connection,
  });
});

test('should setup edit connection action object', () => {
  const Id = '123';
  const updates = { Name: 'newname' };
  const action = actions.editConnection(Id, updates);
  expect(action).toEqual({
    type: 'EDIT_CONNECTION',
    Id,
    updates,
  });
});

test('should setup remove connection action object', () => {
  const Id = '123';
  const action = actions.removeConnection(Id);
  expect(action).toEqual({
    type: 'REMOVE_CONNECTION',
    Id,
  });
});
