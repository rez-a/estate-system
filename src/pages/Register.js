import React, { useEffect, useState } from "react";
import LoginInput from "../components/shared/LoginInput";
import validateForm from "../helper/validateForm";
import { Link } from "react-router-dom";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import { register } from "../services/authentication";
import Spinner from "../components/shared/Spinner";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [clickButton, setClickButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [registerInfo, setRegisterInfo] = useState({
    license: "",
    name: "",
    nationalCode: "",
    password: "",
    confirmPassword: "",
  });
  const [validate, setValidate] = useState({
    license: true,
    name: true,
    nationalCode: true,
    password: true,
    confirmPassword: true,
  });

  useEffect(() => {
    const request = async () => {
      if (!Object.values(validate).includes(false) && clickButton) {
        await register(registerInfo);
      }
      setLoading(false);
    };
    request();
  }, [validate]);

  const clickHandler = () => {
    setLoading(true);
    setValidate(validateForm("register", registerInfo));
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
        ثبت نام
      </div>
      <div className="card-body">
        <form autoComplete="off">
          <LoginInput
            type="text"
            label="شناسه صنفی خود را وارد کنید"
            placeholder="شناسه صنفی"
            id="license"
            textHelp="لطفا یک شناسه صنفی معتبر وارد کنید"
            value={registerInfo.license}
            onChangeInput={(e) =>
              setRegisterInfo({ ...registerInfo, license: e.target.value })
            }
            validate={validate.license}
          />
          <LoginInput
            type="text"
            label="نام بنگاه املاک خود را وارد کنید"
            placeholder="نام بنگاه"
            id="name"
            textHelp="نام بنگاه نباید خالی باشد"
            value={registerInfo.name}
            onChangeInput={(e) =>
              setRegisterInfo({ ...registerInfo, name: e.target.value })
            }
            validate={validate.name}
          />
          <LoginInput
            type="text"
            label="کد ملی مالک را وارد کنید"
            placeholder="کد ملی"
            id="nationalCode"
            textHelp="لطفا یک کدملی معتبر وارد کنید"
            value={registerInfo.nationalCode}
            onChangeInput={(e) =>
              setRegisterInfo({ ...registerInfo, nationalCode: e.target.value })
            }
            autoComplete="username"
            validate={validate.nationalCode}
          />
          <LoginInput
            type={showPass ? "text" : "password"}
            label="رمزعبور خود را وارد کنید"
            placeholder="رمز عبور"
            id="password"
            textHelp="لطفا یک رمز عبور معتبر وارد کنید"
            icon={showPass ? <FaRegEye /> : <FaRegEyeSlash />}
            value={registerInfo.password}
            onChangeInput={(e) =>
              setRegisterInfo({ ...registerInfo, password: e.target.value })
            }
            autoComplete="new-password"
            setShowPass={() => setShowPass(!showPass)}
            validate={validate.password}
          />
          <LoginInput
            type={showConfirmPass ? "text" : "password"}
            label="رمزعبور خود را تایید کنید"
            placeholder="تکرار رمز عبور"
            id="confirmPassword"
            textHelp="رمز عبور مطابقت ندارد"
            icon={showConfirmPass ? <FaRegEye /> : <FaRegEyeSlash />}
            value={registerInfo.confirmPassword}
            onChangeInput={(e) =>
              setRegisterInfo({
                ...registerInfo,
                confirmPassword: e.target.value,
              })
            }
            autoComplete="new-password"
            setShowConfirmPass={() => setShowConfirmPass(!showConfirmPass)}
            validate={validate.confirmPassword}
          />
        </form>
        <div>
          <small>
            حساب کاربری دارید؟
            <Link to="/login" className="color-primary fw-bold">
              ورود
            </Link>
          </small>
        </div>
      </div>
      <div className="card-footer bg-white text-start">
        <ButtonPrimary
          text="ثبت نام"
          onClickHandler={clickHandler}
          spinner={loading ? <Spinner /> : ""}
        />
      </div>
    </div>
  );
};

export default Register;
