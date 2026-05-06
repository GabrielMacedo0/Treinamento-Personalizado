import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Situations } from "./components/Situations";
import { Results } from "./components/Results";
import { About } from "./components/About";
import { Pillars } from "./components/Pillars";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Situations />
        <Results />
        <About />
        <Pillars />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}