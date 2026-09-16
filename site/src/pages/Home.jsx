import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero/Hero.jsx";
import About from "../components/About/About.jsx";
import Approach from "../components/Approach/Approach.jsx";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const targetId = location.state?.scrollTo;
    if (!targetId) return;
    document.getElementById(targetId)?.scrollIntoView({ behavior: "auto" });
  }, [location.state]);

  return (
    <>
      <Hero />
      <About />
      <Approach />
    </>
  );
}
