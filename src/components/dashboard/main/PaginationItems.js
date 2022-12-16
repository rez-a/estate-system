import React from "react";
import { Link } from "react-router-dom";

const PaginationItems = ({ min, max, page, setPage }) => {
  let itemShows = [];
  for (let i = 0; i <= max - min; i++) {
    itemShows[i] = min + i;
  }
  return itemShows.map((item, index) => (
    <li key={index} className="page-item">
      <Link
        onClick={() => setPage(item)}
        to={`/dashboard/${item}`}
        className={`page-link text-secondary rounded mx-1 ${
          Number(page) === item ? "active" : ""
        }`}
      >
        {item}
      </Link>
    </li>
  ));
};

export default PaginationItems;
