import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { motion as Motion } from "framer-motion";

const iconClasses =
  "h-24 w-24 sm:h-8 sm:w-8 transition-opacity hover:opacity-100 opacity-90";

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  { icon: FaGithub, label: "GitHub", href: "https://github.com/yourusername" },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com/yourusername",
  },
];

const SocialLinks = () => (
  <div className="mt-6 flex items-center justify-center gap-6 text-white/90">
    {socialLinks.map((link) => {
      const Icon = link.icon; // ✅ define Icon inside
      return (
        <Motion.a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300, damping: 15 }}
          className="opacity-90 hover:opacity-100"
        >
          <Icon className={iconClasses} />
        </Motion.a>
      );
    })}
  </div>
);

export default SocialLinks;
