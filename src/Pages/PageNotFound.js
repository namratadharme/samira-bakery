import React from "react";
import { Link } from "react-router-dom";
import "../Styles/notfound.css";

function PageNotFound() {
  return (
    <>
      <div className="text-center mt-5 not-found">
        <h2>Page Not Found- 404</h2>
        <p>OOps!! Page does not exist</p>
        <Link to="/" className="btn btn-primary mt-2">
          Go Back Home
        </Link>
      </div>
    </>
  );
}

export default PageNotFound;
