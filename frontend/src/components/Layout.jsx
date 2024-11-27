import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { 
  HomeIcon, 
  ClipboardListIcon, 
  DollarSignIcon, 
  CalendarCheckIcon, 
  LayoutGridIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';

const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    { 
      name: 'Overview', 
      path: '/', 
      icon: <HomeIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Attendance', 
      path: '/attendance', 
      icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Payroll', 
      path: '/payroll', 
      icon: <DollarSignIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Tasks', 
      path: '/tasks', 
      icon: <ClipboardListIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Custom Dashboard', 
      path: '/custom-dashboard', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    }
  ];

  return (
    <div className="flex h-screen bg-gray-100">
    
      <button 
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <XIcon /> : <MenuIcon />}
      </button>

   
      <aside 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-xl 
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          md:relative md:translate-x-0
        `}
      >
        <div className="flex items-center justify-center h-20 shadow-md">
          <h1 className="text-2xl font-bold text-blue-600">HRMS</h1>
        </div>
        
        <nav className="mt-10">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              to={item.path}
              className="flex items-center px-6 py-4 text-gray-700 
              hover:bg-blue-50 hover:text-blue-600 
              transition-colors duration-200 
              border-l-4 border-transparent 
              hover:border-blue-500"
              onClick={() => setIsSidebarOpen(false)}
            >
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>

      
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      
      <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;