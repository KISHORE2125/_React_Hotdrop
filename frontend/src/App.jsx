import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/Home_Page";

import SignIn from "./Pages/Sign_In";
import SignUp from "./Pages/Sign_Up";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />


        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>

  );
}

export default App;
