import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Layout/Header";
import Landing from "./components/Landing";
import Login from "./components/LogIn";
import Register from "./components/Register";
import EmployeeManagementPage from "./components/EmployeeManagementPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Landing, Login, and Register routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* EmployeeManagementPage route with Header */}
          <Route
            path="/employeemanagementpage"
            element={
              <>
                <Header />
                <EmployeeManagementPage />
              </>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
