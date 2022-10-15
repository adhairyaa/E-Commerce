import { useWishlistContext } from "./WishlistContext";
import { WishlistButton } from "./WishlistButton";
export function Wishlist() {
    const {wishlist} = useWishlistContext();
    console.log(wishlist)
  return (
    <div className="WishListPage">
        <h2>Your Wishlist</h2>
        <div className="WishListProducts">
      {wishlist.map((item)=>
                    
                    <div className="ProductItem">
                    <img src='Section.jpg' alt="productImage"></img>
                    <div style={{fontSize:"smaller"}}>{item.name}</div>
                    <div style={{fontWeight:"bolder"}}>{item.Price}</div>
                    <div className="ProductWishlist">
                    <WishlistButton product={item}/>
                    </div>
                    <button>Add To Cart</button>

                    </div>)}
                    </div>
                    </div>
  );
  
}