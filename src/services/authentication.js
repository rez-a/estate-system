import { BASE_URL } from "./constants";
import Toast from "../helper/toast";

async function login(data) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error();
    }
  } catch (err) {
    Toast.fire({
      icon: "error",
      title: "ورود به حساب کاربری با خطا مواجه شد!",
    });
  }
}

async function register(data) {
  try {
    const response = await fetch(`${BASE_URL}/register.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      return await response.json();
    } else {
      throw Error();
    }
  } catch (err) {
    Toast.fire({
      icon: "error",
      title: "ثبت نام با خطا مواجه شد!",
    });
  }
}

export { login, register };
