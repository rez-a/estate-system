import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Load } from "../../../context/LoadingPostsContext";
import ButtonPrimary from "../../shared/ButtonPrimary";
import ButtonPrimarySmall from "../../shared/ButtonPrimarySmall";
import Categories from "./categories/Categories";
import Filters from "./filters/Filters";

const SideBar = () => {
  const { loadPosts } = useContext(Load);
  return (
    <div>
      <Categories loadPosts={loadPosts} />
      {!loadPosts && (
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters />
                <div className="d-flex justify-content-between my-3">
                  <ButtonPrimarySmall text="حذف همه آگهی ها" />
                  <ButtonPrimarySmall text="اعمال فیلتر" />
                </div>
              </>
            }
          />
          <Route
            path="/post-details/:id"
            element={
              <>
                <div className="d-flex justify-content-between my-3">
                  <ButtonPrimary text="حذف" />
                  <ButtonPrimary text="ویرایش" />
                </div>
              </>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default SideBar;
