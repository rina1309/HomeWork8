import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Slider from './components/Slider';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
