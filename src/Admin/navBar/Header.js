import React from "react";
import { Link } from "react-router-dom";
import ICSTlogo from "../../img/IcstLogo.png";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <nav>
                <div className="heroSection">
                    <img src={ICSTlogo} alt="ICST Logo" />
                    <p>HR System</p>
                </div>
                <div className="navLinks">
                    <ul>
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li>Manage Employees</li>
                        <li>
                            <Link to="/attendance-dashboard">Attendance Management</Link>
                        </li>
                        <li><Link to="/LeaveManagement">Leave Management</Link></li>
                        <li>Payroll Management</li>
                        <li><Link to="/UserRolesPage">User Roles</Link></li>
                        <li>
                            <Link to="/ReportsAnalyticsPage">Reports & Analytics</Link>
                        </li>
                        <li><Link to="/Settings">Settings</Link></li>
                    </ul>
                </div>
                <div className="logout">
                    <a>Logout</a>
                </div>
            </nav>
        </header>
    );
}

export default Header;