import { useReducer } from "react";
import { useCartContext } from "../context/CartProvider";

import { WishlistButton } from "../components/WishlistButton";

export function Products() {
  // let Products
  // (async function getData() {
  //      const Response= await fetch("http://localhost:3000/Products.json")
  //      Products  = await Response.json()
  //      console.log(Products)

  // })()
  const Products = [
    { name: "Men's Shirt", category: "women", Price: 2000, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 2000, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 1700, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 1400, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 1200, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 1110, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 2000, Rating: 4 },
    { name: "Men's Shirt", category: "men", Price: 2000, Rating: 4 },
    { name: "Men's Shirt", category: "women", Price: 2000, Rating: 4 },
  ];
  const { cart, setCart } = useCartContext;

  const handleDispatch = (state, action) => {
    switch (action.type) {
      case "Low to High":
        return (state = { ...state, sortBy: "Low to High" });
      case "High to Low":
        return (state = { ...state, sortBy: "High to Low" });
      case "Men":
        return (state = {
          ...state,
          category: { ...state.category, men: !state.category.men },
        });

      case "Women":
        return (state = {
          ...state,
          category: { ...state.category, women: !state.category.women },
        });
      case "clear":
        return (state = {
          ...state,
          sortBy: null,
          category: { ...state.category, men: false, women: false },
        });
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(handleDispatch, {
    sortBy: null,
    category: { men: false, women: false },
    stars: null,
  });
  const { sortBy, category } = state;

  const handleSortedProducts = (Products, sortByInfo) => {
    if (sortByInfo === "Low to High") {
      return Products.sort((a, b) => a.Price - b.Price);
    }
    if (sortByInfo === "High to Low") {
      return Products.sort((a, b) => b.Price - a.Price);
    }
    return Products;
  };

  const handleFilteredProducts = (sortedProducts, filtersInfo) => {
    if (filtersInfo.category.men === true) {
      return sortedProducts.filter((product) => product.category === "men");
    }
    //  filtersInfo.category.men?
    //  return sortedProducts.filter(product=>product.category==="men")
    //  :return true

    // return filtersInfo.category.men?sortedProducts.filter(product=>product.category==="men"):true

    if (filtersInfo.category.women === true) {
      return sortedProducts.filter((product) => product.category === "women");
    }

    return sortedProducts;
  };
  const sortedProducts = handleSortedProducts(Products, sortBy);
  const filteredProducts = handleFilteredProducts(sortedProducts, { category });
  return (
    <div>
      <div className="FilterBar">
        <div className="FilterBarTitle">
          Filters
          <button onClick={() => dispatch({ type: "clear" })}>Clear</button>
        </div>
        <div className="Sort-By">
          Sort-By
          <input
            type="radio"
            name="sort"
            onClick={() => dispatch({ type: "Low to High" })}
          ></input>
          Low to High
          <input
            type="radio"
            name="sort"
            onClick={() => dispatch({ type: "High to Low" })}
          ></input>
          High to Low
        </div>

        <div className="CategoryFilter">
          Category
          <input
            type="checkbox"
            checked={category.men}
            onClick={() => dispatch({ type: "Men" })}
          ></input>
          Men
          <input
            type="checkbox"
            checked={category.women}
            onClick={() => dispatch({ type: "Women" })}
          ></input>
          Women
        </div>

        {/* <div className="Rating">
                <input type="checkbox" onClick={()=>}></input><p>4 stars and above</p>
                <input type="checkbox" onClick={()=>}></input><p>3 stars and above</p>
                <input type="checkbox" onClick={()=>}></input><p>2 stars and above</p>
                
                </div> */}
      </div>
      <div className="ProductListings">
        <p style={{ textAlign: "left", marginLeft: "2em" }}>
          showing all products({filteredProducts.length})
        </p>
        <div className="ListOfProducts">
          {filteredProducts.map((item) => (
            <div className="ProductItem">
              <img
                src={process.env.PUBLIC_URL + "/Section.jpg"}
                alt="productImage"
              ></img>
              <div style={{ fontSize: "smaller" }}>{item.name}</div>
              <div style={{ fontWeight: "bolder" }}>{item.Price}</div>
              <div className="ProductWishlist">
                <WishlistButton product={item} />
              </div>
              <button onClick={() => setCart([...cart, item])}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
