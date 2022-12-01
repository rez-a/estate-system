import React from "react";

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-center flex-row-reverse">
        <li className="page-item disabled">
          <a href="#" className="page-link text-secondary rounded mx-1">
            صفحه قبلی
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary rounded mx-1">1</a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary rounded mx-1" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary rounded mx-1" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary rounded mx-1" href="#">
            4
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary rounded mx-1" href="#">
            5
          </a>
        </li>
        <li className="page-item">
          <a className="page-link text-secondary rounded mx-1" href="#">
            صفحه بعدی
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
