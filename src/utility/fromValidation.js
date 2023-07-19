function isValidPrice(price) {
  return price.length && price >= 0 ? true : false;
}

function isValidImageURL(image) {
  // to do
  return true;
}

function isValidTitle(title) {
  return title.length >= 3 ? true : false;
}

function isValidDescription(description) {
  return description.length >= 10 ? true : false;
}

async function validateFormData(itemData) {
  return {
    title: isValidTitle(itemData.title),
    description: isValidDescription(itemData.description),
    price: isValidPrice(itemData.price),
    image: isValidImageURL(itemData.image),
  };
}

export { validateFormData };
