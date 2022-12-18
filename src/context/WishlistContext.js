import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlistContext = () => useContext(WishlistContext);

export { WishlistProvider, useWishlistContext };
