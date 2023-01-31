import { useCartContext } from "../context/CartProvider";

import { WishlistButton } from "../components/WishlistButton";
import products from "../products/products.json";
import { useFilterProvider } from "../context/FilterProvider";
export function Products() {
  const { cart, setCart } = useCartContext();
  const { state } = useFilterProvider();
  const { sortBy, gender } = state;

  const getSortedProducts = (products, sortBy) => {
    return sortBy === "LOW_TO_HIGH"
      ? products.sort((a, b) => a.price - b.price)
      : sortBy === "HIGH_TO_LOW"
      ? products.sort((a, b) => b.price - a.price)
      : products;
  };

  const sortedProducts = getSortedProducts(products, sortBy);
  let filteredData = sortedProducts;

  const handleGenderFilter = (data, gender) => {
    const genderFilteredData = data.filter(
      (item) => item.category === gender.includes(item.category)
    );

    filteredData = genderFilteredData;
  };

  const handleFilterFunctions = () => {
    if (state.gender.length > 0) {
      handleGenderFilter(filteredData, gender);
    }
  };

  handleFilterFunctions();

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
