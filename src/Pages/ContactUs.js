import "../Styles/contact.css";
import bakeryImg2 from "../../src/assets/bakery-img2.jpg";
import bakeryImg3 from "../../src/assets/bakery-img3.jpg";
import bakeryimg4 from "../../src/assets/bakery-img4.webp";
import bakeryImg5 from "../../src/assets/bakery-img5.jpg";
import bakeryImg6 from "../../src/assets/bakery-img6.webp";
import contact from "../assets/contact.png";

function ContactUs() {
  return (
    <div className="contact">
      <div className="contact-bg-img"></div>

      <div className="bottom-container">
        <div className="right-contact-card common">
          <img src={contact} alt="addressImg" className="add-img" />
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
