import { AlertCircle, Briefcase, Calendar as CalendarIcon, ChevronRight, ArrowRight, TrendingUp, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const greeting = (() => {
    const h = new Date().getHours();
    if (h < 12) return 'Good Morning';
    if (h < 17) return 'Good Afternoon';
    return 'Good Evening';
  })();

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      {/* Welcome Section */}
      <div className="flex justify-between items-end animate-fade-in-up">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest">Dashboard</p>
            <span className="inline-flex items-center gap-1 text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">
              <Sparkles className="w-3 h-3" /> Live
            </span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">{greeting}, Vivek</h1>
          <p className="text-muted-foreground">You have <span className="text-gradient font-bold">3 new</span> important updates today.</p>
        </div>
        <div className="flex gap-4 animate-fade-in-up-delay-1">
          <div className="card-lift bg-white border border-border rounded-2xl px-6 py-4 min-w-[140px] cursor-default">
            <div className="text-3xl font-bold text-gradient mb-1 font-serif">12</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Upcoming Events</div>
          </div>
          <div className="card-lift bg-white border border-border rounded-2xl px-6 py-4 min-w-[140px] cursor-default">
            <div className="text-3xl font-bold text-gradient mb-1 font-serif">5</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">New Placements</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center animate-fade-in-up-delay-1">
            <h2 className="font-serif text-2xl">What You Should Not Miss</h2>
            <Link to="/app/notifications" className="btn-expand inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-500/20">
              View All <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {/* Urgent */}
            <div className="scroll-animate group relative bg-white border border-border rounded-2xl p-6 card-glow-red card-lift cursor-pointer">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-red-50 text-red-600 mb-4 uppercase tracking-wider">
                <AlertCircle className="w-3.5 h-3.5" /> Urgent
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-red-600 transition-colors">Course Registration Deadline</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                Last day to register for Fall 2026 electives is tomorrow at 11:59 PM. Make sure you clear all prior dues.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-red-500">
                  <Clock className="w-3.5 h-3.5" /> Due Tomorrow
                </span>
                <button className="btn-dark bg-[#1c1c1c] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Register Now <ArrowRight className="w-3.5 h-3.5 btn-arrow inline-block ml-1" />
                </button>
              </div>
            </div>

            {/* Placement */}
            <div className="scroll-animate delay-1 group relative bg-white border border-border rounded-2xl p-6 card-glow-green card-lift cursor-pointer">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-green-50 text-green-600 mb-4 uppercase tracking-wider">
                <Briefcase className="w-3.5 h-3.5" /> Placement
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-green-600 transition-colors">Google Software Engineering Intern</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                Applications are now open for the summer internship program. Requires 8+ CGPA and strong algorithmic skills.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> Posted 2 days ago
                </span>
                <button className="btn-expand bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-500/15">
                  View Details <ArrowRight className="w-3.5 h-3.5 btn-arrow inline-block ml-1" />
                </button>
              </div>
            </div>

            {/* Trending */}
            <div className="scroll-animate delay-2 group relative bg-white border border-border rounded-2xl p-6 card-glow-purple card-lift cursor-pointer">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-purple-50 text-purple-600 mb-4 uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" /> Trending
              </div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-purple-600 transition-colors">Annual Hackathon — 250+ Registrations</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-2">
                The annual campus hackathon has crossed 250 team registrations. Final date to register your team is May 20.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" /> 6 hours ago
                </span>
                <button className="btn-expand bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md shadow-purple-500/15">
                  Register Team <ArrowRight className="w-3.5 h-3.5 btn-arrow inline-block ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6 animate-fade-in-up-delay-3">
          <h2 className="font-serif text-2xl">Upcoming Events</h2>
          
          <div className="space-y-4">
            {[
              { day: 15, title: 'Web3 & The Future of Finance', type: 'Tech Talk', typeColor: 'text-purple-500', loc: 'Main Auditorium', glow: 'card-glow-purple' },
              { day: 18, title: 'Mid-Term Examination Starts', type: 'Academic', typeColor: 'text-blue-500', loc: 'CS Department', glow: 'card-glow-blue' },
              { day: 22, title: 'Microsoft Recruitment Drive', type: 'Placement', typeColor: 'text-green-500', loc: 'Placement Cell, Block A', glow: 'card-glow-green' }
            ].map((ev, i) => (
              <Link to="/app/events" key={i} className={`bg-white border border-border rounded-2xl p-5 flex gap-4 items-center ${ev.glow} card-lift cursor-pointer group`}>
                <div className="event-date bg-[#F5F2EB] rounded-xl p-3 text-center min-w-[64px]">
                  <div className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">May</div>
                  <div className="text-2xl font-bold font-serif">{ev.day}</div>
                </div>
                <div className="flex-1">
                  <div className={`text-xs font-bold ${ev.typeColor} mb-1 flex items-center gap-1 uppercase tracking-wider`}>
                    <CalendarIcon className="w-3 h-3" /> {ev.type}
                  </div>
                  <h4 className="font-serif text-base mb-1 leading-tight group-hover:text-purple-600 transition-colors">{ev.title}</h4>
                  <div className="text-xs text-muted-foreground">{ev.loc}</div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-border">
            <h2 className="font-serif text-2xl mb-4">Recent Announcements</h2>
            <div className="space-y-4">
              {[
                { title: 'Library Hours Extended', time: '2 hours ago', color: 'bg-blue-400' },
                { title: 'Hackathon Final Results Declared', time: '5 hours ago', color: 'bg-purple-400' },
                { title: 'New Coding Club Meeting — Thursday', time: '1 day ago', color: 'bg-green-400' }
              ].map((ann, i) => (
                <div key={i} className="flex items-start gap-3 group cursor-pointer">
                  <div className={`w-2.5 h-2.5 rounded-full ${ann.color} mt-1.5 flex-shrink-0 animate-pulse-dot`}></div>
                  <div>
                    <h5 className="text-sm font-semibold leading-none mb-1 group-hover:text-purple-600 transition-colors">{ann.title}</h5>
                    <p className="text-xs text-muted-foreground">{ann.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
