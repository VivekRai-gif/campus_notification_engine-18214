import { ArrowRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4 text-foreground relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30"></div>
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center gap-2 font-serif text-2xl font-bold tracking-tight">
            <span className="w-10 h-10 bg-brand-teal text-white flex items-center justify-center rounded-lg text-sm font-bold shadow-md">CB</span>
            CampusBuddy
          </Link>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-xl shadow-black/5 animate-fade-in-up-delay-1">
          <div className="text-center mb-8">
            <h1 className="font-serif text-3xl tracking-tight mb-2">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your campus account</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-5">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Student Email</label>
              <input 
                type="email" 
                placeholder="vivek@university.edu"
                className="input-float w-full bg-[#F5F2EB] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all placeholder:text-muted-foreground/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="input-float w-full bg-[#F5F2EB] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal/30 transition-all placeholder:text-muted-foreground/50"
                required
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-border accent-brand-teal" />
                Remember me
              </label>
              <a href="#" className="text-brand-teal font-semibold hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="btn-dark w-full bg-[#1c1c1c] text-white font-bold rounded-xl px-4 py-3.5 mt-2 text-sm uppercase tracking-wider flex items-center justify-center gap-2"
            >
              Sign In <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account? <a href="#" className="text-brand-teal font-semibold hover:underline">Request access</a>
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 animate-fade-in-up-delay-2">
          &copy; 2026 CampusBuddy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
