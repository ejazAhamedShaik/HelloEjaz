// components/About.jsx
import { forwardRef } from "react";
import { motion as Motion } from "framer-motion";

const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } }
};

const About = forwardRef(function About(_, ref) {
  return (
    <section
      id="about"
      ref={ref}
      className="relative z-10 mx-auto max-w-3xl px-6 py-24 sm:py-32"
    >
      <Motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // triggers when ~30% in view
        className="text-center"
      >
        <Motion.h2
          variants={item}
          className="text-3xl font-bold tracking-tight sm:text-4xl"
        >
          About Me
        </Motion.h2>

        <Motion.p
          variants={item}
          className="mt-4 text-base text-white/80 leading-relaxed"
        >
          I’m a software developer focused on React, TypeScript, and building delightful
          user experiences. I value clean code, design systems, and performance.
        </Motion.p>

        <Motion.div
          variants={item}
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3 text-left"
        >
          <div className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/60">Role</div>
            <div className="mt-1 font-medium">Frontend Engineer</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/60">Focus</div>
            <div className="mt-1 font-medium">React, Tailwind, Motion</div>
          </div>
          <div className="rounded-2xl border border-white/10 p-4 backdrop-blur-sm">
            <div className="text-sm text-white/60">Location</div>
            <div className="mt-1 font-medium">India</div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
});

export default About;
