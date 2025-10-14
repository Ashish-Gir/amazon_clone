import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
  const location =useLocation()
 localStorage.setItem("previousPath",location.pathname)
  const sliderFrame = useRef();
  let currentSlide = 0;
  function carouselPrev() {
    if(currentSlide == 0){
      currentSlide =3
    }else{
      currentSlide--;
    }
    sliderFrame.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }

  function carouselNext() {
    if(currentSlide == 3){
      currentSlide =0
    }else{
      currentSlide++;
    }
    sliderFrame.current.style.transform = `translateX(-${currentSlide}00vw)`;
  }

  return (
    <>
      <div>
        {/* HomPage */}
        {/* carousel Start */}
        <div className="carousel">
          <button
            id="carouselPrevBtn"
            onClick={carouselPrev}
            className="carouselPreviousbtn"
          >
            <i className="fa-solid fa-angle-left" />
          </button>

          <div className="frame">
            <div className="slideImg" ref={sliderFrame}>
              <img src="Img/carousel-1.jpg" alt="" />
              <img src="Img/carousel-2.jpg" alt="" />
              <img src="Img/carousel-3.jpg" alt="" />
              <img src="Img/carousel-4.jpg" alt="" />
            </div>
          </div>

          <button
            id="carouselNextBtn"
            onClick={carouselNext}
            className="carouselNextbtn"
          >
            <i className="fa-solid fa-angle-right" />
          </button>
        </div>

        {/* carousel End */}
        {/* Category Cards Start */}
        <div className="categoryContainer">
          <div className="categoryCardBody">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">Revamp your home in style</h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/HomeDecorProd (1).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/HomeDecorProd (2).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/HomeDecorProd (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/HomeDecorProd (4).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link to={"/category/home-decoration"}>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">
                Appliances for your home | Up to 55% off
              </h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/search/appliance'}>
                  <img src="./Img/ElectricalAppliances (1).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/search/appliance'}>
                  <img src="./Img/ElectricalAppliances (2).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/search/appliance'}>
                  <img src="./Img/ElectricalAppliances (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/search/appliance'}>
                  <img src="./Img/ElectricalAppliances (4).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link to={"/search/appliance"}>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">
                Starting ₹199 | Amazon Brands &amp; more
              </h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/AmazonBrandProducts (1).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/AmazonBrandProducts (2).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/AmazonBrandProducts (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/home-decoration'}>
                  <img src="./Img/AmazonBrandProducts (4).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link to={"/products"}>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">Starting ₹149 | Headphones</h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/search/audio'}>
                  <img src="./Img/HeadPhones (1).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/search/audio'}>
                  <img src="./Img/HeadPhones (2).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/search/audio'}>
                  <img src="./Img/HeadPhones (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/search/audio'}>
                  <img src="./Img/HeadPhones (4).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link to={'/products'}>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody hiddenOnTablet">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">
                Starting ₹99 | Amazon Brands &amp; more
              </h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/category/beauty'}>
                  {" "}
                  <img src="./Img/product.jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/beauty'}>
                  <img src="./Img/AmazonBrandProducts (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/beauty'}>
                  <img src="./Img/HomeDecorProd (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/beauty'}>
                  {" "}
                  <img src="./Img/carousel-4.jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link to={"/products"}>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody hiddenOnTablet">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">
                Up to 60% off | Styles for women
              </h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/category/womens-dresses'}>
                  <img src="./Img/WomenProducts (1).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/womens-dresses'}>
                  <img src="./Img/WomenProducts (2).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/womens-dresses'}>
                  <img src="./Img/WomenProducts (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/category/womens-dresses'}>
                  <img src="./Img/WomenProducts (4).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link to={"/products"}>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody hiddenOnTablet">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">
                Automotive essentials | Up to 60% off
              </h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/AmazonBrandProducts (3).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/ProductsSection1Images (7).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/ProductsSection1Images (7).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/AmazonBrandProducts (2).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link>Explore All</Link>
            </div>
          </div>
          <div className="categoryCardBody hiddenOnTablet">
            <div className="categoryCardTitleContainer">
              <h5 className="categoryCardTitle">
                Up to 60% off | Kitchen products from stores nearby
              </h5>
            </div>
            <div className="categoryCardImgContainer">
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/ProductsSection1Images (2).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/ProductsSection1Images (4).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/ProductsSection1Images (5).jpg" alt srcSet />
                </Link>
              </div>
              <div className="categoryCardImgBox">
                <Link to={'/products'}>
                  <img src="./Img/ProductsSection1Images (6).jpg" alt srcSet />
                </Link>
              </div>
            </div>
            <div className="categoryCardLink">
              <Link>Explore All</Link>
            </div>
          </div>
        </div>
        {/* Category Cards End */}
        {/* Deals Section start  */}
        <div className="dealsSection">
          <div className="dealsSection1">
            <h3>
              Best deals curated from stores nearby &nbsp;
              <Link >&nbsp; seemore&gt;&gt;&gt;</Link>
            </h3>
            <div className="dealsSection1Images">
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (1).jpg" alt srcSet />
              </Link>
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (2).jpg" alt srcSet />
              </Link>
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (3).jpg" alt srcSet />
              </Link>
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (4).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (5).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (6).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (7).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (8).jpg" alt srcSet />
              </Link>
            </div>
          </div>
          <div className="dealsSection1">
            <h3>
              Up to 70% off | Fashion &amp; beauty products from emerging brands
              &nbsp;
              <Link >&nbsp; seemore&gt;&gt;&gt;</Link>
            </h3>
            <div className="dealsSection1Images">
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (8).jpg" alt srcSet />
              </Link>
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (7).jpg" alt srcSet />
              </Link>
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (6).jpg" alt srcSet />
              </Link>
              <Link to={'/products'}>
                <img src="/Img/ProductsSection1Images (5).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (4).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (3).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (2).jpg" alt srcSet />
              </Link>
              <Link to={'/products'} className="hiddenOnTablet">
                <img src="/Img/ProductsSection1Images (1).jpg" alt srcSet />
              </Link>
            </div>
          </div>
          <div className="dealsSection2">
            <div className="dealsSection2CardBody">
              <Link to={'/products'}>
                <div className="dealsSection2CardBodyImg">
                  <img src="./Img/HeadPhones (1).jpg" alt />
                </div>
                <div className="dealsSection2CardBodyInfo">
                  <h5>Product Title</h5>
                  <span className="crosedPrice">$2323</span>
                  <span className="orignalPrice">$599</span>
                </div>
              </Link>
            </div>
            <div className="dealsSection2CardBody">
              <Link to={'/products'}>
                <div className="dealsSection2CardBodyImg">
                  <img src="./Img/HeadPhones (2).jpg" alt />
                </div>
                <div className="dealsSection2CardBodyInfo">
                  <h5>Product Title</h5>
                  <span className="crosedPrice">$2323</span>
                  <span className="orignalPrice">$599</span>
                </div>
              </Link>
            </div>
            <div className="dealsSection2CardBody">
              <Link to={'/products'}>
                <div className="dealsSection2CardBodyImg">
                  <img src="./Img/HeadPhones (3).jpg" alt />
                </div>
                <div className="dealsSection2CardBodyInfo">
                  <h5>Product Title</h5>
                  <span className="crosedPrice">$2323</span>
                  <span className="orignalPrice">$599</span>
                </div>
              </Link>
            </div>
            <div className="dealsSection2CardBody">
              <Link to={'/products'}>
                <div className="dealsSection2CardBodyImg">
                  <img src="./Img/HeadPhones (4).jpg" alt />
                </div>
                <div className="dealsSection2CardBodyInfo">
                  <h5>Product Title</h5>
                  <span className="crosedPrice">$2323</span>
                  <span className="orignalPrice">$599</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* Deals Section End  */}
      </div>
    </>
  );
};

export default Home;
