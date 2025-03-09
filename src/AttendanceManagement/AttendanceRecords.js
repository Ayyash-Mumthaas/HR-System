import React from "react";
import './Attendance.css';
import { Link } from "react-router-dom";

function AttendanceRecords() {
    return (
        <div className="AMPdashboard">
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Attendance Dashboard</Link>
                        </li>
                        <li className="active">
                            <Link to="/attendance-records">Attendance Records</Link>
                        </li>
                        <li>
                            <Link to="/manual-attendance">Manual Attendance Entry</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <h1>Attendance qwertyuiop</h1>
            </main>
        </div>
    );
}

export default AttendanceRecords;