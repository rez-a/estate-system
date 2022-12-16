import React from "react";
import { useContext } from "react";
import { Category as CategoryPosts } from "../../../../context/CategoryContext";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = ({ text, count, categoryName }) => {
  const { category, setCategory } = useContext(CategoryPosts);
  return (
    <li
      style={{
        margin: "1rem 0",
      }}
    >
      <Link
        to="/dashboard/1"
        className={`w-100 d-flex judtify-content-between text-secondary category ${
          category === categoryName ? "active" : ""
        }`}
        style={{
          fontSize: "13px",
        }}
        onClick={() => setCategory(categoryName)}
      >
        <span className="ms-auto">
          <FaHome size="18px" />
          <span className="me-2">{text} املاک</span>
        </span>
        <span>{count} مورد</span>
      </Link>
    </li>
  );
};

export default Category;
