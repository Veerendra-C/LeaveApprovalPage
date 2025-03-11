import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import Nav from "../../assets/bars-solid.svg";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Card from "../NavCards/Card";

export default function NavBar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [toggle, setToggle] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/LeaveApprovalPage/");
  };

  return (
    <div className={toggle ? "Navbar hide" : "Navbar"}>
      <div className="Logo">
        <h1 className={toggle ? "hidden" : ""}>MarcoHR</h1>
        <button className="btn" onClick={() => setToggle(!toggle)}>
          <img src={Nav} alt="Toggle Navbar" />
        </button>
      </div>
      <div className="container">
        {username === "admin" && (
          <>
            <Card
              toggle={toggle}
              label={"Dashboard"}
              icon={<DashboardRoundedIcon />}
              onClick={() => navigate("/LeaveApprovalPage/home")}
            />
            <Card
              toggle={toggle}
              label={"Leave Page"}
              icon={<DashboardRoundedIcon />}
              onClick={() => navigate("/LeaveApprovalPage/leavepage")}
            />
          </>
        )}
        {username === "student" && (
          <Card
            toggle={toggle}
            label={"Apply Leave"}
            icon={<DashboardRoundedIcon />}
            onClick={() => navigate("/LeaveApprovalPage/leave")}
          />
        )}
      </div>
      <div className="logout">
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
