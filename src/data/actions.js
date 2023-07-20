import {
  ITEM_INITIALIZED,
  ITEM_DELETED_BY_ID,
  SEARCH_TEXT_CHANGED,
} from "../constants";

function itemsInitialized(items) {
  return {
    type: ITEM_INITIALIZED,
    payload: items,
  };
}

function itemDeletedByID(id) {
  return {
    type: ITEM_DELETED_BY_ID,
    payload: id,
  };
}

function searchTextChanged(text) {
  return {
    type: SEARCH_TEXT_CHANGED,
    payload: text,
  };
}

export { itemsInitialized, itemDeletedByID, searchTextChanged };
