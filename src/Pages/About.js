import React from "react";
import about from "../assests/about.jpg";
import "../Styles/about.css";
import grp from "../assests/grp.jpg";

function AboutPage() {
  return (
    <>
      <div className="gap column">
        <div className="about-page">
          <div className="left-card">
            <img src={about} alt="aboutImg" className="about-image" />
          </div>
          <div className="right-card">
            <h1>About Us</h1>

            <h3>
              Hi! Our Bakery has been present for over 20 years in the city. We
              make the most of all our customers.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button className="about-btn">Contact us for order</button>
          </div>
        </div>
        <div className="about-bakery">
          <div className="right-card">
            <h2>About The Team</h2>
            <p>
              We are a team thats obsessed with creating moments - menu items,
              recipes, a new handshake, a silly sign that makes life lighter and
              brighter. Whether we are swirling up soft serve at your local
              store, layering cakes in our kitchens, or at our desks making it
              possible for you to send a care package across the country to
              someone special, we love inspiring others to see a world full of
              infinite possibility. Learn more about some of our team members
              below, as well as the variety of charitable causes that we work
              with to spread joy to those less fortunate.
            </p>
          </div>
          <div className="left-card">
            <img src={grp} alt="groupImg" className="about-image" />
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
