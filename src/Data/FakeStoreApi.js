function getDataFromAPI() {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => console.error(error));
}

export { getDataFromAPI };
