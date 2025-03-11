import React, { useState } from "react";
import "./LeavePage.css";

export default function LeavePage() {
  const [leaveApplications, setLeaveApplications] = useState([
    {
      id: 1,
      name: "John Doe",
      regNumber: "REG2025001",
      fromDate: "2025-03-01",
      toDate: "2025-03-05",
      reason: "Family vacation",
      status: "Pending",
    },
    {
      id: 2,
      name: "Jane Smith",
      regNumber: "REG2025002",
      fromDate: "2025-02-15",
      toDate: "2025-02-17",
      reason: "Medical appointment",
      status: "Pending",
    },
    {
      id: 3,
      name: "Mike Johnson",
      regNumber: "REG2025003",
      fromDate: "2025-01-10",
      toDate: "2025-01-12",
      reason: "Personal emergency",
      status: "Pending",
    },
    {
      id: 4,
      name: "Sarah Williams",
      regNumber: "REG2025004",
      fromDate: "2025-03-10",
      toDate: "2025-03-15",
      reason: "Family function",
      status: "Approved",
    },
    {
      id: 5,
      name: "Alex Rodriguez",
      regNumber: "REG2025005",
      fromDate: "2025-02-25",
      toDate: "2025-02-28",
      reason: "Medical procedure",
      status: "Rejected",
    },
  ]);

  // Function to handle leave approval
  const handleApprove = (id) => {
    setLeaveApplications(
      leaveApplications.map((leave) =>
        leave.id === id ? { ...leave, status: "Approved" } : leave
      )
    );
  };

  // Function to handle leave rejection
  const handleReject = (id) => {
    setLeaveApplications(
      leaveApplications.map((leave) =>
        leave.id === id ? { ...leave, status: "Rejected" } : leave
      )
    );
  };

  // Filter applications by status
  const pendingApplications = leaveApplications.filter(
    (leave) => leave.status === "Pending"
  );
  const approvedApplications = leaveApplications.filter(
    (leave) => leave.status === "Approved"
  );
  const rejectedApplications = leaveApplications.filter(
    (leave) => leave.status === "Rejected"
  );

  return (
    <div className="admin-leave-container">
      <h1 className="admin-leave-title">Leave Applications Management</h1>

      <section className="applications-section">
        <h2>Leave Applications</h2>
        <div className="application-filter">
          <button className="filter-btn active">
            All ({leaveApplications.length})
          </button>
          <button className="filter-btn">
            Pending ({pendingApplications.length})
          </button>
          <button className="filter-btn">
            Approved ({approvedApplications.length})
          </button>
          <button className="filter-btn">
            Rejected ({rejectedApplications.length})
          </button>
        </div>

        <div className="application-cards">
          {leaveApplications.map((application) => (
            <div
              key={application.id}
              className={`application-card ${application.status.toLowerCase()}`}
            >
              <div className="card-header">
                <div className="student-details">
                  <h3>{application.name}</h3>
                  <p className="reg-number">{application.regNumber}</p>
                </div>
                <div
                  className={`status-badge ${application.status.toLowerCase()}`}
                >
                  {application.status}
                </div>
              </div>

              <div className="card-body">
                <div className="detail-row">
                  <div className="detail-item">
                    <span className="detail-label">From:</span>
                    <span className="detail-value">{application.fromDate}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">To:</span>
                    <span className="detail-value">{application.toDate}</span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-item full-width">
                    <span className="detail-label">Reason:</span>
                    <span className="detail-value reason">
                      {application.reason}
                    </span>
                  </div>
                </div>

                <div className="detail-row">
                  <div className="detail-item full-width">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">
                      {calculateDays(application.fromDate, application.toDate)}{" "}
                      days
                    </span>
                  </div>
                </div>
              </div>

              <div className="card-actions">
                {application.status === "Pending" && (
                  <>
                    <button
                      className="action-btn approve-btn"
                      onClick={() => handleApprove(application.id)}
                    >
                      Approve
                    </button>
                    <button
                      className="action-btn reject-btn"
                      onClick={() => handleReject(application.id)}
                    >
                      Reject
                    </button>
                  </>
                )}
                {application.status !== "Pending" && (
                  <div className="action-info">
                    {application.status === "Approved"
                      ? "Leave approved"
                      : "Leave rejected"}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Helper function to calculate days between two dates
function calculateDays(fromDate, toDate) {
  const start = new Date(fromDate);
  const end = new Date(toDate);
  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1; // +1 to include both start and end days
  return diffDays;
}
