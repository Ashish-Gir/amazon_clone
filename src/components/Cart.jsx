import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartProducts, setcartProducts] = useState([]);
  const [user, setuser] = useState({});
  const navigate = useNavigate();
    const location =useLocation()

  useEffect(() => {
    if (localStorage.getItem("accessToken")) {
      fetch("https://dummyjson.com/auth/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Pass JWT via Authorization header
        },
      })
        .then((res) => res.json())
        .then((res) => {
          if ((res.message && res.message === "Invalid/Expired Token!" )|| res.message === 'Token Expired!') {
            navigate("/login?msg=Invalid/Expired Token!");
          } else {
            console.log(res);
            
            setuser(res);
            fetch(`https://dummyjson.com/carts/user/${res.id}`)
              .then((res) => res.json())
              .then((res) => {
                if (res.carts && res.carts.length != 0) {
                  setcartProducts(res.carts[0].products);
                }
              });
          }
        });
    } else {
      localStorage.setItem("previousPath",location.pathname)
      navigate("/login");
    }
  }, []);

  console.log(cartProducts);

  return (<>
  {user.id ? <> 
    <div className="cartPageContainer">
      <div className="cartPageBox cartPageBox-1 ">
        {cartProducts.map((product) => (
          <div className="product-box cartListBox">
            <Link to={"/product/" + product.id} className="product-box-content">
              <div
                className="productBoxImg"
                style={{ backgroundColor: "white" }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ objectFit: "scale-down", backgroundColor: "white" }}
                />
              </div>
              <div className="productBoxDetails cartListDetails">
                <div className="productBoxPrice">
                  <div className="productBoxPrice-1">
                <h3>{product.title?.slice(0, 10)}</h3>
                    <span className="crosedPrice" style={{ marginRight: "10px" }}>$999</span>
                    <span className="orignalPrice">${product.price}</span>
                    {/* <button className="buyBtn">Buy</button> */}
                  </div>
                  <div className="productBoxPrice-2" style={{ display: "flex", gap: "10px" ,alignItems:'center'}}>
                    <button className="addToCartBtn " style={{height:"50%"}}>-</button>
                    {/* <input type="number" style={{width:"30px",textAlign:'center',paddingLeft:'7px'}} value={product.quantity} disabled /> */}
                    <div
                    
                      style={{
                        width: "30px",
                        textAlign: "center",
                        // padding: "5px",
                        border: "1px solid grey",
                        height:'50%',
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center'
                      }}
                    >
                      {product.quantity}
                    </div>
                    <button className="addToCartBtn " style={{height:"50%"}}>+</button>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="cartPageBox cartPageBox-2 ">
        <div className="cartPageBox-2-Card">
          <h3></h3>
           <div className="cartSummaryListItem">
                <h4>Cart Summary</h4>
                <div style={{display:'flex',justifyContent:'space-between', width:'35%'}}>
                  <span style={{ marginRight: "20px" }}>quantity</span>
                  <span>price</span>
                </div>
              </div>
          <hr />
          {cartProducts.map((product) => (
            <>
              <div className="cartSummaryListItem" >
                <h4>{product.title?.slice(0,10)}...</h4>
                <div style={{display:'flex',justifyContent:'space-between', width:'30%'}}>
                  <span style={{ marginRight: "20px" }}> {product.quantity}</span>
                  <span>{product.price}</span>
                </div>
              </div>
              <hr />
            </>
          ))}

            <button className="addToCartBtn " style={{marginTop:'20px', padding:"20px 0",fontWeight:400, fontSize:'15px' ,width:'100%'}}>Checkout</button>
        </div>
      </div>
    </div></> : <>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:"90vh"}}>
    <h1 style={{textAlign:'center'}}>loading ...</h1> 
    </div>
    </>
}
  
    </>
  );
};

export default Cart;
