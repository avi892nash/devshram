import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  cachedLink?: string;
  theme: 'brown' | 'dark-green' | 'purple';
  logo?: string;
  subtitle?: string;
  features?: string[];
  image?: string;
  buttonText?: string;
}

const getThemeClasses = () => {
  return {
    card: 'bg-transparent border-border',
    header: 'bg-transparent border-border',
    accent: 'text-foreground',
    button: 'border-border text-foreground hover:bg-muted'
  };
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  technologies, 
  liveLink, 
  cachedLink, 
  logo,
  subtitle,
  features,
  image,
  buttonText = "Live"
}) => {
  const themeClasses = getThemeClasses();
  
  return (
    <div className={`border overflow-hidden ${themeClasses.card} border-opacity-50`}>
      {/* Image Section */}
      <div className="w-full aspect-video bg-transparent flex items-start justify-start">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-transparent flex items-start justify-start p-4">
            <span className="text-gray-400 text-lg font-medium">{title}</span>
          </div>
        )}
      </div>
      
      {/* Header Section */}
      <div className={`p-4 ${themeClasses.header} border-b border-opacity-30`}>
        {logo && (
          <div className="mb-2">
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-xs font-semibold">
              {logo}
            </span>
          </div>
        )}
        
        <h3 className="text-white text-xl font-bold mb-1">{title}</h3>
        
        {subtitle && (
          <p className="text-gray-300 text-sm mb-3">{subtitle}</p>
        )}
        
        {features && (
          <div className="flex gap-2 flex-wrap">
            {features.map((feature: string, index: number) => (
              <div key={index} className="flex items-center gap-1 text-sm text-gray-300">
                <span className={themeClasses.accent}>⚡</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Technology Tags */}
      <div className="px-4 py-3 border-b border-gray-600 border-opacity-30">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech: string, index: number) => (
            <span key={index} className="text-gray-300 text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="text-white text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        
        {/* Action Buttons */}
        <div className="flex gap-3">
          <a 
            href={liveLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-4 py-2 border border-primary transition-colors text-sm font-medium text-foreground hover:bg-muted"
          >
            {buttonText} ⟷
          </a>
          {cachedLink && (
            <a 
              href={cachedLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-500 text-gray-400 rounded hover:bg-gray-500/10 transition-colors text-sm font-medium"
            >
              Cached ⚡
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 