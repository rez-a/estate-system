import React, { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pagination from "../components/dashboard/main/Pagination";
import Post from "../components/dashboard/main/Post";
import { Category } from "../context/CategoryContext";
import { Load } from "../context/LoadingContext";
import { User } from "../context/UserContext";
import notFoundPost from "../assets/images/notfound-post.png";
import { showCategory } from "../helper/showCategory";
import { Filter } from "../context/FilterContext";
import { FaTimes } from "react-icons/fa";
import {
  removeBuildInFilter,
  removeMeterageFilter,
  removePriceFilter,
  removeRoomFilter,
} from "../reducer/filterReducer/ActionCreators";
import { SearchText } from "../context/SearchPostContext";

const DashboardMain = () => {
  const { state, dispatch } = useContext(Filter);
  const { load, setLoad } = useContext(Load);
  const { category } = useContext(Category);
  const { state: userState, dispatch: userDispatch } = useContext(User);
  const { search } = useContext(SearchText);
  const { page: thisPage } = useParams();
  const [postsFiltered, setPostsFiltered] = useState([]);
  const [page, setPage] = useState(Number(thisPage));
  const [pagination, setPagination] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    //change category
    let newPosts =
      category === "all"
        ? userState.posts
        : userState.posts.filter((post) => post.category === category);

    //search title
    newPosts = newPosts.filter((post) => post.title.includes(search));

    //filter price
    if (category === "buy") {
      if (state.minPrice !== 0) {
        newPosts = newPosts.filter(
          (post) => Number(post.price * post.metrage) >= Number(state.minPrice)
        );
      }
      if (state.maxPrice !== 0) {
        newPosts = newPosts.filter(
          (post) => Number(post.price * post.metrage) <= Number(state.maxPrice)
        );
      }
    }

    //filter meterage
    if (state.minMeterage !== 0) {
      newPosts = newPosts.filter(
        (post) => Number(post.metrage) >= Number(state.minMeterage)
      );
    }
    if (state.maxMeterage !== 0) {
      newPosts = newPosts.filter(
        (post) => Number(post.metrage) <= Number(state.maxMeterage)
      );
    }

    //filter buildIn
    if (state.minBuildIn !== 0) {
      newPosts = newPosts.filter(
        (post) => Number(post.build_in) >= Number(state.minBuildIn)
      );
    }
    if (state.maxBuildIn !== 0) {
      newPosts = newPosts.filter(
        (post) => Number(post.build_in) <= Number(state.maxBuildIn)
      );
    }

    //filter room
    if (state.minRoom !== 0) {
      newPosts = newPosts.filter(
        (post) => Number(post.room) >= Number(state.minRoom)
      );
    }
    if (state.maxRoom !== 0) {
      newPosts = newPosts.filter(
        (post) => Number(post.room) <= Number(state.maxRoom)
      );
    }

    setPostsFiltered(newPosts);
  }, [category, userState, state, search]);
  useEffect(() => {
    const paginationPosts = postsFiltered.filter(
      (_, index) => index >= (page - 1) * 9 && index <= page * 9 - 1
    );
    setPagination(paginationPosts);
  }, [page]);
  useEffect(() => {
    navigate("/dashboard/1");
    setPage(1);
    const paginationPosts = postsFiltered.filter(
      (_, index) => index >= 0 && index <= 8
    );
    setPagination(paginationPosts);
  }, [postsFiltered]);

  const handleRemoveFilter = (filterName) => {
    switch (filterName) {
      case "متراژ":
        dispatch(removeMeterageFilter("متراژ"));
        break;
      case "سال ساخت":
        dispatch(removeBuildInFilter("سال ساخت"));
        break;
      case "تعداد اتاق":
        dispatch(removeRoomFilter("تعداد اتاق"));
        break;
      default:
        dispatch(removePriceFilter("قیمت"));
        break;
    }
  };

  return (
    <>
      <header
        className="text-secondary text-start border-bottom mt-3 d-flex align-items-center justify-content-between"
        style={{ fontSize: "12px" }}
      >
        <p className="mb-0">
          {!load && `دسته بندی : ${showCategory(category)}`}
        </p>
        {state.filtersName.length > 0 && (
          <div className="mb-0 d-flex align-items-center mb-1">
            <span className="ms-1">فیلتر ها : </span>
            {state.filtersName.map((filterName, index) => (
              <p
                key={index}
                className="mb-0 filterUsed border rounded-pill px-2 mx-1"
              >
                <small className="ms-2 mb-0">{filterName}</small>
                <span
                  onClick={() => handleRemoveFilter(filterName)}
                  className="deleteFilter"
                >
                  <FaTimes color="#a62626" />
                </span>
              </p>
            ))}
          </div>
        )}
        <p className="mb-0">
          {!load && `تعداد ${postsFiltered.length} آگهی یافت شد`}
        </p>
      </header>
      <main className={`row mt-2 ${load ? "loading-skeleton" : ""}`}>
        {load ? (
          [...Array(9)].map((_, index) => (
            <Post key={index} category="خرید" load={load} />
          ))
        ) : pagination.length < 1 && !load ? (
          <div className="col-6 mx-auto mt-5 text-center">
            <img src={notFoundPost} className="img-fluid" />
            <small>هیچ آگهی یافت نشد!!!</small>
          </div>
        ) : (
          <>
            {pagination.map((post) => (
              <Post key={post.id} {...post} />
            ))}
          </>
        )}
      </main>
      <footer className="mt-3">
        {!load && pagination.length > 1 && (
          <Pagination
            setPage={setPage}
            page={page}
            postsFiltered={postsFiltered}
          />
        )}
      </footer>
    </>
  );
};

export default DashboardMain;
