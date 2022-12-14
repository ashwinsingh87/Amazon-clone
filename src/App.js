import "./App.css";
// import Header from "./Header";
import Home from "./Home";
// import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Navbar";
import Checkout from './Checkout'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/contact" element={'hey i am contact'}/>
          <Route path="/checkout" element={<Checkout/>}/>
          
          <Route path="/" element={<Home/>}/>          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
