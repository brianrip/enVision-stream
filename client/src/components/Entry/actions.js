import * as Envision from '../../util/envisionApi';

export const ADD_USER = 'ADD_USER';

export const storeUser = (authData) => {
  console.log(authData);
  return {
    type: ADD_USER,
    authData
  }
}

export function newUser(authData) {
  return (dispatch) => {
    return Envision.signup(`authentication/signup`, 'post', authData)
    .then(res => {
      window.sessionStorage.setItem('token', res.token);
      window.sessionStorage.setItem('user', JSON.stringify(res.user));
      dispatch(storeUser(res.user));
    })
    .catch(err => {
      console.log('Error in newUser: ', err);
    })
  };
}

// export function loginUser(authData) {
//   return (dispatch) => {
//     return Envision.login(`authentication/login`, 'post', authData)
//     .then(res => {
//       window.sessionStorage.setItem('token', res.token);
//       window.sessionStorage.setItem('user', JSON.stringify(res.user));
//       dispatch(storeUser(res.user));
//     })
//   };
// }
