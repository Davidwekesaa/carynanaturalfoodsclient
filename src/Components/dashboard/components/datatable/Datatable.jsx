import React, { useEffect, useState } from "react";
import "./dtstyle.css";
import { DataGrid } from "@mui/x-data-grid";
// import { userRows, userColumns } from "../../datatableresource";
import { Link } from "react-router-dom";
// import {
//   collection,
//   doc,
//   getDocs,
//   deleteDoc,
//   onSnapshot,
// } from "firebase/firestore";
// import { db } from "../../firebase";

const Datatable = () => {
  const [data, setData] = useState([]);

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  //   ("delte");
  // };

  //fetch all data from firebase ans store it
  // useEffect(() => {
  //   const fetchData = async () => {
  //     let list = [];
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "users"));
  //       querySnapshot.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setData(list);
  //     } catch (err) {
  //       (err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  //realtime fetch
  // useEffect(() => {
  //   const unsub = onSnapshot(
  //     collection(db, "users"),
  //     (snapShot) => {
  //       let list = [];
  //       snapShot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setData(list);
  //     },
  //     (error) => {
  //       (error);
  //     }
  //   );

  //   return () => {
  //     unsub();
  //   };
  // }, []);
  // (data);

  //delete data
  // const handleDelete = async (id) => {
  //   try {
  //     await deleteDoc(doc(db, "users", id));
  //     setData(data.filter((item) => item.id !== id));
  //   } catch (err) {
  //     (err);
  //   }
  // };

  // const actioncolumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="dash-cellAction">
  //           <Link to="/users/person" style={{ textDecoration: "none" }}>
  //             <div className="dash-viewButton">Views</div>
  //           </Link>
  //           <div
  //             className="dash-deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  return (
    <div className="dash-datatable">
      {/* <div className="dash-datatableTitle">
        Add New User
        <Link
          to="/users/new"
          className="dash-link"
          style={{ textDecoration: "none" }}
        >
          Add New
        </Link>
      </div>
      <div className="dash-userGrid">
        <DataGrid
          className="dash-dg"
          rows={data}
          columns={userColumns.concat(actioncolumn)}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div> */}
    </div>
  );
};

export default Datatable;
