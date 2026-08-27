import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import Resume from "./components/Resume";
import Testimonials from "./components/Testimonials";
import GitHub from "./components/GitHub";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main id="home">

        {/* DAY 2 */}
        <Hero />

        {/* DAY 3 */}
        <About />

        {/* DAY 4 */}
        <Skills />

        {/* DAY 5 */}
        <Experience />

        {/* DAY 6 */}
        <Education />

        {/* DAY 7 */}
        <Projects />

        {/* DAY 8 */}
        <Services />

        {/* DAY 9 */}
        <Certifications />

        {/* DAY 10 */}
        <Resume />

        {/* DAY 11 */}
        <Testimonials />

        {/* DAY 12 */}
        <GitHub />

        {/* DAY 13 */}
        <Contact />

        {/* DAY 14 */}
        <Location />

      </main>

      {/* DAY 15 */}
      <Footer />

    </div>
  );
}

export default App;