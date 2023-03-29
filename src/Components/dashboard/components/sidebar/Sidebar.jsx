import React, { useContext } from "react";
import "./sidebarstyle.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import LocalMallRoundedIcon from "@mui/icons-material/LocalMallRounded";
import { Link } from "react-router-dom";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import logo from "../../../../assets/logo.png";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useStateValue } from "../../../../store/StateProvider";
import { actionType } from "../../../../store/reducer";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  const hundleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
    window.location.reload();
  };

  // const {dispatch}=useContext(DarkModeContext)
  return (
    <div className="dash-sidebar">
      <div className="dash-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="dash-logo " src={logo} alt="" />
        </Link>
      </div>
      <div className="dash-center">
        <ul>
          <Link to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <GridViewRoundedIcon className="dash-sidebaricon" />
              <span>Home</span>
            </li>
          </Link>
          {user.userRights !== 1 ? (
            <Link to="/users" style={{ textDecoration: "none" }}>
              {" "}
              <li>
                <GroupRoundedIcon className="dash-sidebaricon" />
                <span>Users</span>
              </li>
            </Link>
          ) : (
            ""
          )}
          <Link to="/products" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <LocalShippingIcon className="dash-sidebaricon" />
              <span>Products</span>
            </li>
          </Link>

          <Link to="/expenses" style={{ textDecoration: "none" }}>
            {" "}
            <li>
              <LocalMallRoundedIcon className="dash-sidebaricon" />
              <span>Expenses</span>
            </li>
          </Link>
          {user.userRights !== 1 ? (
            <Link to="/edits" style={{ textDecoration: "none" }}>
              {" "}
              <li>
                <CreditCardIcon className="dash-sidebaricon" />
                <span>Edits</span>
              </li>
            </Link>
          ) : (
            ""
          )}
          {/* <Link to="/" style={{textDecoration:'none'}}> <li><InsertChartIcon className="dash-sidebaricon" /><span>Charts</span></li></Link>
          <Link to="/" style={{textDecoration:'none'}}> <li><SettingsSystemDaydreamOutlinedIcon className="dash-sidebaricon" /><span>Cloud</span></li></Link> */}
          <div className="user">
            {/* <Link to="/" style={{textDecoration:'none'}}> <li><SettingsApplicationsIcon className="dash-sidebaricon" /><span>Setting</span></li></Link> */}
            <Link to="/logout" style={{ textDecoration: "none" }}>
              {" "}
              <li onClick={hundleLogout}>
                <ExitToAppIcon className="dash-sidebaricon" />
                <span>Logout</span>
              </li>
            </Link>
          </div>
        </ul>
      </div>
      <div className="sidebarBottom">
        {/* <div className="dash-mode" onClick={() => dispatch({type:'LIGHT'})}></div>
      <div className="dash-mode" onClick={() => dispatch({type:'DARK'})}></div> */}
      </div>
    </div>
  );
};

export default Sidebar;
