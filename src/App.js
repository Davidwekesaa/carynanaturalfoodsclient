import { useEffect, useState } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
//   Switch,
// } from "react-router-dom";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  // useHistory
} from "react-router-dom";
// import { Switch, Route,useNavigate } from 'react-router';
// import "./App.css";
// import Header from "./Components/Header";
// import MenuContainer from "./Components/MenuContainer";
// import HomeIcon from "@mui/icons-material/Home";
// import ChatIcon from "@mui/icons-material/Chat";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import SettingsIcon from "@mui/icons-material/Settings";
// import BannerName from "./Components/BannerName";
// import delivery from "./assets/delivery.png";
// import honey from "./assets/honey.png";
// import SubMenuContainer from "./Components/SubMenuContainer";
// import MenuCard from "./Components/MenuCard";
// import { menuItems, Items } from "./Components/Data";
// import ItemCard from "./Components/ItemCard";
// import DebitCard from "./Components/DebitCard";
// import CartItem from "./Components/CartItem";
import { useStateValue } from "./store/StateProvider";
import axios from "axios";
// import CircularProgress from "@mui/material/CircularProgress";
// import { subCounties, locations, Counties } from "./Data";
// import { actionType } from "./store/reducer";

// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";
import List from "./Components/dashboard/pages/list/List";
import ProductList from "./Components/dashboard/pages/list/ProductList";
import Expenses from "./Components/dashboard/pages/list/Expenses";
import Single from "./Components/dashboard/pages/single/Single";
// import New from "./Components/dashboard/pages/new/New";
import Home from "./Components/dashboard/pages/home/Home";
import DashboardLogin from "./Components/dashboard/pages/login/DashboardLogin";
import Frontend from "./Components/Frontend";

