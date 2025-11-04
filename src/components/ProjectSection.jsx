import { motion as Motion } from 'framer-motion';
import { sectionIds } from '../constants';
import SectionHeading from './SectionHeading';

// Projects Section
const ProjectsSection = ({ projects, openModal }) => {
  return (
    <section id={sectionIds.projects} className="py-20">
      <div className="container mx-auto px-20">
        <SectionHeading title="My Projects" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Motion.div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => openModal(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.summary}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-900/50 text-indigo-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700 text-gray-400 text-xs rounded-full">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>
                
                <button className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;