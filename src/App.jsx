// src/App.js

import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
