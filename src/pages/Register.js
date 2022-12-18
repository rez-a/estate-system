import React, { useContext, useEffect, useState } from "react";
import LoginInput from "../components/shared/LoginInput";
import validateForm from "../helper/validateForm";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import ButtonPrimary from "../components/shared/ButtonPrimary";
import { register } from "../services/authentication";
import Spinner from "../components/shared/Spinner";
import Toast from "../helper/toast";

const Register = () => {
  const navigate = useNavigate();
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
        const newUser = await register(registerInfo);
        if (newUser.code === "200") {
          localStorage.setItem(
            "user",
            JSON.stringify({ userId: newUser.id, token: newUser.token })
          );
          Toast.fire({
            icon: "success",
            title: "ثبت نام با موفقیت انجام شد",
          });
          setRegisterInfo({
            license: "",
            name: "",
            nationalCode: "",
            password: "",
            confirmPassword: "",
          });
          navigate("/dashboard/1", { replace: true });
        } else if (newUser.code === "402") {
          Toast.fire({
            icon: "info",
            title: "شما حساب کاربری دارید!",
          });
        } else {
          Toast.fire({
            icon: "error",
            title: "ثبت نام با خطا مواجه شد!",
          });
        }
      }
      setLoading(false);
    };
    request();
  }, [validate]);

  const clickHandler = async () => {
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
        <form autoComplete="on">
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
            <Link to="/login" className="color-primary fw-bold me-1">
              ورود
            </Link>
          </small>
        </div>
      </div>
      <div className="card-footer bg-white text-start">
        <ButtonPrimary
          type="btnPrimary"
          text="ثبت نام"
          onClickHandler={clickHandler}
          spinner={loading ? <Spinner /> : ""}
        />
      </div>
    </div>
  );
};

export default Register;
