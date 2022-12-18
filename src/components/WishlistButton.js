import { useState } from "react";
import { useWishlistContext } from "../context/WishlistContext";

export function WishlistButton({ product }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const [isInWishlist, setIsInWishlist] = useState(false);
  console.log(wishlist);
  const handleWishlist = () => {
    if (isInWishlist === false) {
      setWishlist([...wishlist, product]);
    } else {
      setWishlist(wishlist.filter((item) => item.key !== product.key));
    }
    setIsInWishlist(!isInWishlist);
  };

  return (
    <div className="wishlistHeart" onClick={() => handleWishlist()}>
      <i
        class="fa-solid fa-heart"
        style={{ color: isInWishlist ? "#D9534F" : "grey" }}
      ></i>
    </div>
  );
}
