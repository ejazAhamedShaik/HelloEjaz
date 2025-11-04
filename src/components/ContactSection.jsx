import { sectionIds } from "../constants";
import { motion as Motion } from "framer-motion";
import { FaFilePdf } from "react-icons/fa";
import SectionHeading from "./SectionHeading";
import { content } from "../constants";

// Contact Section
const ContactSection = ({ formData, handleInputChange, handleSubmit, formStatus }) => {
  return (
    <section id={sectionIds.contact} className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="Get In Touch" />
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <Motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out using the contact form or through my social media profiles.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {content.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
                  aria-label={`Connect with me on ${social.name}`}
                >
                  <social.icon className="w-5 h-5 mr-2" />
                  {social.name}
                </a>
              ))}
            </div>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-colors"
            >
              <FaFilePdf className="mr-2" />
              Download Resume
            </a>
          </Motion.div>
          
          <Motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={formStatus.submitting}
                className={`w-full py-3 px-4 rounded-md font-medium transition-colors ${
                  formStatus.submitting 
                    ? 'bg-indigo-700 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700'
                }`}
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
              
              {formStatus.error && (
                <div className="p-3 bg-red-900/50 text-red-300 rounded-md">
                  {formStatus.error}
                </div>
              )}
              
              {formStatus.success && (
                <div className="p-3 bg-green-900/50 text-green-300 rounded-md">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;