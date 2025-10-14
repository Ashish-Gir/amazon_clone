import React, { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const sideMenuBar = useRef();
  const [search, setsearch] = useState("");
  let location = useLocation();
  const navigate = useNavigate();
  const [categories, setcategories] = useState([]);

  const [debouncedSearch, setDebouncedSearch] = useState("");

useEffect(() => {
  const handler = setTimeout(() => {
    if (search) {
      setDebouncedSearch(search);
    }
  }, 500); // Delay: 500ms

  return () => clearTimeout(handler); // Cleanup on new keystroke
}, [search]);

useEffect(() => {
  if (debouncedSearch) {
    navigate("/search/" + debouncedSearch);
  }
}, [debouncedSearch]);



  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((res) => {
        setcategories(res);
      });
  }, []);

  return (
    <div>
      <div>
        {/* ***********************
         *******Header Start*********
         ************************ */}
        {/* <div className="topNavLinks hiddenOnMobile">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/signUp">sign up</Link>
          <Link to="/login">Login</Link>
          <Link to="/account">dashboard</Link>
          <Link to="/cart">cart</Link>
        </div> */}
        {/* sideBar */}
        <div
          className="sideBarContainer"
          ref={sideMenuBar}
          onClick={() => {
            sideMenuBar.current.style.display = "none";
          }}
        >
          <div className="SideMenuBar">
            <div className="SideBarTitle">
              <h3>Menu</h3>
            </div>
            <div className="SideBarBody">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/signUp">sign up</Link>
              <Link to="/login">Login</Link>
              <Link to={"/account"}>My Account</Link>
              <Link to>Orders</Link>
              <Link to>Cart</Link>
              <Link to>About us</Link>
              <Link to>Help</Link>
            </div>
            <button
              className="closeMenu"
              onClick={() => {
                sideMenuBar.current.style.display = "none";
              }}
            >
              Close
            </button>
          </div>
        </div>
        {/* sideBar */}
        <header className="header">
          <div className="upperNavbar">
            <div className="nav-left">
              <div className="upperNavItems nav-logo-main">
                <div className="upperNavMenu">
                  <button
                    className="nav-btn"
                    style={{ padding: "10px" }}
                    onClick={() => {
                      sideMenuBar.current.style.display = "block";
                    }}
                  >
                    <i className="fa-solid fa-bars" style={{ fontSize: 20 }} />
                  </button>
                </div>
                <Link to="/">
                  <img
                    className="nav-logo-amazon hiddenOnMobile"
                    alt="brand"
                    src="../Img/navLogoWhite.png"
                  />
                </Link>
              </div>
              <div className="upperNavItems location-slot hiddenOnTablet">
                <div>
                  <i
                    className="fa-solid fa-location-dot"
                    style={{ fontSize: 20 }}
                  />
                </div>
                <div className="delivering-info">
                  <span className="delivering-code">Delivering to 160103</span>
                  <span className="update-location">Update location</span>
                </div>
              </div>
            </div>
            <div className="nav-center">
              <div className="upperNavItems nav-select-category hiddenOnMobile">
                <div className="nav-select-category-btn">
                  <select
                    className="nav-select-category"
                    onChange={(e) => {
                      navigate("/category/" + e.target.value);
                    }}
                    name
                    id
                  >
                    <option value disabled selected>
                      All
                    </option>
                    {categories.map((category, index) => (
                      <option value={category.slug} key={"category" + index}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="upperNavItems upperNavItemsSearchInput hiddenOnMobile">
                <input
                  className="search-bar-input"
                  type="text"
                  onChange={(e)=>{setsearch(e.target.value)}}
                  placeholder="Search Amazon.in"
                />
              </div>
              <div
                className="upperNavItems nav-search-btn hiddenOnMobile"
                onClick={() => {
                  navigate("/search/" + search);
                }}
              >
                <i className="fa-solid fa-magnifying-glass nav-search-icon" />
              </div>
              <div className="upperNavItems">
                <Link to="/">
                  <img
                    className="nav-logo-amazon nav-logo-amazon-center"
                    alt="amazon-Logo"
                    src="../Img/navLogoWhite.png"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-right">
              <div className="upperNavItems languageDropdown hiddenOnTablet">
                <img
                  className="nav-logo-indianflag"
                  src="../Img/indianFlagIcon.png"
                  alt="indian-Flag"
                />
                <div className="language-info">
                  <select name id>
                    <option value>EN</option>
                    <option value>Hin</option>
                    <option value>Spa</option>
                  </select>
                </div>
              </div>
              <div
                className="upperNavItems sign-in-btn hiddenOnTablet"
                onClick={() => {
                  navigate("/account");
                }}
              >
                {localStorage.getItem("accessToken") ? (
                  <>
                    <span className="accounts-list-text">
                      Acocunts &amp; Lists
                    </span>
                  </>
                ) : (
                  <>
                    <span className="sign-in-text">Hello, sign in</span>
                  </>
                )}
              </div>
              <div
                className="upperNavItems return-orders-btn hiddenOnTablet"
                onClick={() => {
                  navigate("/account");
                }}
              >
                <span className="returns-text">Returns</span>
                <span className="orders-text">&amp; Orders</span>
              </div>
              <div
                className="upperNavItems nav-cart"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                <i className="fa-solid fa-cart-shopping" />
                <div className="nav-cart-length hiddenOnMobile">
                  <span>(0)</span> <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
          {/* ***********************
           *******Second Header Start*********
           ************************ */}
          <div className="lowerNavbar hiddenOnTablet">
            <div className="lowerNavLeft">
              <button className="nav-btn" onClick={()=>{navigate('/products')}}>
                <i className="fa-solid fa-bars" /> &nbsp; All
              </button>
              {categories.map((category, index) => {
                if (index < 9) {
               return( <Link
                  to={"/category/" + category.slug}
                  key={"category" + index}
                >
                  {category.name}
                </Link>)
                }
              })}
              {/* <Link to={"/products"}>New Realises</Link> */}
            </div>
            {/* <div class="lowerNavCenter"> */}
            {/* </div> */}
            <Link to={'/contact/'}>Contact</Link> 
            <Link to="https://play.google.com/store/apps/details?id=in.amazon.mShop.android.shopping&pcampaignid=web_share">
              <div className="lowerNavRight">
                <div className="prime-logo">
                  <img src="../Img/amazon-box.png" alt="amazon-box" />
                </div>
                <div className="download-app-text">
                  <span>Shoppimg made easy | Download the app</span>
                </div>
              </div>
            </Link>
          </div>

          {/* ***********************
           ******* SearchBarMobile Start*********
           ************************ */}
          {location.pathname === "/products" ||
          location.pathname.includes("/product/") ||
          location.pathname.includes("/category/") ||
          location.pathname.includes("/search/") ||
          location.pathname === "/" ? (
            <>
              <div className="SearchBarMobile">
                <select
                  className="nav-select-category"
                  onChange={(e) => {
                    navigate("/category/" + e.target.value);
                  }}
                  name
                  id
                >
                  <option value disabled selected>
                    All
                  </option>
                  {categories.map((category, index) => (
                    <option value={category.slug} key={"category" + index}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <input
                  className="SearchBarMobileInput"
                  type="text"
                  onChange={(e) => setsearch(e.target.value)}
                  placeholder="Search"
                />
                <button
                  className="SearchBarMobileBtn"
                  onClick={() => {
                    navigate("/search/" + search);
                  }}
                >
                  <i className="fa-solid fa-magnifying-glass nav-search-icon" />
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
          {/* <div className="SearchBarMobile">
      <select className="nav-select-category" name id>
        <option value>All</option>
        <option value>Prime Day</option>
        <option value>Alexa Skills</option>
        <option value>Laptops</option>
        <option value>Furniture</option>
        <option value>Mobiles</option>
        <option value>Education</option>
        <option value>Food and Snacks</option>
        <option value>Entertainment</option>
        <option value>Appliances</option>
        <option value>Men's Fashion</option>
        <option value>Women clothing</option>
      </select>
      <input className="SearchBarMobileInput"  type="text" onChange={(e)=>setsearch(e.target.value)} placeholder="Search"  />
      <button className="SearchBarMobileBtn" onClick={()=>{navigate("/search/"+search)}} >
        <i className="fa-solid fa-magnifying-glass nav-search-icon" />
      </button>
    </div> */}
        </header>
        {/* ***********************
         *******Header End*********
         ************************ */}
      </div>

      <Outlet />
    </div>
  );
};

export default Header;
