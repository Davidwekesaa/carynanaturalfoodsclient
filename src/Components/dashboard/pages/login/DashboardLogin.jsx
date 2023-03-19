import React, { useContext, useState } from "react";
import "../../../../Components/login/loginstyle.css";
import { useNavigate } from "react-router-dom";
import logo from "../../../../assets/logo.png";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { actionType } from "../../../../store/reducer";
import { useStateValue } from "../../../../store/StateProvider";
function DashboardLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  // const { dispatch } = useContext(AuthContext);
  const emptyFields = () => toast.error("All the fields are required");
  const wronUser = () => toast.error("Wrong user email or password");
  const rights = () => toast.error("Access denied");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 && password.trim().length === 0) {
      emptyFields();
    } else {
      await axios
        .post(`${process.env.REACT_APP_Server_Url}auth/login`, {
          userEmail: email,
          password: password,
        })
        .then((logins) => {
          localStorage.setItem("user", JSON.stringify(logins.data));
          dispatch({
            type: actionType.SET_USER,
            user: logins.data,
          });
          console.log(logins.data);
          user.userRights === 0 ? rights() : navigate("/dashboard");
        })
        .catch((error) => {
          wronUser();
        });
    }
  };

  const hundleRegister = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" className="login-logo" />
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="userEmail"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <div className="submit-register">
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
          {/* <button type="submit" onClick={hundleRegister}>
            Register
          </button> */}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default DashboardLogin;
