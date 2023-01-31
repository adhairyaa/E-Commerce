import { useWishlistContext } from "../context/WishlistContext";

export function WishlistButton({ productId }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const handleWishlistButton = () => {
    wishlist.length === 0
      ? setWishlist([productId])
      : wishlist.includes(productId)
      ? setWishlist(wishlist.filter((id) => id !== productId))
      : setWishlist([...wishlist, productId]);
  };

  return (
    <div className="wishlistHeart" onClick={() => handleWishlistButton()}>
      <i
        class="fa-solid fa-heart"
        style={{ color: wishlist.includes(productId) ? "red" : "grey" }}
      ></i>
    </div>
  );
}
