import "../Styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faDirections,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ComponentOne from "../Components/HomeComponents/Component-one";
import ComponentTwo from "../Components/HomeComponents/Component-two";
import ComponentThree from "../Components/HomeComponents/Component-three";
import ComponentFour from "../Components/HomeComponents/Component-four";
import ComponentFive from "../Components/HomeComponents/Component-five";
import ComponentSix from "../Components/HomeComponents/Component-six";
import ComponentSeven from "../Components/HomeComponents/Component-seven";

function HomePage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="background-image">
          <img
            src="https://static.wixstatic.com/media/3cdf51_76ca9113dd11454c95e7210595366612~mv2.png/v1/fill/w_255,h_255,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/3cdf51_76ca9113dd11454c95e7210595366612~mv2.png"
            alt="logoImg"
            className="lo-go"
          />
          <span className="mid-line"></span>
          <p className="mid-text">
            ECLAIRS - MACARONS - CROISSANTS - FINE DESSERTS
          </p>
        </div>
        <ComponentOne />
        <ComponentTwo />
        <ComponentThree />
        <ComponentFour />
        <ComponentFive />
        <ComponentSix />
        <ComponentSeven />
      </div>
    </>
  );
}

export default HomePage;
