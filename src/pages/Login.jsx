import { ArrowRight, Zap } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/app/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] flex items-center justify-center p-4 text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30"></div>
      
      {/* Decorative gradient orbs */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-gradient-to-br from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10 animate-fade-in-up">
          <Link to="/" className="inline-flex items-center gap-2.5 font-serif text-2xl font-bold tracking-tight">
            <span className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-500 text-white flex items-center justify-center rounded-xl text-sm font-bold shadow-md shadow-purple-500/25">
              <Zap className="w-5 h-5 fill-current" />
            </span>
            CampusBuddy
          </Link>
        </div>

        <div className="bg-white border border-border rounded-2xl p-8 shadow-xl shadow-purple-500/5 animate-fade-in-up-delay-1">
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
                className="input-float w-full bg-[#F5F2EB] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-muted-foreground/50"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Password</label>
              <input 
                type="password" 
                placeholder="••••••••"
                className="input-float w-full bg-[#F5F2EB] border border-transparent rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/30 transition-all placeholder:text-muted-foreground/50"
                required
              />
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                <input type="checkbox" className="rounded border-border accent-purple-600" />
                Remember me
              </label>
              <a href="#" className="text-purple-600 font-semibold hover:underline">Forgot password?</a>
            </div>

            <button 
              type="submit" 
              className="btn-expand w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold rounded-xl px-4 py-3.5 mt-2 text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-purple-500/20"
            >
              Sign In <ArrowRight className="w-4 h-4 btn-arrow" />
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account? <a href="#" className="text-purple-600 font-semibold hover:underline">Request access</a>
          </p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 animate-fade-in-up-delay-2">
          &copy; 2026 CampusBuddy. All rights reserved.
        </p>
      </div>
    </div>
  );
}