function App() {
  //products
  // const [Items, setItems] = useState([]);
  // const [menuItems, setmenuItems] = useState([]);
  // // set main dish
  const [isItemActive, setisItemActive] = useState("");
  // const [search, setSearch] = useState("");
  // const [isMainDish, setIsMainDish] = useState([]);
  // const [toggleCartMenu, setToggleCartMenu] = useState(false);

  // const [mpesa, setMpesa] = useState("");
  // // delivery fee
  // const [deliveryFee, setDeliveryFee] = useState("");
  // //address
  // const [counties, setCounties] = useState("");
  // const [subCountiese, setSubCountiese] = useState("");
  // const [location, setLocation] = useState("");
  // const [phone, setPhone] = useState("");

  const [{ cart, total, user }, dispatch] = useStateValue();
  // const navigate = useNavigate();
  // const history = useHistory();

  //get all products
  useEffect(() => {
  //   //get all products
    // const getAllProducts = async () => {
    //   await axios
    //     .get(`${process.env.REACT_APP_Server_Url}Product/`)
    //     .then((product) => {
    //       setItems(product.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
  //get category
    const getAllCategory = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Category/`)
        .then((category) => {
          // getAllProducts();
          // // setItems(product.data);
          // setmenuItems(category.data);
          setisItemActive(category.data[0]._id);
          // setIsMainDish(Items?.filter((item) => item.itemId == category.data[0]._id));
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getAllCategory();
  }, []);

  // useEffect(() => {
  //   const menuLi = document.querySelectorAll("#menu li");

  //   function setMenuActive() {
  //     menuLi.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

  //   // menu selectors
  //   const menuCards = document
  //     .querySelector(".dishContainer")
  //     .querySelectorAll(".rowMenuCard");

  //   function setMenuItemActive() {
  //     menuCards.forEach((n) => n.classList.remove("active"));
  //     this.classList.add("active");
  //   }

  //   menuCards.forEach((n) => n.addEventListener("click", setMenuItemActive));

  //   //right container
  // }, [isMainDish]);

  //serch
  // useEffect(() => {
  //   console.log(search);
  //   setIsMainDish(
  //     Items.filter((item) => item.name.toLowerCase() == search.toLowerCase())
  //   );
  // }, [search]);

  //set main dish on filter
  // const setFilterData = (itemid, e) => {
  //   e.preventDefault();
  //   setIsMainDish(Items.filter((item) => item.itemId === itemid));
  // };
  // //set delivery
  // function handleDelivery(event) {
  //   event.preventDefault();
  //   if (event.target.value.toLowerCase() === "kiambu") {
  //     setDeliveryFee("100");
  //     setCounties(event.target.value);
  //   } else if (event.target.value.toLowerCase() === "nairobi") {
  //     setDeliveryFee("150");
  //     setCounties(event.target.value);
  //   } else {
  //     setDeliveryFee("350");
  //     setCounties(event.target.value);
  //   }
  // }
  // const handlePaymentChange = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  //   setMpesa(e.target.value);
  // };

  // const orderSuccess = () => toast.success("Order Placed Successfuly");
  // const orderError = () => toast.error("Error during checkout");
  // const emptyFiled = () => toast.error("All checkout fields are required");

  // const checkOut = async (e) => {
  //   e.preventDefault();
  //   if (
  //     subCountiese.trim().length === 0 ||
  //     location.trim().length === 0 ||
  //     phone.trim().length === 0 ||
  //     mpesa.trim().length === 0
  //   ) {
  //     emptyFiled();
  //   } else {
  //     if (user === null || user.length == 0) {
  //       // return <Navigate to="/login" />;
  //       // console.log(user)
  //       // return (
  //       //   <>
  //       //     <Login />
  //       //   </>
  //       // );
  //       // history.push('/login')
  //     } else {
  //       const amount = parseInt(total) + parseInt(deliveryFee);
  //       let addrss = `${counties}/${subCountiese}/${location}`;

  //       await axios
  //         .post(`${process.env.REACT_APP_Server_Url}Orders/`, {
  //           userName: user.userName,
  //           userEmail: user.userEmail,
  //           phone: phone,
  //           address: addrss,
  //           cart: cart,
  //           total: amount,
  //           profile: user.profile,
  //           payment:mpesa
  //         })
  //         .then((crt) => {
  //           console.log(crt);
  //           orderSuccess();
  //           localStorage.setItem('cart',null)
  //           dispatch({
  //             type: actionType.SET_CART,
  //             cart: null,
  //           });
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //           orderError();
  //         });
  //     }
  //   }

  //   // orderSuccess();
  // };

  // if (
  //   Items.length === 0 ||
  //   menuItems.length === 0 ||
  //   // || isMainDish.length === 0
  //   isItemActive.trim().length === 0
  // ) {
  //   return (
  //     <div className="App">
  //       {/* hearder container */}
  //       <Header
  //         setToggleCartMenu={setToggleCartMenu}
  //         toggleCartMenu={toggleCartMenu}
  //       />
  //       {/* main container */}
  //       <main>
  //         <div className="mainContainer">
  //           {/* Banner */}
  //           <div className="Banner">
  //             <BannerName name={"David"} />
  //             <img src={delivery} alt="delivery" className="delivery" />
  //           </div>
  //           {/* dishContainer */}

  //           <div className="dishContainer progress">
  //             <CircularProgress className="circularProgress" />
  //           </div>

  //           <div className={`rightContainer ${toggleCartMenu ? "active" : ""}`}>
  //             <div className="debitCardContainer">
  //               <div className="debitCard">
  //                 <DebitCard />
  //               </div>
  //             </div>

  //             <div className="cartCheckOutContainer">
  //               <SubMenuContainer name={"Cart Items"} />
  //               <div className="cartContainer">
  //                 <div className="cartItems">
  //                   {cart &&
  //                     cart.map((data) => (
  //                       <CartItem
  //                         key={data.id}
  //                         name={data.name}
  //                         imgSrc={data.imgSrc}
  //                         itemQty={data.qty}
  //                         price={data.price}
  //                         itemId={data.id}
  //                       />
  //                     ))}
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="totalSection">
  //               <div className="total">
  //                 <h3>Cart Total</h3>
  //                 <p>
  //                   <span>Ksh </span>
  //                   {cart && total ? total : 0}
  //                 </p>
  //               </div>
  //               <div className="total check">
  //                 <p>Pay On Delivery With</p>
  //                 <div className="checkboxes">
  //                   <form>
  //                     <div className="checkboxCash">
  //                       <label htmlFor="cash">Cash</label>
  //                       <input
  //                         type="radio"
  //                         id="cash"
  //                         name="payment"
  //                         value="cash"
  //                       />
  //                     </div>

  //                     <div className="checkboxCash">
  //                       <label htmlFor="mpesa">Mpesa</label>
  //                       <input
  //                         type="radio"
  //                         id="mpesa"
  //                         name="payment"
  //                         value="mpesa"
  //                       />
  //                     </div>
  //                   </form>
  //                 </div>
  //                 <div className="inputBox">
  //                   <input type="text" placeholder="Enter Phone Number" />
  //                 </div>
  //               </div>
  //             </div>
  //             <button className="checkOut">Check Out</button>
  //           </div>
  //         </div>
  //       </main>
  //       {/* Bottom container */}
  //       <div className="bottomMenu">
  //         <ul id="menu">
  //           {/* prettier-ignore */}
  //           <MenuContainer link={"#"} icon={<HomeIcon/>} isHome />
  //           {/* <MenuContainer link={"#"} icon={<ChatIcon />} />
  //           <MenuContainer link={"#"} icon={<FavoriteIcon />} />
  //           <MenuContainer link={"#"} icon={<SettingsIcon />} /> */}
  //           <div className="indicator"></div>
  //         </ul>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Frontend isItemActivee={isItemActive} />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard">
            {user === null ? (
              <Route index element={<DashboardLogin />} />
            ) : user.userRights === 0 ? (
              <Route index element={<DashboardLogin />} />
            ) : (
              <Route index element={<Home />} />
            )}
          </Route>
          <Route exact path="/users">
            {user === null ? (
              <Route index element={<DashboardLogin />} />
            ) : user.userRights === 0 ? (
              <Route index element={<DashboardLogin />} />
            ) : (
              <Route index element={<List />} />
            )}
          </Route>

          <Route exact path="/products">
            {user === null ? (
              <Route index element={<DashboardLogin />} />
            ) : user.userRights === 0 ? (
              <Route index element={<DashboardLogin />} />
            ) : (
              <Route index element={<ProductList />} />
            )}
          </Route>

          <Route exact path="/expenses">
            {user === null ? (
              <Route index element={<DashboardLogin />} />
            ) : user.userRights === 0 ? (
              <Route index element={<DashboardLogin />} />
            ) : (
              <Route index element={<Expenses />} />
            )}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
