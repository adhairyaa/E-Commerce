import { Link } from "react-router-dom";
export function NavBar() {
  return (
    <div className="navBar">
      <Link to="/dhairya">
        <h2>
          {" "}
          <span style={{ color: "#D9534F" }}>buye</span>
        </h2>
      </Link>
      <input placeholder="search" className="searchBar"></input>
      <div className="navBarItems">
        <button>Login</button>
        <Link to="/wishlist">
          <div>
            <i style={{ color: "red" }} className="fa-solid fa-heart"></i>
          </div>
        </Link>
        <Link to="/cart">
          <div style={{ marginLeft: "1em", color: "#d9534f" }}>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </Link>
      </div>
    </div>
  );
}
