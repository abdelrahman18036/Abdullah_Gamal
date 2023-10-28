import React, { useState, useEffect } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import Skills from "./Components/Skills/Skills";
import Portfolio from "./Components/Portfolio/Portfolio";
import Resume from "./Components/Resume/Resume";
import Testimonials from "./Components/Testimonials/Testimonials";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import { TailSpin } from "react-loader-spinner";
import Lines from "./Components/Lines/Lines";

function App() {
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  useEffect(() => {
    // Simulate component loading with a delay (replace with your loading logic)
    setTimeout(() => {
      setComponentsLoaded(true);
    }, 2000); // Adjust the delay as needed
  }, []);

  return (
    <main className="main">
      {componentsLoaded ? (
        <>
          <Header />
          <Home />
          <Services />
          <Skills />
          <Portfolio />
          <Resume />
          <Testimonials />
          <Contact />
          <Footer />
          <Lines />
        </>
      ) : (
        <div className="loader-container">
          <TailSpin color="hsl(165 ,60% , 40%)" height={100} width={100} />
        </div>
      )}

      {/* Starry background */}
      <div className="star-background">
        {Array.from({ length: 100 }).map((_, index) => (
          <div
            key={index}
            className={`star animation${index % 2 === 0 ? 1 : 2}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </main>
  );
}

export default App;
