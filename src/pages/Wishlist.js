import { useWishlistContext } from "../context/WishlistContext";
import { WishlistButton } from "../components/WishlistButton";
import products from "../products/products.json";
import { useCartContext } from "../context/CartProvider";

export function Wishlist() {
  const { dispatch } = useCartContext();
  const { wishlist } = useWishlistContext();

  const wishlistedProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <div className="WishListPage">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 && (
        <div>Nothing to show here Start Shopping!!</div>
      )}
      <div className="WishListProducts">
        {wishlistedProducts.map((item) => (
          <div className="ProductItem">
            <img src={item.productImage} alt="productImage"></img>
            <div style={{ fontSize: "smaller" }}>{item.name}</div>
            <div style={{ fontWeight: "bolder" }}>{item.price}</div>
            <div className="ProductWishlist">
              <WishlistButton productId={item.id} />
            </div>
            <button
              onClick={() =>
                dispatch({ type: "HANDLE_CART", payload: item.id })
              }
            >
              Add To Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
