import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Background from "./components/Background.jsx";
import { Title, SubTitle } from "./components/HeroTitle.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import ScrollIndicator from "./components/ScrollIndicator.jsx";
import { Container, Divider } from "./components/LayoutPrimitives.jsx";
import About from "./components/About.jsx";
import { useCallback, useRef } from "react";

function App() {
  const aboutRef = useRef(null);

  // Smooth scroll with a small offset for the fixed navbar (adjust 80 if your navbar height differs)
  const handleScrollToAbout = useCallback(() => {
    const target = aboutRef.current;
    if (!target) return;
    const navOffset = 80; // px
    const y = target.getBoundingClientRect().top + window.scrollY - navOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Background />

      <Container>
        <div className="flex min-h-screen flex-col items-center justify-center text-center">
          <Title>Ejaz Ahamed</Title>
          <Title>Shaik</Title>

          <SubTitle>
            I'm a{" "}
            <span className="underline decoration-white/25 decoration-2 underline-offset-[6px]">
              software developer
            </span>
            , photographer and an{" "}
            <span className="underline decoration-white/25 decoration-2 underline-offset-[6px]">
              ardent learner
            </span>{" "}
            who is always creating and learning awesome stuff. Let's{" "}
            <span className="underline decoration-white/25 decoration-2 underline-offset-[6px]">
              start scrolling
            </span>{" "}
            and learn more about me.
          </SubTitle>

          <Divider />

          <SocialLinks />
        </div>
      </Container>

      {/* About section with reveal animation */}
      <About ref={aboutRef} />

      <ScrollIndicator onClick={handleScrollToAbout} />
    </div>
  );
}

export default App;
