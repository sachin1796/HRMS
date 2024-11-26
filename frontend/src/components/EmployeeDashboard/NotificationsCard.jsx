import React from 'react';
import { Bell, Calendar } from 'lucide-react';

export default function NotificationsCard() {
  const notifications = [
    {
      id: 'hr',
      avatar: 'HR',
      title: 'Your leave request has been',
      time: '02:10 PM',
      date: '21 Apr 2024'
    },
    {
      id: 'er',
      avatar: 'ER',
      title: "You're enrolled in upcom....",
      time: '12:40 PM',
      date: '21 Apr 2024'
    },
    {
      id: 'sm',
      avatar: 'SM',
      title: 'Your annual compliance trai',
      time: '11:00 AM',
      date: '21 Apr 2024'
    },
    {
      id: 'jessica',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60',
      title: 'Jessica has requested feedba',
      time: '10:30 AM',
      date: '21 Apr 2024'
    },
    {
      id: 'dt',
      avatar: 'DT',
      title: 'Gentle remainder about train',
      time: '09:00 AM',
      date: '21 Apr 2024'
    },
    {
      id: 'au',
      avatar: 'AU',
      title: 'Our HR system will be down',
      time: '11:50 AM',
      date: '21 Apr 2024'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Important</h2>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-700">
            <Bell size={20} />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <Calendar size={20} />
          </button>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="text-orange-500 border-b-2 border-orange-500 pb-2">
          Notifications
        </button>
        <button className="text-gray-400 hover:text-gray-600">
          Schedules
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div key={notification.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
            {notification.id === 'jessica' ? (
              <img 
                src={notification.avatar} 
                alt={notification.title}
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                notification.id === 'hr' ? 'bg-red-100 text-red-600' :
                notification.id === 'er' ? 'bg-blue-100 text-blue-600' :
                notification.id === 'sm' ? 'bg-orange-100 text-orange-600' :
                notification.id === 'dt' ? 'bg-purple-100 text-purple-600' :
                'bg-gray-100 text-gray-600'
              }`}>
                {notification.avatar}
              </div>
            )}
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{notification.title}</p>
              <div className="flex gap-2 text-sm text-gray-500">
                <span>{notification.time}</span>
                <span>•</span>
                <span>{notification.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
