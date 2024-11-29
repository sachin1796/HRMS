// import React, { useState } from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { 
//   HomeIcon, 
//   ClipboardListIcon, 
//   DollarSignIcon, 
//   CalendarCheckIcon, 
//   LayoutGridIcon,
//   MenuIcon,
//   XIcon,
//   ChevronDownIcon,
//   ChevronUpIcon
// } from 'lucide-react';
// import Navbar from './Navbar';

// const Layout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState(null); // Track the active dropdown

//   const navItems = [
//     { 
//       name: 'Attendance', 
//       path: '/attendance', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Client', 
//       path: '/client', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Performance Indicator', 
//       path: '/PerformanceIndicator', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
  
//     { 
//       name: 'Performance Appraisal', 
//       path: '/PerformanceAppraisal', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Goal Tracking', 
//       path: '/GoalTracking', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Goal Type', 
//       path: '/GoalType', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'TrainingList', 
//       path: '/TrainingList', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'TrainingType', 
//       path: '/TrainingType', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Trainers', 
//       path: '/Trainers', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Promotions', 
//       path: '/Promotions', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Resignations', 
//       path: '/Resignations', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Terminations', 
//       path: '/Terminations', 
//       icon: <CalendarCheckIcon className="w-5 h-5 mr-3" /> 
//     },

//     { 
//       name: 'Payroll', 
//       path: '/payroll', 
//       icon: <DollarSignIcon className="w-5 h-5 mr-3" /> 
//     },
//     { 
//       name: 'Custom Dashboard', 
//       path: '/custom-dashboard', 
//       icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
//     }
//   ];

//   const toggleDropdown = (dropdownName) => {
//     setActiveDropdown(prevState => (prevState === dropdownName ? null : dropdownName));
//   };

//   return (
//     <>
//       <div className="flex h-screen bg-gray-900">
//         {/* Sidebar Toggle Button */}
//         <button 
//           className="fixed top-4 left-4 z-50 md:hidden"
//           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//         >
//           {isSidebarOpen ? <XIcon /> : <MenuIcon />}
//         </button>

//         {/* Sidebar */}
//         <aside 
//           className={`
//             fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 shadow-xl 
//             transform transition-transform duration-300 ease-in-out
//             ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
//             md:relative md:translate-x-0
//           `}
//         >
//           <div className="flex items-center justify-center h-20 shadow-md">
//             <Link to="/overview" className="text-3xl font-bold text-orange-600">HRMS</Link>
//           </div>
          
//           <nav className="mt-10">
//             {/* Main Dropdown */}
//             <div>
//               <button
//                 className="flex items-center w-full px-6 py-4 text-gray-400 
//                 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
//                 border-l-4 border-transparent hover:border-blue-500"
//                 onClick={() => toggleDropdown('main')}
//               >
//                 <HomeIcon className="w-5 h-5 mr-3" />
//                 Main
//                 {activeDropdown === 'main' ? (
//                   <ChevronUpIcon className="ml-auto w-5 h-5" />
//                 ) : (
//                   <ChevronDownIcon className="ml-auto w-5 h-5" />
//                 )}
//               </button>

//               {/* Main Dropdown Menu */}
//               {activeDropdown === 'main' && (
//                 <div className="ml-6">
//                   <Link 
//                     to="/overview" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Admin Dashboard
//                   </Link>
//                   <Link 
//                     to="/dashboard" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Employee Dashboard
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Apps Dropdown */}
//             <div>
//               <button
//                 className="flex items-center w-full px-6 py-4 text-gray-400 
//                 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
//                 border-l-4 border-transparent hover:border-blue-500"
//                 onClick={() => toggleDropdown('apps')}
//               >
//                 <LayoutGridIcon className="w-5 h-5 mr-3" />
//                 Apps
//                 {activeDropdown === 'apps' ? (
//                   <ChevronUpIcon className="ml-auto w-5 h-5" />
//                 ) : (
//                   <ChevronDownIcon className="ml-auto w-5 h-5" />
//                 )}
//               </button>

//               {/* Apps Dropdown Menu */}
//               {activeDropdown === 'apps' && (
//                 <div className="ml-6">
//                   <Link 
//                     to="/chat" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Chat
//                   </Link>
//                   <Link 
//                     to="/email" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Email
//                   </Link>
//                   <Link 
//                     to="/events" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Calendar
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Project Dropdown */}
//             <div>
//               <button
//                 className="flex items-center w-full px-6 py-4 text-gray-400 
//                 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
//                 border-l-4 border-transparent hover:border-blue-500"
//                 onClick={() => toggleDropdown('projects')}
//               >
//                 <LayoutGridIcon className="w-5 h-5 mr-3" />
//                 Project
//                 {activeDropdown === 'projects' ? (
//                   <ChevronUpIcon className="ml-auto w-5 h-5" />
//                 ) : (
//                   <ChevronDownIcon className="ml-auto w-5 h-5" />
//                 )}
//               </button>

//               {/* Project Dropdown Menu */}
//               {activeDropdown === 'projects' && (
//                 <div className="ml-6">
//                   <Link 
//                     to="/projects" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Projects
//                   </Link>
//                   <Link 
//                     to="/tasks" 
//                     className="block px-6 py-2 text-gray-400 
//                       hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
//                     onClick={() => setIsSidebarOpen(false)}
//                   >
//                     Tasks
//                   </Link>
//                 </div>
//               )}
//             </div>

