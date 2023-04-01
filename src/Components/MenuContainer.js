import React from "react";

function MenuContainer({ link, icon, isHome }) {
  return (
    <li className={isHome ? "active" : ""}>
      <a href={link} target="_blank">
        <span className="icon">{icon}</span>
      </a>
    </li>
  );
}

export default MenuContainer;
