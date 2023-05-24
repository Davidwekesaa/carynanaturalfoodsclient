import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import Header from "./Header";
import MenuContainer from "./MenuContainer";
import HomeIcon from "@mui/icons-material/Home";
import BannerName from "./BannerName";
import delivery from "../assets/delivery.png";
import droplet1 from "../assets/droplet1.png";
import droplet12 from "../assets/droplet12.png";
import droplet13 from "../assets/droplet12.png";
import SubMenuContainer from "./SubMenuContainer";
import MenuCard from "./MenuCard";
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
import { carrt } from "./Functions";

import SubMenuContainerCart from "./SubMenuContainerCart";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LanguageIcon from "@mui/icons-material/Language";
import Sliderr from "./Sliderr";
import Footer from "./Footer";
import RowContainer from "./RowContainer";
import DishItemContainer from "./DishItemContainer";

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

  //recepient name
  const [recepientName, setRecepientName] = useState("");
  const [recepientTrue, setRecepientTrue] = useState(false);

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
    const cuti = Counties.find(
      (item) =>
        item?.name?.toString().toLowerCase() ===
        counties?.toString().toLowerCase()
    );
    setSelectCode(cuti ? cuti?.code : null);
    console.log(selectCode);
  }, [counties]);

  //sub-County
  useEffect(() => {
    const cuti = selectCode?.toString().toLowerCase();
    const gb = subCounties.filter(
      (item) => item.code.toString().toLowerCase() === cuti
    );
    setSSbCounty(gb ? gb : subCounties);
    console.log(sSbCounty);
  }, [selectCode]);

  //set main dish on filter

  const setFilterData = (itemid, e) => {
    e.preventDefault();
    const poppo = Items.filter(
      (item) => item.itemId === itemid && item.qty != 0
    );
    if (poppo.length != 0) {
      setIsMainDish(poppo);
    } else {
      setIsMainDish([]);
    }
  };
  function handleDelivery(event) {
    event.preventDefault();
    if (event.target.value.toLowerCase() === "kiambu") {
      setDeliveryFee("200");
      setCounties(event.target.value);
    } else if (event.target.value.toLowerCase() === "nairobi") {
      setDeliveryFee("300");
      setCounties(event.target.value);
    } else if (event.target.value.toLowerCase() === "pick from shop") {
      setDeliveryFee("0");
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

  const transactionProcessed = () =>
    toast.success(`Please wait as we process your payment.`);

  const transactionProcessedSuccess = () =>
    toast.success(`payment processed successfuly .`);

  const payMentError = () => toast.error("Payment process error");
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
        const amount = parseInt(total);
        let addrss = `${counties}/${subCountiese}/${location}`;
        let userData = {
          userName: user.userName,
          userEmail: user.userEmail,
          phone: phone,
          address: addrss,
          cart: cart,
          total: amount,
          delivery: parseInt(deliveryFee),
          profile: user.profile,
          payment: mpesa,
          OrderFor:
            recepientName.toString().trim().length === 0
              ? "none"
              : recepientName,
        };
        setCheckDisble(true);

        if (mpesa.toString().toLowerCase() === "mpesa") {
          transactionProcessed();
          await axios
            .post(`${process.env.REACT_APP_Server_Url}mpesa/`, userData)
            .then((crt) => {
              console.log(crt?.data);
              if (crt?.data === 0) {
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
                carrt.splice(0, carrt.length);
                transactionProcessedSuccess();
              } else {
                setCheckDisble(false);
                payMentError();
              }
            })
            .catch((error) => {
              setCheckDisble(false);
              orderError();
            });
        } else {
          await axios
            .post(`${process.env.REACT_APP_Server_Url}Orders/`, userData)
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
              carrt.splice(0, carrt.length);
            })
            .catch((error) => {
              setCheckDisble(false);
              orderError();
            });
        }
      }
    }
  };

  const handleSubCounty = (event) => {
    event.preventDefault();
    if (event.target.value.toLowerCase() === "kabete") {
      setDeliveryFee("100");
      setSubCountiese(event.target.value);
    } else {
      setSubCountiese(event.target.value);
    }
  };

  if (
    Items.length === 0 ||
    menuItems.length === 0 ||
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
            <Sliderr />
            <Footer />

            <div className="dishContainer progress">
              <CircularProgress className="circularProgress" />
            </div>

            <div className={`rightContainer ${toggleCartMenu ? "active" : ""}`}>
              <div className="debitCardContainer">
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
                    {Counties?.map((data) => (
                      <option key={data.id} value={data.name} name={data.name}>
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
                    {subCounties?.map((data) => (
                      <option key={data.id} value={data.name}>
                        {data.name}
                      </option>
                    ))}
                  </datalist>
                </form>

                <form className="form-select">
                  <label htmlFor="locations">Location:</label>

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
                        <label htmlFor="cash">On delivery</label>
                        <input
                          type="radio"
                          id="cash"
                          name="payment"
                          value="cash"
                          onChange={(e) => setMpesa(e.target.value)}
                        />
                      </div>

                      <div className="checkboxCash">
                        <label htmlFor="mpesa">Before delivery</label>
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
                <p> Check Out</p>
              </button>
            </div>
          </div>
        </main>
        {/* Bottom container */}
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
            <Sliderr />
          </div>
          <Footer />
          <div className="dishContainer">
            <div className="menuCard">
              <SubMenuContainer name={"Menu category"} />
            </div>
            <RowContainer menuItems={menuItems} setFilterData={setFilterData} />
            <DishItemContainer
              search={search}
              isMainDishSearch={isMainDishSearch}
              isMainDish={isMainDish}
              setToggleCartMenu={setToggleCartMenu}
              toggleCartMenu={toggleCartMenu}
              Items={Items}
              isItemActive={isItemActive}
            />
          </div>

          <div className={`rightContainer ${toggleCartMenu ? "active" : ""}`}>
            <div className="debitCardContainer">
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
                  onChange={handleSubCounty}
                  value={subCountiese}
                />
                <datalist id="sub-county">
                  {sSbCounty
                    ? sSbCounty?.map((data, index) => (
                        <option key={index} value={data.name}>
                          {data.name}
                        </option>
                      ))
                    : subCounties?.map((data, index) => (
                        <option key={index} value={data.name}>
                          {data.name}
                        </option>
                      ))}
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
                <p>{`Pay with mpesa (Till: 5412199)`}</p>
                <div className="checkboxes">
                  <form className="paywith-wat">
                    <div className="checkboxCash">
                      <label htmlFor="cash">{`On delivery`}</label>
                      <input
                        type="radio"
                        id="cash"
                        name="payment"
                        value="cash"
                        onChange={(e) => setMpesa(e.target.value)}
                      />
                    </div>

                    <div className="checkboxCash">
                      <label htmlFor="mpesa">{`Before delivery`}</label>
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
                <div className="checkboxes">
                  <form className="paywith-wat">
                    <div className="checkboxCash">
                      <label htmlFor="order">Order For</label>
                      <input
                        type="radio"
                        id="order"
                        onChange={(e) => setRecepientTrue(!recepientTrue)}
                        checked={recepientTrue}
                      />
                    </div>
                  </form>
                  <div
                    className={`inputBox ${
                      recepientTrue ? "recept-disp" : "recept"
                    } `}
                  >
                    <input
                      type="text"
                      placeholder=" recipient name"
                      onChange={(e) => setRecepientName(e.target.value)}
                      value={recepientName}
                    />
                  </div>
                </div>
                <div className={`inputBox `}>
                  <input
                    type="number"
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
        {/* <img src={droplet1} alt="" className="droplet droplet1" />
          <img src={droplet12} alt="" className="droplet droplet12" />
          <img src={droplet13} alt="" className="droplet droplet13" /> */}
      </main>
      {/* Bottom container */}
      {/* <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={"#"} icon={<HomeIcon />} isHome />
          <MenuContainer link={"#"} icon={<HomeIcon />} isHome />
          <div className="indicator"></div>
        </ul>
      </div> */}

      <ToastContainer />
    </div>
  );
}

export default Frontend;
