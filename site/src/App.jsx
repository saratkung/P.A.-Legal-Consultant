import { useLenis } from "./lib/useLenis.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Approach from "./components/Approach/Approach.jsx";
import Commitment from "./components/Commitment/Commitment.jsx";
import Services from "./components/Services/Services.jsx";
import ClientReasons from "./components/ClientReasons/ClientReasons.jsx";
import Team from "./components/Team/Team.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MagneticCursor from "./components/shared/MagneticCursor.jsx";

export default function App() {
  useLenis();

  return (
    <>
      <MagneticCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Approach />
        <Commitment />
        <Services />
        <ClientReasons />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
