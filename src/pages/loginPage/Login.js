import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Login.scss";

const Login = () => {

  const {login} = useContext(AuthContext);
  console.log(login)

  const handlelogin=()=>{
    login();
  }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello People.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            ratione dolorem eligendi maxime consequatur nulla ab, aut
            voluptatibus porro reiciendis.
          </p>
          <span>Don't you have an a account?</span>
          <Link to='/register'>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Enter Username" />
            <input type="password" placeholder="Enter Password" />
            <button onClick={handlelogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
