import scenariosReducer from '../../reducers/scenarios';

test('should set default state for scenarios', () => {
  const action = {
    type: '@@INIT',
  };
  const state = scenariosReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should set scenarios', () => {
  const scenarios = [
    { name: 'scenario', id: 3 },
    { name: 'scenario2', id: 7 },
  ];

  const action = {
    type: 'GET_SCENARIOS',
    scenarios,
  };
  const state = scenariosReducer([], action);
  expect(state).toEqual(scenarios);
});

test('should add scenario', () => {
  const scenarios = [
    { name: 'scenario', id: 3 },
    { name: 'scenario2', id: 7 },
  ];

  const newScenario = { name: 'scenario3', id: 17 };

  const action = {
    type: 'ADD_SCENARIO',
    scenario: newScenario,
  };
  const state = scenariosReducer(scenarios, action);
  expect(state).toEqual([
    { name: 'scenario', id: 3 },
    { name: 'scenario2', id: 7 },
    { name: 'scenario3', id: 17 },
  ]);
});

test('should edit scenario', () => {
  const scenarios = [
    { name: 'scenario', id: 3 },
    { name: 'scenario2', id: 7 },
  ];

  const id = 3;
  const updates = { name: 'new name' };

  const action = {
    type: 'EDIT_SCENARIO',
    id,
    updates,
  };
  const state = scenariosReducer(scenarios, action);
  expect(state).toEqual([
    { name: 'new name', id: 3 },
    { name: 'scenario2', id: 7 },
  ]);
});

test('should remove connection', () => {
  const scenarios = [
    { name: 'scenario', id: 3 },
    { name: 'scenario2', id: 7 },
  ];

  const id = 3;

  const action = {
    type: 'REMOVE_SCENARIO',
    id,
  };
  const state = scenariosReducer(scenarios, action);
  expect(state).toEqual([{ name: 'scenario2', id: 7 }]);
});
