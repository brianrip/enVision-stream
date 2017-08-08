import fetch from 'isomorphic-fetch';

const token = window.sessionStorage.token;
const envisionRoot = 'http://localhost:8000/v1/'

export function getRandomImages(endpoint, method = 'get', body) {
  return fetch(`${envisionRoot}/${endpoint}`, {
    headers: { 'content-type': 'application/json', 'Authorization' : `Bearer ${token}` },
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

export function getRandomImage(endpoint, method = 'get', body) {
  return fetch(`${envisionRoot}/${endpoint}`, {
    headers: { 'content-type': 'application/json', 'Authorization' : `Bearer ${token}` },
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

export function followInterest(endpoint, method = 'get', body) {
  return fetch(`${envisionRoot}/${endpoint}`, {
    headers: { 'content-type': 'application/json', 'Authorization' : `Bearer ${token}` },
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

export function login(endpoint, method = 'get', body) {
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
