import "./App.css";
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div>
      <Header />
      <About partyMode={true} />
      <Footer />
    </div>
  );
}

export default App;
