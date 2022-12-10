import React from "react";
import test from "../../../test.jpg";
import ButtonPrimarySmall from "../../shared/ButtonPrimarySmall";
import { FaCamera } from "react-icons/fa";

const Post = ({ category, loadPosts }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card post position-relative h-100">
        <div className="row g-0 h-100">
          <div className="col-md-7">
            <div className="card-body d-flex flex-column justify-content-between h-100 p-2">
              <h6
                className={`card-title fw-bold mb-5 ${loadPosts ? "h-25" : ""}`}
                style={{
                  width: "100%",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                عنوان آگهی خرید حداکثر در دو سطر عنوان آگهی خرید حداکثر در دو
                سطر
              </h6>
              <div className={`card-text ${loadPosts ? "h-25" : ""}`}>
                {category === "خرید" ? (
                  <p
                    className={`text-muted mb-0 ${loadPosts ? "h-100" : ""}`}
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    5,530,000,000 تومان
                  </p>
                ) : category === "رهن" ? (
                  <>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      ودیعه : 530,000,000 تومان
                    </p>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      اجاره ماهانه : رایگان
                    </p>
                  </>
                ) : (
                  <>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      ودیعه : 53,000,000 تومان
                    </p>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      اجاره ماهانه : 2,500,000 تومان
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-5 p-2 position-relative">
            <img src={test} className="img-fluid rounded h-100" alt="test" />
            <div
              className={`position-absolute d-flex align-items-center px-1 rounded ${
                loadPosts ? "d-none" : ""
              }`}
              style={{
                top: "1rem",
                left: "1rem",
                backgroundColor: "rgba(0 , 0 , 0 ,0.6)",
              }}
            >
              <span className="fw-bold text-white ms-1 mt-1">5</span>
              <FaCamera color="#fff" />
            </div>
          </div>
        </div>
        <div
          className="position-absolute d-flex flex-column align-items-end justify-content-around h-100 buttons"
          style={{
            left: "5px",
          }}
        >
          <ButtonPrimarySmall text="جزییات" />
          <ButtonPrimarySmall text="ویرایش" />
          <ButtonPrimarySmall text="حذف" />
        </div>
      </div>
    </div>
  );
};

export default Post;
