import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./liststyle.css";
import Expense from "../../components/table/Expense";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Chart from "../../components/chart/Chart";

function Expenses() {
  const [users, setUsers] = useState(null);
  const [dataAmout, setDataAmout] = useState(null);
  useEffect(() => {
    const getTotalUsers = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}expenses/`)
        .then((user) => {
          setUsers(user.data);
        })
        .catch((error) => {
          error;
        });
    };

    const getMonthAmount = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}month/`)
        .then((useroders) => {
          // (useroders.data)
          setDataAmout(useroders.data);
        })
        .catch((error) => {
          error;
        });
    };

    getTotalUsers();
    getMonthAmount();
  }, []);
  return (
    // <div className="dash-list">
    //   <Sidebar />
    //   <div className="dash-listcontainer">
    //     <Navbar />

    //     {users === null ? (
    //       <div className="dash-circular">
    //         <CircularProgress />
    //       </div>
    //     ) : (
    //       <Expense rows={users} />
    //     )}
    //   </div>
    // </div>

    <div className="dash-home">
      <Sidebar />
      <div className="dash-homecontainer">
        <Navbar />
        {/* <div className="dash-charts dash-charts-height ">
          <Feature />

          {user.userRights !== 1 ? (
            <Chart
              aspect={2 / 1}
              title={"Total  Expense Per Month"}
              data={dataAmout}
            />
          ) : (
            ""
          )}
        </div> */}
        <div className="dash-tablecontainer">
          {/* <div className="dash-tableTitle">Latest Transactions</div> */}
          {users === null ? (
            <div className="dash-circular">
              <CircularProgress />
            </div>
          ) : (
            <Expense rows={users} />
          )}
        </div>
        {/* <div className="dash-circular"><CircularProgress/></div> */}
      </div>
    </div>
  );
}

export default Expenses;
