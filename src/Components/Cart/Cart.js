import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "../../store/StateProvider";
import { useNavigate } from "react-router-dom";
import notImge from "../../assets/notImge.png";
// import "../../App.css";
function Cart({ toggleCartMenu, setToggleCartMenu }) {
  const [{ cart, user }, dispatch] = useStateValue();

  const navigate = useNavigate();

  const hundleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };

  const hundleLog = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  const handledash = (e) => {
    e.preventDefault();

    if (user != null && user.userRights > 0) {
      navigate("/dashboard");
    }
  };
  return (
    <div className="ShppingCartt">
      <div className="shoppingCart todisplay">
        <ShoppingCartIcon className="cart" />
        <div className="cart_content">
          <p>
            {cart
              ? cart.reduce((acc, curr) => {
                  return acc + curr?.qty;
                }, 0)
              : 0}
          </p>
        </div>
      </div>
      <div className="profileContainer">
        <div className="profile-log">
          <div className="imgBox">
            <img
              src={user == null ? notImge : user.profile}
              alt="profile"
              className="profilePic"
              onClick={handledash}
            />
          </div>
          {user == null ? (
            <p className="logout" onClick={hundleLog}>
              Login
            </p>
          ) : (
            <p className="logout" onClick={hundleLogout}>
              Logout
            </p>
          )}
        </div>
        <h2 className="userName">{user == null ? "" : user?.userName}</h2>
      </div>
      <div
        className={`toggleMenu ${toggleCartMenu ? "toggleMenuDeg" : ""}`}
        onClick={(e) => setToggleCartMenu(!toggleCartMenu)}
      >
        <div className="shoppingCart">
          <ShoppingCartIcon className="cart" />
          <div className="cart_content">
            <p>
              {cart
                ? cart?.reduce((acc, curr) => {
                    return acc + curr?.qty;
                  }, 0)
                : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
