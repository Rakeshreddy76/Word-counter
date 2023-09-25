 //import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      showAlert("Dark Mode has been enabled", "success")
      //document.body.style.backgroundColor = "grey"
      document.title = "Dark Mode"
      // setInterval(() => {
      //   document.title = "Its Amazing"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Its Fantastic"
      // }, 1500);
    }
    else {
      setMode("light")
      showAlert("Light Mode has been enabled", "success")
      document.title = "Light Mode"
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Navbar" Abouttxt="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter Your Info" />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
