import { BarChart, Users, GitPullRequest } from 'lucide-react';

export default function ContributionStats() {
  return (
    <div className="rounded-2xl bg-black/20 backdrop-blur-md border border-white/5 p-8">
      <h2 className="text-3xl font-bold mb-8">Contribution Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30">
          <BarChart className="w-8 h-8 text-green-400" />
          <div>
            <div className="text-2xl font-bold">1,234</div>
            <div className="text-gray-400">Total Commits</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30">
          <GitPullRequest className="w-8 h-8 text-green-400" />
          <div>
            <div className="text-2xl font-bold">56</div>
            <div className="text-gray-400">Pull Requests</div>
          </div>
        </div>

        <div className="flex items-center gap-4 p-4 rounded-lg bg-black/30">
          <Users className="w-8 h-8 text-green-400" />
          <div>
            <div className="text-2xl font-bold">89</div>
            <div className="text-gray-400">Contributors</div>
          </div>
        </div>
      </div>
    </div>
  );
} 