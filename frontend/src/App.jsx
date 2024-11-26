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

function App() {
  return (
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
}

export default App;