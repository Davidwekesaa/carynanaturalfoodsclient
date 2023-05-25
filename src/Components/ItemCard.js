import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../store/StateProvider";
import { actionType } from "../store/reducer";
import { ToastContainer, toast } from "react-toastify";
import { addItemToCart, carrt } from "./Functions";
function ItemCard({
  imgSrc,
  name,
  price,
  capacity,
  kg,
  itemId,
  items,
  setToggleCartMenu,
  toggleCartMenu,
}) {
  const [{ cart }, dispatch] = useStateValue();
  const [isCart, setIsCart] = useState(null);
  const alreadyInCart = (p) => toast.success(p, { autoClose: 500 });

  useEffect(() => {
    if (isCart) {
      addItemToCart(cart, carrt, isCart, dispatch, actionType, alreadyInCart);
    }
  }, [isCart]);

  const checkIsItemInCart = (e, ids) => {
    e.preventDefault();
    setIsCart({
      id: itemId,
      name: name,
      imgSrc: imgSrc,
      price: price,
      total: price,
      capacity: capacity,
      kgs: kg,
      qty: 1,
    });

    setToggleCartMenu(!toggleCartMenu);
  };

  return (
    <div
      className="itemCard mbl"
      id={itemId}
      onClick={
        // (e) =>
        // setIsCart({
        //   id: itemId,
        //   name: name,
        //   imgSrc: imgSrc,
        //   price: price,
        //   total: price,
        //   capacity: capacity,
        //   kgs: kg,
        //   qty: 1,
        // })
        checkIsItemInCart
      }
    >
      <div className="imgBox mblImageBox">
        <img src={imgSrc} alt="" className="itemImage" />
      </div>
      <div className="itemContent">
        <h3 className="itemName">{name}</h3>
        <div className="bottom">
          <div className="pricediv">
            <h4>
              {kg}
              <span> {capacity}</span>
            </h4>
            <h3 className="price">
              <span>Ksh </span>
              <p> {price}</p>
            </h3>
          </div>
          <i
            className="addToCart"
            // onClick={() => setIsCart(items.find((n) => n.id === itemId))}
            onClick={
              // (e) =>
              // setIsCart({
              //   id: itemId,
              //   name: name,
              //   imgSrc: imgSrc,
              //   price: price,
              //   total: price,
              //   capacity: capacity,
              //   kgs: kg,
              //   qty: 1,
              // })

              checkIsItemInCart
            }
          >
            <AddIcon />
          </i>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
