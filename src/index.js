import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './styles/base/theme';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import './styles/styles.scss';
import reportWebVitals from './reportWebVitals';
import { startSetUser } from './actions/auth';
import Preloader from './components/Layout/Preloader';

const store = configureStore();

const app = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </ThemeProvider>
);

const preloader = (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Preloader />
  </ThemeProvider>
);

ReactDOM.render(preloader, document.getElementById('root'));

store.dispatch(startSetUser()).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
