import fetch from 'isomorphic-fetch';

const envisionRoot = 'http://localhost:8000/v1/'

export function signup(endpoint, method = 'get', body) {
  return fetch(`${envisionRoot}/${endpoint}`, {
    headers: { 'content-type': 'application/json' },
    method,
    body: JSON.stringify(body),
  })
  .then(response => response.json().then(json => ({ json, response })))
  .then(({ json, response }) => {
    if (!response.ok) {
      return Promise.reject(json);
    }
    return json;
  })
  .catch(err => {
    console.error(err);
  });
}
