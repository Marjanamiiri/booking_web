import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import { useEffect, useState } from "react";
// const Contact = () => {
//   return <h2>Contact Page</h2>;
// };

function App() {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  });

  return (
    <div className='app'>
      <Router>

        <Navbar        
        menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}/>
        <Routes>
          <Route path='/' exact Component={Home}/>
        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
