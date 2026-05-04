import { ArrowRight, Play, X, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import heroVideo from '../components/bgvideoofherosection.mp4';

export default function Landing() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1c1c1c] font-sans selection:bg-brand-teal selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 max-w-[1400px] mx-auto">
        <div className="text-xl font-bold tracking-tight font-serif flex items-center gap-2">
            <span className="w-8 h-8 bg-brand-teal text-white flex items-center justify-center rounded-sm text-sm">CB</span>
            CampusBuddy
        </div>
        <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-[#1c1c1c]/80">
          <Link to="/app/dashboard" className="hover:text-brand-teal transition-colors">Dashboard</Link>
          <a href="#features" className="hover:text-brand-teal transition-colors">Academics</a>
          <Link to="/app/events" className="hover:text-brand-teal transition-colors">Events</Link>
          <Link to="/app/dashboard" className="hover:text-brand-teal transition-colors">Placements</Link>
          <Link to="/app/notifications" className="hover:text-brand-teal transition-colors">Insights</Link>
        </div>
        <div className="flex items-center gap-3">
            <Link 
            to="/login" 
            className="btn-expand bg-brand-teal text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm"
            >
            Student Login <ArrowRight className="w-4 h-4 btn-arrow" />
            </Link>
            <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-brand-teal hover:bg-brand-teal/5 transition-colors">
                <HelpCircle className="w-5 h-5" />
            </button>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-48 px-8 text-center overflow-hidden flex flex-col items-center min-h-[85vh]">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 flex items-end">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent z-10"></div>
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full md:h-[120%] object-cover object-bottom opacity-90 mix-blend-multiply"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto mt-10">
          <h1 className="font-serif text-5xl md:text-[5.5rem] font-medium tracking-tight leading-[1.1] mb-6 text-[#1c1c1c]">
            Never Miss<br/>Stay Informed Always
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto font-medium">
            All your campus notifications, events, placements, and updates in one place.
          </p>
          <Link 
            to="/app/dashboard" 
            className="btn-expand inline-flex items-center gap-2 bg-brand-teal text-white px-8 py-3.5 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl shadow-brand-teal/20"
          >
            Explore Dashboard <ArrowRight className="w-4 h-4 btn-arrow" />
          </Link>
        </div>
      </section>

      {/* 2. MINIMAL PROJECT & DEMO SECTION */}
      <section className="py-32 px-8 bg-white text-center border-t border-b border-border/50 shadow-sm relative z-20">
         <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">One platform. Absolute clarity.</h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              CampusBuddy is an intelligent engine that aggregates all your university life—from crucial academic deadlines to high-impact placement drives—into a single, personalized dashboard.
            </p>
            
            {/* Demo Video Trigger */}
            <div 
              className="relative aspect-video max-w-3xl mx-auto bg-black rounded-2xl overflow-hidden cursor-pointer group shadow-2xl hover:shadow-brand-teal/20 transition-all duration-500 ring-1 ring-border"
              onClick={() => setShowVideo(true)}
            >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
                {/* Simulated Thumbnail */}
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Demo Thumbnail" className="w-full h-full object-cover opacity-80 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-700" />
                
                {/* Play Button */}
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-brand-teal ml-1 fill-current" />
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* 3. MINIMAL FEATURES GRID */}
      <section className="py-32 px-8 bg-[#FAF9F6] relative z-20" id="features">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-16 text-center">
              <div className="group">
                  <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="font-serif text-2xl text-brand-teal italic">01</span>
                  </div>
                  <h4 className="font-serif text-2xl mb-4 text-[#1c1c1c]">Smart Notification System</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Deliver crucial updates directly to your device without the noise. Never miss an important email again.</p>
              </div>
              <div className="group">
                  <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="font-serif text-2xl text-brand-teal italic">02</span>
                  </div>
                  <h4 className="font-serif text-2xl mb-4 text-[#1c1c1c]">Personalized Alerts</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">Filter everything instantly by your major, graduation year, and extracurricular interests.</p>
              </div>
              <div className="group">
                  <div className="w-16 h-16 mx-auto bg-brand-teal/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <span className="font-serif text-2xl text-brand-teal italic">03</span>
                  </div>
                  <h4 className="font-serif text-2xl mb-4 text-[#1c1c1c]">AI Highlights</h4>
                  <p className="text-base text-muted-foreground leading-relaxed">A curated "Don't Miss" section tailored specifically to your academic profile and history.</p>
              </div>
          </div>
      </section>

      {/* 4. FOOTER */}
      <footer className="bg-[#1c1c1c] text-white py-12 px-8 text-center relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-xl font-bold tracking-tight flex items-center gap-2">
                <span className="w-6 h-6 bg-brand-teal text-white flex items-center justify-center rounded-sm text-xs">CB</span>
                CampusBuddy
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 font-medium">
                <Link to="/app/dashboard" className="hover:text-brand-teal transition-colors">Dashboard</Link>
                <Link to="/app/notifications" className="hover:text-brand-teal transition-colors">Notifications</Link>
                <Link to="/app/events" className="hover:text-brand-teal transition-colors">Events</Link>
                <Link to="/app/dashboard" className="hover:text-brand-teal transition-colors">Placements</Link>
            </div>
            <p className="text-xs text-white/40">&copy; 2026 CampusBuddy. All rights reserved.</p>
        </div>
      </footer>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-300">
            <button 
                onClick={() => setShowVideo(false)}
                className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
                <X className="w-6 h-6" />
            </button>
            <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative">
                {/* Fallback playing the hero video inside the modal as a demo placeholder */}
                <video 
                    src={heroVideo} 
                    controls 
                    autoPlay 
                    className="w-full h-full object-cover"
                ></video>
            </div>
        </div>
      )}
    </div>
  );
}
