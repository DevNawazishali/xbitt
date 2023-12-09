import React from "react";
// import * as React from 'react';
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TABS_stake.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TABS_stake() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="tryhere">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Stake" {...a11yProps(0)} />
            <Tab label="unstake" {...a11yProps(1)} />
            {/* <Tab label="Item Three" {...a11yProps(2)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <div className="take_content mt-3">

<div className="row justify-content-center my-4">
    <div className="col-md-3 col-4 p-1">
        <div className="stke_planes">
            <button className="days_plan">90 days</button>
            <div className="about_plan">
                <p className="mb-0">10% APY</p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-4 p-1">
        <div className="stke_planes">
            <button className="days_plan">60 days</button>
            <div className="about_plan">
                <p className="mb-0">10% APY</p>
            </div>
        </div>
    </div>
    <div className="col-md-3 col-4 p-1">
        <div className="stke_planes">
            <button className="days_plan">30 days</button>
            <div className="about_plan">
                <p className="mb-0">10% APY</p>
            </div>
        </div>
    </div>
</div>


            <div className="row">
              <div className="col-md-6">
                <div className="text-white d-flex justify-content-between">
                  <p className="mb-0 abt_para">Stake amount</p>
                  <p className="mb-0 abt_para">Available Amount 0 BCASH</p>
                </div>
                <div className="input_stake_amnt">
                  <input
                    type="text"
                    className="input_amount"
                    placeholder="0"
                    name=""
                    id=""
                  />
                  <button className="stke_max">MAX</button>
                </div>
                <p className="tax">2% Tax on Deposits</p>
              </div>
              <div className="col-md-6">
                <p className="mb-0 text-white abt_para">Enter Your Refferal Address</p>
                <input type="text" className="ref_add" name="" id="" />
              </div>
            </div>

            <h4 className="dash mt-3 mt-lg-0">USER DASHBOARD</h4>
            <div className="col-md-6">
              <div className="about_user">
                <div className="d-flex  justify-content-between text-white">
                  <h6>Stake Date</h6>
                  <h5>None</h5>
                </div>
                <div className="d-flex  justify-content-between text-white">
                  <h6>Interest End Date</h6>
                  <h5>None</h5>
                </div>
                <div className="d-flex  justify-content-between text-white">
                  <h6>Withdrawal Delay Time</h6>
                  <h5>None</h5>

                </div>
              </div>
            </div>
                <hr  style={{background:"#92daec"}}/>
                <div className="col-md-6">
              <div className="about_user">
                <div className="d-flex  justify-content-between text-white">
                  <h6>Yield Per Month</h6>
                  <h5>None</h5>
                </div>
                <div className="d-flex  justify-content-between text-white">
                  <h6>Estimated Interests</h6>
                  <h5>None</h5>
                </div>
              
              </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <button className="app_stk_btn">approve & stake</button>
                </div>
            </div>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <div className="unstake_content">
          <div className="row justify-content-center">
            <div className="col-md-6">
            <div className="text-white d-flex justify-content-between mt-4">
                <p>Unstake Amount</p>
                <p>Available Amount 0 BCASH</p>

                </div>
                <div className="unstake_box d-flex">
                <input type="text" placeholder="0" className="unstke_amt" name="" id="" />
                <button className="stke_max">MAX</button>
            </div>
            <button className="app_stk_btn">unstake</button>

            </div>
          </div>
           
          </div>
        </CustomTabPanel>
       
      </Box>
    </div>
  );
}
