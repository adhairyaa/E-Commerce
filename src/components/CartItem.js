import { useCartContext } from "../context/CartProvider";

export function CartItem({ product }) {
  const { dispatch } = useCartContext();
  return (
    <div className="CartPage">
      <div className="CartItem">
        <div>
          <img src={product.productImage} alt="img"></img>
        </div>
        <div className="cart-product-details">
          <div>{product.name}</div>
          <div>
            {product.price} <span style={{ color: "#D9534F" }}>40%OFF</span>
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
