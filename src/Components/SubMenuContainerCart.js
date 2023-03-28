import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
function SubMenuContainerCart({ name, setToggleCartMenu, toggleCartMenu }) {
  return (
    <div className="subMenuContainer">
      <h3>{name}</h3>
      <div
        className="viewAll"
        onClick={(e) => setToggleCartMenu(!toggleCartMenu)}
      >
        <p>Back</p>
        <i>
          <ChevronRightIcon />
        </i>
      </div>
    </div>
  );
}

export default SubMenuContainerCart;
