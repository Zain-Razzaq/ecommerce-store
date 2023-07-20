function getAllProductsURL() {
  return "https://fakestoreapi.com/products";
}

function getProductByIdURL(id) {
  return `https://fakestoreapi.com/products/${id}`;
}

export { getAllProductsURL, getProductByIdURL };
