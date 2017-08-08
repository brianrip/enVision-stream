import { ADD_USER } from './actions';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER :
    console.log(action);
      return Object.assign({}, state, action);
    default :
      return state;
  }
};

export default UserReducer;
