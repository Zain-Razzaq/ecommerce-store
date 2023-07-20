import { getAllProductsURL, getProductByIdURL } from "./apiEndPoints";

function getDataFromAPI() {
  return fetch(getAllProductsURL())
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function deleteItemFromAPI(id) {
  return fetch(getProductByIdURL(id), {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => false);
}

function addItemInAPI({ title, price, description, image, category }) {
  return fetch(getAllProductsURL(), {
    method: "POST",
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => false);
}

function getProductById(id) {
  return fetch(getProductByIdURL(id))
    .then((res) => res.json())
    .catch((error) => console.error(error));
}

function updateItemInAPI(updatedItem) {
  const { id, title, price, description, image, category } = updatedItem;
  return fetch(getProductByIdURL(id), {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      price: price,
      description: description,
      image: image,
      category: category,
    }),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => false);
}

export {
  getDataFromAPI,
  deleteItemFromAPI,
  addItemInAPI,
  getProductById,
  updateItemInAPI,
};
