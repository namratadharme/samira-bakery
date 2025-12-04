import "../Styles/home.css";
import ComponentOne from "../Components/HomeComponents/Component-one";
import ComponentTwo from "../Components/HomeComponents/Component-two";
import ComponentThree from "../Components/HomeComponents/Component-three";
import ComponentFour from "../Components/HomeComponents/Component-four";
import ComponentFive from "../Components/HomeComponents/Component-five";
import ComponentSix from "../Components/HomeComponents/Component-six";
import ComponentSeven from "../Components/HomeComponents/Component-seven";
import image from "../assests/img.png";

function HomePage() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div className="background-image">
          <img src={image} alt="logoImg" className="lo-go" />
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
