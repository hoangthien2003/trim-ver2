import React, { useEffect, useState } from "react";
import CardLayout from "./card_layout";
import GoogleIcon from "../assets/google.svg";
import OpenEye from "../assets/open-eye.svg";
import CloseEye from "../assets/close-eye.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function SignupInfoPage() {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [borderName, setBorderName] = useState("");
  const [borderPassword, setBorderPassword] = useState("");
  const [borderConfirm, setBorderConfirm] = useState("");
  const [toggleEye, setToggleEye] = useState(false);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirm, setIsShowConfirm] = useState(false);

  const emailStore = useSelector((state) => state.mail.value);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Signup Info || Trim";
  });

  const submitForm = async (e) => {
    e.preventDefault();
    const data = {
      userID: "aa4189f3-3a4d-4209-9ef1-d5ff4bc30cfe",
      email: emailStore,
      fullName: fullName,
      password: password,
      roleNum: "1",
    };
    if (password === confirm) {
      await axios
        .post(`https://localhost:7005/AddUser`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          navigate("/login");
        })
        .catch((errorName) => console.error(errorName));
    }
  };

  return (
    <CardLayout>
      <h1 className="card_title font-medium">Sign up</h1>
      <form className="mt-[2.7em]" onSubmit={submitForm}>
        <div className="h-[7em]">
          <label htmlFor="email" className="input_label">
            Enter your full name
          </label>
          <div
            className={`input_border ${borderName}`}
            onClick={() => {
              document.getElementById("name").focus();
            }}
          >
            <input
              required
              id="name"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Full Name"
              className="input_field"
              onFocus={() => {
                setBorderName("border-black");
                setErrorName(null);
              }}
              onBlur={() => {
                setBorderName("");
              }}
            />
          </div>
          <p className="text_error">{errorName}</p>
        </div>
        <div className="h-[9em]">
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
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="input_field"
              onFocus={() => {
                setBorderPassword("border-black");
                setErrorPassword(null);
              }}
              onBlur={() => {
                setBorderPassword("");
              }}
            />
            <div
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="mx-[18px] flex justify-center items-center 
              cursor-pointer"
            >
              <img
                src={isShowPassword ? OpenEye : CloseEye}
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
          <p className="text_error">{errorPassword}</p>
          <p className="text-[12px] text-gray_label mt-[1.5em]">
            Password must be 8 characters or longer
          </p>
        </div>
        <div className="h-[6em]">
          <label htmlFor="password" className="input_label">
            Confirm password
          </label>
          <div
            className={`input_border ${borderConfirm}`}
            onClick={() => {
              document.getElementById("confirm").focus();
            }}
          >
            <input
              required
              id="confirm"
              type={isShowConfirm ? "text" : "password"}
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirm Password"
              className="input_field"
              onFocus={() => {
                setBorderConfirm("border-black");
              }}
              onBlur={() => {
                setBorderConfirm("");
              }}
            />
            <div
              onClick={() => setIsShowConfirm(!isShowConfirm)}
              className="mx-[18px] flex justify-center items-center 
              cursor-pointer"
            >
              <img
                src={isShowConfirm ? OpenEye : CloseEye}
                className="h-[20px] w-[20px]"
              />
            </div>
          </div>
        </div>
        <button
          type={`submit`}
          className={`btn btn_purple btn_submit_form
          mt-[1.5em]`}
        >
          Sign up
        </button>
      </form>
    </CardLayout>
  );
}

export default SignupInfoPage;
