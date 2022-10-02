
import { createContext, useContext, useState } from "react";

const CartContext =  createContext()


const CartProvider =({children})=>{
    const [cart,setCart]=useState([{"name":"Men's Shirt","category":"men","Price":2000,"Rating":4,"key":2},{"name":"Men's Shirt","category":"men","Price":2000,"Rating":4,"key":2}])
    return(
    <CartContext.Provider value={{cart,setCart}}>{children}</CartContext.Provider>)
}


const useCartContext = ()=>useContext(CartContext)

export {CartProvider,useCartContext}