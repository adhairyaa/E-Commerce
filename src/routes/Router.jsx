import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { Wishlist } from "../pages/Wishlist";
import { Cart } from "../pages/Cart";
function Router() {
  return (
    <div>
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/dhairya" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default Router;
