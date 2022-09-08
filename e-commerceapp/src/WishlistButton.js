import { useState } from "react";
import { useWishlistContext } from "./WishlistContext";


export function WishlistButton({product}){
    const{wishlist,setWishlist} = useWishlistContext();
    const [addToWishlist,setAddToWishlist] = useState(false);

    const handleWishlist=()=>{
    setAddToWishlist(!addToWishlist)
    
    if(addToWishlist){
        setWishlist([...wishlist,product])
    }
    else if(addToWishlist===false){
        const filteredArr = [...wishlist].filter((item)=>item.key !== product.key)
    setAddToWishlist(filteredArr)
    
    }}
    
    return(
        <div className="wishlistHeart" onClick={()=>handleWishlist()} >
            <i class="fa-solid fa-heart" style={{color:addToWishlist ? "#D9534F": "grey" }}></i>
            </div>
    )

}