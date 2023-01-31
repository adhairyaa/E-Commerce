import { useState } from "react";
import { useCartContext } from "../context/CartProvider";

export function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);
  const { state, dispatch } = useCartContext();
  return (
    <div className="CartPage">
      {state.productsInCart.length === 0 && (
        <h2>Nothing to show here Start Shopping!</h2>
      )}
      <div className="CartItem">
        <div>
          <img src="Section.jpg" alt="img"></img>
        </div>
        <div>
          <div>{product.name}</div>
          <div>
            {product.price} <span style={{ color: "#D9534F" }}>40%OFF</span>
          </div>

          <div>
            Quantity
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            {quantity}
            <button onClick={() => setQuantity(quantity > 1 && quantity - 1)}>
              -
            </button>
          </div>
          <div>
            <button
              onClick={() =>
                dispatch({ type: "HANDLE_CART", payload: product.id })
              }
            >
              Remove From cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
