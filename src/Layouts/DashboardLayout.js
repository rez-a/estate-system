import React, { useContext, useEffect } from "react";
import Navbar from "../components/dashboard/Navbar";
import SideBar from "../components/dashboard/aside/SideBar";
import { Load } from "../context/LoadingContext";
import CategoryContext from "../context/CategoryContext";
import FilterContext from "../context/FilterContext";
import SearchPostContext from "../context/SearchPostContext";
import EditPostLoads from "../context/EditPostLoads";
import NewPostContext from "../context/NewPostContext";
import { User } from "../context/UserContext";
import { getPosts } from "../services/dashboard";
import { addUser } from "../reducer/userReducer/ActionCreators";
import Toast from "../helper/toast";
import { useNavigate } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const { dispatch } = useContext(User);
  const { setLoad } = useContext(Load);
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.backgroundColor = "#ffffff";
    if (!localStorage.getItem("user")) {
      navigate("/login");
    } else {
      setLoad(true);
      const request = async () => {
        const data = await getPosts();
        if (data?.code === "200") {
          dispatch(addUser(data));
          setLoad(false);
        } else if (data?.posts?.length < 1) {
          dispatch(addUser({ ...data, 0: { posts: [] } }));
          setLoad(false);
        } else {
          Toast.fire({
            icon: "info",
            title: "مشکلی پیش آمده.آگهی ها دریافت نشد!",
          });
        }
      };
      request();
    }
  }, []);
  return (
    <>
      <FilterContext>
        <CategoryContext>
          <SearchPostContext>
            <header>
              <Navbar />
            </header>
            <main>
              <div className="container-fluid container-xxl mt-3">
                <div className="row">
                  <NewPostContext>
                    <EditPostLoads>
                      <aside className="col-xl-3 col-md-4 col-12">
                        <SideBar />
                      </aside>
                      <main className="col-xl-9 col-md-8 col-12 mb-3">
                        {children}
                      </main>
                    </EditPostLoads>
                  </NewPostContext>
                </div>
              </div>
            </main>
          </SearchPostContext>
        </CategoryContext>
      </FilterContext>
    </>
  );
};

export default DashboardLayout;
