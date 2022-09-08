
import { useState,useEffect } from "react";
import { Wishlist } from "./Wishlist";
import { WishlistButton } from "./WishlistButton";

export  function ProductListingPage() {
    // let Products
    // (async function getData() {
    //      const Response= await fetch("http://localhost:3000/Products.json")
    //      Products  = await Response.json()
    //      console.log(Products)
         
    // })()
    const Products =  [{"name":"Men's Shirt","category":"women","Price":2000,"Rating":4},
    {"name":"Men's Shirt","category":"men","Price":2000,"Rating":4},
    {"name":"Men's Shirt","category":"men","Price":2000,"Rating":4},
    {"name":"Men's Shirt","category":"men","Price":2000,"Rating":4},
    {"name":"Men's Shirt","category":"men","Price":2000,"Rating":4},
    {"name":"Men's Shirt","category":"men","Price":2000,"Rating":4}
   ,{"name":"Men's Shirt","category":"men","Price":2000,"Rating":4},
   {"name":"Men's Shirt","category":"men","Price":2000,"Rating":4},
   {"name":"Men's Shirt","category":"women","Price":2000,"Rating":4} ]
    const [liveProducts,SetLiveProducts] = useState(Products)
    
    const[categoryFilter,setCategoryFilter] = useState(false)
    const[ratingFilter,setRatingFilter] = useState(false)

    const handleCategoryFilter = (category)=>{
          let categoryFilteredArr = [...liveProducts].filter((product)=>product.category===category)
          console.log(categoryFilteredArr)
          setCategoryFilter(!categoryFilter)
          categoryFilter===true?SetLiveProducts(categoryFilteredArr):SetLiveProducts(Products)
    }
    const handleRatingFilter = (rating)=>{ 
        setRatingFilter(!ratingFilter)
        let ratingFilteredArr = [...liveProducts].filter((product)=>product.Rating >= rating)
        ratingFilter?SetLiveProducts(ratingFilteredArr):SetLiveProducts(Products)

    }
    
  return (
    
    <div>
      <div className="FilterBar">
        <div className="FilterBarTitle">
            Filters
            <button>Clear</button>
            </div>
            <div className="PriceFilter">

            </div>
            
                <div className="CategoryFilter">
                Category 
                <input type="checkbox"  onClick={()=>handleCategoryFilter("men")}></input>Men
                <input type="checkbox" onClick={()=>handleCategoryFilter("women")} ></input>Women
                </div>

                <div className="Rating">
                <input type="checkbox" onClick={()=>handleRatingFilter(4)}></input><p>4 stars and above</p>
                <input type="checkbox" onClick={()=>handleRatingFilter(3)}></input><p>3 stars and above</p>
                <input type="checkbox" onClick={()=>handleRatingFilter(2)}></input><p>2 stars and above</p>
                
                </div>
            <div className="SortByFilter">

            </div>
            
            </div>
          <div className="ProductListings">
             <p style={{textAlign:"left",marginLeft:"2em"}}>showing all products({liveProducts.length})</p>
                <div className="ListOfProducts">
                 {liveProducts.map((item)=>
                    <div className="ProductItem">
                    <img src='Section.jpg' alt="productImage"></img>
                    <div style={{fontSize:"smaller"}}>{item.name}</div>
                    <div style={{fontWeight:"bolder"}}>{item.Price}</div>
                    <div className="ProductWishlist">
                    <WishlistButton product={item}/>
                    </div>
                    <button>Add To Cart</button>

                </div>)}
            </div>
          </div>
</div>
     
    
  );
}

