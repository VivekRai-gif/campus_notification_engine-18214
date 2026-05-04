import { Calendar, MapPin, Clock, Users, ArrowRight, Filter } from 'lucide-react';
import { useState } from 'react';

const mockEvents = [
  {
    id: 1,
    title: 'TechX Hackathon 2026',
    type: 'Competition',
    date: 'May 20',
    time: '9:00 AM — 9:00 PM',
    location: 'Innovation Lab, Block C',
    attendees: 250,
    color: 'purple',
    badge: '🔥 Hot'
  },
  {
    id: 2,
    title: 'Web3 & The Future of Finance',
    type: 'Tech Talk',
    date: 'May 15',
    time: '3:00 PM — 5:00 PM',
    location: 'Main Auditorium',
    attendees: 120,
    color: 'blue',
    badge: null
  },
  {
    id: 3,
    title: 'Microsoft Recruitment Drive',
    type: 'Placement',
    date: 'May 22',
    time: '10:00 AM — 4:00 PM',
    location: 'Placement Cell, Block A',
    attendees: 80,
    color: 'green',
    badge: '🟢 New'
  },
  {
    id: 4,
    title: 'Annual Cultural Fest — Euphoria',
    type: 'Cultural',
    date: 'May 28',
    time: 'All Day',
    location: 'Open Ground',
    attendees: 500,
    color: 'pink',
    badge: null
  },
  {
    id: 5,
    title: 'Mid-Term Examinations Begin',
    type: 'Academic',
    date: 'May 18',
    time: '9:00 AM',
    location: 'CS Department',
    attendees: null,
    color: 'red',
    badge: '🔴 Urgent'
  },
  {
    id: 6,
    title: 'AI/ML Workshop — Beginner Friendly',
    type: 'Workshop',
    date: 'May 25',
    time: '2:00 PM — 6:00 PM',
    location: 'Lab 302, Block B',
    attendees: 45,
    color: 'teal',
    badge: null
  }
];

const colorMap = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'card-glow-purple' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'card-glow-blue' },
  green: { bg: 'bg-green-50', text: 'text-green-600', border: 'card-glow-green' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-600', border: 'card-glow-purple' },
  red: { bg: 'bg-red-50', text: 'text-red-600', border: 'card-glow-red' },
  teal: { bg: 'bg-brand-teal/10', text: 'text-brand-teal', border: 'card-glow-teal' }
};

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('All');
  const types = ['All', 'Tech Talk', 'Competition', 'Placement', 'Academic', 'Workshop', 'Cultural'];
  
  const filtered = activeFilter === 'All' ? mockEvents : mockEvents.filter(e => e.type === activeFilter);

  return (
    <div className="max-w-5xl mx-auto pb-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-10 animate-fade-in-up">
        <div>
          <p className="text-sm font-semibold text-brand-teal uppercase tracking-widest mb-2">Calendar</p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Upcoming Events</h1>
          <p className="text-muted-foreground">Don't miss what's happening on campus.</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">{filtered.length} events</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10 animate-fade-in-up-delay-1">
        {types.map(type => (
          <button 
            key={type} 
            onClick={() => setActiveFilter(type)}
            className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeFilter === type 
                ? 'bg-[#1c1c1c] text-white shadow-md scale-105' 
                : 'bg-white border border-border text-muted-foreground hover:bg-[#F5F2EB] hover:text-[#1c1c1c]'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 animate-fade-in-up-delay-2">
        {filtered.map((event) => {
          const colors = colorMap[event.color];
          return (
            <div key={event.id} className={`group bg-white border border-border rounded-2xl p-6 card-lift ${colors.border} cursor-pointer relative`}>
              {event.badge && (
                <div className="absolute -top-3 -right-3 bg-white border border-border text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {event.badge}
                </div>
              )}
              <div className="flex items-start justify-between mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${colors.bg} ${colors.text}`}>
                  <Calendar className="w-3 h-3" /> {event.type}
                </span>
                <span className="font-serif text-2xl font-bold text-[#1c1c1c]/80">{event.date.split(' ')[1]}</span>
              </div>
              <h3 className="font-serif text-xl mb-4 group-hover:text-brand-teal transition-colors">{event.title}</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 flex-shrink-0" /> {event.time}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 flex-shrink-0" /> {event.location}
                </div>
                {event.attendees && (
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 flex-shrink-0" /> {event.attendees} registered
                  </div>
                )}
              </div>
              <div className="mt-6 pt-4 border-t border-border/50">
                <button className="btn-expand bg-brand-teal text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider w-full flex items-center justify-center gap-2">
                  RSVP Now <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="p-16 border border-dashed border-border rounded-2xl bg-[#F5F2EB] flex flex-col items-center justify-center text-center animate-fade-in-up">
          <Calendar className="w-12 h-12 text-muted-foreground/40 mb-4" />
          <h3 className="font-serif text-2xl mb-2">No events found</h3>
          <p className="text-muted-foreground">Try a different filter to discover more.</p>
        </div>
      )}
    </div>
  );
}
