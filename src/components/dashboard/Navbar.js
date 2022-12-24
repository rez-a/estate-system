import React from "react";
import { FaSearch, FaHome } from "react-icons/fa";
import { BiExport } from "react-icons/bi";
import ButtonPrimary from "../shared/ButtonPrimary";
import { Load } from "../../context/LoadingContext";
import { useContext } from "react";
import { User } from "../../context/UserContext";
import { Category } from "../../context/CategoryContext";
import { SearchText } from "../../context/SearchPostContext";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const { category } = useContext(Category);
  const { setSearch } = useContext(SearchText);
  const { load } = useContext(Load);
  const {
    state: { business_license, estate_name },
  } = useContext(User);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleShowCategory = (category) => {
    switch (category) {
      case "rent":
        return "اجاره املاک";
      case "buy":
        return "خرید املاک";
      case "mortgage":
        return "رهن املاک";
      default:
        return "همه آگهی ها";
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  useEffect(() => {
    clearSearch();
  }, [category]);
  const clearSearch = () => {
    setInputValue("");
    setSearch("");
  };
  return (
    <nav className="navbar bg-light">
      <div className="container-fluid container-xxl">
        <a className="navbar-brand me-0 ms-3 d-flex align-items-center ms-auto">
          <FaHome size="3rem" color="#B5B5B5" />
          <span
            className={`d-flex flex-column me-2 ${
              load ? "loading-skeleton" : ""
            }`}
          >
            <span
              className={`color-primary fw-bold fs-6 ${
                load ? "loading-style mb-2" : ""
              }`}
            >
              {estate_name}
            </span>
            <span
              className={`text-secondary ${load ? "loading-style" : ""}`}
              style={{ fontSize: "12px" }}
            >
              {business_license}
            </span>
          </span>
        </a>
        <div className="d-flex align-items-center menu-content">
          <form
            className="d-md-flex d-none search"
            role="search"
            style={{ position: "relative" }}
          >
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="form-control py-2"
              type="text"
              placeholder={
                !load ? `جستجو در ${handleShowCategory(category)}` : null
              }
              aria-label="Search"
              style={{
                fontSize: "12px",
                backgroundColor: "#E7E7E7",
                border: "none",
                color: "rgb(110 110 110)",
                width: "300px",
                paddingRight: "2rem",
                paddingLeft: "2rem",
              }}
            />
            {!load && (
              <>
                <button
                  className="btn btn-search"
                  onClick={() => setSearch(inputValue)}
                  type="button"
                  style={{
                    position: "absolute",
                    right: "7px",
                    top: "50%",
                    padding: 0,
                    transform: "translateY(-50%)",
                  }}
                >
                  <FaSearch />
                </button>
                {inputValue.trim() !== "" && (
                  <button
                    className="btn btn-remove-search"
                    onClick={clearSearch}
                    type="button"
                    style={{
                      position: "absolute",
                      left: "7px",
                      top: "50%",
                      padding: 0,
                      transform: "translateY(-50%)",
                    }}
                  >
                    <FaTimes />
                  </button>
                )}
              </>
            )}
          </form>
          <button onClick={handleLogout} className="btn mx-4 d-none d-sm-block">
            <BiExport
              size="1.5rem"
              style={{
                transform: "rotate(90deg)",
              }}
            />
            <span className="me-1">خروج</span>
          </button>
          <Link to="/create-post">
            <ButtonPrimary text="ثبت آگهی" type="btnPrimary" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
