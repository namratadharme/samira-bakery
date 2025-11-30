import React from "react";
import "../Styles/userinfo.css";
import user from "../assests/user.webp";

function UserInfo() {
  const userDetail = {
    name: "Amit singh",
    age: "30",
    dob: "15/9/95",
    phone: "9156728703",
    email: "amits@gmail.com",
    address: "new market bus stop mungeli",
  };

  return (
    <>
      <div className="userinfo-page">
        <div className="user-image">
          <img src={user} alt="userImg" className="imageMen" />
        </div>
        <div className="user-detail">
          <p>
            <strong>Name: {userDetail.name}</strong>
          </p>
          <p>
            <strong>Age: {userDetail.age}</strong>
          </p>
          <p>
            <strong>Date Of Birth: {userDetail.dob}</strong>
          </p>
          <p>
            <strong>Phone: {userDetail.phone}</strong>
          </p>
          <p>
            <strong>Email: {userDetail.email}</strong>
          </p>
          <p>
            <strong>Address: {userDetail.address}</strong>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
