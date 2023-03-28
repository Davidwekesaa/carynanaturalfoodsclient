import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
//   Switch,
// } from "react-router-dom";

import { useNavigate } from "react-router-dom";
// import { Switch, Route,useNavigate } from 'react-router';
import "../App.css";
import Header from "./Header";
import MenuContainer from "./MenuContainer";
import HomeIcon from "@mui/icons-material/Home";
// import ChatIcon from "@mui/icons-material/Chat";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import SettingsIcon from "@mui/icons-material/Settings";
import BannerName from "./BannerName";
import delivery from "../assets/delivery.png";
// import honey from "./assets/honey.png";
import SubMenuContainer from "./SubMenuContainer";
import MenuCard from "./MenuCard";
// import { menuItems, Items } from "./Components/Data";
import ItemCard from "./ItemCard";
import DebitCard from "./DebitCard";
import CartItem from "./CartItem";
import { useStateValue } from "../store/StateProvider";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { subCounties, locations, Counties } from "../Data";
import { actionType } from "../store/reducer";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import SubMenuContainerCart from "./SubMenuContainerCart";

const divStyle = {
  width: "100%",
  /* height: 130px; */
  borderRadius: "10px",
  /* background: url("./assets/honey-g6.jpg") no-repeat center; */
  backgroundSize: "cover",
  position: "relative",
  display: "flex",
  aligntems: "center",
  padding: "0px 10px",
};

const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 1",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Slide 2",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Slide 3",
  },
];

