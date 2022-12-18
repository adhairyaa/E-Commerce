import { useWishlistContext } from "../context/WishlistContext";
import { WishlistButton } from "../components/WishlistButton";
export function Wishlist() {
  const { wishlist } = useWishlistContext();
  console.log({ wishlist });
  return (
    <div className="WishListPage">
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 && (
        <div>Nothing to show here Start Shopping!!</div>
      )}
      <div className="WishListProducts">
        {wishlist.map((item) => (
          <div className="ProductItem">
            <img src="Section.jpg" alt="productImage"></img>
            <div style={{ fontSize: "smaller" }}>{item.name}</div>
            <div style={{ fontWeight: "bolder" }}>{item.Price}</div>
            <div className="ProductWishlist">
              <WishlistButton product={item} />
            </div>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
