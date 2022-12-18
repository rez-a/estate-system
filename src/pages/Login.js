import React, { useEffect, useState } from "react";
import LoginInput from "../components/shared/LoginInput";
import validateForm from "../helper/validateForm";
import { Link, useNavigate } from "react-router-dom";
import Toast from "../helper/toast";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import { login } from "../services/authentication";
import Spinner from "../components/shared/Spinner";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [clickButton, setClickButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    license: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    license: true,
    password: true,
  });

  useEffect(() => {
    const request = async () => {
      if (!Object.values(validate).includes(false) && clickButton) {
        const user = await login(loginInfo);
        const {
          user: { id, token },
        } = user;
        if (user.response === "200") {
          console.log(user);
          localStorage.setItem("user", JSON.stringify({ userId: id, token }));
          Toast.fire({
            icon: "success",
            title: "شما با موفقیت وارد حساب کاربری شدید",
          });
          setLoginInfo({
            license: "",
            password: "",
          });
          navigate("/dashboard/1", { replace: true });
        } else if (user.response === "400") {
          Toast.fire({
            icon: "error",
            title: "شماره صنفی یا رمز عبور اشتباه است",
          });
        } else if (user.response === "401") {
          Toast.fire({
            icon: "info",
            title: "شما حساب کاربری ندارید! ابتدا ثبت نام کنید",
          });
        }
      }
      setLoading(false);
    };
    request();
  }, [validate]);

  const clickHandler = () => {
    setLoading(true);
    setValidate(validateForm("login", loginInfo));
    setClickButton(true);
  };

  return (
    <div
      className="card"
      style={{
        border: "none",
        boxShadow: "0px 0px 15px 5px #00000012",
      }}
    >
      <div
        className="card-header text-center py-3 bg-white"
        style={{
          fontWeight: "600",
        }}
      >
        ورود به حساب کاربری
      </div>
      <div className="card-body">
        <form autoComplete="off">
          <LoginInput
            type="text"
            label="شناسه صنفی خود را وارد کنید"
            placeholder="شناسه صنفی"
            id="license"
            textHelp="لطفا یک شناسه صنفی معتبر وارد کنید"
            value={loginInfo.license}
            onChangeInput={(e) =>
              setLoginInfo({ ...loginInfo, license: e.target.value })
            }
            validate={validate.license}
          />
          <LoginInput
            type={showPass ? "text" : "password"}
            label="رمزعبور خود را وارد کنید"
            placeholder="رمز عبور"
            id="password"
            textHelp="لطفا یک رمز عبور معتبر وارد کنید"
            icon={showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            value={loginInfo.password}
            onChangeInput={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
            autoComplete="new-password"
            setShowPass={() => setShowPass(!showPass)}
            validate={validate.password}
          />
        </form>
        <div>
          <small>
            حساب کاربری ندارید؟
            <Link to="/register" className="color-primary fw-bold me-1">
              ثبت نام
            </Link>
          </small>
        </div>
      </div>
      <div className="card-footer bg-white text-start">
        <ButtonPrimary
          type="btnPrimary"
          text="ورود"
          onClickHandler={clickHandler}
          spinner={loading ? <Spinner /> : ""}
        />
      </div>
    </div>
  );
};

export default Login;
