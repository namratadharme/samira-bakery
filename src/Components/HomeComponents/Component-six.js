import "../../Styles/componentSix.css";
import cake1 from "../../assests/cake1.avif";
import img1 from "../../assests/img1.avif";
import img2 from "../../assests/img2.avif";
import eclairsNew from "../../assests/eclairsNew.avif";

function ComponentSix() {
  return (
    <div className="component-six">
      <div className="card-1 column">
        <h2 className="title">
          Our Decadent
          <br /> Desserts
        </h2>
        <p>BAKED FRESH ON-PREMISES EVERY DAY</p>
        <span className="under-line"></span>
        <span className="line-text">
          This Bakery offers delicious and authentic French <br />
          pastries, croissants, macarons, tarts and of course! its <br />
          signature item, éclairs.
        </span>
        <span className="line-text">
          Our gourmet pastries are made with the freshest, most
          <br /> carefully sourced ingredients, and are handcrafted daily
          <br />
          in our open kitchen!
        </span>
      </div>
      <div className="card-2">
        <div>
          <img src={img1} alt="img1" className="img-1" />
          <img src={img2} alt="img2" className="img-2" />
        </div>
        <div>
          <img src={eclairsNew} alt="eclairsImg" className="img-3" />
          <img src={cake1} alt="img4" className="img-4" />
        </div>
      </div>
    </div>
  );
}

export default ComponentSix;