//             {/* Other navigation items */}
//             {navItems.map((item) => (
//               <Link 
//                 key={item.path} 
//                 to={item.path}
//                 className="flex items-center px-6 py-4 text-gray-400 
//                 hover:bg-blue-50 hover:text-blue-600 
//                 transition-colors duration-200 
//                 border-l-4 border-transparent 
//                 hover:border-blue-500"
//                 onClick={() => setIsSidebarOpen(false)}
//               >
//                 {item.icon}
//                 {item.name}
//               </Link>
//             ))}
//           </nav>
//         </aside>

//         {/* Background overlay when sidebar is open */}
//         {isSidebarOpen && (
//           <div 
//             className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
//             onClick={() => setIsSidebarOpen(false)}
//           />
//         )}

//         <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-gray-100 z-10">
//           <Outlet />
//         </main>
//       </div>

//       {/* Navbar */}
//       <div className="fixed inset-x-0 top-0 z-20">
//         <Navbar />
//       </div>
//     </>
//   );
// };

// export default Layout;


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
  const [activeSubDropdown, setActiveSubDropdown] = useState(null); // Track the active nested dropdown

  const navItems = [
    { 
      name: 'Payroll', 
      path: '/payroll', 
      icon: <DollarSignIcon className="w-5 h-5 mr-3" /> 
    },
    { 
      name: 'Custom Dashboard', 
      path: '/custom-dashboard', 
      icon: <LayoutGridIcon className="w-5 h-5 mr-3" /> 
    }
  ];

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(prevState => (prevState === dropdownName ? null : dropdownName));
  };

  const toggleSubDropdown = (subDropdownName) => {
    setActiveSubDropdown(prevState => (prevState === subDropdownName ? null : subDropdownName));
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
          className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 shadow-xl 
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

            {/* Performance Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('performance')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Performance
                {activeDropdown === 'performance' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Performance Dropdown Menu */}
              {activeDropdown === 'performance' && (
                <div className="ml-6">
                  {/* Nested Performance Dropdown */}
                  <button
                    className="flex items-center w-full px-6 py-4 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                      border-l-4 border-transparent hover:border-blue-500"
                    onClick={() => toggleSubDropdown('performanceSub')}
                  >
                    Performance
                    {activeSubDropdown === 'performanceSub' ? (
                      <ChevronUpIcon className="ml-auto w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="ml-auto w-5 h-5" />
                    )}
                  </button>

                  {/* Nested Performance Dropdown Menu */}
                  {activeSubDropdown === 'performanceSub' && (
                    <div className="ml-6">
                      <Link 
                        to="/PerformanceIndicator" 
                        className="block px-6 py-2 text-gray-400 
                          hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Performance Indicator
                      </Link>
                      <Link 
                        to="/PerformanceAppraisal" 
                        className="block px-6 py-2 text-gray-400 
                          hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Performance Appraisal
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Goals Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('goals')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Goals
                {activeDropdown === 'goals' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Goals Dropdown Menu */}
              {activeDropdown === 'goals' && (
                <div className="ml-6">
                  {/* Nested Goals Dropdown */}
                  <button
                    className="flex items-center w-full px-6 py-4 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                      border-l-4 border-transparent hover:border-blue-500"
                    onClick={() => toggleSubDropdown('goalsSub')}
                  >
                    Goal Management
                    {activeSubDropdown === 'goalsSub' ? (
                      <ChevronUpIcon className="ml-auto w-5 h-5" />
                    ) : (
                      <ChevronDownIcon className="ml-auto w-5 h-5" />
                    )}
                  </button>

                  {/* Nested Goals Dropdown Menu */}
                  {activeSubDropdown === 'goalsSub' && (
                    <div className="ml-6">
                      <Link 
                        to="/GoalTracking" 
                        className="block px-6 py-2 text-gray-400 
                          hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Goal Tracking
                      </Link>
                      <Link 
                        to="/GoalType" 
                        className="block px-6 py-2 text-gray-400 
                          hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsSidebarOpen(false)}
                      >
                        Goal Type
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Training Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('training')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Training
                {activeDropdown === 'training' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Training Dropdown Menu */}
              {activeDropdown === 'training' && (
                <div className="ml-6">
                  <Link 
                    to="/TrainingList" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Training List
                  </Link>
                  <Link 
                    to="/TrainingType" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Training Type
                  </Link>
                </div>
              )}
            </div>

            {/* Resignations Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('resignations')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Resignations
                {activeDropdown === 'resignations' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Resignations Dropdown Menu */}
              {activeDropdown === 'resignations' && (
                <div className="ml-6">
                  <Link 
                    to="/Resignations" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Resignations
                  </Link>
                </div>
              )}
            </div>

            {/* Terminations Dropdown */}
            <div>
              <button
                className="flex items-center w-full px-6 py-4 text-gray-400 
                hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 
                border-l-4 border-transparent hover:border-blue-500"
                onClick={() => toggleDropdown('terminations')}
              >
                <ClipboardListIcon className="w-5 h-5 mr-3" />
                Terminations
                {activeDropdown === 'terminations' ? (
                  <ChevronUpIcon className="ml-auto w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="ml-auto w-5 h-5" />
                )}
              </button>

              {/* Terminations Dropdown Menu */}
              {activeDropdown === 'terminations' && (
                <div className="ml-6">
                  <Link 
                    to="/Terminations" 
                    className="block px-6 py-2 text-gray-400 
                      hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    Terminations
                  </Link>
                </div>
              )}
            </div>

            {/* Other navigation items */}
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="flex items-center px-6 py-4 text-gray-400 
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

        {/* Background overlay when sidebar is open */}
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 overflow-y-auto p-6 md:p-10 bg-gray-100 z-10">
          <Outlet />
        </main>
      </div>

      {/* Navbar */}
      <div className="fixed inset-x-0 top-0 z-20">
        <Navbar />
      </div>
    </>
  );
};

export default Layout;




