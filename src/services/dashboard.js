import axios from "axios";
import { json } from "react-router-dom";
import Toast from "../helper/toast";
import { BASE_URL } from "./constants";

const getPosts = async () => {
  const { userId, token } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(`${BASE_URL}/posts.php`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: userId, token }),
    });

    if (response.ok) {
      return await response.json();
    } else {
      throw Error();
    }
  } catch (err) {
    Toast.fire({
      icon: "error",
      title: "مشکلی پیش آمده.آگهی ها دریافت نشد!!",
    });
  }
};

const getPost = async (post_id) => {
  const { userId, token } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(`${BASE_URL}/single-post.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: userId,
        token,
        post_id,
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error();
    }
  } catch (err) {
    Toast.fire({
      icon: "error",
      title: "مشکلی پیش آمده.آگهی مورد نظر دریافت نشد!! ",
    });
  }
};

const editPost = async (data, post_id) => {
  const { userId, token } = JSON.parse(localStorage.getItem("user"));
  try {
    const response = await fetch(`${BASE_URL}/update-post.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
        user_id: userId,
        token,
        post_id,
      }),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error();
    }
  } catch (err) {
    Toast.fire({
      icon: "error",
      title: "مشکلی پیش آمده.آگهی مورد نظر ویرایش نشد!! ",
    });
  }
};

export { getPosts, getPost, editPost };
