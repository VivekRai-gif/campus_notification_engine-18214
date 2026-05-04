import { AlertCircle, Briefcase, Calendar as CalendarIcon, ChevronRight, ArrowRight, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      {/* Welcome Section */}
      <div className="flex justify-between items-end animate-fade-in-up">
        <div>
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-2">Dashboard</p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-2">Good Morning, Vivek</h1>
          <p className="text-muted-foreground">You have <span className="text-purple-600 font-semibold">3 new</span> important updates today.</p>
        </div>
        <div className="flex gap-4 animate-fade-in-up-delay-1">
          <div className="card-lift bg-white border border-border rounded-2xl px-6 py-4 min-w-[140px] cursor-default">
            <div className="text-3xl font-bold text-brand-teal mb-1 font-serif">12</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Upcoming Events</div>
          </div>
          <div className="card-lift bg-white border border-border rounded-2xl px-6 py-4 min-w-[140px] cursor-default">
            <div className="text-3xl font-bold text-brand-teal mb-1 font-serif">5</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">New Placements</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Smart Insights */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center animate-fade-in-up-delay-1">
            <h2 className="font-serif text-2xl">What You Should Not Miss</h2>
            <Link to="/app/notifications" className="btn-expand inline-flex items-center gap-2 bg-brand-teal text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider">
              View All <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
            </Link>
          </div>
          
          <div className="space-y-4">
            {/* Urgent Insight */}
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
                <button className="btn-expand bg-[#1c1c1c] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Register Now <ArrowRight className="w-3.5 h-3.5 btn-arrow inline-block ml-1" />
                </button>
              </div>
            </div>

            {/* Placement Insight */}
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
                <button className="btn-expand bg-brand-teal text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  View Details <ArrowRight className="w-3.5 h-3.5 btn-arrow inline-block ml-1" />
                </button>
              </div>
            </div>

            {/* Trending Insight */}
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
                <button className="btn-expand bg-brand-teal text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Register Team <ArrowRight className="w-3.5 h-3.5 btn-arrow inline-block ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Events & Feed */}
        <div className="space-y-6 animate-fade-in-up-delay-3">
          <h2 className="font-serif text-2xl">Upcoming Events</h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-border rounded-2xl p-5 flex gap-4 items-center card-glow-purple card-lift cursor-pointer group">
              <div className="bg-[#F5F2EB] rounded-xl p-3 text-center min-w-[64px]">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">May</div>
                <div className="text-2xl font-bold font-serif">15</div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-purple-500 mb-1 flex items-center gap-1 uppercase tracking-wider">
                  <CalendarIcon className="w-3 h-3" /> Tech Talk
                </div>
                <h4 className="font-serif text-base mb-1 leading-tight group-hover:text-brand-teal transition-colors">Web3 & The Future of Finance</h4>
                <div className="text-xs text-muted-foreground">Main Auditorium</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
            </div>

            <div className="bg-white border border-border rounded-2xl p-5 flex gap-4 items-center card-glow-blue card-lift cursor-pointer group">
              <div className="bg-[#F5F2EB] rounded-xl p-3 text-center min-w-[64px]">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">May</div>
                <div className="text-2xl font-bold font-serif">18</div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-blue-500 mb-1 flex items-center gap-1 uppercase tracking-wider">
                  <CalendarIcon className="w-3 h-3" /> Academic
                </div>
                <h4 className="font-serif text-base mb-1 leading-tight group-hover:text-brand-teal transition-colors">Mid-Term Examination Starts</h4>
                <div className="text-xs text-muted-foreground">CS Department</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
            </div>

            <div className="bg-white border border-border rounded-2xl p-5 flex gap-4 items-center card-glow-green card-lift cursor-pointer group">
              <div className="bg-[#F5F2EB] rounded-xl p-3 text-center min-w-[64px]">
                <div className="text-[10px] font-bold text-brand-teal uppercase tracking-widest">May</div>
                <div className="text-2xl font-bold font-serif">22</div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-bold text-green-500 mb-1 flex items-center gap-1 uppercase tracking-wider">
                  <Briefcase className="w-3 h-3" /> Placement
                </div>
                <h4 className="font-serif text-base mb-1 leading-tight group-hover:text-brand-teal transition-colors">Microsoft Recruitment Drive</h4>
                <div className="text-xs text-muted-foreground">Placement Cell, Block A</div>
              </div>
              <ChevronRight className="w-4 h-4 text-muted-foreground/40 group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
            </div>
          </div>

          <div className="pt-6 border-t border-border">
            <h2 className="font-serif text-2xl mb-4">Recent Announcements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0 animate-pulse-dot"></div>
                <div>
                  <h5 className="text-sm font-semibold leading-none mb-1 group-hover:text-brand-teal transition-colors">Library Hours Extended</h5>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0 animate-pulse-dot"></div>
                <div>
                  <h5 className="text-sm font-semibold leading-none mb-1 group-hover:text-brand-teal transition-colors">Hackathon Final Results Declared</h5>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-teal mt-1.5 flex-shrink-0 animate-pulse-dot"></div>
                <div>
                  <h5 className="text-sm font-semibold leading-none mb-1 group-hover:text-brand-teal transition-colors">New Coding Club Meeting — Thursday</h5>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
