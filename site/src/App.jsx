import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLenis } from "./lib/useLenis.js";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import MagneticCursor from "./components/shared/MagneticCursor.jsx";

// Resets scroll to the top of each new page, unless a nav click asked to
// land on a specific anchor (see Navbar's cross-page scrollTo state).
function RouteChangeReset() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) return;
    window.scrollTo(0, 0);
    ScrollTrigger.refresh();
  }, [location.pathname, location.state]);

  return null;
}

function AppRoutes() {
  return (
    <>
      <RouteChangeReset />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </>
  );
}

export default function App() {
  useLenis();

  return (
    <BrowserRouter>
      <MagneticCursor />
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}
