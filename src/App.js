import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import React, { useState } from 'react';
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(0 4 20)";
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils-DarkMode';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils-LightMode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />
          {/* <Routes>
            <Route path="/"element={<TextForm heading="Enter the text below to analyze" mode={mode} showAlert={showAlert} />} ></Route>
            <Route path="/about" element={<About mode={mode} />} ></Route>
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}
export default App;
