import { Container } from "./LayoutPrimitives";

const NavLink = ({ children }) => (
  <a
    href="#"
    className="text-xs tracking-[0.25em] text-white/75 transition hover:text-white/95"
  >
    {children}
  </a>
);

const Navbar = () => (
  <div className="fixed inset-x-0 top-0 z-40">
    <Container>
      <div className="flex items-center justify-center gap-6 pt-4 pb-2">
        {["HOME", "ABOUT", "RESUME", "WORKS", "CONTACT"].map((item) => (
          <NavLink key={item}>{item}</NavLink>
        ))}
      </div>
    </Container>
  </div>
);

export default Navbar;
