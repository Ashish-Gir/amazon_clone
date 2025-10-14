import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setuser] = useState({});
  const navigate = useNavigate();
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
          setuser(res);
        }
      });
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);
  
  return (
    <>
    {user.id ? <>
     <div>
      <div className="accountPage">
        <h1 className="accountPageHeading">Welcome Back {user.firstName} !</h1>
        <div className="dashboardOptionsGrid">
          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (5).png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Your Orders</h1>
              <p>Track, return, or buy things again</p>
            </div>
          </div>
          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (4).png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Login & security</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (6).png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Prime</h1>
              <p>View benefits and payment settings</p>
            </div>
          </div>
          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (7).png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Your Addresses</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (1).jpg" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Your business account</h1>
              <p>
                Sign up for free to save up to 18% with GST invoice and bulk
                discounts and purchase on credit.
              </p>
            </div>
          </div>
          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (1).png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Payment options</h1>
              <p>Edit or add payment methods</p>
            </div>
          </div>

          <div className="dashboardOptionsBox">
            <img src="../Img/dashboard_Icon (3).png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Contact Us</h1>
              <p>Contact our customer service via phone or chat</p>
            </div>
          </div>

          <div
            className="dashboardOptionsBox"
            onClick={() => {
              localStorage.removeItem("accessToken");
              navigate("/login");
            }}
          >
            <img src="../Img/logout.png" alt="" />
            <div className="dashboardOptionsBoxDesc">
              <h1>Logout</h1>
              <p>Lorem ipsum dolor sit.</p>
            </div>
          </div>
        </div>
      </div>
    </div> </> : <>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',minHeight:"90vh"}}>
    <h1 style={{textAlign:'center'}}>loading ...</h1> 
    </div> </>}
   
      </>
  );
};

export default Dashboard;
