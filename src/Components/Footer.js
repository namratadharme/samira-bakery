import React from "react";
import "../Styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import image from "../assests/img.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="flex-1">
          <ul>
            <li>Home</li>
            <li>Visit Us</li>
            <li>Get In Touch</li>
            <li>Download Category Menu</li>
            <li>Whole Sale</li>
            <li>Order Menu</li>
          </ul>
        </div>
        <div className="flex-1">
          <img src={image} alt="image" className="lo-go" />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span>@ 2016 by Samira brownies Bakery</span>
        </div>

        <div className="flex-1"></div>
      </div>
    </>
  );
}

export default Footer;
