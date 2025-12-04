import "bootstrap/dist/css/bootstrap.min.css";
import "../src/Styles/app.css";
import Header from "../src/Components/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="bg-info-subtle">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
