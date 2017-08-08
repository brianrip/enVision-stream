import { combineReducers } from 'redux';
import app from './components/App/reducer';
import user from './components/Entry/reducer';

const rootReducer = combineReducers({
  app,
  user
})

export default rootReducer;
