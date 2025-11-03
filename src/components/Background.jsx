import { motion as Motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { HERO_IMAGE_URL } from "../constants.js";

const Background = ({ onAnimationComplete }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      y: ["100%", "0%"], // slide up from bottom
      transition: { duration: 1.2, ease: [0.42, 0, 0.58, 1] }, // smooth cubic
    });
  }, [controls]);

  return (
    <Motion.div
      className="absolute inset-0 -z-10 overflow-hidden min-h-screen"
      onAnimationComplete={onAnimationComplete}
    >
      {/* Photo layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
        aria-hidden
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, #434343 0%, black 100%)",
        }}
      />

      {/* Wave reveal layer */}
      {/* <Motion.svg
        className="absolute bottom-0 left-0 right-0 w-full h-[50vh]"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        initial={{ y: "100%" }}
        animate={{ y: ["100%", "0%"] }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      >
        <Motion.path
          fill="black"
          initial={{ d: "M0,320L0,320L1440,320L1440,320Z" }}
          animate={{
            d: [
              "M0,320L60,300C120,280,240,240,360,240C480,240,600,280,720,280C840,280,960,240,1080,240C1200,240,1320,280,1380,300L1440,320L1440,0L0,0Z",
              "M0,320L80,280C160,240,320,200,480,200C640,200,800,240,960,260C1120,280,1280,280,1360,300L1440,320L1440,0L0,0Z",
              "M0,320L60,300C120,280,240,240,360,240C480,240,600,280,720,280C840,280,960,240,1080,240C1200,240,1320,280,1380,300L1440,320L1440,0L0,0Z",
            ],
          }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
          }}
        />
      </Motion.svg> */}

      {/* Dune silhouette */}
      <svg
        className="absolute bottom-0 left-0 right-0 h-[34vh] w-full"
        viewBox="0 0 1600 600"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="dune" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgba(248,180,72,0.6)" />
            <stop offset="60%" stopColor="rgba(255,135,45,0.35)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.0)" />
          </linearGradient>
        </defs>
        <path
          d="M0 400 C300 350 450 520 800 480 C1100 450 1300 520 1600 480 L1600 600 L0 600 Z"
          fill="url(#dune)"
        />
      </svg>
    </Motion.div>
  );
};

export default Background;
