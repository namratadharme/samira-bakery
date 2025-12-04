import React from "react";
import men from "../../assests/men.webp";
import "../../Styles/componentTwo.css";

function ComponentTwo() {
  return (
    <>
      <div className="component-two">
        <div className="men-image">
          <img src={men} alt="menImg" className="img" />
        </div>
        <div className="bakery-detail">
          <h2 style={{ fontFamily: "Playfair Display serif" }}>
            Samira Brownies Bakery
          </h2>
          <span
            style={{
              fontFamily: "open-sans sans-serif",
              letterSpacing: "0.1rem",
            }}
          >
            A NEIGHBORHOOD ARTISAN BAKERY
          </span>
          <span className="under-line"></span>

          <p>
            Head Pastry Chef Stéphane brings the magic of French pastry from
            <br />
            Paris to the bustling streets of New York City.
          </p>
          <p>
            Falling in love with pastry at just 16, Stéphane trained at the
            <br></br>
            esteemed Ferrandi, the French School of Culinary Arts, where he
            <br></br>
            perfected his craft under the guidance of some of Paris’s most
            <br></br>
            celebrated chefs.
          </p>
          <p>
            In 2013, after two years working in a French bakery in New York,
            <br></br>
            Stéphane took a bold leap and opened his very own bakery +<br></br>{" "}
            cafe in Midtown Manhattan, fulfilling a cherished childhood<br></br>{" "}
            dream.
          </p>
          <p>
            With an enduring passion for excellence and a dedication to his
            <br></br>
            art, Stéphane infuses every creation with heart and care, offering
            <br></br>
            pastry lovers a taste of France and an unforgettable culinary
            <br></br>
            experience.
          </p>
        </div>
      </div>
    </>
  );
}

export default ComponentTwo;
