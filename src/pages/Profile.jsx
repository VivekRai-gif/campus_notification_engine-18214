import { Calendar, Briefcase, GraduationCap, Shield, Megaphone, Edit3, ArrowRight } from 'lucide-react';
import { useState } from 'react';

const preferences = [
  { id: 'academic', label: 'Academic Updates', desc: 'Grades, deadlines, schedule changes', icon: GraduationCap, defaultOn: true },
  { id: 'placement', label: 'Placement Alerts', desc: 'Internship & job opportunities', icon: Briefcase, defaultOn: true },
  { id: 'events', label: 'Events & Fests', desc: 'Hackathons, cultural fests, workshops', icon: Calendar, defaultOn: true },
  { id: 'admin', label: 'Administrative', desc: 'Library fines, fee reminders', icon: Shield, defaultOn: false },
  { id: 'clubs', label: 'Club Announcements', desc: 'Coding club, debate club, etc.', icon: Megaphone, defaultOn: false },
];

export default function Profile() {
  const [toggles, setToggles] = useState(
    Object.fromEntries(preferences.map(p => [p.id, p.defaultOn]))
  );

  const toggle = (id) => {
    setToggles(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const activeCount = Object.values(toggles).filter(Boolean).length;

  return (
    <div className="max-w-3xl mx-auto pb-20">
      {/* Header */}
      <div className="mb-10 animate-fade-in-up">
        <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-2">Settings</p>
        <h1 className="font-serif text-4xl md:text-5xl tracking-tight">Your Profile</h1>
      </div>

      {/* Profile Card */}
      <div className="bg-white border border-border rounded-2xl p-8 mb-8 card-glow-purple animate-fade-in-up-delay-1 relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 animate-gradient"></div>
        <div className="flex items-center gap-6">
          <div className="relative group">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 overflow-hidden ring-2 ring-purple-200 flex-shrink-0 group-hover:ring-purple-400 transition-all">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <button className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg flex items-center justify-center text-white shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          </div>
          <div>
            <h2 className="font-serif text-2xl mb-1">Vivek Sharma</h2>
            <p className="text-muted-foreground text-sm">Computer Science &middot; Year 3</p>
            <p className="text-xs text-purple-600 font-semibold mt-1 uppercase tracking-wider">vivek.sharma@university.edu</p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8 animate-fade-in-up-delay-2">
        {[
          { value: '47', label: 'Notifications Read', color: 'text-purple-600' },
          { value: '8', label: 'Events Attended', color: 'text-blue-600' },
          { value: '3', label: 'Placements Applied', color: 'text-green-600' }
        ].map((stat, i) => (
          <div key={i} className="bg-white border border-border rounded-2xl p-5 text-center card-lift cursor-default">
            <div className={`text-3xl font-bold font-serif ${stat.color} mb-1`}>{stat.value}</div>
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
      
      {/* Notification Preferences */}
      <div className="animate-fade-in-up-delay-3">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl">Notification Preferences</h3>
          <span className="text-xs font-bold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{activeCount} active</span>
        </div>
        <div className="space-y-3">
          {preferences.map((pref, index) => {
            const Icon = pref.icon;
            const isOn = toggles[pref.id];
            return (
              <div 
                key={pref.id} 
                onClick={() => toggle(pref.id)}
                className="flex justify-between items-center p-5 bg-white border border-border rounded-2xl cursor-pointer card-glow-purple group transition-all duration-300"
                style={{ animation: `fadeInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.08}s forwards`, opacity: 0 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isOn 
                      ? 'bg-gradient-to-br from-purple-600 to-indigo-500 text-white shadow-md shadow-purple-500/20' 
                      : 'bg-[#F5F2EB] text-muted-foreground'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className={`font-semibold text-sm transition-colors ${isOn ? 'text-[#1c1c1c]' : 'text-muted-foreground'}`}>{pref.label}</div>
                    <div className="text-xs text-muted-foreground">{pref.desc}</div>
                  </div>
                </div>
                <div className={`w-12 h-7 rounded-full relative transition-all duration-300 ${isOn ? 'bg-gradient-to-r from-purple-600 to-indigo-500 shadow-inner' : 'bg-[#d4d0c8]'}`}>
                  <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-sm ${isOn ? 'translate-x-[22px]' : 'translate-x-[3px]'}`} style={{ transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)' }}></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
