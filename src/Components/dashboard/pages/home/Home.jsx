import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Feature from "../../components/feature/Feature";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import axios from "axios";
import "./homestyle.css";
import CircularProgress from "@mui/material/CircularProgress";
import { actionType } from "../../../../store/reducer";
import { useStateValue } from "../../../../store/StateProvider";

function Home() {
  const [users, setUsers] = useState("");
  const [countOrders, setcountOrders] = useState("");
  const [ordersTotal, setOrdersTotal] = useState("");
  const [orders, setOrders] = useState(null);
  const [dataAmout, setDataAmout] = useState(null);

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    // get total users
    const getTotalUsers = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}user/`)
        .then((user) => {
          setUsers(user.data.length);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    const getTotalOders = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Orders/`)
        .then((oders) => {
          setcountOrders(oders.data.orders.length);
          setOrdersTotal(oders.data.totalSum);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getUserOders = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}UserOrders/`)
        .then((useroders) => {
          setOrders(useroders.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const getMonthAmount = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}month/`)
        .then((useroders) => {
          // console.log(useroders.data)
          setDataAmout(useroders.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getTotalUsers();
    getTotalOders();
    getUserOders();
    getMonthAmount();
  }, []);
  return (
    <div className="dash-home">
      <Sidebar />
      <div className="dash-homecontainer">
        <Navbar />
        <div className="dash-widgetcontainer">
          <Widget type="users" title={"USERS"} numbers={users ? users : 0} />
          <Widget
            type="orders"
            title={"ORDER"}
            numbers={countOrders ? countOrders : 0}
          />

          {user.userRights !== 1 ? (
            <Widget
              type="earning"
              title={"EARNING"}
              isMoney={true}
              numbers={ordersTotal ? ordersTotal : 0}
            />
          ) : (
            ""
          )}
          {/* <Widget type="balance" /> */}
        </div>

        <div className="dash-charts">
          {/* <Feature /> */}

          {user.userRights !== 1 ? (
            <Chart
              aspect={2 / 1}
              title={"Total  Revenue Per Month"}
              data={dataAmout}
            />
          ) : (
            ""
          )}
        </div>

        <div className="dash-tablecontainer">
          <div className="dash-tableTitle">Latest Transactions</div>
          {orders === null ? (
            <div className="dash-circular">
              <CircularProgress />
            </div>
          ) : (
            <Table rows={orders} />
          )}
        </div>
        {/* <div className="dash-circular"><CircularProgress/></div> */}
      </div>
    </div>
  );
}

export default Home;
