import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import logo from "../assets/logo.png";
import notImge from "../assets/notImge.png";
import { useStateValue } from "../store/StateProvider";
function Header({ setToggleCartMenu, toggleCartMenu, serch }) {
  const [{ cart, user }, dispatch] = useStateValue();
  // useEffect(() => {
    
  // }, [cart]);

  const hundleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();

  };
  return (
    <header>
      
      <img src={logo} alt="Logo" className="logo" />
      <div className="inputBox">
        <SearchIcon className="searchIcon" />
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => serch(e.target.value)}
        />
      </div>
      <div className="shoppingCart">
        <ShoppingCartIcon className="cart" />
        <div className="cart_content">
          <p>
            {cart
              ? cart.reduce((acc, curr) => {
                  return acc + curr.qty;
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
            />
          </div>
          <p className="logout" onClick={hundleLogout}>
            {user == null ? "" : "Logout"}
          </p>
        </div>
        <h2 className="userName">{user == null ? "" : user.userName}</h2>
      </div>
      <div
        className={`toggleMenu ${toggleCartMenu ? "toggleMenuDeg" : ""}`}
        onClick={(e) => setToggleCartMenu(!toggleCartMenu)}
      >
        <BarChartIcon className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
