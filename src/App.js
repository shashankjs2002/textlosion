import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AdditiveCipherDecrypt from './components/AdditiveCipherDecrypt';
import MonoAlphabeticCipherDecrypt from './components/MonoAlphabeticCipherDecrypt';
import MonoAlphabeticEncrypt from './components/MonoAlphabeticEncryt';
import HillCypherEncrpt from './components/HillCipherEncrypt';

function App() {
  return (
    <Router>

      <div className="">
      <Navbar/>
      <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/additive-cipher-decrypt" element={<AdditiveCipherDecrypt/>} />
          <Route path="/mono-alphabetic-cipher-decrypt" element={<MonoAlphabeticCipherDecrypt/>} />
          <Route path="/mono-alphabetic-cipher-encrypt" element={<MonoAlphabeticEncrypt/> } />
          <Route path="/hill-cipher-encrypt" element={<HillCypherEncrpt/>} />
          
        </Routes>
      
    </div>
    </Router>
  );
}

export default App;
