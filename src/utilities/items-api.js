import sendRequest from './send-request';
const BASE_URL = '/api/items';

export function getAll() {
  return sendRequest(BASE_URL);
}

// This function is never actually used in SEI CAFE,
// it's only provided as an example of RESTful routing, etc.
// For example, you had a <MoviesDetailPage> component
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
