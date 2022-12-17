import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LINE_TRANING_FORM from './components/LINE_TRANING_FORM.js';
import FLIGHT_DETAILS from './components/FLIGHT_DETAILS';
import Navbar from './components/Navbar';
 

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<LINE_TRANING_FORM/>} />
          <Route path="/Details" exact element={<FLIGHT_DETAILS/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );



}

export default App;
