import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PaginationItems from "./PaginationItems";

const Pagination = ({ postsFiltered, page, setPage }) => {
  const NUMBER_OF_ITEMS = 5; //Maximum items that are displayed
  const [allPage, setAllPage] = useState(Math.ceil(postsFiltered.length / 9));
  useEffect(() => {
    setAllPage(Math.ceil(postsFiltered.length / 9));
  }, [postsFiltered]);
  return (
    <nav>
      <ul className="pagination pagination-sm justify-content-center flex-row-reverse">
        {allPage > 1 && (
          <li className={`page-item ${page === 1 ? "disabled" : ""}`}>
            <Link
              onClick={() => setPage((prevPage) => prevPage - 1)}
              to={`/dashboard/${page - 1}`}
              className="page-link text-secondary rounded mx-1"
            >
              صفحه قبلی
            </Link>
          </li>
        )}
        {allPage <= NUMBER_OF_ITEMS && allPage > 1 ? (
          <PaginationItems
            min={1}
            max={allPage}
            page={page}
            setPage={setPage}
          />
        ) : allPage > NUMBER_OF_ITEMS ? (
          page <= NUMBER_OF_ITEMS ? (
            <PaginationItems
              min={1}
              max={NUMBER_OF_ITEMS}
              page={page}
              setPage={setPage}
            />
          ) : page > allPage - NUMBER_OF_ITEMS ? (
            <PaginationItems
              min={allPage - NUMBER_OF_ITEMS}
              max={allPage}
              page={page}
              setPage={setPage}
            />
          ) : (
            <PaginationItems
              min={page - Math.floor(NUMBER_OF_ITEMS / 2)}
              max={page + Math.floor(NUMBER_OF_ITEMS / 2)}
              page={page}
              setPage={setPage}
            />
          )
        ) : null}
        {allPage > 1 && (
          <li className={`page-item ${page === allPage ? "disabled" : ""}`}>
            <Link
              onClick={() => setPage((prevPage) => prevPage + 1)}
              to={`/dashboard/${page + 1}`}
              className="page-link text-secondary rounded mx-1"
            >
              صفحه بعدی
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
