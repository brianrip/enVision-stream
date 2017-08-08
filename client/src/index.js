import React from 'react';
import './index.css';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';

import routes from './routes';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ),
);

const Root = (
  <Provider store={ store }>
    { routes }
  </Provider>
)

render(
  Root,
  document.getElementById('root')
);

registerServiceWorker();
