import React from "react";
import "./styles/Services.scss";
const Services = () => {
  return (
    <div className="service">
      <div className="service_container">
        <h1>My Services</h1>
        <p>The top-notch services i render</p>
        <div className="service_wrapper">
          <div className="wrapper_one">
            <span className="icon_one">
              <i class="fa-solid fa-code"></i>
            </span>
            <div>Web development</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
