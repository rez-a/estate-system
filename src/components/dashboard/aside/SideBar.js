import React from "react";
import { useContext } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Load } from "../../../context/LoadingContext";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Categories from "./categories/Categories";
import MainSideBar from "./MainSideBar";

const SideBar = () => {
  const { load } = useContext(Load);
  const { pathname } = useLocation();
  return (
    <div>
      <Categories load={load} />
      {!load &&
        (pathname.includes("dashboard") ? (
          <MainSideBar />
        ) : pathname.includes("post-details") ? (
          <>
            <div className="d-flex justify-content-between my-3">
              <ButtonPrimary text="حذف" />
              <ButtonPrimary text="ویرایش" />
            </div>
          </>
        ) : null)}
    </div>
  );
};

export default SideBar;
