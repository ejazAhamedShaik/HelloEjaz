import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { content, sectionIds } from "./constants";
import NavBar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import ProjectModal from "./components/ProjectModal";
import SkillsSection from "./components/SkillsSection";
import ContactSection from "./components/ContactSection";
import BottomNavigator from "./components/BottomNavigation";
import Footer from "./components/Footer";

// Main App Component
export default function App() {
  const [activeSection, setActiveSection] = useState(sectionIds.hero);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(sectionIds);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Open project modal
  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Close project modal
  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: "" });

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Please fill in all fields",
      });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Please enter a valid email address",
      });
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Reset form and show success
      setFormData({ name: "", email: "", message: "" });
      setFormStatus({ submitting: false, success: true, error: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch {
      setFormStatus({
        submitting: false,
        success: false,
        error: "Failed to send message. Please try again.",
      });
    }
  };

  // Scroll to next section
  const scrollToNextSection = () => {
    const sections = Object.values(sectionIds);
    const currentIndex = sections.indexOf(activeSection);
    const nextIndex = (currentIndex + 1) % sections.length;
    scrollToSection(sections[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Skip to content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-gray-800 focus:text-white z-50"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <NavBar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      {/* Main Content */}
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <ProjectsSection
          projects={content.projects}
          openModal={openProjectModal}
        />
        <SkillsSection skills={content.skills} />
        <ContactSection
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          formStatus={formStatus}
        />
      </main>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <ProjectModal
            project={selectedProject}
            closeModal={closeProjectModal}
          />
        )}
      </AnimatePresence>

      {/* Bottom Navigator */}
      <BottomNavigator onClick={scrollToNextSection} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
