import React from "react";
import "./NavBar.css";
import { Button } from "react-bootstrap";

const NavBar = () => {
  return (
    <div className=' container-xxl'>
      <div className="nav d-flex justify-content-between  my-3 mb-5">

<div className="d-flex gap-3">
  <li className="d-flex align-items-center nav_font">Home</li>
  <li className=" px-3 d-flex align-items-center nav_font"> Blog</li>
</div>


<div className="d-flex align-items-center nav_name">Bloggie.Web</div>
<div className="d-flex gap-3">
  <input className="form-control custom_input me-2 py-2" type="search" placeholder="Search" aria-label="Search" />

  <div className="d-flex">
  <a className="me-3 d-flex align-items-center nav_font">Login</a>
  <Button className="bg-dark btn-dark rounded-pill px-4 nav_font">SignUp</Button>
  </div>
  
</div>

</div>
    </div>
    
  );
};

export default NavBar;
