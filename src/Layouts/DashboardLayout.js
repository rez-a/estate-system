import React, { useContext, useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import SideBar from "../components/dashboard/aside/SideBar";
import DashboardMain from "../pages/DashboardMain";
import { User } from "../context/UserContext";
import { Route, Routes } from "react-router-dom";
import PostDetails from "../pages/PostDetails";
import EditPost from "../pages/EditPost";
import CreatePost from "../pages/CreatePost";
import { useState } from "react";
import LoadingPostsContext from "../context/LoadingPostsContext";

const DashboardLayout = () => {
  const { user } = useContext(User);
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
  }, []);
  return (
    <>
      <LoadingPostsContext>
        <header>
          <Navbar />
        </header>
        <main>
          <div className="container-fluid mt-3">
            <div className="row">
              <aside className="col-3">
                <SideBar />
              </aside>
              <main className="col-9 mb-3">
                <Routes>
                  <Route path="/" element={<DashboardMain />} />
                  <Route path="/post-details/:id" element={<PostDetails />} />
                  <Route path="/create-post" element={<CreatePost />} />
                  <Route path="/edit-post/:id" element={<EditPost />} />
                </Routes>
              </main>
            </div>
          </div>
        </main>
      </LoadingPostsContext>
    </>
  );
};

export default DashboardLayout;
