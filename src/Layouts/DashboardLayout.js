import React, { useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import SideBar from "../components/dashboard/aside/SideBar";
import DashboardMain from "../pages/DashboardMain";

const DashboardLayout = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
  }, []);
  return (
    <>
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
              <DashboardMain />
            </main>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardLayout;
