import { FaArrowDown } from "react-icons/fa";
import { content, sectionIds } from "../constants";
import { motion as Motion } from "framer-motion";


// Hero Section
const HeroSection = () => {
  return (
    <section 
      id={sectionIds.hero} 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        // style={{ backgroundImage: "url('https://placehold.co/1920x1080/1e293b/ffffff?text=Hero+Background')" }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <Motion.h1 
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {content.name}
        </Motion.h1>
        
        <Motion.p 
          className="text-xl md:text-2xl text-indigo-300 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.tagline}
        </Motion.p>

        {/* Social Icons */}
        <Motion.div 
          className="flex justify-center space-x-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {content.socials.map((social) => (
            <Motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
              aria-label={social.name}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <social.icon className="w-6 h-6" />
            </Motion.a>
          ))}
        </Motion.div>

        {/* CTA Buttons */}
        <Motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Motion.button
            onClick={() => document.getElementById(sectionIds.projects).scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Projects
          </Motion.button>
          <Motion.button
            onClick={() => document.getElementById(sectionIds.contact).scrollIntoView({ behavior: 'smooth' })}
            className="px-6 py-3 bg-transparent border-2 border-indigo-600 text-indigo-400 hover:bg-indigo-600/10 font-medium rounded-md transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </Motion.button>
        </Motion.div>
      </div>

      {/* Scroll Down Indicator */}
      {/* <Motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToNext}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.1 }}
      >
        <FaArrowDown className="text-white/70 w-6 h-6" />
      </Motion.div> */}
    </section>
  );
};

export default HeroSection;