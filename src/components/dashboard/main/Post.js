import React from "react";
import test from "../../../test.jpg";
import ButtonPrimarySmall from "../../shared/ButtonPrimarySmall";
import { FaCamera } from "react-icons/fa";
import { Link } from "react-router-dom";

const Post = ({ title, trust, rent, price, category, load, meterage }) => {
  return (
    <div className="col-4 mb-3">
      <div className="card post position-relative h-100">
        <div className="row g-0 h-100">
          <div className="col-md-7">
            <div className="card-body d-flex flex-column justify-content-between h-100 p-2">
              <h6
                className={`card-title fw-bold mb-5 ${load ? "h-25" : ""}`}
                style={{
                  width: "100%",
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {title}
              </h6>
              <div className={`card-text ${load ? "h-25" : ""}`}>
                {category === "buy" ? (
                  <p
                    className={`text-muted mb-0 ${load ? "h-100" : ""}`}
                    style={{
                      fontSize: "12px",
                    }}
                  >
                    {load
                      ? "__________"
                      : `${(price * meterage).toLocaleString()} تومان`}
                  </p>
                ) : category === "mortgage" ? (
                  <>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {load
                        ? "__________"
                        : `ودیعه : ${trust.toLocaleString()} تومان`}
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
                      {load
                        ? "__________"
                        : `ودیعه : ${trust.toLocaleString()} تومان`}
                    </p>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {load
                        ? "__________"
                        : `اجاره ماهانه : ${rent.toLocaleString()} تومان`}
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
                load ? "d-none" : ""
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
          <Link to="/post-details/1">
            <ButtonPrimarySmall text="جزییات" />
          </Link>
          <ButtonPrimarySmall text="ویرایش" />
          <ButtonPrimarySmall text="حذف" />
        </div>
      </div>
    </div>
  );
};

export default Post;
