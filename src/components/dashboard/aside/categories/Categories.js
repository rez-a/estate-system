import React from "react";

import Category from "./Category";

const Categories = () => {
  return (
    <>
      <h6 className="fw-bold mb-3">دسته ها</h6>
      <ul className="categories border-bottom">
        <Category text="خرید" count={23} />
        <Category text="رهن" count={13} />
        <Category text="اجاره" count={8} />
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
            <span className="ms-auto">همه آگهی ها</span>
            <span>44 مورد</span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default Categories;
