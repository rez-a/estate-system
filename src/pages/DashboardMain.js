import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import Pagination from "../components/dashboard/main/Pagination";
import Post from "../components/dashboard/main/Post";
import { Load } from "../context/LoadingPostsContext";
import Toast from "../helper/toast";
import { getPosts } from "../services/dashboard";

const DashboardMain = () => {
  const { loadPosts, setLoadPosts } = useContext(Load);
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    setLoadPosts(false);
    const request = async () => {
      const data = await getPosts();
      if (data.code === "200") {
        setAllPosts(data.posts);
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ها دریافت نشد!",
        });
      }
      setLoadPosts(false);
    };
    request();
  }, []);
  return (
    <>
      <header
        className="text-secondary text-start border-bottom mt-3"
        style={{ fontSize: "12px" }}
      >
        {!loadPosts && "تعداد 64 آگهی یافت شد"}
      </header>
      <main className={`row mt-2 ${loadPosts ? "loading-skeleton" : ""}`}>
        {loadPosts ? (
          [...Array(9)].map(() => (
            <Post category="خرید" loadPosts={loadPosts} />
          ))
        ) : (
          <>
            <Post category="خرید" loadPosts={loadPosts} />
            <Post category="اجاره" loadPosts={loadPosts} />
            <Post category="خرید" loadPosts={loadPosts} />
            <Post category="خرید" loadPosts={loadPosts} />
            <Post category="رهن" loadPosts={loadPosts} />
            <Post category="رهن" loadPosts={loadPosts} />
            <Post category="رهن" loadPosts={loadPosts} />
            <Post category="اجاره" loadPosts={loadPosts} />
            <Post category="اجاره" loadPosts={loadPosts} />
          </>
        )}
      </main>
      <footer className="mt-3">{!loadPosts && <Pagination />}</footer>
    </>
  );
};

export default DashboardMain;
