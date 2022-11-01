import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = () => {
    setCurrentUser({
        "id":1,
        "name":'AneelKumar',
        "profilePic":"https://images.pexels.com/photos/10465241/pexels-photo-10465241.jpeg?auto=compress&cs=tinysrgb&w=600",
    },);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{currentUser,login}}>
      {children}
    </AuthContext.Provider>
  );
};