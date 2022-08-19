import React from "react";
import "./styles/Main.scss";
import fold from "./assets/fold.png";
const Main = () => {
  return (
    <div className="main">
      <div className="img_text">
        <div className="main__img">
          <img src={fold} alt="dance" />
        </div>
        <div className="main_container">
          <div className="main_content">
            <div className="text">
              <p className="p">Hey There</p>
              <h1>I am Temiloluwa</h1>
              <b>A creative Web developer</b>
              <div className="icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-square-twitter"></i>
                <i class="fa-brands fa-linkedin"></i>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className="buttons">
                <button>Hire Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
