import { Bell, Calendar, Briefcase, GraduationCap, CheckCircle2, Circle } from 'lucide-react';
import { useState } from 'react';

const mockNotifications = [
  {
    id: 1,
    type: 'Placements',
    title: 'Google Off-Campus Drive 2026',
    description: 'Registration closes in 48 hours. Ensure your resume is updated on the portal before applying.',
    time: '2 hours ago',
    urgent: true,
    read: false,
    icon: Briefcase,
    color: 'text-brand-teal',
    bg: 'bg-brand-teal/10'
  },
  {
    id: 2,
    type: 'Academics',
    title: 'Mid-Semester Exam Schedule Published',
    description: 'The schedule for the upcoming mid-semester examinations has been published. Please check your personalized timetable.',
    time: '5 hours ago',
    urgent: false,
    read: false,
    icon: GraduationCap,
    color: 'text-purple-600',
    bg: 'bg-purple-100'
  },
  {
    id: 3,
    type: 'Events',
    title: 'TechX Hackathon 2026 - Registrations Open',
    description: 'Join the biggest campus hackathon of the year. Build, network, and win prizes worth $10,000.',
    time: '1 day ago',
    urgent: false,
    read: true,
    icon: Calendar,
    color: 'text-blue-600',
    bg: 'bg-blue-100'
  },
  {
    id: 4,
    type: 'Administrative',
    title: 'Library Overdue Notice',
    description: 'You have 2 books that are overdue. Please return them to avoid further fines.',
    time: '2 days ago',
    urgent: true,
    read: true,
    icon: Bell,
    color: 'text-red-600',
    bg: 'bg-red-100'
  }
];

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const filteredNotifications = activeFilter === 'All' 
    ? notifications 
    : notifications.filter(n => n.type === activeFilter);

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const toggleReadStatus = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: !n.read } : n
    ));
  };

  return (
    <div className="max-w-4xl mx-auto pb-20 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Notifications</h1>
          <p className="text-muted-foreground">Stay on top of your campus life.</p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="text-sm font-semibold text-brand-teal hover:text-[#488e88] flex items-center gap-2 transition-colors"
        >
          <CheckCircle2 className="w-4 h-4" /> Mark all as read
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {['All', 'Academics', 'Events', 'Placements', 'Administrative'].map(filter => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeFilter === filter 
                ? 'bg-[#1c1c1c] text-white shadow-md scale-105' 
                : 'bg-white border border-border text-muted-foreground hover:bg-[#F5F2EB] hover:text-[#1c1c1c]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notif) => {
            const Icon = notif.icon;
            return (
              <div 
                key={notif.id} 
                onClick={() => toggleReadStatus(notif.id)}
                className={`group flex items-start gap-6 p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-xl hover:-translate-y-1 ${
                  notif.read 
                    ? 'bg-white/60 border-border/50 opacity-70 hover:opacity-100 hover:bg-white' 
                    : 'bg-white border-border shadow-sm ring-1 ring-black/5'
                }`}
              >
                {/* Icon Circle */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${notif.bg} transition-transform group-hover:scale-110`}>
                  <Icon className={`w-6 h-6 ${notif.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${notif.color}`}>
                        {notif.type}
                      </span>
                      {notif.urgent && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest shadow-sm">
                          Urgent
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground">{notif.time}</span>
                  </div>
                  <h3 className={`font-serif text-xl mb-2 transition-colors ${notif.read ? 'text-[#1c1c1c]/70 group-hover:text-[#1c1c1c]' : 'text-[#1c1c1c]'}`}>
                    {notif.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                    {notif.description}
                  </p>
                </div>

                {/* Read Status Indicator */}
                <div className="flex-shrink-0 mt-2 transition-transform duration-300">
                  {notif.read ? (
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground/30" />
                  ) : (
                    <Circle className="w-5 h-5 text-brand-teal fill-brand-teal/10" />
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-16 border border-dashed border-border rounded-2xl bg-[#F5F2EB] flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
                <Bell className="w-8 h-8 text-muted-foreground/50" />
            </div>
            <h3 className="font-serif text-2xl mb-2">All caught up!</h3>
            <p className="text-muted-foreground">You have no new notifications in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
