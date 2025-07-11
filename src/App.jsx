import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Sendmoney } from "./pages/Sendmoney";
import { Signin } from "./pages/Signin";
import { useState } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/sendmoney" element={<Sendmoney />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
