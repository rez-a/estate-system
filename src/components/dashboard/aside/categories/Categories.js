import React, { useContext } from "react";
import { User } from "../../../../context/UserContext";
import Category from "./Category";
import { Category as CategoryPosts } from "../../../../context/CategoryContext";
import { Link } from "react-router-dom";

const Categories = ({ load }) => {
  const {
    user: { posts },
  } = useContext(User);
  const { category, setCategory } = useContext(CategoryPosts);
  return (
    <>
      <h6 className="fw-bold mb-3">دسته ها</h6>
      <ul
        className={`categories border-bottom ${load ? "loading-skeleton" : ""}`}
      >
        {load ? (
          [...Array(4)].map((_, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                height: "30px",
                marginBottom: "1rem",
              }}
            ></li>
          ))
        ) : (
          <>
            <Category
              text="خرید"
              count={posts.filter((post) => post.category === "buy").length}
              categoryName="buy"
            />
            <Category
              text="رهن"
              count={
                posts.filter((post) => post.category === "mortgage").length
              }
              categoryName="mortgage"
            />
            <Category
              text="اجاره"
              count={posts.filter((post) => post.category === "rent").length}
              categoryName="rent"
            />
            <li
              style={{
                margin: "1rem 0",
              }}
            >
              <Link
                to="/dashboard/1"
                className={`w-100 d-flex judtify-content-between text-secondary category ${
                  category === "all" ? "active" : ""
                }`}
                style={{
                  fontSize: "13px",
                }}
                onClick={() => setCategory("all")}
              >
                <span className="ms-auto">همه آگهی ها</span>
                <span>{posts.length} مورد</span>
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Categories;
