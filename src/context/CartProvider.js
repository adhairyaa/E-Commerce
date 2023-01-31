import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const handleAddToCart = (state, action) => {
  switch (action.type) {
    case "HANDLE_CART":
      return (state = {
        ...state,
        productsInCart:
          state.productsInCart.length === 0
            ? [action.payload]
            : state.productsInCart.includes(action.payload)
            ? state.productsInCart.filter((item) => action.payload !== item)
            : [...state.productsInCart, action.payload],
      });
    default:
      return state;
  }
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(handleAddToCart, {
    productsInCart: [],
  });
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
