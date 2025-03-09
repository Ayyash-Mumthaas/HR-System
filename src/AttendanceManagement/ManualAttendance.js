import React from "react";
import './Attendance.css';
import { Link } from "react-router-dom";

function ManualAttendance() {
    return (
        <div className="AMPdashboard">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Attendance Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/attendance-records">Attendance Records</Link>
                        </li>
                        <li className="active">
                            <Link to="/manual-attendance">Manual Attendance Entry</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default ManualAttendance;