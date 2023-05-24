import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useStateValue } from "../store/StateProvider";
import { actionType } from "../store/reducer";
import { ToastContainer, toast } from "react-toastify";
import { carrt } from "./Functions";
// const cart = [];
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
  const [isCart, setIsCart] = useState(null);
  const [{}, dispatch] = useStateValue();

  const alreadyInCart = () => toast.success("Item added to cart successfuly");

  useEffect(() => {
    if (isCart) {
      carrt.push(isCart);
      console.log(carrt);
      localStorage.setItem("cart", JSON.stringify(carrt));
      dispatch({
        type: actionType.SET_CART,
        cart: carrt,
      });
    }
  }, [isCart]);

  const checkIsItemInCart = (e, ids) => {
    e.preventDefault();
    // const itCart = cart !=null? cart.filter((item) => item.id === ids) : [];
    // console.log(itCart?.length);
    // if (itCart?.length !== 0) {
    //   alreadyInCart();

    // } else {
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
    alreadyInCart();
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
