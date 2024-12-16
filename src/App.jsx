import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Homepage from './Pages/HomePage';
import Footer from './Components/Footer';
import ContactPage from './Pages/ContactPage'; 


const App = () => {
  return (
    <Router>
      <div className="bg-[#0a0b14] min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <ContactPage/>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
