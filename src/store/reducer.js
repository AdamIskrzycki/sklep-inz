import * as actionTypes from "./actions";

const initialState = {
  cartProducts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        ...state,
        cartProducts: state.cartProducts.concat(action.cartProduct),
      };
    case actionTypes.REMOVE_ONE:
      const findIndex = state.cartProducts.findIndex((el) => el.id === action.productId);
      const splicedArray = [...state.cartProducts];
      splicedArray.splice(findIndex, 1);
      return {
        ...state,
        cartProducts: splicedArray,
      };
      case actionTypes.REMOVE_ALL: 
      return {
          ...state,
          cartProducts: [...state.cartProducts.filter((x) => x.id !== action.productId)]
      }
    default:
      return state;
  }
};

export default reducer;
