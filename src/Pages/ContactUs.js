import React from "react";
import "../Styles/contact.css";
import map from "../../src/assests/eclairsNew.avif";
import bakeryImg from "../../src/assests/eclair-bakery-img1.jpg";
import bakeryImg2 from "../../src/assests/bakery-img2.jpg";
import bakeryImg3 from "../../src/assests/bakery-img3.jpg";
import bakeryimg4 from "../../src/assests/bakery-img4.webp";
import bakeryImg5 from "../../src/assests/bakery-img5.jpg";
import bakeryImg6 from "../../src/assests/bakery-img6.webp";

function ContactUs() {
  function handleToggle(element) {
    element.classList.toggle("active");
  }
  return (
    <div className="contact">
      <div className="contact-bg-img"></div>

      <div className="bottom-container">
        <div className="right-contact-card common">
          <img
            src="https://static.wixstatic.com/media/3cdf51_7744972aafa5459cb4eefd19ee79ce73~mv2.png/v1/fill/w_364,h_364,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Grey%20Memorial%20Day%20Instagram%20Post%20(2).png"
            alt="addressImg"
            className="add-img"
          />
        </div>
        <div className="left-contact-card common">
          <div className="img-container">
            <img src={bakeryImg2} alt="image1" className="imag" />
            <img src={bakeryImg3} alt="image2" className="imag" />
            <img src={bakeryimg4} alt="image3" className="imag" />
          </div>
          <div className="img-container">
            <img src={bakeryImg5} alt="image4" className="imag" />
            <img src={bakeryImg5} alt="image5" className="imag" />
            <img src={bakeryImg6} alt="image6" className="imag" />
          </div>
        </div>
      </div>
      <div className="white">
        <h1>Our Delivary Address</h1>
        <div className="map"></div>
      </div>
      <div className="yellow">
        <h3>
          "The croissant base was so buttery and flakey and<br></br> the
          pistachio filling & topping really took it over the top."
        </h3>
      </div>
    </div>
  );
}

export default ContactUs;
