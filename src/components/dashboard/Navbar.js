import React from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { BiExport } from "react-icons/bi";
import ButtonPrimary from "../shared/ButtonPrimary";
import { Load } from "../../context/LoadingPostsContext";
import { useContext } from "react";

const Navbar = () => {
  const { loadPosts } = useContext(Load);
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid">
        <a className="navbar-brand me-0 ms-3 d-flex align-items-center ms-auto">
          <FaHome size="3rem" color="#B5B5B5" />
          <span
            className={`d-flex flex-column me-2 ${
              loadPosts ? "loading-skeleton" : ""
            }`}
          >
            <span
              className={`color-primary fw-bold fs-6 ${
                loadPosts ? "loading-style mb-2" : ""
              }`}
            >
              املاک کاکتوس
            </span>
            <span
              className={`text-secondary ${loadPosts ? "loading-style" : ""}`}
              style={{ fontSize: "12px" }}
            >
              1234567890
            </span>
          </span>
        </a>
        <form className="d-flex" role="search" style={{ position: "relative" }}>
          <input
            className="form-control py-2"
            type="search"
            placeholder={!loadPosts && "جستجو در همه آگهی ها"}
            aria-label="Search"
            style={{
              fontSize: "12px",
              backgroundColor: "#E7E7E7",
              border: "none",
              color: "#B6B6B6",
              width: "300px",
            }}
          />
          {!loadPosts && (
            <button
              className="btn btn-search"
              style={{
                position: "absolute",
                left: "5px",
                top: "50%",
                padding: 0,
                transform: "translateY(-50%)",
              }}
            >
              <FaSearch />
            </button>
          )}
        </form>
        <button className="btn mx-4">
          <BiExport
            size="1.5rem"
            style={{
              transform: "rotate(90deg)",
            }}
          />
          <span className="me-1">خروج</span>
        </button>
        <ButtonPrimary text="ثبت آگهی" />
      </div>
    </nav>
  );
};

export default Navbar;
