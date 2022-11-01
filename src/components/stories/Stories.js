import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import "./Stories.scss";

const Stories = () => {
    
  const {currentUser} = useContext(AuthContext);

  const stories = [
    {
      id: 1,
      name: "Pradeep T",
      img: "https://images.pexels.com/photos/9786921/pexels-photo-9786921.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Paddy",
      img: "https://images.pexels.com/photos/1261731/pexels-photo-1261731.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      name: "Viresh",
      img: "https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      name: "Veeri",
      img: "https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <div className="stories">

      <div className="story">
        <img src={currentUser.img} alt="" />
        <span>{currentUser.name}</span>
        <button>+</button>
      </div>

      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="" />
            <span>{story.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
