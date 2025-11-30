import React from "react";
import "../Styles/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div className="component-eight">
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
          <img
            src="https://static.wixstatic.com/media/3cdf51_30e08477205a41ed9fa8b1c0a507994f~mv2.png/v1/fill/w_212,h_212,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cdf51_30e08477205a41ed9fa8b1c0a507994f~mv2.png"
            alt="image"
          />
          <FontAwesomeIcon icon={faInstagram} size="2x" />
          <span>@ 2016 by Eclairs Bakery</span>
        </div>

        <div className="flex-1"></div>
      </div>
    </>
  );
}

export default Footer;
