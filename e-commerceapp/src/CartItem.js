import { useState } from "react"

export function CartItem({product}){
const [quantity,setQuantity] = useState(1)
    return(
        <div className="CartItem">
            <div>
            <img src="Section.jpg" alt='img'></img>
            </div>
            <div>
       <div>{product.name}</div>
       <div>{product.Price} <span style={{color:"#D9534F"}}>40%OFF</span></div>
       
<div>
 Quantity 
 <button onClick={()=>setQuantity(quantity+1)}>+</button> 
 {quantity} 
 <button onClick={()=>setQuantity(quantity-1 && quantity>1)}>-</button>  
</div>
<div><button>Remove From cart</button></div>
<button>Add To Wishlist</button>
       </div>
        </div>
    )
}