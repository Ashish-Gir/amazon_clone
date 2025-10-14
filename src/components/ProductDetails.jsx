import React, { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const [product, setproduct] = useState({});
  const singleProductImagesSlide = useRef()
   const location = useLocation()
    localStorage.setItem("previousPath",location.pathname)

  
  let totalSliderImages = singleProductImagesSlide.current?.children.length -1;
  let currentSlide = 0;

  function carouselPrev() {
    if(currentSlide === 0){
      currentSlide = totalSliderImages
    }else{
      currentSlide--;
    }
    singleProductImagesSlide.current.style.transform = `translateX(-${currentSlide}00%)`;
  
  }

  function carouselNext() {
    if(currentSlide === totalSliderImages){
      currentSlide = 0
    }else{
      currentSlide++;
    }
    singleProductImagesSlide.current.style.transform = `translateX(-${currentSlide}00%)`;
  }

  let param = useParams()
  useEffect(() => {
    fetch("https://dummyjson.com/products/"+param.id)
      .then((res) => res.json())
      .then((res)=>{setproduct(res)});
  }, [param.id]);


  console.log(product);
  

  
  return (<>

    {product.title ? <>
          <div>
      {/* Single Product Page Start  */}
      <div className="singleProductPage">
        <div className="singleProductImages">
          <div className="singleProductImagesSlider">
            <button className="singleProductImagesSliderPrev" onClick={()=>{carouselPrev()}}>
              <i className="fa-solid fa-chevron-left" />
            </button>
            <div className="singleProductImagesSliderFrame">
              <div className="singleProductImagesSlide" ref={singleProductImagesSlide}>
                {product.images?.map((img,index)=>(
                <img className="singleProductImagesSliderImg" src={img}  alt={"product-Img-"+index} />
                ))}
              </div>

            </div>
            <button className="singleProductImagesSliderNext" onClick={()=>{carouselNext()}} >
              <i className="fa-solid fa-chevron-right" />
            </button>
          </div>
        </div>
        <div className="singleProductDescription">
          <div className="singleProductTitle">
            <h3>{product.title}</h3>
            <div className="startRating">
                    {Array.from({length:product.rating},(_,i)=>(
 <i className="fa-solid fa-star"  key={i}/>
                ))}
            </div>
            <div className="amazonSticker">
              <div>
                <span>Amazon's </span>
                <span>Choice</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="singleProductPrice">
            <div className="singleProductPriceAndDiscount">
              <span className="singleProductDiscountPercentage">{product.discountPercentage}%</span>
              <span className="SingleProductOrignalPrice">${(product.price - ( product.price * (product.discountPercentage / 100))).toFixed(2)}</span>
            </div>
            <span>
              M.R.P.: <s>₹999</s>
            </span>
            <span className="inclusiveTax">Inclusive of all taxes</span>
            <hr />
          </div>
          <div className="singleProductOffer">
            <div className="offerTitle">
              <i className="fa-solid fa-gift" /> <span>Offers</span>
            </div>
            <div className="currentOffer">
              <a href>
                <span className="currentOfferBody">Partner Offers</span>
                <span className="currentOfferBody">
                  Get GST invoice and save up to 28% on business purchases.
                </span>
              </a>
            </div>
            <hr />
          </div>
          <div className="singleProductDesctiptionSectionMiddle visibleOnTablet">
            <div className="Section3DeliveryDetails">
              <span className="deliveryType">
                <a href="*">Free Delivery</a>
              </span>
              <span className="deliveryDayAndDate">
                <b>Monday, 16 September</b>
              </span>
              <span className="deliveryWithIn">
                on your first order. Order within
              </span>
              <span className="deliveryWithInHrs">1 hr 27 mins.</span>
              <span className="deliveryDetails">
                <a href="$">Details</a>
              </span>
            </div>
            <div className="section3Location">
              <div>
                <i className="fa-solid fa-location-dot" />{" "}
              </div>
              <div>
                {" "}
                <span>
                  <a href>Delivering to Chandigarh 160022 -Update Location</a>
                </span>
              </div>
            </div>
            <div className="section3Stock">
              <span className="stockIn">In Stock</span>
              <span className="stockOut">Out of Stock</span>
            </div>
            <div className="section3Buttons">
              <button className="addToCart">Add to cart</button>
              <button className="buyNow">Buy now</button>
            </div>
            <hr />
          </div>
          <div className="singleProductFeaturesSection">
            <div className="singleProductFeatures">
              <div className="singleProductFeatureBox">
                <div className="singleProductFeatureIcon">
                  <i className="fa-solid fa-box-open" />
                </div>
                <span>7 days Replacement</span>
              </div>
              <div className="singleProductFeatureBox">
                <div className="singleProductFeatureIcon">
                  <i className="fa-solid fa-truck-fast" />
                </div>
                <span>Free Delivery</span>
              </div>
              <div className="singleProductFeatureBox">
                <div className="singleProductFeatureIcon">
                  <i className="fa-solid fa-shield-halved" />
                </div>
                <span>1 Year Warranty</span>
              </div>
              <div className="singleProductFeatureBox">
                <div className="singleProductFeatureIcon">
                  <i className="fa-solid fa-coins" />
                </div>
                <span>Pay on Delivery</span>
              </div>
              <div className="singleProductFeatureBox">
                <div className="singleProductFeatureIcon">
                  <i className="fa-solid fa-crown" />
                </div>
                <span>Top Brand</span>
              </div>
            </div>
            <hr />
          </div>
          <div className="singleProductDesctiptionSection">
            <h4>
              <b>About the item</b>
            </h4>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati voluptatibus verotrum, excepturi, exercitationem ab
                vitae! Voluptates culpa odit explicabo provident tempora,
                ratione ipsa, impedit esse inventore aperiam excepturi deleniti
                ipsam illo voluptatem a laudantium at eligendi dolores eius
                soluta ad modi. Quas, saepe libero!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Obcaecati modi nostrum, excepturi, exercitationem ab vitae!
                Voluptates culpa odit explicabo provident tempora, ratione ipsa,
                impedit esse inventore aperiam excepturi deleniti ipsam illo
                voluptatem a laudantium at eligendi dolores eius soluta ad modi.
                Quas, saepe libero!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur advoluptatibus vero,
                nisi neque natus dolore commodi nostrum, excepturi,
                exercitationem ab vitae! Voluptates culpa odit explicabo
                provident tempora, ratione ipsa, impedit esse inventore aperiam
                excepturi deleniti ipsam illo voluptatem a laudantium at
                eligendi dolores eius soluta ad modi. Quas, saepe libero!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing vitae!
                Voluptates culpa odit explicabo provident tempora, ratione ipsa,
                impedit esse inventore aperiam excepturi deleniti ipsam illo
                voluptatem a laudantium at eligendi dolores eius soluta ad modi.
                Quas, saepe libero!
              </li>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. lore
                commodi nostrum, excepturi, exercitationem ab vitae! Voluptates
                culpa odit explicabo provident tempora, ratione ipsa, impedit
                esse inventore aperiam excepturi deleniti ipsam illo voluptatem
                a laudantium at eligendi dolores eius soluta ad modi. Quas,
                saepe libero!
              </li>
            </ul>
            <hr />
          </div>
          <div className="singleProductReviewSection">
            <h4 className="mb-3">
              <b>Reviews</b>
            </h4>
            {product.reviews?.map((review)=>(

            <div className="reviewBox">
              <div className="reviewerName">
                <h6>
                  <b>{review.reviewerName}</b>
                </h6>
                <div className="verifiedUserBadge">
                  verified user <i className="fa-solid fa-check" />{" "}
                </div>
              </div>
              <div className="reviewerRating">
                {Array.from({length:review.rating},(_,i)=>(
 <i className="fa-solid fa-star"  key={i}/>
                ))}

                {/* <i className="fa-solid fa-star" /> */}
              
              </div>
              <div className="reviewerComment">
                <p>
                 {review.comment}
                </p>
              </div>
            </div>
            ))}
            {/* <div className="reviewBox">
              <div className="reviewerName">
                <h6>
                  <b>kamal</b>
                </h6>
                <div className="verifiedUserBadge">
                  verified user <i className="fa-solid fa-check" />{" "}
                </div>
              </div>
              <div className="reviewerRating">
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
                <i className="fa-solid fa-star" />
              </div>
              <div className="reviewerComment">
                <p>
                  Lorem ipsum dolor, sit amet consectetur ritatis molestias
                  totam neque accusamus molestiae reiciendis excepturi
                  repellendus magni.
                </p>
              </div>
            </div> */}
            <hr />
          </div>
        </div>
        <div className="singleProductSection3 hiddenOnTablet">
          <div className="singleProductBuy">
            <div className="Section3Price">
              <h3 className>${(product.price - ( product.price * (product.discountPercentage / 100))).toFixed(2)}</h3>
            </div>
            <div className="Section3DeliveryDetails">
              <span className="deliveryType">
                <a href="*">Free Delivery</a>
              </span>
              <span className="deliveryDayAndDate">
                <b>Monday, 16 September</b>
              </span>
              <span className="deliveryWithIn">
                on your first order. Order within
              </span>
              <span className="deliveryWithInHrs">1 hr 27 mins.</span>
              <span className="deliveryDetails">
                <a href="$">Details</a>
              </span>
            </div>
            <div className="section3Location">
              <div>
                <i className="fa-solid fa-location-dot" />{" "}
              </div>
              <div>
                {" "}
                <span>
                  <a href>Delivering to Chandigarh 160022 -Update Location</a>
                </span>
              </div>
            </div>
            <div className="section3Stock">
                {product.stock === 0 ? <>
                <span className="stockOut">Out of Stock</span>
                </> :<>
                   <span className="stockIn">{product.stock} In Stock</span>
                </>}
           
              
            </div>
            <div className="section3Buttons">
              <button className="addToCart">Add to cart</button>
              <button className="buyNow">Buy now</button>
            </div>
            <div className="section3FeaturedProduct">
              <div className="featuredProduct">
                <img src="../Img/HomeDecorProd (4).jpg" alt="featured-prduct-1" />
                <div className="featuredProductInfo">
                  <h3>Decor</h3> <span>$45</span>
                </div>
              </div>
              <div className="featuredProduct">
                <img src="../Img/HomeDecorProd (2).jpg" alt="featured-prduct-2"  />
                <div className="featuredProductInfo">
                  <h3>Lamp</h3> <span>$45</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Single Product Page End  */}
    </div>
       </> :<> 
       <h1>loading ...</h1></> }

  </>
  );
};

export default ProductDetails;
