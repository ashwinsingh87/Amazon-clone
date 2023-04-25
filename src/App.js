import "./App.css";
import Home from "./Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";
import Login from "./Login/Login";
// import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase";
import { useStateValue } from "./StateProvider";
import { useEffect } from "react";

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is >>>> ",authUser)
          if (authUser) {
            //user just loggedin / user was already loggedin
            dispatch({
              type: "SET_USER",
              user: authUser,
            });
          } else {
            //user is not logginin.
            dispatch({
              type: "SET_USER",
              user: null,
            });
          }
    });
  },[]);
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/contact" element={"hey i am contact"} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
