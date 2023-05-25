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

function App() {
  const [isItemActive, setisItemActive] = useState("");
  const [{ cart, total, user }, dispatch] = useStateValue();
  //get all products
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

          <Route
            exact
            path="/"
            element={<Frontend isItemActivee={isItemActive} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
