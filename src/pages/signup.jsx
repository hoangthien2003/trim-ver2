import React, { useState, useEffect } from "react";
import CardLayout from "./card_layout";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/google.svg";

function SignupPage() {
  const [opacityBtnLogin, setOpacityBtnLogin] = useState("opacity-80");
  const [cursorBtnLogin, setCursorBtnLogin] = useState("cursor-not-allowed");
  const [borderEmail, setBorderEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Signup || Trim";
    if (email) {
      setOpacityBtnLogin("opacity-100");
      setCursorBtnLogin("cursor-pointer");
    } else {
      setOpacityBtnLogin("opacity-80");
      setCursorBtnLogin("cursor-not-allowed");
    }
  }, [document]);

  return (
    <CardLayout>
      <h1 className="card_title">Sign up</h1>
      <form className="mt-[2.7em]">
        <div className="h-[7em]">
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
                setErrorEmail(null);
              }}
              onBlur={() => {
                setBorderEmail("");
              }}
            />
          </div>
          <p className="text_error">{errorEmail}</p>
        </div>
        <button
          type={`submit`}
          className={`btn btn_purple btn_submit_form 
          ${opacityBtnLogin} ${cursorBtnLogin}`}
        >
          Continue
        </button>
      </form>
      <div className="my-10 flex justify-center items-center w-full">
        <div className="h-[1px] bg-gray_border w-full"></div>
        <div className="px-2 absolute bg-white">
          <p className="text-gray-300 text-[14px] font-medium mb-[2px]">or</p>
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
        <p className="mr-[10px] text-gray-700">Already have an account?</p>
        <p
          className="text-cyan font-medium cursor-pointer hover:underline"
          onClick={() => navigate(-1)}
        >
          Log in
        </p>
      </div>
    </CardLayout>
  );
}

export default SignupPage;
