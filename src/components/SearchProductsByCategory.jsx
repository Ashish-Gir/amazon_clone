import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import FilterProductsContainer from "./FilterProductsContainer";

const SearchProductsByCategory = () => {
  const [products, setproducts] = useState([]);
  let param = useParams();
   const location = useLocation()
    localStorage.setItem("previousPath",location.pathname)
  useEffect(() => {
    fetch("https://dummyjson.com/products/category/" + param.id)
      .then((res) => res.json())
      .then((res) => setproducts(res.products));
  }, [param.id]);

  return (
    <>
      {/* Products List Start */}
      {/* filter Bar Start */}
      <div className="productListSection">
        <FilterProductsContainer />
        {/* filter Bar End */}
        {/* products List start  */}
        <div className="productsListContainer">
          {products.length === 0 ? (
            <h4>Showing result of {param.id}...</h4>
          ) : (
            <>
              <div className="breadcrumbs">
                <Link to="/"> Home</Link> /{" "}
                <Link > Category</Link> /
                <Link> {param.id} </Link>
              </div>
            </>
          )}
          {/* <h4>Showing result of food...</h4> */}
          {products.map((product) => (
            <div className="product-box">
              <Link
                to={"/product/" + product.id}
                className="product-box-content"
              >
                <div className="productBoxImg">
                  <img src={product.thumbnail} alt={product.title+"-img"} srcSet />
                </div>
                <div className="productBoxDetails">
                  <h3>{product.title.slice(0, 10)}...</h3>
                  <p className="hiddenUnder800">{product.description}</p>
                  <div className="productBoxPrice">
                    <div>
                      <span className="crosedPrice ml-2 ">$999</span>
                      <span className="orignalPrice">${product.price}</span>
                      <button className="buyBtn">Buy</button>
                    </div>
                    <button className="addToCartBtn hiddenUnder800">
                      ADD +
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
        {/* products List End  */}
      </div>
      {/* Products List End */}
    </>
  );
};

export default SearchProductsByCategory;
