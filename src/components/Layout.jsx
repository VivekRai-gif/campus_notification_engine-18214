import { Link, Outlet, useLocation } from 'react-router-dom';
import { Box, LayoutDashboard, Bell, Calendar, Briefcase, User, Search, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Layout() {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Events', path: '/events', icon: Calendar },
    { name: 'Profile', path: '/profile', icon: User },
  ];

  return (
    <div className="flex h-screen bg-background overflow-hidden text-foreground">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border bg-card flex flex-col z-20">
        <div className="p-6 flex items-center gap-3 text-brand-electric font-bold text-2xl tracking-tight">
          <Box className="w-8 h-8" />
          <span>CampusBuddy</span>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname.startsWith(link.path);
            return (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-brand-electric/10 text-brand-electric" 
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 px-2">
            <div className="w-10 h-10 rounded-full bg-accent flex-shrink-0 overflow-hidden">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek" alt="Avatar" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold">Vivek Sharma</span>
              <span className="text-xs text-muted-foreground">Computer Science</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-20 border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-8">
          <div className="relative w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search announcements, events..." 
              className="w-full bg-accent/50 border border-border rounded-md py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-brand-electric focus:ring-1 focus:ring-brand-electric transition-all"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-full border border-border hover:bg-accent transition-colors">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-brand-red rounded-full"></span>
            </button>
            <button className="p-2 rounded-full border border-border hover:bg-accent transition-colors">
              <Settings className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
