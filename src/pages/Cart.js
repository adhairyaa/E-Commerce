import { useEffect, useState } from "react";
import { CartItem } from "../components/CartItem";
import { useCartContext } from "../context/CartProvider";
import products from "../products/products.json";
export function Cart() {
  const [orderAmount, setOrderAmount] = useState(0);

  const { state } = useCartContext();
  const { productsInCart } = state;

  const cartProductsData = products.filter((item) =>
    productsInCart.includes(item.id)
  );
  useEffect(() => {
    cartProductsData.length > 0 &&
      setOrderAmount(
        cartProductsData
          .map((item) => item.price)
          .reduce((prev, next) => prev + next)
      );
  }, [cartProductsData]);

  return (
    <div className="CartPage">
      <h2>Your Cart</h2>
      <h3>Nothing to show here Start Shopping!</h3>
      {state.productsInCart.length > 0 && (
        <div className="CartPageItems">
          <div className="InCartProducts">
            {cartProductsData.map((product) => (
              <div>
                <CartItem product={product} />
              </div>
            ))}
          </div>

          <div className="OrderBill">
            <h3>Bill Details</h3>
            <div>Items ({cartProductsData.length})</div>
            <div>Delivery Charges $499</div>
            <div>Total Amount {orderAmount}</div>
          </div>
        </div>
      )}
    </div>
  );
}
