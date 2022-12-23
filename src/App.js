import { Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "./Layouts/DashboardLayout";
import AuthenticationLayout from "./Layouts/AuthenticationLayout";
import UserConext, { User } from "./context/UserContext";
import DashboardMain from "./pages/DashboardMain";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";
import PostDetails from "./pages/PostDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LoadingContext from "./context/LoadingContext";

function App() {
  return (
    <div className="App">
      <UserConext>
        <LoadingContext>
          <Routes>
            <Route
              path="/"
              element={
                localStorage.getItem("user") ? (
                  <Navigate replace to="/dashboard/1" />
                ) : (
                  <Navigate replace to="/login" />
                )
              }
            />
            <Route
              path="/dashboard/:page/*"
              element={
                <DashboardLayout>
                  <DashboardMain />
                </DashboardLayout>
              }
            />
            <Route
              path="/post-details/:id/*"
              element={
                <DashboardLayout>
                  <PostDetails />
                </DashboardLayout>
              }
            />
            <Route
              path="/create-post"
              element={
                <DashboardLayout>
                  <CreatePost />
                </DashboardLayout>
              }
            />
            <Route
              path="/edit-post/:id"
              element={
                <DashboardLayout>
                  <EditPost />
                </DashboardLayout>
              }
            />

            <Route
              path="/login"
              element={
                <AuthenticationLayout>
                  <Login />
                </AuthenticationLayout>
              }
            />
            <Route
              path="/register"
              element={
                <AuthenticationLayout>
                  <Register />
                </AuthenticationLayout>
              }
            />
          </Routes>
        </LoadingContext>
      </UserConext>
    </div>
  );
}

export default App;
