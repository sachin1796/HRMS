import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  HomeIcon, 
  ClipboardListIcon, 
  DollarSignIcon, 
  CalendarCheckIcon, 
  LayoutGridIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from 'lucide-react';
import Navbar from './Navbar';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown

  const navItems = [
    { 
      name: 'Attendance (Employee)', 
      path: '/employeeattendance', 
      icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Attendance (Admin)', 
      path: '/adminattendance', 
      icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Client', 
      path: '/client', 
      icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Performance', 
      path: '/performance', 
      icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Payroll', 
      path: '/payroll', 
      icon: <DollarSignIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Custom Dashboard', 
      path: '/custom-dashboard', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Sales', 
      path: '/sale', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'OvertimeTracker', 
      path: '/overtime', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'DailyScheduling', 
      path: '/dailyscheduling', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'TimeSheet', 
      path: '/timesheet', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'LeaveSystem', 
      path: '/leavesystem', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'AdminLeaveSystem', 
      path: '/adminleaveportal', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'AllEmployee', 
      path: '/allemployee', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Departments', 
      path: '/department', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Designations', 
      path: '/designations', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Holiday', 
      path: '/holiday', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    },
  ];

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(prevState => (prevState === dropdownName ? null : dropdownName));
  };

  return (
    <>
      <div className="flex h-screen bg-gray-900">
        {/* Sidebar Toggle Button */}
        <button 
          className="fixed top-4 left-4 z-50 md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <XIcon /> : <MenuIcon />}
        </button>

        {/* Sidebar */}
        <aside 
          className={`
            fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 shadow-xl 
            transform transition-transform duration-300 ease-in-out
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:relative md:translate-x-0
          `}
        >
          <div className="flex items-center justify-center h-20 shadow-md">
            <Link to="/overview" className="text-3xl font-bold text-orange-600">HRMS</Link>
          </div>
          
          <nav className="mt-10">
            {/* Main Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('main')}
              >
                <HomeIcon className="w-5 h-5 mr-3" />
                Main
                {activeDropdown === 'main' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Main Dropdown Menu */}
              {activeDropdown === 'main' && (
                <div className="ml-6">
                  <Link 
                    to="/overview" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Admin Dashboard
                  </Link>
                  <Link 
                    to="/dashboard" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Employee Dashboard
                  </Link>
                </div>
              )}
            </div>

            {/* Employees Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('employees')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Employees
                {activeDropdown === 'employees' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Employees Dropdown Menu */}
              {activeDropdown === 'employees' && (
                <div className="ml-6">
                  {/* Add Attendance Links */}
                  <Link 
                    to="/employeeattendance" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Attendance (Employee)
                  </Link>
                  <Link 
                    to="/adminattendance" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Attendance (Admin)
                  </Link>

                  {/* Existing Links */}
                  <Link 
                    to="/overtime" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Overtime Tracker
                  </Link>
                  <Link 
                    to="/dailyscheduling" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Daily Scheduling
                  </Link>
                  <Link 
                    to="/timesheet" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Time Sheet
                  </Link>
                  <Link 
                    to="/leavesystem" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Leave System
                  </Link>
                  <Link 
                    to="/adminleaveportal" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Admin Leave System
                  </Link>
                  <Link 
                    to="/allemployee" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    All Employees
                  </Link>
                  {/* Added new links for Holiday, Designations, and Departments */}
                  <Link 
                    to="/holiday" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Holiday
                  </Link>
                  <Link 
                    to="/designations" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Designations
                  </Link>
                  <Link 
                    to="/department" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Departments
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </aside>
        
        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100">
          <Navbar />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
