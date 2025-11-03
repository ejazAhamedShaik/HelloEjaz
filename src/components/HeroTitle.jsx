import { motion as Motion } from "framer-motion";

const Title = ({ children }) => (
  <Motion.h1
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="text-center font-extrabold leading-[0.95] text-white drop-shadow-sm"
  >
    <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px]">
      {children}
    </span>
  </Motion.h1>
);

const SubTitle = ({ children }) => (
  <Motion.p
    initial={{ opacity: 0, y: 8 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
    className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-relaxed text-white/85"
  >
    {children}
  </Motion.p>
);

export { Title, SubTitle };
