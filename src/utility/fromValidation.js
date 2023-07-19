function isValidPrice(price) {
  return price.length && price >= 0 ? true : false;
}

function isValidImageURL(image) {
  // to do
  // var res = image.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  return true;
}

function isValidTitle(title) {
  return title.length >= 3;
}

function isValidDescription(description) {
  return description.length >= 10;
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
