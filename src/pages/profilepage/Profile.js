import "./Profile.scss";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Postes from "../../components/posts/Postes";

const Profile = ({}) => {
  return (
    <div className="profile">
      <div className="images">
        <img
          src="https://images.pexels.com/photos/4947406/pexels-photo-4947406.jpeg?auto=compress&cs=tinysrgb&w=600 "
          alt=""
          className="cover"
        />
        <img
          src="https://images.pexels.com/photos/1325619/pexels-photo-1325619.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          className="profilePic"
        />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="https://www.facebook.com/">
              <FacebookOutlinedIcon fontSize="large" />
            </a>
            <a href="https://www.linkedin.com/login">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="https://twitter.com/i/flow/login">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="https://in.pinterest.com/login/">
              <PinterestIcon fontSize="large" />
            </a>
          </div>

          <div className="center">
            <span>Paddy</span>
            <div className="info">
              <div className="item">
                <LocationOnIcon />
                <span>India</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>anee.dev</span>
              </div>
            </div>
            <button>fallow</button>
          </div>

          <div className="right">
            <a href="https://myaccount.google.com ">
              <MarkunreadIcon fontSize="large" />
            </a>
            <a href="">
              <MoreVertIcon fontSize="large" />
            </a>
          </div>
        </div>
        <Postes/>
      </div>
    </div>
  );
};

export default Profile;