function Frontend({ isItemActivee }) {
  const [
    { cart, total, user, county, subCounty, locationn, phonee, deliveryfee },
    dispatch,
  ] = useStateValue();
  //products
  const [Items, setItems] = useState([]);
  const [menuItems, setmenuItems] = useState([]);
  // set main dish
  const [isItemActive, setisItemActive] = useState("");
  const [search, setSearch] = useState("");
  const [isMainDish, setIsMainDish] = useState([]);
  const [isMainDishSearch, setIsMainDishSearch] = useState([]);
  const [toggleCartMenu, setToggleCartMenu] = useState(false);
  const [checkDisable, setCheckDisble] = useState(false);

  const [mpesa, setMpesa] = useState("");
  // delivery fee
  const [deliveryFee, setDeliveryFee] = useState(deliveryfee);
  //address
  const [counties, setCounties] = useState(county);

  const [subCountiese, setSubCountiese] = useState(subCounty);
  const [location, setLocation] = useState(locationn);
  const [phone, setPhone] = useState(phonee);
  const [openEdit, setOpenEdit] = useState("");

  const [selectCode, setSelectCode] = useState([]);
  const [sSbCounty, setSSbCounty] = useState([]);
  const navigate = useNavigate();

  //get all products
  useEffect(() => {
    //get all products
    const getAllProducts = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Product/`)
        .then((product) => {
          setItems(product.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    //get category
    const getAllCategory = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Category/`)
        .then((category) => {
          getAllProducts();
          // setItems(product.data);
          setmenuItems(category.data);
          setisItemActive(category.data[0]._id);
          setIsMainDish(
            Items?.filter(
              (item) => item.itemId == category.data[0]._id && item.qty != 0
            )
          );
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getAbout = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}about/`)
        .then((user) => {
          setOpenEdit(user.data.length != 0 ? user.data[0].About : "");
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getAllCategory();
    getAbout();
  }, []);

  useEffect(() => {
    const menuLi = document.querySelectorAll("#menu li");

    function setMenuActive() {
      menuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    // menu selectors
    const menuCards = document
      .querySelector(".dishContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuItemActive() {
      menuCards.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuCards.forEach((n) => n.addEventListener("click", setMenuItemActive));

    //right container
  }, [isMainDish]);

  //serch
  useEffect(() => {
    console.log(search);
    setIsMainDishSearch(
      Items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  //selected county
  useEffect(() => {
    const cuti = counties.toString().toLowerCase();
    setSelectCode(
      Counties.filter((item) => item.name.toString().toLowerCase() === cuti)
    );
    console.log(selectCode[0]?.code);
  }, [counties]);

  //sub-County
  useEffect(() => {
    const cuti = selectCode[0]?.code.toString().toLowerCase();
    setSSbCounty(
      subCounties.filter((item) => item.code.toString().toLowerCase() === cuti)
    );
    console.log(sSbCounty);
  }, [selectCode[0]?.code]);

  //set main dish on filter
  const setFilterData = (itemid, e) => {
    e.preventDefault();
    setIsMainDish(
      Items.filter((item) => item.itemId === itemid && item.qty != 0)
    );
  };
  //set delivery
  // useEffect(() => {
  //   if (counties.toLowerCase() === "kiambu") {
  //     setDeliveryFee("100");
  //     // setCounties(event.target.value);
  //   } else if (counties.toLowerCase() === "nairobi") {
  //     setDeliveryFee("150");
  //     // setCounties(event.target.value);
  //   } else {
  //     setDeliveryFee("350");
  //     // setCounties(event.target.value);
  //   }
  // }, [counties]);

  function handleDelivery(event) {
    event.preventDefault();
    if (event.target.value.toLowerCase() === "kiambu") {
      setDeliveryFee("100");
      setCounties(event.target.value);
    } else if (event.target.value.toLowerCase() === "nairobi") {
      setDeliveryFee("150");
      setCounties(event.target.value);
    } else {
      setDeliveryFee("350");
      setCounties(event.target.value);
    }
  }

  const orderSuccess = () =>
    toast.success(
      `Thanks for your oder ${user.userName}! Your order will be delivered in the next 24hrs. Enjoy its natural taste.`
    );
  const orderError = () => toast.error("Error during checkout");
  const emptyFiled = () => toast.error("All checkout fields are required");

  const checkOut = async (e) => {
    e.preventDefault();
    if (
      subCountiese.trim().length === 0 ||
      location.trim().length === 0 ||
      phone.trim().length === 0 ||
      mpesa.trim().length === 0
    ) {
      emptyFiled();
    } else {
      if (user === null || user.length == 0) {
        localStorage.setItem("county", counties);
        dispatch({
          type: actionType.SET_COUNTY,
          county: counties,
        });
        localStorage.setItem("subCounty", subCountiese);
        dispatch({
          type: actionType.SET_SUBCOUNTY,
          subCounty: subCountiese,
        });
        localStorage.setItem("location", location);
        dispatch({
          type: actionType.SET_LOCATION,
          locationn: location,
        });
        localStorage.setItem("phone", phone);
        dispatch({
          type: actionType.SET_PHONE,
          phonee: phone,
        });

        localStorage.setItem("fee", deliveryFee);
        dispatch({
          type: actionType.SET_DELIVERY,
          deliveryfee: deliveryFee,
        });

        navigate("/login");
      } else {
        const amount = parseInt(total) + parseInt(deliveryFee);
        let addrss = `${counties}/${subCountiese}/${location}`;
        setCheckDisble(true);

        await axios
          .post(`${process.env.REACT_APP_Server_Url}Orders/`, {
            userName: user.userName,
            userEmail: user.userEmail,
            phone: phone,
            address: addrss,
            cart: cart,
            total: amount,
            profile: user.profile,
            payment: mpesa,
          })
          .then((crt) => {
            console.log(crt);
            orderSuccess();
            localStorage.setItem("county", "");
            dispatch({
              type: actionType.SET_COUNTY,
              county: "",
            });
            localStorage.setItem("subCounty", "");
            dispatch({
              type: actionType.SET_SUBCOUNTY,
              subCounty: "",
            });
            localStorage.setItem("location", "");
            dispatch({
              type: actionType.SET_LOCATION,
              locationn: "",
            });
            localStorage.setItem("phone", "");
            dispatch({
              type: actionType.SET_PHONE,
              phonee: "",
            });

            localStorage.setItem("fee", "");
            dispatch({
              type: actionType.SET_DELIVERY,
              deliveryfee: "",
            });

            localStorage.setItem("cart", null);
            dispatch({
              type: actionType.SET_CART,
              cart: null,
            });

            setDeliveryFee("");
            setCounties("");
            setLocation("");
            setSubCountiese("");
            setPhone("");

            setToggleCartMenu(!toggleCartMenu);
          })
          .catch((error) => {
            console.log(error);
            orderError();
          });
      }
    }

    // orderSuccess();
  };

  if (
    Items.length === 0 ||
    menuItems.length === 0 ||
    // isMainDish.length === 0 ||
    isItemActive.trim().length === 0
  ) {
    return (
      <div className="App">
        {/* hearder container */}
        <Header
          setToggleCartMenu={setToggleCartMenu}
          toggleCartMenu={toggleCartMenu}
        />
        {/* main container */}
        <main>
          <div className="mainContainer">
            {/* Banner */}
            <div className="Banner">
              <BannerName name={""} bannername={openEdit} />
              <img src={delivery} alt="delivery" className="delivery" />
            </div>
            {/* dishContainer */}

            <div className="dishContainer progress">
              <CircularProgress className="circularProgress" />
            </div>

            <div className={`rightContainer ${toggleCartMenu ? "active" : ""}`}>
              <div className="debitCardContainer">
                {/* <div className="debitCard">
                <DebitCard />
                <DebitCard />
              </div> */}
                <form className="form-select">
                  <label htmlFor="Countriess">County:</label>
                  {/* <select
                  name="Countries"
                  id="Countries"
                  className="custome-select"
                  onChange={handleDelivery}
                  value={counties}
                >
                  {Counties?.map((data) => (
                    <option key={data.id} value={data.name} name={data.name}>
                      {data.name}
                    </option>
                  ))}
                </select> */}

                  <input
                    name="Countries"
                    id="Countriess"
                    list="Countries"
                    className="custome-select"
                    onChange={handleDelivery}
                    value={counties}
                  />
                  <datalist id="Countries">
                    {Counties?.map((data) => (
                      <option key={data.id} value={data.name} name={data.name}>
                        {data.name}
                      </option>
                    ))}
                  </datalist>
                </form>

                <form className="form-select">
                  <label htmlFor="sub-countyy">Sub County:</label>
                  {/* <select
                  name="sub-county"
                  id="sub-county"
                  className="custome-select"
                  onChange={(e) => setSubCountiese(e.target.value)}
                  value={subCountiese}
                >
                  {subCounties?.map((data) => (
                    <option key={data.id} value={data.name}>
                      {data.name}
                    </option>
                  ))}
                </select> */}

                  <input
                    list="sub-county"
                    id="sub-countyy"
                    className="custome-select"
                    onChange={(e) => setSubCountiese(e.target.value)}
                    value={subCountiese}
                  />
                  <datalist id="sub-county">
                    {subCounties?.map((data) => (
                      <option key={data.id} value={data.name}>
                        {data.name}
                      </option>
                    ))}
                  </datalist>
                </form>

                <form className="form-select">
                  <label htmlFor="locations">Location:</label>
                  {/* <select
                  name="location"
                  id="location"
                  className="custome-select"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                >
                  {locations?.map((data) => (
                    <option key={data.id} value={data.name}>
                      {data.name}
                    </option>
                  ))}
                </select> */}

                  <input
                    name="location"
                    id="locations"
                    list="location"
                    className="custome-select"
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                  />
                  <datalist id="location">
                    {locations?.map((data) => (
                      <option key={data.id} value={data.name}>
                        {data.name}
                      </option>
                    ))}
                  </datalist>
                </form>
              </div>

              <div className="cartCheckOutContainer">
                <SubMenuContainer name={"Cart Items"} />
                <div className="cartContainer">
                  <div className="cartItems">
                    {cart &&
                      cart.map((data) => (
                        <CartItem
                          key={data.id}
                          name={data.name}
                          imgSrc={data.imgSrc}
                          itemQty={data.qty}
                          price={data.price}
                          itemId={data.id}
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div className="totalSection">
                <div className="total">
                  <h3>Cart Total</h3>
                  <p>
                    <span>Ksh </span>
                    {cart && total ? total : 0}
                  </p>
                </div>
                <div className="total">
                  <h3>Delivery Fee</h3>
                  <p>
                    <span>Ksh </span>
                    {deliveryFee ? deliveryFee : 0}
                  </p>
                </div>
                <div className="total">
                  <h3>Total cost</h3>
                  <p>
                    <span>Ksh </span>
                    {deliveryFee ? parseInt(deliveryFee) + parseInt(total) : 0}
                  </p>
                </div>
                <div className="total check">
                  <p>Pay On Delivery With</p>
                  <div className="checkboxes">
                    <form className="paywith-wat">
                      <div className="checkboxCash">
                        <label htmlFor="cash">Cash</label>
                        <input
                          type="radio"
                          id="cash"
                          name="payment"
                          value="cash"
                          onChange={(e) => setMpesa(e.target.value)}
                        />
                      </div>

                      <div className="checkboxCash">
                        <label htmlFor="mpesa">Mpesa</label>
                        <input
                          type="radio"
                          id="mpesa"
                          name="payment"
                          value="mpesa"
                          onChange={(e) => setMpesa(e.target.value)}
                        />
                      </div>
                    </form>
                  </div>
                  <div className={`inputBox `}>
                    {/* ${
                              mpesa && mpesa === "cash" ? "cashh" : "mpesaa"
                            } */}
                    <input
                      type="text"
                      placeholder="Enter Phone Number"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
              </div>
              <button
                className="checkOut"
                onClick={checkOut}
                disabled={
                  cart === null || cart.length == 0 || checkDisable
                    ? true
                    : false
                }
              >
                {/* onClick={checkOut} */}
                <p> Check Out</p>
              </button>
            </div>
          </div>
        </main>
        {/* Bottom container */}
        {/* <div className="bottomMenu">
          <ul id="menu">
           
            <MenuContainer link={"#"} icon={<HomeIcon/>} isHome />
            
            <div className="indicator"></div>
          </ul>
        </div> */}
      </div>
    );
  }

  return (
    <div>
      <Header
        setToggleCartMenu={setToggleCartMenu}
        toggleCartMenu={toggleCartMenu}
        serch={setSearch}
      />
      {/* main container */}
      <main>
        <div className="mainContainer">
          {/* Banner */}
          <div>
            <Slide>
              {slideImages.map((slideImage, index) => (
                <div
                  className="Banner"
                  style={{
                    ...divStyle,
                    backgroundImage: `url(${slideImage.url})`,
                  }}
                  key={index}
                >
                  <BannerName
                    name={user === null ? "" : user.userName}
                    bannername={openEdit}
                  />
                  <img src={delivery} alt="delivery" className="delivery" />
                </div>
              ))}
            </Slide>
          </div>
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu category"} />
            </div>
            <div className="rowContainer">
              {menuItems &&
                menuItems.map((data) => (
                  <div
                    key={data._id}
                    onClick={(e) => setFilterData(data._id, e)}
                  >
                    <MenuCard
                      // imgSrc={data.imgSrc}
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={menuItems.indexOf(data)}
                    />
                  </div>
                ))}
            </div>
            <div className="dishItemContainer">
              {isMainDish.length != 0
                ? isMainDish.map((data) =>
                    // <ItemCard
                    //   key={data._id}
                    //   itemId={data._id}
                    //   imgSrc={data.imgSrc}
                    //   name={data.name}
                    //   price={data.price}
                    //   kg={data.kgs}
                    //   capacity={data.capacity}
                    //   items={Items}
                    // />

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
                : // search.trim().length != 0
                  // ? isMainDishSearch?.map((data) => (
                  //     <ItemCard
                  //       key={data._id}
                  //       itemId={data._id}
                  //       imgSrc={data.imgSrc}
                  //       name={data.name}
                  //       price={data.price}
                  //       kg={data.kgs}
                  //       capacity={data.capacity}
                  //       items={Items}
                  //     />
                  //   ))
                  // :

                  Items?.filter((item) => item.itemId === isItemActive).map(
                    (data) =>
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
          </div>

          <div className={`rightContainer ${toggleCartMenu ? "active" : ""}`}>
            <div className="debitCardContainer">
              {/* <div className="debitCard">
                <DebitCard />
                <DebitCard />
              </div> */}
              <form className="form-select">
                <label htmlFor="Countriess">County:</label>
                <input
                  name="Countries"
                  id="Countriess"
                  list="Countries"
                  className="custome-select"
                  onChange={handleDelivery}
                  value={counties}
                />
                <datalist id="Countries">
                  {Counties?.map((data, index) => (
                    <option key={index} value={data.name} name={data.name}>
                      {data.name}
                    </option>
                  ))}
                </datalist>
              </form>

              <form className="form-select">
                <label htmlFor="sub-countyy">Sub County:</label>
                <input
                  list="sub-county"
                  id="sub-countyy"
                  className="custome-select"
                  onChange={(e) => setSubCountiese(e.target.value)}
                  value={subCountiese}
                />
                <datalist id="sub-county">
                  {
                    // sSbCounty?.length != 0 ?
                    // sSbCounty?.map((data, index) => (
                    //   <option key={index} value={data.name}>
                    //     {data.name}
                    //   </option>
                    // ))
                    // :

                    subCounties?.map((data, index) => (
                      <option key={index} value={data.name}>
                        {data.name}
                      </option>
                    ))
                  }
                </datalist>
              </form>

              <form className="form-select f-last">
                <label htmlFor="locations">Location:</label>
                <input
                  name="location"
                  id="locations"
                  // list="location"
                  className="custome-select"
                  onChange={(e) => setLocation(e.target.value)}
                  value={location}
                />
                {/* <datalist id="location">
                  {locations?.map((data, index) => (
                    <option key={index} value={data.name}>
                      {data.name}
                    </option>
                  ))}
                </datalist> */}
              </form>
            </div>

            <div className="cartCheckOutContainer">
              <SubMenuContainerCart
                name={"Cart Items"}
                setToggleCartMenu={setToggleCartMenu}
                toggleCartMenu={toggleCartMenu}
              />
              <div className="cartContainer">
                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        itemQty={data.qty}
                        price={data.price}
                        itemId={data.id}
                      />
                    ))}
                </div>
              </div>
            </div>
            <div className="totalSection">
              <div className="total">
                <h3>Cart Total</h3>
                <p>
                  <span>Ksh </span>
                  {cart && total ? total : 0}
                </p>
              </div>
              <div className="total">
                <h3>Delivery Fee</h3>
                <p>
                  <span>Ksh </span>
                  {deliveryFee ? deliveryFee : 0}
                </p>
              </div>
              <div className="total">
                <h3>Total cost</h3>
                <p>
                  <span>Ksh </span>
                  {deliveryFee ? parseInt(deliveryFee) + parseInt(total) : 0}
                </p>
              </div>
              <div className="total check">
                <p>Pay On Delivery With</p>
                <div className="checkboxes">
                  <form className="paywith-wat">
                    <div className="checkboxCash">
                      <label htmlFor="cash">Cash</label>
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        onChange={(e) => setMpesa(e.target.value)}
                      />
                    </div>

                    <div className="checkboxCash">
                      <label htmlFor="mpesa">Mpesa</label>
                      <input
                        type="radio"
                        id="mpesa"
                        name="payment"
                        value="mpesa"
                        onChange={(e) => setMpesa(e.target.value)}
                      />
                    </div>
                  </form>
                </div>
                <div className={`inputBox `}>
                  {/* ${
                              mpesa && mpesa === "cash" ? "cashh" : "mpesaa"
                            } */}
                  <input
                    type="text"
                    placeholder="Enter Phone Number"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                </div>
              </div>
            </div>
            <button
              className="checkOut"
              onClick={checkOut}
              disabled={
                cart === null || cart.length == 0 || checkDisable ? true : false
              }
            >
              {/* onClick={checkOut} */}
              <p> Check Out</p>
            </button>
          </div>
        </div>
      </main>
      {/* Bottom container */}
      {/* <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeIcon />} isHome />
          <div className="indicator"></div>
        </ul>
      </div> */}
      <ToastContainer />
    </div>
  );
}

export default Frontend;
