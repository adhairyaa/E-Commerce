import { useReducer, useState } from "react";
import { useWishlistContext } from "./WishlistContext";


export function WishlistButton({product}){
    const{wishlist,setWishlist} = useWishlistContext();
    const [addToWishlist,setAddToWishlist] = useState(false);

    
    
    const handleWishlist=()=>{
    setAddToWishlist(!addToWishlist)
    console.log(wishlist)
    if(addToWishlist===true){
        setWishlist([...wishlist,product])
    }
    
     if(addToWishlist===false){
        
    setWishlist( wishlist.filter((item)=>item.key !== product.key))
    
    }}
    
    return(
        <div className="wishlistHeart" onClick={()=>handleWishlist()} >
            <i class="fa-solid fa-heart" style={{color:addToWishlist ? "#D9534F": "grey" }}></i>
            </div>
    )

}