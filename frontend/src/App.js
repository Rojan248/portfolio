import { useEffect } from "react";
import "@/App.css";
import axios from "axios";
import { Toaster } from "@/components/ui/sonner";
import { TopNav } from "@/components/TopNav";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Work } from "@/components/sections/Work";
import { Lab } from "@/components/sections/Lab";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";
import { ColophonFooter } from "@/components/ColophonFooter";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV } from "@/data/content";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;
const SECTION_IDS = NAV.map((n) => n.id);

// Stable toast styling (extracted so a new object isn't created each render).
const TOAST_OPTIONS = {
  style: {
    borderRadius: 0,
    border: "2px solid #11110F",
    background: "#FBF6EA",
    color: "#11110F",
    fontFamily: '"IBM Plex Mono", monospace',
  },
};

function Portfolio() {
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    // light, non-blocking connectivity ping
    axios.get(`${API}/`).catch(() => {});
  }, []);

  return (
    <div className="App min-h-screen bg-paper-50 text-ink-900 antialiased">
      <TopNav active={active} />
      <main>
        <Hero />
        <About />
        <Work />
        <Lab />
        <Skills />
        <Education />
        <Contact />
      </main>
      <ColophonFooter />
      <Toaster position="bottom-right" toastOptions={TOAST_OPTIONS} />
    </div>
  );
}

function App() {
  return <Portfolio />;
}

export default App;
