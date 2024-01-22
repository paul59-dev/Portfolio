import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};

export default App;