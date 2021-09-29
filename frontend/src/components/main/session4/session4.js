import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
const Session4 = props => {
  return (
    <div className="Session4_outter">
      <div className="Session4_inner1">
        <div>Logo</div>
        <h1>Tell us about your next project </h1>
        <button>Learn more </button>
      </div>
      <div className="Session4_inner2">
        <div className="Session4_inner2_box1">
          <div>
            <PhoneIcon fontSize="small" />
            <h1>Phone number</h1>
          </div>
          <div>
            <EmailIcon fontSize="small" />
            <h1>Email</h1>
          </div>
          <div>
            <AddLocationAltIcon fontSize="small" />
            <h1>Address</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Session4;
