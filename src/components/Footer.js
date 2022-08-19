import React from "react";
import "./styles/Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <h1>Olowo Temiloluwa</h1>
        <div className="icons_three">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-square-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-instagram"></i>
        </div>
        <p className="pa">Copyright © 2022 | All rights reserved</p>
      </div>
    </div>
  );
};
export default Footer;
