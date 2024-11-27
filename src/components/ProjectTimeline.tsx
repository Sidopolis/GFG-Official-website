import React from 'react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
  category: string;
  stats: {
    stars: number;
    forks: number;
    contributors: number;
  };
}

interface ProjectTimelineProps {
  projects: {
    featured: Project[];
  };
}

const ProjectTimeline: React.FC<ProjectTimelineProps> = ({ projects }) => {
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold mb-8">Project Timeline</h2>
      <div className="space-y-8">
        {projects.featured.map((project, index) => (
          <div 
            key={index}
            className="flex items-start gap-4 relative before:absolute before:left-2 before:top-0 before:w-1 h-full"
          >
            {/* Add your project timeline item component here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline; 