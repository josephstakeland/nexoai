import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import AnimatedTextSection from './components/AnimatedTextSection';
import AutomationSection from './components/AutomationSection';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Plans from './components/Plans';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Hero />
        <AnimatedTextSection />
        <AutomationSection />
        <Benefits />
        <Services />
        <Testimonials />
        <Plans />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
