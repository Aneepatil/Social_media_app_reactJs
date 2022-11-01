import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./LeftBar.scss";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";

const LeftBar = () => {

  const { currentUser } = useContext(AuthContext);


  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src={currentUser.profilePic}
              alt="User Pic"
            />
            <span>{currentUser.name}</span>
          </div>
          <div className="item">
            <img
              src={Friends}
              alt="User Pic"
            />
            <span>Friend</span>
          </div>
          <div className="item">
            <img
              src={Groups}
              alt="User Pic"
            />
            <span>Group</span>
          </div>
          <div className="item">
            <img
              src={Market}
              alt="User Pic"
            />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img
              src={Watch}
              alt="User Pic"
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src={Memories}
              alt="User Pic"
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img
              src={Events}
              alt="User Pic"
            />
            <span>Events</span>
          </div>
          <div className="item">
            <img
              src={Gaming}
              alt="User Pic"
            />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img
              src={Gallery}
              alt="User Pic"
            />
            <span>Gallary</span>
          </div>
          <div className="item">
            <img
              src={Videos}
              alt="User Pic"
            />
            <span>Videos</span>
          </div>
          <div className="item">
            <img
              src={Messages}
              alt="User Pic"
            />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img
              src={Fund}
              alt="User Pic"
            />
            <span>Fundraiser  </span>
          </div>
          <div className="item">
            <img
              src={Tutorials}
              alt="User Pic"
            />
            <span>Tutorial</span>
          </div>
          <div className="item">
            <img
              src={Courses}
              alt="User Pic"
            />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
