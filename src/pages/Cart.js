import { CartItem } from "../components/CartItem";
import { useCartContext } from "../context/CartProvider";
import products from "../products/products.json";
export function Cart() {
  // const [orderAmount,setOrderAmount] = useState(0)

  const { state } = useCartContext();
  const { productsInCart } = state;

  const cartProductsData = products.filter((item) =>
    productsInCart.includes(item.id)
  );

  // const handleOrderAmount=()=> {
  // const OrderAmount = cart.reduce((sum,product)=>product.Price+sum,0)
  //  setOrderAmount(OrderAmount)
  //  }

  return (
    <div className="CartPage">
      <h2>Your Cart</h2>
      <div className="CartPageItems">
        <div className="InCartProducts">
          {cartProductsData.map((product) => (
            <div>
              <CartItem product={product} />
            </div>
          ))}
        </div>
        <div className="OrderBill">
          <h3>Price Details</h3>
          <div>
            Price({cartProductsData.length}){/* {orderAmount} */}
          </div>
          <div>Delivery Charges $499</div>
          <div>Total Amount handleOrderAmount()</div>
        </div>
      </div>
    </div>
  );
}
