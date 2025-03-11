import React from "react";
import { Link } from "react-router-dom";
import "../Components/Attendance.css";

function AttendanceDashboard() {
    return (
        <div className="AMPdashboard">
            <h1>Attendance Dashboard</h1>
            <header className="attendanceHeader">
                <nav>
                    <ul>
                        <li className="active">
                            <Link to="/attendance-dashboard">Attendance Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/attendance-records">Attendance Records</Link>
                        </li>
                        <li>
                            <Link to="/manual-attendance">Manual Attendance Entry</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
            </main>
        </div>
    );
}

export default AttendanceDashboard;