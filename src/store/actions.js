export const ADD = "ADD";
export const REMOVE_ONE = "REMOVE_ONE";
export const REMOVE_ALL = "REMOVE_ALL";

export const add = (product) => ({
  type: ADD,
  product: product,
});

export const removeOne = (id) => ({
  type: REMOVE_ONE,
  productId: id,
});

export const removeAll = (id) => ({
  type: REMOVE_ALL,
  productId: id,
});
