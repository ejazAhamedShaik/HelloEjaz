import { motion as Motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

// Bottom Navigator Component
const BottomNavigator = ({ onClick }) => {
  return (
    <Motion.div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <button
        onClick={onClick}
        className="p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        aria-label="Scroll to next section"
      >
        <FaArrowDown className="text-indigo-400 w-5 h-5" />
      </button>
    </Motion.div>
  );
};

export default BottomNavigator;