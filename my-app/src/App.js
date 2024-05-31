import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import './global.css';
import TextArea from "./components/TextArea.js";
import Alert from './components/Alert';
import About from './components/About';
import { Route, Routes } from 'react-router-dom';
import Suresh from './components/Suresh'

function App() {
  const [mode, setMode] = useState({
    color: 'white',
    backgroundColor: '#13538b',
    borderRadius: '5px'
  });

  const [btnText, setBtnText] = useState("Light Mode");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    // console.log(col)
    if (mode.color === 'white') {
      setMode({ color: '#13538b', backgroundColor: 'white', borderRadius: '5px' });
      setBtnText("Dark Mode");
      document.body.style.backgroundColor = 'black';
      showAlert("Enabled Dark Mode now", "success");
    } else {
      setMode({ color: 'white', backgroundColor: '#13538b', borderRadius: '5px' });
      setBtnText("Light Mode");
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled Light Mode now", "success");
    }
  }
  const toggleM = (col) => {

    document.body.style.backgroundColor = col;
  }
  return (
    <>
      <Navbar title="Suru-Store" hm="Home" Ab="About" mod={mode} change={toggleM} />
      <Alert alert={alert} text={btnText} />
      <div className="container my-3">
        <Routes>
          <Route path='/suru-store' element={<Suresh />}/>
          <Route path="/About" element={<About />} />
          <Route path="/" element={<TextArea heading="Enter your text here:" mod={mode} change={toggleMode} bt={btnText} alert={alert} show={showAlert} />} />
        </Routes>
  
      </div>
    </>
  );
}

export default App;
