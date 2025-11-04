import { motion as Motion } from 'framer-motion';

// Section Heading Component
const SectionHeading = ({ title }) => {
  return (
    <Motion.div 
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
      <div className="w-20 h-1 bg-indigo-500 mx-auto"></div>
    </Motion.div>
  );
};

export default SectionHeading;