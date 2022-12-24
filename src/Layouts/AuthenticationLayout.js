import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const AuthenticationLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <div
      className="container py-5 d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="row col-12 align-items-center h-100 justify-content-between ">
        <div className="col-md-6 col-12 text-center">
          <h1 className="color-primary">سامانه املاک و مستغلات</h1>
          <p className="fw-bold fs-5 mb-5">
            دسترسی آسان به آگهی های املاک خود جهت ارائه به مشتری
          </p>
          {pathname === "/register" ? (
            <>
              <p>خدماتی از قبیل :</p>
              <ul>
                <li className="mb-3">
                  <FaCheckCircle />
                  <span className="me-2">فیلتر اگهی ها بر اساس نیاز مشتری</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle />
                  <span className="me-2">ایجاد آسان و سریع آگهی</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle />
                  <span className="me-2">ویرایش سریع آگهی</span>
                </li>
                <li className="mb-3">
                  <FaCheckCircle />
                  <span className="me-2">دسته بندی آگهی ها</span>
                </li>
              </ul>
            </>
          ) : null}
        </div>
        <div className="col-md-5 col-12">{children}</div>
      </div>
    </div>
  );
};

export default AuthenticationLayout;
