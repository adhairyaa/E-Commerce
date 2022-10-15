import { useState } from "react"
import { CartItem } from "./CartItem"
import { useCartContext } from "./CartProvider"


export function CartPage(){
const [orderAmount,setOrderAmount] = useState(0)
const {cart} = useCartContext()

const handleOrderAmount=()=> {
const OrderAmount = cart.reduce((sum,product)=>product.Price+sum,0)
 setOrderAmount(OrderAmount)
 }

return(
    <div className="CartPage">
       <h2>Your Cart</h2> 
       <div className="CartPageItems">
<div className="InCartProducts">
{cart.map((product)=>
<div>
<CartItem product={product}/>
</div>
)}
</div>
<div className="OrderBill">
<h3>Price Details</h3>
<div>
Price({cart.length})
{orderAmount}

</div>
<div>
    Delivery Charges
    $499
    </div>
    <div>
        Total Amount
        handleOrderAmount()

    </div>
</div>
</div>
    </div>
)
}