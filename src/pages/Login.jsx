import { Box } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 text-foreground">
      <div className="w-full max-w-md bg-card border border-border rounded-2xl p-8 glow-blue">
        <div className="flex flex-col items-center mb-8 text-center">
          <Box className="w-12 h-12 text-brand-electric mb-4" />
          <h1 className="text-2xl font-bold tracking-tight">Welcome to Nexus</h1>
          <p className="text-sm text-muted-foreground mt-2">Sign in to your campus account</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Student Email</label>
            <input 
              type="email" 
              placeholder="vivek@university.edu"
              className="w-full bg-accent/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-brand-electric"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full bg-accent/50 border border-border rounded-lg px-4 py-2 focus:outline-none focus:border-brand-electric"
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-brand-electric text-black font-semibold rounded-lg px-4 py-2 mt-4 hover:bg-brand-electric/90 transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
