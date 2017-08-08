import * as Envision from '../../util/envisionApi';
import { ADD_USER, CLEAR_USER } from '../../actionTypes';

export const addUser = (user) => {
  console.log('store user info ', user);
  return {
    type: ADD_USER,
    user
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}

export function newUser(authData) {
  return (dispatch) => {
    return Envision.signup(`authentication/signup`, 'post', authData)
    .then(res => {
      window.sessionStorage.setItem('token', res.token);
      window.sessionStorage.setItem('user', JSON.stringify(res.user));
      dispatch(addUser(res.user));
    })
    .catch(err => {
      console.log('Error in newUser: ', err);
    })
  };
}

export function loginUser(authData) {
  return (dispatch) => {
    return Envision.login(`authentication/login`, 'post', authData)
    .then(res => {
      window.sessionStorage.setItem('token', res.token);
      window.sessionStorage.setItem('user', JSON.stringify(res.user));
      dispatch(addUser(res.user));
    })
    .catch(err => {
      console.log('Error in loginUser: ', err);
    })
  };
}

// export function loginUser(authData) {
//   return (dispatch) => {
//     return Envision.login(`authentication/login`, 'post', authData)
//     .then(res => {
//       window.sessionStorage.setItem('token', res.token);
//       window.sessionStorage.setItem('user', JSON.stringify(res.user));
//       dispatch(addUser(res.user));
//     })
//   };
// }
