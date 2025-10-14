import React from 'react'
import { useLocation } from 'react-router-dom'

const Contact = () => {
  const location = useLocation()
  localStorage.setItem("previousPath",location.pathname)
  return (
    <>
    
     {/* Contact Page Start */}
<div className="contactPage">
  <div className="contactPageSection1">
    <form action="#">
      <div className="contactPageSection1NameAndMail">
        <input type="text" placeholder="YOUR NAME" />
        <input type="email" placeholder="YOUR E-MAIL" />
      </div>
      <input type="text" placeholder="SUBJECT" />
      <textarea name id placeholder="YOUR MESSAGE" defaultValue={""} />
      <input type="submit" />
    </form>
  </div>
  <div className="contactPageSection2">
    <div className="contactPageSection2Text">
      <h1>GET IN TOUCH</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit cupiditate praesentium at labore ratione maxime assumenda provident placeat non harum quaerat quos nemo cum dolores libero accusantium explicabo, eum incidunt!</p>
    </div>
    <div className="contactPageSection2ContactInfo">
      <span><i className="fas fa-map-marker-alt" /> New Delhi,India</span>
      <span><i className="fas fa-envelope" /> amazon.co@gmail.com</span>
      <span><i className="fas fa-phone" /> +919646448490</span>
    </div>
    <div className="contactPageSection2SocialMediaAccounts">
      <div className="socialMediaIconBox"><i className="fab fa-twitter" /></div>
      <div className="socialMediaIconBox"><i className="fab fa-facebook-f" /></div>
      <div className="socialMediaIconBox"><i className="fab fa-linkedin-in" /></div>
      <div className="socialMediaIconBox"><i className="fab fa-instagram" /></div>
      <div className="socialMediaIconBox"><i className="fab fa-youtube" /></div>
    </div>
  </div>
</div>
{/* Contact Page End */}

      
    </>
  )
}

export default Contact
