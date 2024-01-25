import './App.css';
import Alert from './components/AlertMsg';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import About from './components/About';
import { useState } from 'react';
function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const toggleModedark = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("the dark mode is enabled", "dark");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("the light mode is enabled", "success");
    }
  }
  const toggleModedanger = () => {
    if (mode === 'light') {
      setmode('danger');
      document.body.style.backgroundColor = '#ffb9b9';
      showAlert("the danger mode is enabled", "danger");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("the light mode is enabled", "success");
    }
  }
  const toggleModewarning = () => {
    if (mode === 'light') {
      setmode('warning');
      document.body.style.backgroundColor = '#e5e550';
      showAlert("the warning mode is enabled", "warning");
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("the light mode is enabled", "success");
    }
  }


  return (
    <>
        <Navbar title="Textutils" firstvalue="Home" SecondValue="About Us" mode={mode} toggleModedark={toggleModedark} toggleModedanger={toggleModedanger} toggleModewarning={toggleModewarning} />
        <Alert alert={alert}></Alert>
        <div className="container my-3">
              <Textarea showAlert={showAlert} heading="Enter the text below." mode={mode}/>
        </div>
    </>
  );
}
export default App;
