import React from "react";
import "../../Styles/componentFour.css";
import cake1 from "../../assests/cake1.avif";
import newdish from "../../assests/newdish.avif";

function ComponentFour() {
  return (
    <>
      <div className="component-four">
        <div className="card-one column">
          <img src={cake1} alt="cakeImg" className="img1" />
          <img src={newdish} alt="dishImg" className="img2" />
        </div>
        <div className="card-two column">
          <h2 className="heading-2">Our Signature Eclairs</h2>
          <p className="paragraph">A MUST FOR ECLAIR LOVERS</p>
          <span className="under-line"></span>

          <span className="span-text">
            Eclair Bakery is the only New York City-based bakery that<br></br>{" "}
            offers éclairs with such a wide range of delicious fillings{" "}
            <br></br>and toppings.
          </span>
          <span className="span-text">
            Our eclairs are lovingly hand crafted with a pâte à choux<br></br>
            dough prepared in small batches throughout the day so<br></br> our
            customers can always get the freshest eclairs<br></br> possible!
          </span>
          <span className="span-text">
            All of our creations are truly unique. We offer many<br></br>
            different flavors and regularly update our range with<br></br>
            seasonal influences as well as the freshest ingredients<br></br>
            available.
          </span>
        </div>
      </div>
    </>
  );
}

export default ComponentFour;
