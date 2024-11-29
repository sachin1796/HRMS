import './App.css'
// import {LoginForm} from './components/LoginPage/LoginForm'
// import { SocialLogin } from './components/LoginPage/SocialLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';

import Layout from './components/Layout';
<<<<<<< HEAD
import Overview from './pages/Overview'
import Attendance from './pages/Attendance'
=======
import Overview  from './pages/Overview'
import Attendance from './pages/EmployeeAttendance '
>>>>>>> 847334e61a7f7988e9617cf97b618da8399a4f1a
import Payroll from './pages/Payroll'
import Tasks from './pages/Tasks'
import CustomDashboard from './pages/CustomDashboard'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Chat from './pages/Chat';
import Calendar from './pages/Events';
import EmailPage from './pages/Email';
import ProjectPage from './pages/Projects';
import Navbar from './components/Navbar';
import ExpensesPage from './components/AdminDashboard/Expenses';
import Client from './pages/Client';
<<<<<<< HEAD
import PerformanceIndicator from './pages/PerformanceIndicator';
import PerformanceAppraisal from './pages/PerformanceAppraisal';
import GoalTracking from './pages/GoalTracking';
import GoalType from './pages/GoalType';
import TrainingList from './pages/TrainingList';
import TrainingType from './pages/TrainingType';
import Trainers from './pages/Trainers';
import Promotions from './Promotions';
import Resignations from './Resignations';
import Terminations from './pages/Terminations';
=======
import Performance from './pages/Performance';
import OvertimeTracker from './pages/OvertimeTracker';
import DailyScheduling from './pages/DailyScheduling';
import TimeSheet from './pages/TimeSheet';
import LeaveSystem from './pages/LeaveSystem';
import Sale from './pages/Sales';
import { Import } from 'lucide-react';
import AdminLeavePortal from './pages/AdminLeavePortal';
import AllEmployeesPage from './pages/AllEmployees';
import Department from './pages/Department';
import Designations from './pages/Designations';
import Holiday from './pages/Holiday';
import EmployeeAttendance from './pages/EmployeeAttendance ';
import AdminAttendance from './pages/AdminAttendance';
>>>>>>> 847334e61a7f7988e9617cf97b618da8399a4f1a





function App() {
  return (





    <>

<<<<<<< HEAD
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navbar />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="expenses" element={<ExpensesPage />} />
            <Route path="chat" element={<Chat />} />
            <Route path="events" element={<Calendar />} />
            <Route path="email" element={<EmailPage />} />
            <Route path="projects" element={<ProjectPage />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="client" element={<Client />} />
            <Route path="PerformanceIndicator" element={<PerformanceIndicator />} />
            <Route path="PerformanceAppraisal" element={<PerformanceAppraisal />} />
            <Route path="GoalTracking" element={<GoalTracking />} />
            <Route path="GoalType" element={<GoalType />} />
            <Route path="TrainingList" element={<TrainingList />} />
            <Route path="TrainingType" element={<TrainingType />} />
            <Route path="Trainers" element={<Trainers />} />
            <Route path="Promotions" element={<Promotions />} />
            <Route path="Resignations" element={<Resignations />} />
            <Route path="Terminations" element={<Terminations />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="custom-dashboard" element={<CustomDashboard />} />
=======
          <Route path="/" element={<Layout/>}> 
          <Route path="/" element={<Navbar />} />
            
          <Route path="/overview" element={<Overview/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="events" element={<Calendar />} />
          <Route path="email" element={<EmailPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="employeeattendance" element={<EmployeeAttendance />} />
          <Route path="adminattendance" element={<AdminAttendance />} />
          <Route path="client" element={<Client />} />
          <Route path="performance" element={<Performance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="custom-dashboard" element={<CustomDashboard />} />
          <Route path="/overtime" element={<OvertimeTracker />} />
          <Route path="/dailyscheduling" element={<DailyScheduling />} />
          <Route path="/timesheet" element={<TimeSheet />} />
          <Route path="/leavesystem" element={<LeaveSystem />} />
          <Route path="/adminleaveportal" element={<AdminLeavePortal />} />
          <Route path="/allemployee" element={<AllEmployeesPage />} />
          <Route path="/department" element={<Department />} />
          <Route path="/designations" element={<Designations />} />
          <Route path="/holiday" element={<Holiday />} />
          <Route path="/sale" element={<Sale />} />
>>>>>>> 847334e61a7f7988e9617cf97b618da8399a4f1a
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;