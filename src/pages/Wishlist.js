import { useWishlistContext } from "../context/WishlistContext";
import { WishlistButton } from "../components/WishlistButton";
<<<<<<< Updated upstream
export function Wishlist() {
  const { wishlist } = useWishlistContext();
  console.log({ wishlist });
=======


export default function Wishlist() {
  const { wishlist } = useWishlistContext();
  console.log("a");
>>>>>>> Stashed changes
  return (
    <div className="WishListPage">
      <h2>Your Wishlist</h2>
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
<<<<<<< Updated upstream
=======
            <div style={{ width: "30%" }}>a</div>
>>>>>>> Stashed changes
          </div>
        ))}
      </div>
    </div>
  );
}
