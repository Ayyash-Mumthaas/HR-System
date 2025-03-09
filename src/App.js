import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./navBar/Header";
import AttendanceDashboard from "./AttendanceManagement/AttendanceDashboard";
import AttendanceRecords from "./AttendanceManagement/AttendanceRecords";
import ManualAttendance from "./AttendanceManagement/ManualAttendance";
import ReportsAnalyticsPage from "./components/ReportsAnalyticsPage";
import "./App.css";

import Settings from './Settings/Settings';

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<AttendanceDashboard />} />
                <Route path="/attendance-dashboard" element={<AttendanceDashboard />} />
                <Route path="/attendance-records" element={<AttendanceRecords />} />
                <Route path="/manual-attendance" element={<ManualAttendance />} />
                <Route path="/ReportsAnalyticsPage" element={<ReportsAnalyticsPage />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;