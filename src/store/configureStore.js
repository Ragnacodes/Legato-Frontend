import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import signupReducer from '../reducers/signup';
import loginReducer from '../reducers/login';
import scenariosReducer from '../reducers/scenarios';
import webhookReducer from '../reducers/webhooks';
import sketchpadReducer from '../reducers/sketchpad';
import drawerReducer from '../reducers/drawer';
import connectionsReducer from '../reducers/connections';
import servicesReducer from '../reducers/services';
import httpReducer from '../reducers/http'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const middleware = [thunk];
  if (process.env.NODE_ENV === "development") {
    const { createLogger } = require("redux-logger");
    middleware.push(createLogger({ collapsed: true }));
  }

  const store = createStore(
    combineReducers({
      auth: authReducer,
      signup: signupReducer,
      login: loginReducer,
      scenarios: scenariosReducer,
      webhooks: webhookReducer,
      https: httpReducer,
      sketchpad: sketchpadReducer,
      drawer: drawerReducer,
      connections: connectionsReducer,
      services :servicesReducer
    }),
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
};

export default configureStore;
