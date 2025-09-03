import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar_Section";
import HomePage from "./Pages/Home_Page";

import SignIn from "./Pages/Sign_In_Page";
import SignUp from "./Pages/Sign_Up_Page";
// import Contact from "./Pages/Contact_Page";
// import LoadingAnimation from "./Components/Loading_Animation_Section";

function App() {
  return (
    <Router>
      {/* <LoadingAnimation/> */}
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />


        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/contact" element={<Contact />} /> */}



      </Routes>
    </Router>

  );
}

export default App;
