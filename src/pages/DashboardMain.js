import React from "react";
import Pagination from "../components/dashboard/main/Pagination";
import Post from "../components/dashboard/main/Post";

const DashboardMain = () => {
  return (
    <>
      <header
        className="text-secondary text-start border-bottom mt-3"
        style={{ fontSize: "12px" }}
      >
        تعداد 64 آگهی یافت شد
      </header>
      <main className="row mt-2">
        <Post category="خرید" />
        <Post category="خرید" />
        <Post category="خرید" />
        <Post category="رهن" />
        <Post category="رهن" />
        <Post category="رهن" />
        <Post category="اجاره" />
        <Post category="اجاره" />
        <Post category="اجاره" />
      </main>
      <footer className="mt-3">
        <Pagination />
      </footer>
    </>
  );
};

export default DashboardMain;
