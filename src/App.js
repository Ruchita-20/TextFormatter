import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }
  const toggleMode=()=>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode has been enabled","success");
    }
    else{
      setMode('dark');      
      document.body.style.backgroundColor="#19376D";
      showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    <>    
    <Navbar title='TextUtils' about='About US' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Text" mode={mode}/>
    </div>
    </>
  );
}

export default App;