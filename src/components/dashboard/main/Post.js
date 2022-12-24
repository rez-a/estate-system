import React from "react";
import ButtonPrimarySmall from "../../shared/ButtonPrimarySmall";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Toast from "../../../helper/toast";
import { deletePost as deletePostServices } from "../../../services/dashboard";
import { useContext } from "react";
import { User } from "../../../context/UserContext";
import { deletePost } from "../../../reducer/userReducer/ActionCreators";
import defaultImage from "../../../assets/images/defaultImage.jpg";

const Post = ({
  title,
  mortgage,
  rent,
  price,
  category,
  load,
  metrage,
  id,
}) => {
  const { dispatch } = useContext(User);
  const handleDeletePost = async (postId, postTitle) => {
    Swal.fire({
      title: "آگهی حذف شود؟",
      text: `عنوان آگهی : ${postTitle}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#A62626",
      confirmButtonText: "بله ، حذف شود",
      cancelButtonText: "خیر",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deletePostServices(postId);
        if (res?.code === 200) {
          dispatch(deletePost(postId));
          Swal.fire({
            icon: "success",
            title: "آگهی با موفقیت حذف شد!!",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "مشکلی پیش آمد.آگهی حذف نشد!!",
          });
        }
      }
    });
  };
  return (
    <div className="col-xl-4 col-sm-6 col-12 mb-3">
      <div className="card post position-relative h-100">
        <div className="row g-0 h-100">
          <div className="col-7">
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
                      : `${Number(price * metrage).toLocaleString()} تومان`}
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
                        : `ودیعه : ${Number(mortgage).toLocaleString()} تومان`}
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
                        : `ودیعه : ${
                            String(mortgage).trim() === ""
                              ? 0
                              : Number(mortgage).toLocaleString()
                          } تومان`}
                    </p>
                    <p
                      className="text-muted mb-0"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      {load
                        ? "__________"
                        : `اجاره ماهانه : ${Number(
                            rent
                          ).toLocaleString()} تومان`}
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-5 p-2 position-relative">
            <img
              src={defaultImage}
              className="img-fluid rounded h-100"
              alt="defaultImage"
            />
          </div>
        </div>
        <div
          className="position-absolute d-flex flex-column align-items-end justify-content-around h-100 buttons"
          style={{
            left: "5px",
          }}
        >
          <Link to={`/post-details/${id}`}>
            <ButtonPrimarySmall text="جزییات" />
          </Link>
          <Link to={`/edit-post/${id}`}>
            <ButtonPrimarySmall text="ویرایش" />
          </Link>
          <ButtonPrimarySmall
            onClickHandler={() => handleDeletePost(id, title)}
            text="حذف"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
