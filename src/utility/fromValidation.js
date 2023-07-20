import {
  MIN_ITEM_NAME_LENGTH,
  MIN_ITEM_DESCRIPTION_LENGTH,
} from "../constants";

function isValidPrice(price) {
  return price.length && price >= 0 ? true : false;
}

function isValidImageURL(image) {
  const result = image.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );
  return result ? true : false;
}

function isValidTitle(title) {
  return title.length >= MIN_ITEM_NAME_LENGTH;
}

function isValidDescription(description) {
  return description.length >= MIN_ITEM_DESCRIPTION_LENGTH;
}

async function validateFormData({ title, description, price, image }) {
  return {
    title: isValidTitle(title),
    description: isValidDescription(description),
    price: isValidPrice(price),
    image: isValidImageURL(image),
  };
}

export { validateFormData };
