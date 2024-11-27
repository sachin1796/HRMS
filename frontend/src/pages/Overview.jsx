import React from 'react';
import { 
  CalendarCheckIcon, 
  ClipboardListIcon, 
  DollarSignIcon, 
  FileTextIcon 
} from 'lucide-react';

const OverviewCard = ({ title, description, icon: Icon, bgColor }) => (
  <div 
    className={`
      ${bgColor} 
      text-white 
      rounded-xl 
      shadow-lg 
      overflow-hidden 
      transform 
      transition-all 
      duration-300 
      hover:-translate-y-2 
      hover:shadow-2xl
    `}
  >
    <div className="p-6 flex items-center">
      <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
        <Icon className="w-8 h-8" />
      </div>
      <div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm opacity-80">{description}</p>
      </div>
    </div>
  </div>
);

const Overview = () => {
  const overviewCards = [
    {
      title: 'Attendance',
      description: 'Track your attendance for the current and previous months.',
      icon: CalendarCheckIcon,
      bgColor: 'bg-blue-600',
    },
    {
      title: 'Leaves',
      description: 'View leave balance and history.',
      icon: FileTextIcon,
      bgColor: 'bg-green-600',
    },
    {
      title: 'Payroll',
      description: 'Access your monthly salary slips.',
      icon: DollarSignIcon,
      bgColor: 'bg-yellow-600',
    },
    {
      title: 'Tasks',
      description: 'View your daily tasks with deadlines.',
      icon: ClipboardListIcon,
      bgColor: 'bg-red-600',
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-sm rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Dashboard Overview
        </h1>
        <p className="text-gray-600">
          Welcome to your personal HRMS dashboard. Get a quick overview of your work metrics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {overviewCards.map((card, index) => (
          <OverviewCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Overview;