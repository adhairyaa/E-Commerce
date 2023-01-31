import { Link } from "react-router-dom";
import { useCartContext } from "../context/CartProvider";
import { useWishlistContext } from "../context/WishlistContext";
export function NavBar() {
  const { wishlist } = useWishlistContext();

  const { state } = useCartContext();
  return (
    <div className="navBar">
      <Link to="/">
        <h2>
          {" "}
          <span style={{ color: "#D9534F" }}>buye</span>
        </h2>
      </Link>
      <input placeholder="search" className="searchBar"></input>
      <div className="navBarItems">
        <button>Login</button>
        <Link to="/wishlist">
          <div
            style={{ marginLeft: "1em", color: "#d9534f" }}
            className="navbarItem"
          >
            <i className="fa-solid fa-heart"></i>
            <div className="itemQuantity">{wishlist.length}</div>
          </div>
        </Link>
        <Link to="/cart">
          <div
            style={{ marginLeft: "1em", color: "#d9534f" }}
            className="navbarItem"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            <div className="itemQuantity">{state.productsInCart.length}</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
