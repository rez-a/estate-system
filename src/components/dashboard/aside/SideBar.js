import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { EditLoads } from "../../../context/EditPostLoads";
import { Load } from "../../../context/LoadingContext";
import { NewPost } from "../../../context/NewPostContext";
import { User } from "../../../context/UserContext";
import Toast from "../../../helper/toast";
import validatePostData from "../../../helper/validatePostData";
import {
  addPost,
  deletePost,
  editPost,
} from "../../../reducer/userReducer/ActionCreators";
import {
  createPost,
  deletePost as deletePostServices,
  editPost as editPostServices,
} from "../../../services/dashboard";
import ButtonPrimary from "../../shared/ButtonPrimary";
import Spinner from "../../shared/Spinner";
import Categories from "./categories/Categories";
import MainSideBar from "./MainSideBar";

const SideBar = () => {
  const { load } = useContext(Load);
  const { state, dispatch } = useContext(User);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { id } = useParams();
  const [loadNewPost, setLoadNewPost] = useState(false);
  const { load: editLoads, setLoad } = useContext(EditLoads);
  const { post: postEdited } = useContext(EditLoads);
  const { newPost, setNewPost } = useContext(NewPost);

  const handleSendPostEdited = async () => {
    setLoad({ ...editLoads, sendPostLoad: true });
    const validate = validatePostData(postEdited);
    if (Object.values(validate).includes(false)) {
      Toast.fire({
        icon: "info",
        title: "اطلاعات را بصورت صحیح وارد نکردید",
      });
    } else {
      const res = await editPostServices(postEdited, id);
      if (res.code === "200") {
        Toast.fire({
          icon: "success",
          title: "آگهی با موفقیت ویرایش شد",
        });
        dispatch(editPost(postEdited));
        navigate(`/post-details/${id}`);
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ویرایش نشد",
        });
      }
      setLoad({ ...editLoads, sendPostLoad: false });
    }
  };

  const handleCreateNewPost = async () => {
    setLoadNewPost(true);
    const validate = validatePostData(newPost);
    if (Object.values(validate).includes(false)) {
      Toast.fire({
        icon: "info",
        title: "اطلاعات را بصورت صحیح وارد نکردید",
      });
    } else {
      const res = await createPost(newPost);
      if (res.code === "200") {
        Toast.fire({
          icon: "success",
          title: "آگهی با موفقیت ایجاد شد",
        });
        dispatch(addPost(newPost));
        navigate(`/post-details/${res.id}`);
        setNewPost({
          build_in: "",
          category: "",
          description: "",
          document: "",
          image: "",
          metrage: "",
          mortgage: "",
          number: "",
          parking: "",
          price: "",
          rent: "",
          room: "",
          title: "",
          user_id: "",
          warehouse: "",
        });
      } else {
        Toast.fire({
          icon: "info",
          title: "مشکلی پیش آمده.آگهی ویرایش نشد",
        });
      }
      setLoadNewPost(false);
    }
  };

  const handleDeletePost = async (postId) => {
    const [{ title: postTitle }] = state.posts.filter(
      (post) => post.id === postId
    );
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
          navigate("/dashboard/1", { replace: true });
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
    <div>
      <Categories load={load} />
      {!load && pathname.includes("dashboard") ? (
        <MainSideBar />
      ) : pathname.includes("post-details") ? (
        <div className="d-flex justify-content-between my-3">
          <ButtonPrimary
            onClickHandler={() => handleDeletePost(id)}
            text="حذف"
            type="btnPrimary"
          />
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
            spinner={editLoads.sendPostLoad ? <Spinner /> : ""}
          />
          <small className="mt-3 text-secondary">
            <span className="color-primary">*</span>فیلد های ستاره دار الزامی
            هستند
          </small>
        </div>
      ) : pathname.includes("create-post") ? (
        <div className="d-flex flex-column justify-content-between my-3">
          <ButtonPrimary
            text="ایجاد آگهی جدید"
            type="with-100"
            status={loadNewPost}
            onClickHandler={handleCreateNewPost}
            spinner={loadNewPost ? <Spinner /> : ""}
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
