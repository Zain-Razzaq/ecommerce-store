function getDataFromAPI() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function deleteItemFromAPI(id) {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

function addItemInAPI({ title, price, description, image, category }) {
  return fetch("https://fakestoreapi.com/products", {
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
    .catch((error) => console.error(error));
}

export { getDataFromAPI, deleteItemFromAPI, addItemInAPI };
