import Toast from "../helper/toast";
import { BASE_URL } from "./constants";

const getPosts = async () => {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: localStorage.getItem("user"),
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

export { getPosts };
