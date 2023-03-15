import { useCartContext } from "../context/CartProvider";
import { WishlistButton } from "../components/WishlistButton";
import products from "../products/products.json";
import { useFilterProvider } from "../context/FilterProvider";
import Filter from "../components/filter/Filter";
export function Products() {
  const { dispatch } = useCartContext();
  const { state } = useFilterProvider();
  const { sortBy, gender, size } = state;

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
    const genderFilteredData = data.filter((item) =>
      gender.includes(item.category)
    );
    filteredData = genderFilteredData;
  };
  const handleSizeFilter = (data, size) => {
    const sizeFilteredData = data.filter((item) => size.includes(item.size));
    filteredData = sizeFilteredData;
  };

  const handleFilterFunctions = () => {
    if (state.gender.length > 0) {
      handleGenderFilter(filteredData, gender);
    }
    if (state.size.length > 0) {
      handleSizeFilter(filteredData, size);
    }
  };

  handleFilterFunctions();

  return (
    <div>
      <Filter />
      <div className="ProductListings">
        <p style={{ textAlign: "left", marginLeft: "2em" }}>
          showing all products({filteredData.length})
        </p>
        <div className="ListOfProducts">
          {filteredData.map((item) => (
            <div className="ProductItem">
              <img src={item.productImage} alt="productImage"></img>
              <div className="productDetail">
                <div style={{ fontSize: "smaller" }}>{item.name}</div>
                <div style={{ fontWeight: "bolder" }}>₹{item.price}</div>
                <button
                  onClick={() =>
                    dispatch({ type: "HANDLE_CART", payload: item.id })
                  }
                >
                  Add To Cart
                </button>
              </div>
              <div className="ProductWishlist">
                <WishlistButton productId={item.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
