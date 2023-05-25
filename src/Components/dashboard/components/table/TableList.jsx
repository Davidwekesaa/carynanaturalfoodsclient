import React, { useState } from "react";
import "./tablestyle.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import ClearIcon from "@mui/icons-material/Clear";
import { ToastContainer, toast } from "react-toastify";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import NewUser from "../../pages/new/NewUser";

// popup
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const TableList = ({ rows }) => {
  const [open, setOpen] = useState(false);
  const [arrayOrderData, arratOrderData] = useState(null);
  const [status, setStatus] = useState(null);
  const [updateId, setUpdateId] = useState(null);

  const orderSuccess = () => toast.success("User Deleted Successfuly");
  const orderError = () => toast.error("Error occured");

  const orderstatus = [
    { id: 10, name: "" },
    { id: 1, name: "delivered" },
    { id: 2, name: "declined" },
    { id: 3, name: "pending" },
  ];
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const hundleRowClick = async (e, id, idRowDialog) => {
    e.preventDefault();
    // setUpdateId(idRowDialog);
    // await axios
    //   .post(`${process.env.REACT_APP_Server_Url}getUserArray/`, {
    //     orderIds: id,
    //   })
    //   .then((user) => {
    //     arratOrderData(user.data);
    //     handleClickOpen();
    //   })
    //   .catch((error) => {
    //     orderError();
    //   });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // (updateId);
    // await axios
    //   .put(`${process.env.REACT_APP_Server_Url}UserOrders/${updateId}`, {
    //     status: status.toString(),
    //   })
    //   .then((user) => {
    //     orderSuccess();
    //     handleClose();
    //   })
    //   .catch((error) => {
    //     (error);
    //   });
  };

  const hundleRowDelete = async (e, id) => {
    e.preventDefault();
    // setUpdateId(idRowDialog);
    id;
    await axios
      .delete(`${process.env.REACT_APP_Server_Url}user/${id}`)
      .then((user) => {
        orderSuccess();
      })
      .catch((error) => {
        error;
        orderError();
      });
  };
  return (
    <div className="dash-table-data">
      <div className="dash-user-add-user">
        <div className="dash-user-add-user-add" onClick={handleClickOpen}>
          {" "}
          <PersonAddIcon /> <p>Add User</p>
        </div>
      </div>
      <TableContainer component={Paper} className="dash-table">
        <Table
          sx={{ minWidth: 650, textAlign: "center" }}
          aria-label="simple table"
        >
          <TableHead className="dash-tableHead">
            <TableRow>
              {/* <TableCell className="dash-tableCell">Tracking ID</TableCell> */}
              <TableCell className="dash-tableCell">User</TableCell>
              <TableCell className="dash-tableCell">Email</TableCell>
              <TableCell className="dash-tableCell">Admin</TableCell>
              <TableCell className="dash-tableCell">Actions</TableCell>
              {/* <TableCell className="dash-tableCell">Orders</TableCell>
              <TableCell className="dash-tableCell">Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row._id}
                // onClick={(e) => hundleRowClick(e, row.orders, row._id)}
                className="dash-table-row"
              >
                <TableCell className="dash-tableCell">
                  <div className="dash-productimgwrapper">
                    <div className="dash-l-image">
                      <img
                        className="dash-image"
                        src={row.profile}
                        alt="productimg"
                      />
                    </div>
                    {row.userName}
                  </div>
                </TableCell>
                <TableCell className="dash-tableCell">
                  {row.userEmail}
                </TableCell>
                <TableCell className="dash-tableCell">{`${row.isAdmin}  Rights: ${row.userRights}`}</TableCell>

                <TableCell className="dash-tableCell">
                  {/* <span
                    className={`dash-status edit`}
                    // onClick={(`${row.status}`)}
                  >
                    Edit
                  </span>
                  {"   "} */}
                  <span
                    className={`dash-status declined`}
                    // onClick={(`${row.status}`)}
                    onClick={(e) => hundleRowDelete(e, row._id)}
                  >
                    Delete
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // className="dash-dialog"
        fullWidth={true}
        maxWidth="sm"
      >
        <DialogTitle id="alert-dialog-title" className="dialog-dish-clear">
          <ClearIcon onClick={handleClose} />
        </DialogTitle>
        <DialogContent>
          <NewUser />
        </DialogContent>
        {/* <DialogActions className="dailog-dash-status">
          
        </DialogActions> */}
      </Dialog>
      <ToastContainer />
    </div>
  );
};

export default TableList;
