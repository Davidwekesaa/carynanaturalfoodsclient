import React, { useContext } from "react";
import "./navbarstyle.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import FullscreenExitRoundedIcon from "@mui/icons-material/FullscreenExitRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import InboxRoundedIcon from "@mui/icons-material/InboxRounded";
// import { DarkModeContext } from "../../context/darkModeContext";
import { useStateValue } from "../../../../store/StateProvider";

const Navbar = () => {
  // const {dispatch}=useContext(DarkModeContext)
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="dash-navbar">
      <div className="dash-navbarwrapper">
        {/* <div className="dash-search">
          <input
            className="dash-search-input"
            type="text"
            placeholder="Search here.."
          />
          <SearchRoundedIcon className="dash-navbaricon dash-searchicon" />
        </div> */}
        <div className="dash-items">
          {/* <div className="dash-item dash-removebg">
            <LanguageRoundedIcon className="dash-navbaricon" />
            <span className="dash-language"> English(US)</span>
          </div> */}
          {/* <div className="dash-item">
            <DarkModeRoundedIcon className="dash-navbaricon" onClick={() => dispatch({type:'TOGGLE'})}/>
          </div> */}

          {/* <div className="dash-item">
            <NotificationsRoundedIcon className="dash-navbaricon" />
            <span className="dash-inboxmsg">+1</span>
          </div>
          <div className="dash-item">
            <InboxRoundedIcon className="dash-navbaricon" />
            <span className="dash-inboxmsg">+5</span>
          </div>

          <div className="dash-item">
            <FullscreenExitRoundedIcon className="dash-navbaricon" />
          </div> */}

          {/* <div className="dash-item dash-logo-item dash-removebg">
            <img className="dash-avatar" src={user.profile} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
