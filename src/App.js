import { Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import AuthenticationLayout from "./Layouts/AuthenticationLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/*" element={<AuthenticationLayout />} />
      </Routes>
    </div>
  );
}

export default App;
