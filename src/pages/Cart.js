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
      <h2>Your Cart 🛒 </h2>
      {state.productsInCart.length === 0 ? (
        <h3>Nothing to show here Start Shopping!</h3>
      ) : (
        state.productsInCart.length > 0 && (
          <div className="CartPageItems">
            <div className="cartPageLeftBar">
              <p className="cartBag">Save upto 40%</p>
              <div className="InCartProducts">
                {cartProductsData.map((product) => (
                  <div>
                    <CartItem product={product} />
                  </div>
                ))}
              </div>
            </div>
            <div className="OrderBill">
              <h3>Bill Details</h3>
              <div className="orderDetails">
                Items <div>({cartProductsData.length})</div>
              </div>
              <div className="orderDetails">
                Delivery Charges <div>$499</div>
              </div>
              <div className="orderDetails">
                Total Amount <div>{orderAmount + 500}</div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
