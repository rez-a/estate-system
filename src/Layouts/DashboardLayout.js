import React, { useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import SideBar from "../components/dashboard/aside/SideBar";
import LoadingPostsContext from "../context/LoadingContext";
import CategoryContext from "../context/CategoryContext";
import FilterContext from "../context/FilterContext";
import SearchPostContext from "../context/SearchPostContext";
import EditPostLoads from "../context/EditPostLoads";

const DashboardLayout = ({ children }) => {
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
  }, []);
  return (
    <>
      <FilterContext>
        <CategoryContext>
          <LoadingPostsContext>
            <SearchPostContext>
              <header>
                <Navbar />
              </header>
              <main>
                <div className="container-fluid mt-3">
                  <div className="row">
                    <EditPostLoads>
                      <aside className="col-3">
                        <SideBar />
                      </aside>
                      <main className="col-9 mb-3">{children}</main>
                    </EditPostLoads>
                  </div>
                </div>
              </main>
            </SearchPostContext>
          </LoadingPostsContext>
        </CategoryContext>
      </FilterContext>
    </>
  );
};

export default DashboardLayout;
