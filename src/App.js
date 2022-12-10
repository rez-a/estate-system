import { Route, Routes, useNavigate } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import AuthenticationLayout from "./Layouts/AuthenticationLayout";
import UserConext from "./context/UserContext";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <UserConext>
        <Routes>
          {localStorage.getItem("user") !== null ? (
            <Route path="/dashboard/*" element={<DashboardLayout />} />
          ) : (
            <Route path="/*" element={<AuthenticationLayout />} />
          )}
        </Routes>
      </UserConext>
    </div>
  );
}

export default App;
