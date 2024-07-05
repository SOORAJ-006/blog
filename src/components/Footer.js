import React from "react";
import "./Footer.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Footer = () => {
  return (
    <div className=' container-xxl'>
      <div className="nav d-flex justify-content-between my-3 mb-5 text-secondary">
      <div className="d-flex gap-3">
        
        <div className="d-flex gap-2">
        <i class="bi bi-c-circle"></i>2024 Bloggie.Web
        </div>
        <div className="d-flex gap-3">
          <li>Terms</li>
          <li>Policies</li>
          <li>Cookies</li>
        </div>
      </div>

      

      <div className="d-flex gap-3"><i className="bi bi-instagram"></i> <i className="bi bi-facebook"></i> <i className="bi bi-twitter-x"></i></div>
     
    </div>
    </div>
    
  );
};

export default Footer;
