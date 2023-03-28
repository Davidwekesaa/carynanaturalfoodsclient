import React from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
function SubMenuContainerCart({ name, setToggleCartMenu, toggleCartMenu }) {
  return (
    <div className="subMenuContainer">
      <h3>{name}</h3>
      <div
        className="viewAll"
        onClick={(e) => setToggleCartMenu(!toggleCartMenu)}
      >
        <i>
          <ChevronLeftIcon />
        </i>
        <p>Back</p>
      </div>
    </div>
  );
}

export default SubMenuContainerCart;
