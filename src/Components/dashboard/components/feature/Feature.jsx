import React from "react";
import MoreVertRoundedIcon from "@mui/icons-material/MoreVertRounded";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import "./featurestyle.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Feature = () => {
  return (
    <div className="dash-feature">
      {/* <div className="dash-top">
        <h1 className="dash-title">Total Revenue</h1>
        <MoreVertRoundedIcon className="dash-icon" />
      </div>
      <div className="dash-bottom">
        <div className="dash-bottomchart">
          <CircularProgressbar
            className="dash-progress"
            value={70}
            text={"70%"}
            strokeWidth={7}
          />
          <p className="subTitle">Total sales made today</p>
          <p className="desc">
            Previous transaction processing, last payments may not be included.
          </p>
          <p className="amount">$400</p>

          <div className="dash-summary">
            <div className="dash-item">
              <div className="itemTitle">Target</div>
              <div className="itemResult positive">
                <ArrowDropUpRoundedIcon fontSize="small" />
                <div className="resultAM">$12.15</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult negative">
                <ArrowDropDownRoundedIcon fontSize="small" />
                <div className="resultAM">$12.15</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">
                <ArrowDropUpRoundedIcon fontSize="small" />
                <div className="resultAM">$12.15</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Feature;
