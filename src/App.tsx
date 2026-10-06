import { About } from "./components/About";
import { Contact, Footer } from "./components/Contact";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { HowIWork } from "./components/HowIWork";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-primary">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <HowIWork />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
