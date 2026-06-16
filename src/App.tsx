import { LanguageProvider } from "./i18n/LanguageContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen overflow-x-hidden bg-(--bg) text-(--text)">
        <Navbar />
        <main className="portfolio-shell flex flex-col items-center justify-center">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />
        </main>
      </div>
    </LanguageProvider>
  );
}
