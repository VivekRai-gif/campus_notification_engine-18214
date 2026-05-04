export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      <div className="bg-card border border-border rounded-xl p-8">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-24 h-24 rounded-full bg-accent overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vivek" alt="Avatar" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Vivek Sharma</h2>
            <p className="text-muted-foreground">Computer Science, Year 3</p>
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-4">Notification Preferences</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-4 border border-border rounded-lg">
            <div>
              <div className="font-medium">Academic Updates</div>
              <div className="text-sm text-muted-foreground">Grades, deadlines, schedule changes</div>
            </div>
            <div className="w-10 h-6 bg-brand-electric rounded-full relative cursor-pointer">
              <div className="absolute right-1 top-1 w-4 h-4 bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
