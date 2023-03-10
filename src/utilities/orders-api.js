import sendRequest from "./send-request";

const BASE_URL = "/api/orders";

export function getCart() {
  return sendRequest(`${BASE_URL}/cart`);
}

export function addItemToCart(itemId) {
  return sendRequest(`${BASE_URL}/cart/items/${itemId}`, "POST");
}

export function setItemQtyInCart(itemId, newQty) {
  return sendRequest(`${BASE_URL}/cart/qty`, "PUT", { itemId, newQty });
}

export function estimate() {
  return sendRequest(`${BASE_URL}/cart/estimate`, "POST");
}

export function getAllForUser() {
  return sendRequest(`${BASE_URL}/user`);
}

export function handleDelete(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, "DELETE");
}

export function updateOrder(orderId) {
  return sendRequest(`${BASE_URL}/${orderId}`, "PUT");
}
