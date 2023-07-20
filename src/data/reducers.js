import {
  ITEM_INITIALIZED,
  ITEM_DELETED_BY_ID,
  SEARCH_TEXT_CHANGED,
} from "../constants";

function reducer(
  { itemsData, searchText } = { itemsData: [], searchText: "" },
  { type, payload }
) {
  switch (type) {
    case ITEM_INITIALIZED:
      return { itemsData: payload, searchText };
    case ITEM_DELETED_BY_ID:
      return {
        itemsData: itemsData.filter(({ id }) => id !== payload),
        searchText,
      };
    case SEARCH_TEXT_CHANGED:
      return { itemsData, searchText: payload };
    default:
      return { itemsData, searchText };
  }
}

export default reducer;
