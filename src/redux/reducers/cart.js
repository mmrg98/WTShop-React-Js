import { ADD_PRODUCT, REMOVE_PRODUCT, CHECKOUT } from "../actions/actionTypes";

export default (items = [], { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT:
      const newItem = payload;
      const foundItem = items.find(
        (item) => item.product === newItem.product
      );
      if (foundItem)
        return items.map((item) =>
          item === foundItem ? { ...item, quantity: item.quantity + 1 } : item
        );
      else return [...items, { ...newItem, quantity: 1 }];

    case REMOVE_PRODUCT:
      return items.filter((item) => item !== payload);

    case CHECKOUT:
      return [];

    default:
      return items;
  }
};
