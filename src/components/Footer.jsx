import { content } from '../constants';

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-indigo-400 mb-2">{content.name}</h3>
            <p className="text-gray-500">Full Stack Developer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            {content.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mb-4 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-md transition-colors flex items-center"
            >
              Back to Top
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </button>
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} {content.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;