import * as actions from '../../actions/scenarios';

test('should setup get scenarios action object', () => {
  const scenarios = [];
  const action = actions.getScenarios(scenarios);
  expect(action).toEqual({
    type: 'GET_SCENARIOS',
    scenarios,
  });
});

test('should setup add scenario action object', () => {
  const scenario = { id: 2, name: 'scenario' };
  const action = actions.addScenario(scenario);
  expect(action).toEqual({
    type: 'ADD_SCENARIO',
    scenario,
  });
});

test('should setup remove scenario action object', () => {
  const id = 1;
  const action = actions.removeScenario(id);
  expect(action).toEqual({
    type: 'REMOVE_SCENARIO',
    id,
  });
});

test('should setup edit scenario action object', () => {
  const updates = { name: 'newName' };
  const id = 1;
  const action = actions.editScenario(id, updates);
  expect(action).toEqual({
    type: 'EDIT_SCENARIO',
    id,
    updates,
  });
});
