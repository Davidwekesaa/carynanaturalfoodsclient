import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import "./liststyle.css";
// import TableList from "../../components/table/TableList";
import TableListProduct from "../../components/table/TableListProduct";
import TableListCategory from "../../components/table/TableListCategory";
import axios from "axios";
import { CircularProgress } from "@mui/material";

function ProductList() {
  const [users, setUsers] = useState(null);
  const [category, setCategory] = useState(null);
  useEffect(() => {
    const getTotalUsers = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Product/`)
        .then((user) => {
          setUsers(user.data);
        })
        .catch((error) => {});
    };

    const getTotalCategory = async () => {
      await axios
        .get(`${process.env.REACT_APP_Server_Url}Category/`)
        .then((user) => {
          setCategory(user.data);
        })
        .catch((error) => {});
    };

    getTotalUsers();
    getTotalCategory();
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
    //       <TableListProduct rows={users} />
    //     )}
    //   </div>
    // </div>

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
            <TableListProduct rows={users} />
          )}

          {users === null ? (
            <div className="dash-circular">
              <CircularProgress />
            </div>
          ) : (
            <TableListCategory rows={category} />
          )}
        </div>
        {/* <div className="dash-circular"><CircularProgress/></div> */}
      </div>
    </div>
  );
}

export default ProductList;
