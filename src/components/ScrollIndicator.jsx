import { motion as Motion } from "framer-motion";

const ScrollIndicator = ({ onClick }) => (
  <Motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.6 }}
    className="absolute top-20 left-1/2 z-20 -translate-x-1/2"
    onClick={onClick}
  >
    <a
      href="#about"
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/5 backdrop-blur-sm transition hover:bg-white/10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        className="h-4 w-4 text-white/80 transition group-hover:text-white"
      >
        <path strokeWidth="2" d="M6 9l6 6 6-6" />
      </svg>
    </a>
  </Motion.div>
);

export default ScrollIndicator;
