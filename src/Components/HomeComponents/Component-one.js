import React from "react";
import "../../Styles/componentOne.css";

function ComponentOne() {
  return (
    <>
      <div className="component-one">
        <div className="left-box column">
          <h2>
            Order Bakery <br />& Catering
          </h2>
          <span className="line"></span>
          <span>Explore our Bakery items</span>
          <div className="image1"></div>
          <button className="component-btn">ORDER NOW</button>
        </div>
        <div className="right-box column">
          <h2>Catering Menu</h2>
          <span className="line"></span>
          <span>Explore our options for catering and events</span>
          <div style={{ display: "flex", gap: "5px" }}>
            <div className="image2"></div>
            <div className="image3"></div>
          </div>

          <button className="component-btn">CATERING MENU</button>
        </div>
      </div>
    </>
  );
}

export default ComponentOne;
