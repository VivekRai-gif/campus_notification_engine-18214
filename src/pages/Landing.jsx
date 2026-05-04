import { ArrowRight, Play, X, Zap, Bell, Calendar, Sparkles, GraduationCap, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import HeroCanvas from '../components/HeroCanvas';
import ChatBot from '../components/ChatBot';

let heroVideo;
try { heroVideo = new URL('../components/bgvideoofherosection.mp4', import.meta.url).href; } catch(e) { heroVideo = ''; }

export default function Landing() {
  const [showVideo, setShowVideo] = useState(false);
  const sectionsRef = useRef([]);

  // Scroll animation observer for landing page sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.landing-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      num: '01',
      icon: Bell,
      title: 'Smart Notifications',
      desc: 'Deliver crucial updates directly to your device. Never miss an important deadline, placement, or event again.',
      color: 'from-purple-600 to-indigo-500'
    },
    {
      num: '02',
      icon: Sparkles,
      title: 'AI-Powered Insights',
      desc: 'A curated "Don\'t Miss" section tailored specifically to your academic profile, interests, and history.',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      num: '03',
      icon: Shield,
      title: 'Personalized Filters',
      desc: 'Filter everything instantly by your major, graduation year, clubs, and extracurricular interests.',
      color: 'from-emerald-600 to-teal-500'
    }
  ];

  const stats = [
    { value: '10K+', label: 'Students Active' },
    { value: '500+', label: 'Events Tracked' },
    { value: '98%', label: 'On-Time Alerts' },
    { value: '24/7', label: 'AI Available' },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#1c1c1c] font-sans overflow-x-hidden">
      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-5 max-w-[1400px] mx-auto animate-fade-in-up">
        <div className="text-xl font-bold tracking-tight font-serif flex items-center gap-2.5">
          <span className="w-9 h-9 bg-gradient-to-br from-purple-600 to-indigo-500 text-white flex items-center justify-center rounded-xl text-sm font-bold shadow-md shadow-purple-500/25">
            <Zap className="w-5 h-5 fill-current" />
          </span>
          CampusBuddy
        </div>
        <div className="hidden lg:flex items-center gap-10 text-xs font-bold uppercase tracking-widest text-[#1c1c1c]/70">
          <Link to="/app/dashboard" className="link-swap hover:text-purple-600">Dashboard</Link>
          <a href="#features" className="link-swap hover:text-purple-600">Features</a>
          <Link to="/app/events" className="link-swap hover:text-purple-600">Events</Link>
          <Link to="/app/notifications" className="link-swap hover:text-purple-600">Insights</Link>
          <a href="#stats" className="link-swap hover:text-purple-600">About</a>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            to="/login" 
            className="btn-expand bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-purple-500/20"
          >
            Student Login <ArrowRight className="w-4 h-4 btn-arrow" />
          </Link>
        </div>
      </nav>

      {/* ═══ HERO SECTION ═══ */}
      <section className="relative pt-12 pb-0 px-8 text-center overflow-hidden flex flex-col items-center min-h-[90vh]">
        <HeroCanvas />
        <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6]/75 to-transparent" style={{ height: '60%' }}></div>
        
        <div className="relative z-20 max-w-4xl mx-auto mt-4">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in-up">
            <Sparkles className="w-3.5 h-3.5" /> Your Campus, Simplified
          </div>
          <h1 className="font-serif text-5xl md:text-[5.5rem] font-medium tracking-tight leading-[1.08] mb-6 text-[#1c1c1c] animate-fade-in-up-delay-1">
            Never Miss.<br/><span className="text-gradient">Stay Informed.</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up-delay-2">
            All your campus notifications, events, placements, and updates — intelligently organized in one beautiful dashboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-3">
            <Link 
              to="/app/dashboard" 
              className="btn-expand inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl shadow-purple-500/25"
            >
              Explore Dashboard <ArrowRight className="w-4 h-4 btn-arrow" />
            </Link>
            <button 
              onClick={() => setShowVideo(true)}
              className="btn-expand-outline inline-flex items-center gap-2 border-2 border-[#1c1c1c]/15 text-[#1c1c1c] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:border-purple-400"
            >
              <Play className="w-4 h-4 fill-current" /> Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section id="stats" className="py-12 px-8 bg-white border-y border-border/50 relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i} className="landing-animate scroll-animate" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold font-serif text-gradient mb-1">{stat.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ DEMO & DESCRIPTION ═══ */}
      <section className="py-28 px-8 bg-[#FAF9F6] text-center relative z-20">
        <div className="max-w-4xl mx-auto">
          <div className="landing-animate scroll-animate">
            <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">One platform. <span className="text-gradient">Absolute clarity.</span></h2>
            <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
              CampusBuddy is an intelligent engine that aggregates all your university life — from crucial academic deadlines to high-impact placement drives — into a single, personalized dashboard.
            </p>
          </div>
          
          {/* Demo Video Trigger */}
          <div className="landing-animate scroll-animate delay-1">
            <div 
              className="relative aspect-video max-w-3xl mx-auto bg-black rounded-2xl overflow-hidden cursor-pointer group shadow-2xl hover:shadow-purple-500/15 transition-all duration-700 ring-1 ring-border"
              onClick={() => setShowVideo(true)}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500 z-10"></div>
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Demo Thumbnail" className="w-full h-full object-cover opacity-80 mix-blend-luminosity scale-105 group-hover:scale-100 transition-transform duration-700" />
              <div className="absolute inset-0 z-20 flex items-center justify-center">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-purple-600 ml-1 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES GRID ═══ */}
      <section className="py-28 px-8 bg-white relative z-20" id="features">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 landing-animate scroll-animate">
            <p className="text-sm font-bold text-purple-600 uppercase tracking-widest mb-3">Features</p>
            <h2 className="font-serif text-4xl md:text-5xl tracking-tight">Everything you need. <span className="text-gradient">Nothing you don't.</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <div key={i} className={`landing-animate scroll-animate group bg-[#FAF9F6] border border-border rounded-2xl p-8 card-lift cursor-default`} style={{ transitionDelay: `${i * 0.12}s` }}>
                  <div className={`w-14 h-14 bg-gradient-to-br ${feat.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-[-5deg] transition-all duration-400`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="font-serif text-xs text-muted-foreground mb-3 italic">{feat.num}</div>
                  <h4 className="font-serif text-xl mb-3 text-[#1c1c1c] group-hover:text-purple-600 transition-colors">{feat.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-24 px-8 bg-gradient-to-br from-purple-600 via-indigo-600 to-purple-700 text-white text-center relative z-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-5"></div>
        <div className="relative z-10 max-w-3xl mx-auto landing-animate scroll-animate">
          <GraduationCap className="w-12 h-12 mx-auto mb-6 opacity-80 animate-float" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6 tracking-tight">Ready to transform your campus experience?</h2>
          <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
            Join thousands of students who never miss a deadline, event, or opportunity.
          </p>
          <Link 
            to="/login" 
            className="btn-expand inline-flex items-center gap-2 bg-white text-purple-700 px-10 py-4 rounded-full text-sm font-bold uppercase tracking-wider shadow-xl shadow-black/10"
          >
            Get Started Free <ArrowRight className="w-4 h-4 btn-arrow" />
          </Link>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="bg-[#1c1c1c] text-white py-16 px-8 relative z-20">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
            <div>
              <div className="text-xl font-bold tracking-tight flex items-center gap-2.5 mb-4">
                <span className="w-8 h-8 bg-gradient-to-br from-purple-600 to-indigo-500 text-white flex items-center justify-center rounded-xl text-xs shadow-md">
                  <Zap className="w-4 h-4 fill-current" />
                </span>
                <span className="font-serif">CampusBuddy</span>
              </div>
              <p className="text-white/40 text-sm max-w-xs leading-relaxed">Your intelligent campus companion. Stay updated, stay ahead.</p>
            </div>
            <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm text-white/60 font-medium">
              <Link to="/app/dashboard" className="link-swap hover:text-purple-400">Dashboard</Link>
              <Link to="/app/notifications" className="link-swap hover:text-purple-400">Notifications</Link>
              <Link to="/app/events" className="link-swap hover:text-purple-400">Events</Link>
              <Link to="/app/profile" className="link-swap hover:text-purple-400">Profile</Link>
              <Link to="/login" className="link-swap hover:text-purple-400">Login</Link>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/30">&copy; 2026 CampusBuddy. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse-dot"></div>
              <span className="text-xs text-white/40">All systems operational</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══ VIDEO MODAL ═══ */}
      {showVideo && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          style={{ animation: 'fadeInUp 0.3s ease forwards' }}
        >
          <button 
            onClick={() => setShowVideo(false)}
            className="absolute top-8 right-8 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 hover:rotate-90"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl relative animate-fade-in-scale">
            <video 
              src={heroVideo} 
              controls 
              autoPlay 
              className="w-full h-full object-cover"
            ></video>
          </div>
        </div>
      )}

      {/* Chatbot Widget */}
      <ChatBot />
    </div>
  );
}
