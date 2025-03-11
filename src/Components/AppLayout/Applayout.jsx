import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../LoginPage/Login";
import Dashboard from "../Admin/DashBoard/Dashboard";
import Leave from "../Student/Leave";
import LeavePage from "../Admin/LeavePage/LeavePage";

export default function Applayout() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";
  const username = localStorage.getItem("username");

  return (
    <Routes>
      {!loggedIn ? (
        <Route path="/LeaveApprovalPage/" element={<Login />} />
      ) : (
        <>
          {username === "admin" ? (
            <>
              <Route
                path="/LeaveApprovalPage/leavepage"
                element={<LeavePage />}
              />
              <Route path="/LeaveApprovalPage/home" element={<Dashboard />} />
            </>
          ) : (
            <Route path="/LeaveApprovalPage/leave" element={<Leave />} />
          )}
        </>
      )}
    </Routes>
  );
}
