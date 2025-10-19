import React from 'react';
import './assets/styles/App.css'; 
import { Header } from '../components/header.jsx';
import { Hero } from '../components/HeroSection.jsx';
import { Projects } from '../components/Projects.jsx';
import { About } from '../components/about.jsx';
import { Contact } from '../components/contact.jsx';
import { Footer } from '../components/Footer.jsx';

export default function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
