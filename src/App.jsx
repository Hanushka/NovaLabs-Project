import React from 'react';
import Header from './Components/Layout/Header';
import Home from './Pages/Home';
import Footer from './Components/Layout/Footer';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Intelligence from './Pages/Intelligence';
import Contact from './Pages/Contact';
import NavBar from './Components/Layout/NavBar'
import ScrollToTop from './Components/Layout/ScrollToTop';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <NavBar/>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/intelligence" element={<Intelligence />} />
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;

