import React from "react";
import ItemCard from "./ItemCard";

function DishItemContainer({
  search,
  isMainDish,
  isMainDishSearch,
  setToggleCartMenu,
  toggleCartMenu,
  Items,
  isItemActive,
}) {
  return (
    <div className="dishItemContainer">
      {search.trim().length != 0
        ? isMainDishSearch?.map((data) => (
            <ItemCard
              key={data._id}
              itemId={data._id}
              imgSrc={data.imgSrc}
              name={data.name}
              price={data.price}
              kg={data.kgs}
              capacity={data.capacity}
              items={Items}
            />
          ))
        : isMainDish?.length != 0
        ? isMainDish?.map((data) =>
            data.qty == 0 ? (
              ""
            ) : (
              <ItemCard
                key={data._id}
                itemId={data._id}
                imgSrc={data.imgSrc}
                name={data.name}
                price={data.price}
                kg={data.kgs}
                capacity={data.capacity}
                items={Items}
                setToggleCartMenu={setToggleCartMenu}
                toggleCartMenu={toggleCartMenu}
              />
            )
          )
        : Items?.filter((item) => item.itemId === isItemActive).map((data) =>
            data.qty == 0 ? (
              ""
            ) : (
              <ItemCard
                key={data._id}
                itemId={data._id}
                imgSrc={data.imgSrc}
                name={data.name}
                price={data.price}
                kg={data.kgs}
                capacity={data.capacity}
                items={Items}
                setToggleCartMenu={setToggleCartMenu}
                toggleCartMenu={toggleCartMenu}
              />
            )
          )}
    </div>
  );
}

export default DishItemContainer;
