import React from "react";
import "../../Styles/componentSeven.css";

function ComponentSeven() {
  return (
    <>
      <div className="component-seven">
        <div className="card-one column center">
          <h2 className="heading00">
            We'd Love To Hear <br></br> From You
          </h2>
          <span className="sort-line"></span>
          <span
            style={{
              textAlign: "center",
              fontSize: "13px",
              fontWeight: "800",
              color: "#656566ff",
            }}
          >
            303 East 53rd Street <br></br>New York, NY 10012<br></br>
            646-429-8555
          </span>
        </div>
        <div className="card-two column center">
          <div className="input-box">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bottom-border"
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="bottom-border"
            />
          </div>

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="bottom-longborder"
          />

          <input
            type="text"
            placeholder="type to message here..."
            className="bottom-width"
          />

          <button>Submit</button>
        </div>
      </div>
    </>
  );
}

export default ComponentSeven;
