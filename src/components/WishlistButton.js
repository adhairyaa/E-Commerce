import { useState } from "react";
import { useWishlistContext } from "../context/WishlistContext";

<<<<<<< Updated upstream
export function WishlistButton({ product }) {
  const { wishlist, setWishlist } = useWishlistContext();
  const [isInWishlist, setIsInWishlist] = useState(false);
  console.log(wishlist);
  const handleWishlist = () => {
    if (isInWishlist === false) {
      setWishlist([...wishlist, product]);
    } else {
      setWishlist(wishlist.filter((item) => item.key !== product.key));
=======

export  function WishlistButton({product}){
    const{wishlist,setWishlist} = useWishlistContext();
    const [addToWishlist,setAddToWishlist] = useState(false);

    
    
    const handleWishlist=()=>{
    setAddToWishlist(!addToWishlist)
   
    if(addToWishlist===true){
        setWishlist([...wishlist,product])
>>>>>>> Stashed changes
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
