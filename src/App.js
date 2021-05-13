import 'fontsource-roboto';
import React, { useState, useEffect } from 'react';
import Loaing from './components/Loaing';
import Nav from './components/Nav';
import Home from './pages/Home';
import Galery from './pages/Galery';
import Office from './pages/Office';
import Services from './pages/Services'
import Footer from './components/Footer';

import "./App.css";

function App() {
  const [state, setstate] = useState(false);

  useEffect(() => {
    setInterval(() => { setstate(true) }, 2000)
  }, [])

  if (state) {
    return (
      <>
        <Nav />
        <Home />
        <Services />
        <Galery />
        <Office />
        <Footer />
      </>
    );
  } else {
    return (
      <Loaing />
    );
  }
}

export default App;