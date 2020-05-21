import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Accordion from './Accordion/pages/accordion';
import AccordionNew from './Accordion/pages/accordionNew';


function App() {
  return (
    <div className="accordion-wrapper">
      <h2>Two Different Approaches to develop Accordion using React Js</h2>
      <div className="accordion-methods">
        <h3>Method1</h3>
        <Accordion />
      </div>
      <div className="accordion-methods">
        <h3>Method2</h3>
        <AccordionNew />
      </div>
    </div >
  );
}

export default App;
