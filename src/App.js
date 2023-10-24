import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Testimonials from "./Components/Testimonials/Testimonials";
import Pricing from "./Components/Pricing/Pricing";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

function App() {
  return (
    <main className="main">
      <Header />
      <Home />
      <Services />
      <Skills />
      <Portfolio />
      <Resume />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
