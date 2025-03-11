import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Admin/navBar/Header";
import AttendanceDashboard from "./Admin/AttendanceManagement/AttendanceDashboard";
import AttendanceRecords from "./Admin/AttendanceManagement/AttendanceRecords";
import ManualAttendance from "./Admin/AttendanceManagement/ManualAttendance";
import ReportsAnalyticsPage from "./Admin/Report/ReportsAnalyticsPage";
import "./App.css";
import LeaveManagement from './Admin/LeaveManagement/LeaveManagement'

import UserRolesPage from "./Admin/UserRoles/UserRolesPage";

import Settings from './Admin/Settings/Settings';

function App() {
    return (
        <UserRolesPage />
        // <BrowserRouter>
        //     <Header />
        //     <Routes>
        //         <Route path="/" element={<AttendanceDashboard />} />
        //         <Route path="/attendance-dashboard" element={<AttendanceDashboard />} />
        //         <Route path="/attendance-records" element={<AttendanceRecords />} />
        //         <Route path="/manual-attendance" element={<ManualAttendance />} />
        //         <Route path="/ReportsAnalyticsPage" element={<ReportsAnalyticsPage />} />
        //         <Route path="/settings" element={<Settings />} />
        //         <Route path="/userRoles" element={<UserRolesPage />} />
        //         <Route path="/LeaveManagement" element={<LeaveManagement />} />
        //     </Routes>
        // </BrowserRouter>
    );
}

export default App;