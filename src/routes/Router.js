import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import  Wishlist  from "../pages/Wishlist";
import { Cart } from "../pages/Cart";
export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wislist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}


