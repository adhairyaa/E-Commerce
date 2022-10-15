import { createContext, useContext,useState } from "react";

const WishlistContext = createContext()

const WishlistProvider = ({children})=>{
const [wishlist,setWishlist] = useState([{name:"Men's Shirt",category:"women",Price:2000,Rating:4}])
    return(
        <WishlistContext.Provider value={{wishlist,setWishlist}}>{children}</WishlistContext.Provider>
    )
}

const useWishlistContext = ()=>useContext(WishlistContext)

export {WishlistProvider,useWishlistContext}