import React from "react";
import { Navbar, Hero, Features } from "./components";

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <main className="container">
          <Hero />
        </main>
      </div>
    </>
  );
};

export default App;
