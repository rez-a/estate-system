import React from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { EditLoads } from "../../../context/EditPostLoads";
import { Load } from "../../../context/LoadingContext";
import Toast from "../../../helper/toast";
import validatePostData from "../../../helper/validatePostData";
import { editPost } from "../../../services/dashboard";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Categories from "./categories/Categories";
import MainSideBar from "./MainSideBar";

const SideBar = () => {
  const { load } = useContext(Load);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const { load: editLoads } = useContext(EditLoads);
  const { post } = useContext(EditLoads);
  const handleSendPostEdited = async () => {
    const validate = validatePostData(post);
    if (Object.values(validate).includes(false)) {
      Toast.fire({
        icon: "info",
        title: "اطلاعات را بصورت صحیح وارد نکردید",
      });
    } else {
      const res = await editPost(post, id);
      if (res.code === "200") {
        Toast.fire({
          icon: "success",
          title: "آگهی با موفقیت ویرایش شد",
        });
        navigate(`/post-details/${id}`);
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ویرایش نشد",
        });
      }
    }
  };
  return (
    <div>
      <Categories load={load} />
      {!load && pathname.includes("dashboard") ? (
        <MainSideBar />
      ) : pathname.includes("post-details") ? (
        <div className="d-flex justify-content-between my-3">
          <ButtonPrimary text="حذف" type="btnPrimary" />
          <Link to={`/edit-post/${id}`}>
            <ButtonPrimary text="ویرایش" type="btnPrimary" />
          </Link>
        </div>
      ) : pathname.includes("edit-post") ? (
        <div className="d-flex flex-column justify-content-between my-3">
          <ButtonPrimary
            text="ویرایش آگهی"
            type="with-100"
            status={editLoads.getPostLoad}
            onClickHandler={handleSendPostEdited}
          />
          <small className="mt-3 text-secondary">
            <span className="color-primary">*</span>فیلد های ستاره دار الزامی
            هستند
          </small>
        </div>
      ) : null}
    </div>
  );
};

export default SideBar;
