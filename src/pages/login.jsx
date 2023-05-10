import React, { useEffect, useState } from "react";
import CardLayout from "./card_layout";
import GoogleIcon from "../assets/google.svg";
import OpenEye from "../assets/open-eye.svg";
import CloseEye from "../assets/close-eye.svg";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [borderEmail, setBorderEmail] = useState("");
  const [borderPassword, setBorderPassword] = useState("");
  const [opacityBtnLogin, setOpacityBtnLogin] = useState("opacity-80");
  const [cursorBtnLogin, setCursorBtnLogin] = useState("cursor-not-allowed");
  const [toggleEye, setToggleEye] = useState(false);

  useEffect(() => {
    document.title = "Login || Trim";
    if (email && password) {
      setOpacityBtnLogin("opacity-100");
      setCursorBtnLogin("cursor-pointer");
    } else {
      setOpacityBtnLogin("opacity-80");
      setCursorBtnLogin("cursor-not-allowed");
    }
  });

  const validateForm = (e) => {
    e.preventDefault();
    if (!email) {
      setBorderEmail("border-danger_border");
    }
    if (!password) {
      setBorderPassword("border-danger_border");
    }
  };

  return (
    <CardLayout>
      <h1 className="text-[34px] text-title_h1 font-bold select-none">
        Welcome back
      </h1>
      <form className="mt-[2.7em]" onSubmit={validateForm}>
        <div className="mb-[1.5em]">
          <label htmlFor="email" className="input_label">
            Email address
          </label>
          <div
            className={`input_border ${borderEmail}`}
            onClick={() => {
              document.getElementById("email").focus();
            }}
          >
            <input
              required
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="input_field"
              onFocus={() => {
                setBorderEmail("border-black");
              }}
              onBlur={() => {
                setBorderEmail("");
              }}
            />
          </div>
          <p>{errorEmail}</p>
        </div>
        <div>
          <label htmlFor="password" className="input_label">
            Password
          </label>
          <div
            className={`input_border ${borderPassword}`}
            onClick={() => {
              document.getElementById("password").focus();
            }}
          >
            <input
              required
              id="password"
              type={toggleEye ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input_field"
              onFocus={() => {
                setBorderPassword("border-black");
              }}
              onBlur={() => {
                setBorderPassword("");
              }}
            />
            <div
              onClick={() => setToggleEye(!toggleEye)}
              className="mx-[18px] flex justify-center items-center 
              cursor-pointer"
            >
              <img
                src={toggleEye ? OpenEye : CloseEye}
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
          <p>{errorPassword}</p>
        </div>
        <p
          className="text-gray_label text-[13px] hover:cursor-pointer w-[135px]
        hover:underline"
        >
          Forgot your password ?
        </p>
        <button
          type="submit"
          className={`btn btn_purple btn_submit_form
          mt-[1.5em] ${opacityBtnLogin} ${cursorBtnLogin}`}
        >
          Log in
        </button>
      </form>
      <div className="my-10 flex justify-center items-center w-full">
        <div className="h-[1px] bg-gray_border w-full"></div>
        <div className="px-2 absolute bg-white">
          <p className="text-gray_label text-[14px] font-meidum mb-[2px]">or</p>
        </div>
      </div>
      <button className="btn btn_submit_form btn_oauth btn_google">
        <img src={GoogleIcon} alt="Google Icon" className="mr-[12px]" />
        Continue with Google
      </button>
      <div
        className="mt-[3em] flex flex-row items-center text-[14px]
      select-none"
      >
        <p className="mr-[10px] text-gray-700">Don't have an account?</p>
        <p className="text-cyan font-medium cursor-pointer hover:underline">
          Sign up
        </p>
      </div>
    </CardLayout>
  );
}

export default LoginPage;
