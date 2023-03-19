import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from '../../components/chart/Chart'
import List from '../../components/table/Table'

import "./singlestyle.css";

function Single() {
  return (
    <div className="dash-single">
      {/* <Sidebar />
      <div className="dash-singlecontainer">
        <Navbar />
        <div className="dash-singletop">
          <div className="dash-singleleft">
            <div className="dash-edit">edit</div>
            <h1 className="dash-singleTitle">Information</h1>
            <div className="dash-singleItem">
              <img
                className="dash-singleimg"
                src="https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg"
                alt="personimg"
              />
              <div className="dash-persondetails">
                <h1 className="dash-personTitle">Sophie Tracy</h1>
                <div className="dash-detailsItem">
                  <span className="dash-itemKey">Email:</span>
                  <span className="dash-itemValue">Sophie@gmail.com</span>
                  </div>

                  <div className="dash-detailsItem">
                  <span className="dash-itemKey">Phone:</span>
                  <span className="dash-itemValue">+12163547758</span>
                  </div>

                  <div className="dash-detailsItem">
                  <span className="dash-itemKey">Address:</span>
                  <span className="dash-itemValue">A-11, 5th floor, City Vista</span>
                  </div>

                  <div className="dash-detailsItem">
                  <span className="dash-itemKey">Country:</span>
                  <span className="dash-itemValue">US</span>
                  </div>

                  <button className="block">Block</button>
                </div>

            </div>

          </div>

        <div className="dash-singlecenter">
          <Chart aspect={3/1} title={'User Spending (last 6 months)'}/>
          </div>

        </div>

        <div className="dash-singlebottom">
          <List/>
          </div>
        
      </div> */}
    </div>
  );
}

export default Single;
