import React from "react";
import "./Profile.css";
import photo from "../assets/profile-photo-default.webp";
import { useSelector, useDispatch } from "react-redux";
import Pro_card from "./components/Pro_card.jsx";

const Profile = () => {
  const profimg1 = useSelector((state) => state.profileslice.profileimg);
  console.log(profimg1);
  return (
    <div className="profile_main">
      <span className="your_account">Your Account</span>
      <div className="cards">
        <Pro_card />
        <Pro_card />
        <Pro_card />
        <Pro_card />
        <Pro_card />
      </div>
    </div>
  );
};

export default Profile;
