import { content, sectionIds } from "../constants";
import { motion as Motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

// About Section
const AboutSection = () => {
  return (
    <section id={sectionIds.about} className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading title="About Me" />

        <div className="max-w-4xl mx-auto">
          <Motion.div
            className="bg-gray-700/50 rounded-xl p-6 md:p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6 leading-relaxed">{content.bio}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {content.experience.map((item, index) => (
                <Motion.div
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="shrink-0 mt-1 mr-3 text-indigo-400">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <p className="text-gray-300">{item}</p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
