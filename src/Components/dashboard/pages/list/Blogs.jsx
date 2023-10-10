import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./liststyle.css";
import Expense from "../../components/table/Expense";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import Chart from "../../components/chart/Chart";
import BlogsEdit from "../../components/Blog/BlogsEdit";

function Blogs() {
  const [users, setUsers] = useState(null);
  const [dataAmout, setDataAmout] = useState(null);
  useEffect(() => {
    const getTotalUsers = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}expenses/`)
        .then((user) => {
          setUsers(user.data);
        })
        .catch((error) => {});
    };

    const getMonthAmount = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}month/`)
        .then((useroders) => {
          // (useroders.data)
          setDataAmout(useroders.data);
        })
        .catch((error) => {});
    };

    getTotalUsers();
    getMonthAmount();
  }, []);
  return (
    <div className="dash-home">
      <Sidebar />
      <div className="dash-homecontainer">
        <Navbar />
        <div className="dash-tablecontainer">
          {/* <div className="dash-tableTitle">Latest Transactions</div> */}
          {users === null ? (
            <div className="dash-circular">
              <CircularProgress />
            </div>
          ) : (
            <BlogsEdit />
          )}
        </div>
        {/* <div className="dash-circular"><CircularProgress/></div> */}
      </div>
    </div>
  );
}

export default Blogs;
