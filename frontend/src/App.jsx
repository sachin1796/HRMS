

import './App.css'
// import {LoginForm} from './components/LoginPage/LoginForm'
// import { SocialLogin } from './components/LoginPage/SocialLogin'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import React from 'react';

import Layout from './components/Layout';
import Overview  from './pages/Overview'
import Attendance from './pages/Attendance'
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
import Performance from './pages/Performance';




function App() {
  return (



   

    <>
    
    <Router>
      <Routes>
          <Route path="/" element={<Login />}></Route>
          

          <Route path="/" element={<Layout/>}> 
          <Route path="/" element={<Navbar />} />
            
          <Route path="/overview" element={<Overview/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="expenses" element={<ExpensesPage />} />
          <Route path="chat" element={<Chat />} />
          <Route path="events" element={<Calendar />} />
          <Route path="email" element={<EmailPage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="client" element={<Client />} />
          <Route path="performance" element={<Performance />} />
          <Route path="payroll" element={<Payroll />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="custom-dashboard" element={<CustomDashboard />} />
          </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;