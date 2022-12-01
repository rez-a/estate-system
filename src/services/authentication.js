import axios from "axios";

const instance = axios.create({
  baseURL: "https://uni.techforce.ir/api-php/rest",
  headers: {
    "Content-type": "application/json",
  },
});

async function login(data) {
  try {
    const response = await instance.post("", {
      data,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

async function register(data) {
  try {
    const response = await instance.post("/register.php", {
      data,
    });
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

export { login, register };
