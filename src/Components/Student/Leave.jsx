import React, { useState } from "react";
import "./Leave.css";

export default function Leave() {
  // Mock student info - in a real app this would come from a login/authentication system
  const studentInfo = {
    regNumber: "REG2025001",
    name: "John Doe",
  };

  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [leaveHistory, setLeaveHistory] = useState([
    {
      id: 1,
      fromDate: "2025-03-01",
      toDate: "2025-03-05",
      reason: "Family vacation",
      status: "Approved",
    },
    {
      id: 2,
      fromDate: "2025-02-15",
      toDate: "2025-02-17",
      reason: "Medical appointment",
      status: "Pending",
    },
    {
      id: 3,
      fromDate: "2025-01-10",
      toDate: "2025-01-12",
      reason: "Personal emergency",
      status: "Rejected",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLeave = {
      id: leaveHistory.length + 1,
      fromDate,
      toDate,
      reason,
      status: "Pending",
    };
    setLeaveHistory([newLeave, ...leaveHistory]);
    // Reset form
    setFromDate("");
    setToDate("");
    setReason("");
  };

  return (
    <div className="leave-container">
      <h1 className="leave-title">Student Leave Portal</h1>

      {/* Section 1: Leave Application Form */}
      <section className="leave-form-section">
        <h2>Apply for Leave</h2>
        <div className="student-info-display">
          <div className="info-item">
            <span className="info-label">Register Number:</span>
            <span className="info-value">{studentInfo.regNumber}</span>
          </div>
          <div className="info-item">
            <span className="info-label">Name:</span>
            <span className="info-value">{studentInfo.name}</span>
          </div>
        </div>
        <form className="leave-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fromDate">From Date</label>
            <input
              type="date"
              id="fromDate"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="toDate">To Date</label>
            <input
              type="date"
              id="toDate"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason for Leave</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              placeholder="Briefly explain your reason for leave"
              rows="4"
            ></textarea>
          </div>

          <button type="submit" className="apply-btn">
            Apply
          </button>
        </form>
      </section>

      {/* Section 2: Leave History */}
      <section className="leave-history-section">
        <h2>Leave History</h2>
        <div className="student-identity">
          <h3>
            {studentInfo.name}{" "}
            <span className="reg-number">({studentInfo.regNumber})</span>
          </h3>
        </div>
        <div className="leave-cards">
          {leaveHistory.map((leave) => (
            <div
              key={leave.id}
              className={`leave-card ${leave.status.toLowerCase()}`}
            >
              <div className="leave-card-header">
                <span className="leave-dates">
                  {leave.fromDate} to {leave.toDate}
                </span>
                <span className={`status-badge ${leave.status.toLowerCase()}`}>
                  {leave.status}
                </span>
              </div>
              <div className="leave-card-body">
                <p>
                  <strong>Reason:</strong> {leave.reason}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
