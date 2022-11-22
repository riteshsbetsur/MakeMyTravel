import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import NotFound from "./pages/NotFound";
import AuthProvider from "./apis/AuthContextApi";
import PublicRoute from "./routes/PublicRoute";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css"
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        {/* <ToastContainer theme="dark"/> */}
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
