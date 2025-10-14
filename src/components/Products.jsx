import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import FilterProductsContainer from "./FilterProductsContainer";

const ProductsList = () => {
   const location = useLocation()
    localStorage.setItem("previousPath",location.pathname)


  const [products, setproducts] = useState([]);
  const [length, setlength] = useState(6);
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit="+length)
      .then((res) => res.json())
      .then((res) => {
        setproducts(res.products);
      });

  }, [length]);


  return (
    <>
      {/* Products List Start */}
      {/* filter Bar Start */}
      <div className="productListSection">
        <FilterProductsContainer />
        {/* filter Bar End */}
        {/* products List start  */}
        <div className="productsListContainer">
          {products.length === 0 ? <h4>Loading Products ...</h4> : <>
            <div className='breadcrumbs'>
              <Link to="/"> Home</Link> / <Link to={"/products"}> Products</Link>
            </div>
          </>}


          {products.map((product) => (
            <div className="product-box">
              <Link to={"/product/" + product.id} className='product-box-content'>
                <div className="productBoxImg">
                  <img src={product.thumbnail} alt={product.title} srcSet />
                </div>
                <div className="productBoxDetails">
                  <h3>{product.title.slice(0, 10)}</h3>
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


             {products.length === 0 ? <h4></h4> : <>
            <div className='breadcrumbs'>
              <button className="addToCartBtn" onClick={()=>{setlength(length+6)}}  style={{margin:"50px 0",padding:'10px 20px',fontSize:'20px'}}>Load More</button>
            </div>
          </>}





        </div>
        {/* products List End  */}
      </div>
      {/* Products List End */}
    </>
  );
};

export default ProductsList;
