function getDataFromAPI() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export { getDataFromAPI };
