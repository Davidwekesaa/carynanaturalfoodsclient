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
import { useStateValue } from "./store/StateProvider";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Components/login/Login";
import Register from "./Components/login/Register";
import List from "./Components/dashboard/pages/list/List";
import ProductList from "./Components/dashboard/pages/list/ProductList";
import Expenses from "./Components/dashboard/pages/list/Expenses";
import Abouts from "./Components/dashboard/pages/list/Abouts";
import Single from "./Components/dashboard/pages/single/Single";
// import New from "./Components/dashboard/pages/new/New";
import Home from "./Components/dashboard/pages/home/Home";
import DashboardLogin from "./Components/dashboard/pages/login/DashboardLogin";
import Frontend from "./Components/Frontend";
import Blog from "./Components/Blog/Blog";
import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import Blogs from "./Components/dashboard/pages/list/Blogs";

function App() {
  const [isItemActive, setisItemActive] = useState("");
  const [{ cart, total, user }, dispatch] = useStateValue();
  const [toggleCartMenu, setToggleCartMenu] = useState(false);

  //get all products
  useEffect(() => {
    // // Get the parent element for the carousel indicators
    // const heroCarouselIndicators = document.querySelector(
    //   "#hero-carousel-indicators"
    // );
    // // Get all the carousel items
    // const heroCarouselItems = document.querySelectorAll(
    //   "#heroCarousel .carousel-item"
    // );
    // heroCarouselItems.forEach((item, index) => {
    //   // Create a new list item element
    //   const li = document.createElement("li");
    //   // Set the data attributes and class for the list item
    //   li.setAttribute("data-bs-target", "#heroCarousel");
    //   li.setAttribute("data-bs-slide-to", index);
    //   li.className = index === 0 ? "active" : "";
    //   // Append the list item to the parent element
    //   heroCarouselIndicators.appendChild(li);
    // });
  }, []);
  useEffect(() => {
    const getAllCategory = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Category/`)
        .then((category) => {
          setisItemActive(category.data[0]._id);
        })
        .catch((error) => {});
    };
    getAllCategory();
  }, []);

  return (
    <div className="App">
      <Router>
        <NavBar
          toggleCartMenu={toggleCartMenu}
          setToggleCartMenu={setToggleCartMenu}
        />
        <Routes>
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

          <Route exact path="/edits">
            {user === null ? (
              <Route index element={<DashboardLogin />} />
            ) : user.userRights === 0 ? (
              <Route index element={<DashboardLogin />} />
            ) : (
              <Route index element={<Abouts />} />
            )}
          </Route>

          <Route exact path="/dash-blog">
            {user === null ? (
              <Route index element={<DashboardLogin />} />
            ) : user.userRights === 0 ? (
              <Route index element={<DashboardLogin />} />
            ) : (
              <Route index element={<Blogs />} />
            )}
          </Route>

          <Route
            exact
            path="/wellness-products"
            element={
              <Frontend
                isItemActivee={isItemActive}
                toggleCartMenu={toggleCartMenu}
                setToggleCartMenu={setToggleCartMenu}
              />
            }
          />
          <Route exact path="/blog" element={<Blog />} />

          <Route exact path="/" element={<Hero />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
