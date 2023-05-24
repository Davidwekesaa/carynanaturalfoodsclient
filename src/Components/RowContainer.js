import React from "react";
import MenuCard from "./MenuCard";

function RowContainer({ menuItems, setFilterData }) {
  return (
    <div className="rowContainer">
      {menuItems &&
        menuItems?.map((data) => (
          <div key={data._id} onClick={(e) => setFilterData(data._id, e)}>
            <MenuCard
              // imgSrc={data.imgSrc}
              imgSrc={data.imgSrc}
              name={data.name}
              isActive={menuItems.indexOf(data)}
            />
          </div>
        ))}
    </div>
  );
}

export default RowContainer;
