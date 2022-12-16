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
      console.log(response);
      const data = await response.json();
      console.log(data);
    } else {
      throw Error();
    }
  } catch (err) {
    Toast.fire({
      icon: "error",
      title: "مشکلی پیش آمده.آگهی ها دریافت نشد!!",
    });
  }
  // const response = await axios.post(
  //   `${BASE_URL}/posts.php`,
  //   { id: userId, token },
  //   {
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // console.log(response);
};

export { getPosts };
