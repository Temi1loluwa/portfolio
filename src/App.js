import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Section from "./components/Section";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Section />
      <Skills />
      <Services />
      <Footer />
    </div>
  );
};

export default App;
