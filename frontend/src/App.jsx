

import './App.css'
import {LoginForm} from './components/LoginPage/LoginForm'
import { SocialLogin } from './components/LoginPage/SocialLogin'

import React from 'react';
import { Settings2 } from 'lucide-react';
import WelcomeCard from './components/EmployeeDashboard/WelcomeCard';
import StatisticsCard from './components/EmployeeDashboard/StatisticsCard';
import HolidaysCard from './components/EmployeeDashboard/HolidaysCard';
import AttendanceCard from './components/EmployeeDashboard/AttendenceCard';
import NotificationsCard from './components/EmployeeDashboard/NotificationsCard';
import ProjectsCard from './components/EmployeeDashboard/ProjectsCard';
import EmployeeCard from './components/EmployeeDashboard/EmployeeCard';
import PolicyCard from './components/EmployeeDashboard/PolicyCard';
// >>>>>>> c21d0eb78ee51806047128e80a5ec7128c94f799

function App() {
  return (
// <<<<<<< HEAD
    // <>
    // <h1>
    //   Welcome to HRMS</h1></>
//    <>

// <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4">
//       <div className="max-w-md w-full space-y-8 bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
//         {/* Decorative elements */}
//         <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-100 rounded-full filter blur-xl opacity-70"></div>
//         <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-pink-100 rounded-full filter blur-xl opacity-70"></div>
        
//         <div className="relative">
//           {/* Header */}
//           <div className="text-center">
//             <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Welcome back</h2>
//             <p className="mt-2 text-sm text-gray-600">
//               Don't have an account?{' '}
//               <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors">
//                 Sign up
//               </a>
//             </p>
//           </div>

//           <SocialLogin />
//           <LoginForm />
//         </div>
//       </div>
//     </div>
  
//    </>
  // )
// =======
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <WelcomeCard  
              name="Darlee"
              meetings={4}
              imageUrl="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60"
            />
            <StatisticsCard />
            <HolidaysCard />
          </div>
          <AttendanceCard />
        </div>
        <NotificationsCard />
        <ProjectsCard />
        <EmployeeCard />
        <PolicyCard />
        <button className="fixed bottom-6 right-6 bg-orange-400 p-3 rounded-full text-white shadow-lg hover:bg-orange-500 transition-colors">
          <Settings2 size={24} />
        </button>
      </div>
    </div>
  );
// >>>>>>> c21d0eb78ee51806047128e80a5ec7128c94f799
}

export default App;