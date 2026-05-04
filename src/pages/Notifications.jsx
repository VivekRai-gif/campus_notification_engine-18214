import { Bell, Calendar, Briefcase, GraduationCap, CheckCircle2, Circle, ArrowRight } from 'lucide-react';
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
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    glow: 'card-glow-purple'
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
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    glow: 'card-glow-blue'
  },
  {
    id: 3,
    type: 'Events',
    title: 'TechX Hackathon 2026 — Registrations Open',
    description: 'Join the biggest campus hackathon of the year. Build, network, and win prizes worth $10,000.',
    time: '1 day ago',
    urgent: false,
    read: true,
    icon: Calendar,
    color: 'text-green-600',
    bg: 'bg-green-50',
    glow: 'card-glow-green'
  },
  {
    id: 4,
    type: 'Administrative',
    title: 'Library Overdue Notice',
    description: 'You have 2 books that are overdue. Please return them to the central library to avoid further fines.',
    time: '2 days ago',
    urgent: true,
    read: true,
    icon: Bell,
    color: 'text-red-600',
    bg: 'bg-red-50',
    glow: 'card-glow-red'
  },
  {
    id: 5,
    type: 'Placements',
    title: 'Microsoft — SDE Intern Summer 2026',
    description: 'Applications now open. Minimum CGPA 7.5 required. Online assessment scheduled for May 25.',
    time: '3 days ago',
    urgent: false,
    read: false,
    icon: Briefcase,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    glow: 'card-glow-purple'
  }
];

export default function Notifications() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [notifications, setNotifications] = useState(mockNotifications);
  
  const filteredNotifications = activeFilter === 'All' 
    ? notifications 
    : notifications.filter(n => n.type === activeFilter);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAllAsRead = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  const toggleReadStatus = (id) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: !n.read } : n
    ));
  };

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 animate-fade-in-up">
        <div>
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-2">Inbox</p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Notifications</h1>
          <p className="text-muted-foreground">
            {unreadCount > 0 ? (
              <>You have <span className="text-purple-600 font-semibold">{unreadCount} unread</span> notifications.</>
            ) : (
              <>All caught up! You're in the clear.</>
            )}
          </p>
        </div>
        <button 
          onClick={markAllAsRead}
          className="btn-expand bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md shadow-purple-500/20"
        >
          <CheckCircle2 className="w-3.5 h-3.5" /> Mark All Read
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up-delay-1">
        {['All', 'Academics', 'Events', 'Placements', 'Administrative'].map(filter => (
          <button 
            key={filter} 
            onClick={() => setActiveFilter(filter)}
            className={`filter-pill px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === filter 
                ? 'filter-pill-active bg-[#1c1c1c] text-white shadow-md' 
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
          filteredNotifications.map((notif, index) => {
            const Icon = notif.icon;
            return (
              <div 
                key={notif.id} 
                onClick={() => toggleReadStatus(notif.id)}
                className={`notif-card group flex items-start gap-5 p-6 rounded-2xl border cursor-pointer ${notif.glow} ${
                  notif.read 
                    ? 'bg-white/60 border-border/50 opacity-70 hover:opacity-100 hover:bg-white' 
                    : 'bg-white border-border shadow-sm ring-1 ring-black/[0.03]'
                }`}
                style={{ animation: `fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s forwards`, opacity: 0 }}
              >
                {/* Icon Circle */}
                <div className={`notif-icon w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${notif.bg}`}>
                  <Icon className={`w-6 h-6 ${notif.color}`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold uppercase tracking-wider ${notif.color}`}>
                        {notif.type}
                      </span>
                      {notif.urgent && (
                        <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase tracking-widest shadow-sm animate-pulse">
                          Urgent
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground flex-shrink-0">{notif.time}</span>
                  </div>
                  <h3 className={`font-serif text-lg mb-2 transition-colors leading-snug ${
                    notif.read 
                      ? 'text-[#1c1c1c]/60 group-hover:text-[#1c1c1c]' 
                      : 'text-[#1c1c1c] group-hover:text-purple-600'
                  }`}>
                    {notif.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {notif.description}
                  </p>
                </div>

                {/* Read Status */}
                <div className="flex-shrink-0 mt-2 transition-all duration-300 group-hover:scale-110">
                  {notif.read ? (
                    <CheckCircle2 className="w-5 h-5 text-muted-foreground/30 group-hover:text-green-500 transition-colors" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse-dot shadow-sm shadow-purple-500/50"></div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <div className="p-16 border border-dashed border-border rounded-2xl bg-[#F5F2EB] flex flex-col items-center justify-center text-center animate-fade-in-up">
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
