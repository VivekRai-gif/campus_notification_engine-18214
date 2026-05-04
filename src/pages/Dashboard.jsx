import { AlertCircle, Briefcase, Calendar as CalendarIcon, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-10">
      {/* Welcome Section */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Good Morning, Vivek</h1>
          <p className="text-muted-foreground">You have 3 new important updates today. Stay ahead.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-card border border-border rounded-xl px-6 py-4 min-w-[140px]">
            <div className="text-2xl font-bold text-brand-electric mb-1">12</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Upcoming Events</div>
          </div>
          <div className="bg-card border border-border rounded-xl px-6 py-4 min-w-[140px]">
            <div className="text-2xl font-bold text-brand-electric mb-1">5</div>
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">New Placements</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Smart Insights */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">What You Should Not Miss</h2>
            <Link to="/notifications" className="text-sm font-medium text-brand-electric hover:underline">View All</Link>
          </div>
          
          <div className="space-y-4">
            {/* Urgent Insight */}
            <div className="group relative bg-card border border-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-red/50 glow-red">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-red/10 text-brand-red mb-4">
                <AlertCircle className="w-3.5 h-3.5" /> Urgent
              </div>
              <h3 className="text-lg font-semibold mb-2">Course Registration Deadline</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                Last day to register for Fall 2026 electives is tomorrow at 11:59 PM. Make sure you clear all prior dues.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs font-medium text-brand-red">Due Tomorrow</span>
                <button className="bg-brand-electric text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-brand-electric/90 transition-colors">
                  Register Now
                </button>
              </div>
            </div>

            {/* Placement Insight */}
            <div className="group relative bg-card border border-border rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-brand-green/50 glow-green">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-brand-green/10 text-brand-green mb-4">
                <Briefcase className="w-3.5 h-3.5" /> Placement
              </div>
              <h3 className="text-lg font-semibold mb-2">Google Software Engineering Intern</h3>
              <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                Applications are now open for the summer internship program. Requires 8+ CGPA and strong algorithmic skills.
              </p>
              <div className="flex justify-between items-center mt-auto">
                <span className="text-xs text-muted-foreground">Posted 2 days ago</span>
                <button className="border border-border text-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-accent transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Events & Feed */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Upcoming Events</h2>
          
          <div className="space-y-4">
            {/* Event Card */}
            <div className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center glow-purple">
              <div className="bg-accent rounded-lg p-3 text-center min-w-[64px]">
                <div className="text-[10px] font-bold text-brand-electric uppercase tracking-widest">May</div>
                <div className="text-2xl font-bold">15</div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-brand-purple mb-1 flex items-center gap-1">
                  <CalendarIcon className="w-3 h-3" /> Tech Talk
                </div>
                <h4 className="font-semibold text-sm mb-1 leading-tight">Web3 & The Future of Finance</h4>
                <div className="text-xs text-muted-foreground">Main Auditorium</div>
              </div>
            </div>

            {/* Academic Event Card */}
            <div className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center glow-blue">
              <div className="bg-accent rounded-lg p-3 text-center min-w-[64px]">
                <div className="text-[10px] font-bold text-brand-electric uppercase tracking-widest">May</div>
                <div className="text-2xl font-bold">18</div>
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-brand-blue mb-1 flex items-center gap-1">
                  <CalendarIcon className="w-3 h-3" /> Academic
                </div>
                <h4 className="font-semibold text-sm mb-1 leading-tight">Mid-Term Examination Starts</h4>
                <div className="text-xs text-muted-foreground">CS Department</div>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-blue mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="text-sm font-medium leading-none mb-1">Library Hours Extended</h5>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-purple mt-1.5 flex-shrink-0"></div>
                <div>
                  <h5 className="text-sm font-medium leading-none mb-1">Hackathon Final Results Declared</h5>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
