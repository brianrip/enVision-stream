import { ADD_USER, CLEAR_USER } from '../../actionTypes';

const initialState = {};

const UserReducer = (state = initialState, action) => {
  console.log("NEW ACTION Jackson", action);
  switch (action.type) {
    case ADD_USER :
      console.log('add user reducer', action.user);
      return Object.assign({}, state, action.user);
    case CLEAR_USER :
      return {};
    default :
      return state;
  }
};

export default UserReducer;
