import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Dashboard } from "./pages/Dashboard";
import { Sendmoney } from "./pages/Sendmoney";
import { Signin } from "./pages/Signin";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  // Extract project ID from current path automatically
  const projectId = window.location.pathname.split("/")[1];
  const basename = projectId ? `/${projectId}` : "";

  return (
    <>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/sendmoney"
            element={
              <ProtectedRoute>
                <Sendmoney />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
