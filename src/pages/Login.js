import React, { useEffect, useState } from "react";
import LoginInput from "../components/shared/LoginInput";
import validateForm from "../helper/validateForm";
import { Link } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import { login } from "../services/authentication";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [loginInfo, setLoginInfo] = useState({
    license: "",
    password: "",
  });
  const [validate, setValidate] = useState({
    license: true,
    password: true,
  });

  useEffect(() => {
    if (!Object.values(validate).includes(false)) {
      login(loginInfo);
    }
  }, [validate]);

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
            <Link to="/register" className="color-primary fw-bold">
              ثبت نام
            </Link>
          </small>
        </div>
      </div>
      <div className="card-footer bg-white text-start">
        <ButtonPrimary
          text="ورود"
          onClickHandler={() => setValidate(validateForm("login", loginInfo))}
        />
      </div>
    </div>
  );
};

export default Login;
