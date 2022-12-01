import React from "react";

import { FaHome } from "react-icons/fa";

const Category = ({ text, count }) => {
  return (
    <li
      style={{
        margin: "1rem 0",
      }}
    >
      <a
        href="#"
        className="w-100 d-flex judtify-content-between text-secondary"
        style={{
          fontSize: "13px",
        }}
      >
        <span className="ms-auto">
          <FaHome size="18px" />
          <span className="me-2">{text} املاک</span>
        </span>
        <span>{count} مورد</span>
      </a>
    </li>
  );
};

export default Category;
