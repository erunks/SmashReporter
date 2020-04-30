/* eslint-disable max-classes-per-file */
import 'whatwg-fetch';

class HTTPError extends Error { }
class HTTP404Error extends HTTPError { }
class HTTP500Error extends HTTPError { }

const httpErrors = {
  404: HTTP404Error,
  500: HTTP500Error,
};

const shouldRetry = (error) => !error.response || error.response.status >= 500;

function parseResponseBody(response) {
  const contentType = response.headers.get('content-type') || '';

  if (contentType.includes('application/json')) {
    return response.json();
  }
  return response.text();
}

function parseResponseHeaders(response) {
  const headers = {};

  response.headers.forEach((value, name) => {
    headers[name] = value;
  });

  return headers;
}

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = httpErrors[response.status] ? new httpErrors[response.status]() : new HTTPError();
  error.response = {
    status: response.status,
    body: await parseResponseBody(response),
    header: parseResponseHeaders(response)
  };
  throw error;
}

export function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseResponseBody)
    .catch((error) => {
      if (error.response) {
        error.message = error.response.body.errors || `Failed ${url}: ${error.response.status}`;
      }
      error.request = { url, options };
      throw error;
    });
}

export function requestWithRetry(url, options, retries = 5, delay = 300) {
  return new Promise((resolve, reject) => {
    const wrappedRequest = () => {
      request(url, options)
        .then((response) => resolve(response))
        .catch((error) => {
          const retry = () => setTimeout(() => wrappedRequest(retries - 1), delay);
          /* eslint-disable-next-line no-param-reassign */
          retries -= 1;
          return retries > 0 && shouldRetry(error) ? retry() : reject(error);
        });
    };

    wrappedRequest();
  });
}

export default request;
