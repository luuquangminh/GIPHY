/* eslint-disable no-restricted-globals */
import config from "./config";
import storage from "store/storages/sessionStorage";
import queryString from "query-string";

function handleErrors(response) {
  if ([200, 201].includes(response.status)) {
    return response;
  }
  if (response.status === 401) {
    storage.clearAll();
  }

  throw response;
}

export default {
  token: undefined,

  headers: {},

  setJwtToken(token) {
    this.token = token;
    this.establishHeaderRequest();
  },

  establishHeaderRequest() {
    this.headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${this.token}`
    };
  },

  get({ path = "", params, baseUrl = config.baseUrl }) {
    return fetch(`${baseUrl}/${path}?${queryString.stringify(params)}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer"
    })
      .then(handleErrors)
      .then(response => response.json())
      .catch(async err => {
        throw await err.json();
      });
  },

  put({ path = "", payload }) {
    return fetch(`${config.baseUrl}/${path}`, {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(payload)
    })
      .then(handleErrors)
      .then(response => response.json())
      .catch(async err => {
        throw await err.json();
      });
  },

  post({ path = "", payload }) {
    return fetch(`${config.baseUrl}/${path}`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: this.headers,
      redirect: "follow",
      referrer: "no-referrer",
      body: JSON.stringify(payload)
    })
      .then(handleErrors)
      .then(response => response.json())
      .catch(async err => {
        throw await err.json();
      });
  }
};
