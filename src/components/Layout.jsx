import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Bell, Calendar, User, Search, Settings, LogOut, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useRef } from 'react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const navLinks = [
    { name: 'Dashboard', path: '/app/dashboard', icon: LayoutDashboard },
    { name: 'Notifications', path: '/app/notifications', icon: Bell },
    { name: 'Events', path: '/app/events', icon: Calendar },
    { name: 'Profile', path: '/app/profile', icon: User },
  ];

  // Scroll-triggered fade-in animation
  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: container, threshold: 0.1 }
    );

    const animate = () => {
      const elements = container.querySelectorAll('.scroll-animate');
      elements.forEach((el) => observer.observe(el));
    };

    // Re-run observer on route change
    const timeout = setTimeout(animate, 100);
    return () => { observer.disconnect(); clearTimeout(timeout); };
  }, [location.pathname]);

  return (
    <div className="flex h-screen bg-[#F0EDE6] overflow-hidden text-foreground p-3">
      {/* Sidebar */}
      <aside className="w-64 bg-white flex flex-col z-20 rounded-2xl shadow-lg shadow-black/5 mr-3">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3 font-bold text-xl tracking-tight">
          <span className="w-9 h-9 bg-gradient-to-br from-purple-600 to-indigo-500 text-white flex items-center justify-center rounded-xl text-sm font-bold shadow-md shadow-purple-500/25">
            <Zap className="w-5 h-5 fill-current" />
          </span>
          <span className="font-serif text-[#1c1c1c]">CampusBuddy</span>
        </div>
        
        <nav className="flex-1 px-3 py-4 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "nav-link-hover group flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "nav-link-active bg-gradient-to-r from-purple-600 to-indigo-500 text-white shadow-md shadow-purple-500/20" 
                    : "text-muted-foreground hover:bg-[#F5F2EB] hover:text-[#1c1c1c]"
                )}
              >
                <Icon className={cn(
                  "w-5 h-5 transition-all duration-200",
                  isActive ? "scale-110" : "group-hover:scale-110 group-hover:rotate-[-5deg]"
                )} />
                {link.name}
                {link.name === 'Notifications' && (
                  <span className={cn(
                    "ml-auto w-5 h-5 text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse-dot",
                    isActive ? "bg-white text-purple-600" : "bg-red-500 text-white"
                  )}>3</span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <Link to="/app/profile" className="flex items-center gap-3 px-2 mb-3 group cursor-pointer rounded-xl hover:bg-[#F5F2EB] py-2 transition-colors">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex-shrink-0 overflow-hidden ring-2 ring-purple-200 group-hover:ring-purple-400 transition-all">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek" alt="Avatar" className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold group-hover:text-purple-600 transition-colors">Vivek Sharma</span>
              <span className="text-xs text-muted-foreground">Computer Science</span>
            </div>
          </Link>
          <Link to="/" className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 hover:translate-x-1">
            <LogOut className="w-4 h-4" /> Sign out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative bg-white rounded-2xl shadow-lg shadow-black/5">
        {/* Header */}
        <header className="h-16 border-b border-border/50 bg-white/90 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8 rounded-t-2xl">
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search announcements, events..." 
              className="input-float w-full bg-[#F5F2EB] border border-transparent rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-muted-foreground/60"
            />
          </div>
          <div className="flex items-center gap-2">
            {/* Notification Bell — routes to notifications */}
            <button 
              onClick={() => navigate('/app/notifications')}
              className="relative p-2.5 rounded-xl hover:bg-[#F5F2EB] transition-all duration-300 hover:scale-110 hover:shadow-md group"
            >
              <Bell className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 transition-colors" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse-dot"></span>
            </button>
            {/* Settings — routes to profile */}
            <button 
              onClick={() => navigate('/app/profile')}
              className="p-2.5 rounded-xl hover:bg-[#F5F2EB] transition-all duration-300 hover:scale-110 hover:rotate-45 hover:shadow-md group"
            >
              <Settings className="w-5 h-5 text-muted-foreground group-hover:text-purple-600 transition-colors" />
            </button>
            {/* Login / User avatar — routes to profile */}
            <button
              onClick={() => navigate('/app/profile')}
              className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-transparent hover:ring-purple-400 transition-all duration-300 hover:scale-110 ml-1"
            >
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek" alt="Avatar" className="w-full h-full" />
            </button>
          </div>
        </header>

        {/* Page Content — scrollable with scroll animations */}
        <div ref={contentRef} className="flex-1 overflow-y-auto p-8 bg-[#FAF9F6] rounded-b-2xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
