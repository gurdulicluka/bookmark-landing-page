import React from "react";
import {
  Navbar,
  Hero,
  Features,
  Extensions,
  FAQ,
  CTA,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <Features />
      <Extensions />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
