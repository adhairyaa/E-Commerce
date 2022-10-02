import { useLivePageContext } from "./LivePageContext"
import { HomePage } from "./HomePage";
import { Wishlist } from "./Wishlist";
import { CartPage } from "./CartPage";
export function NavBar  (){
    const {setLivePage} = useLivePageContext();
    return(
    <div className="navBar">
            <h2 onClick={()=>setLivePage(<HomePage />)}> <span style={{color:'#D9534F'}}>buye</span></h2>
            <input placeholder="search" className="searchBar"></input>
            <div className="navBarItems">
            <button>Login</button>
            <div onClick={()=>setLivePage(<Wishlist />)}><i style={{color:"red"}} class="fa-solid fa-heart"></i></div>
            <div onClick={()=>setLivePage(<CartPage/>)}style={{marginLeft:"1em"}}><i class="fa-solid fa-cart-shopping"></i></div>
            
            </div>
      </div>
    )
  }