import { Link } from "react-router-dom";
export function NavBar  (){
    
    return(
    <div className="navBar">
            <Link to="/"><h2> <span style={{color:'#D9534F'}}>buye</span></h2></Link>
            <input placeholder="search" className="searchBar"></input>
            <div className="navBarItems">
            <button>Login</button>
            <Link to ="/wishlist"><div ><i style={{color:"red"}} class="fa-solid fa-heart"></i></div></Link>
            <Link to ="/cart"><div style={{marginLeft:"1em"}}><i class="fa-solid fa-cart-shopping"></i></div></Link>
            
            </div>
      </div>
    )
  }