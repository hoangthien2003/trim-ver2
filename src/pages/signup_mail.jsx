import React, { useState, useEffect } from "react";
import CardLayout from "./card_layout";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "../assets/google.svg";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setEmailStore } from "../store/slices/mail";

function SignupMailPage() {
  const [borderEmail, setBorderEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Signup || Trim";
  }, [document]);

  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      localStorage.setItem("token", tokenResponse.access_token);
      navigate("/");
    },
    onError: (error) => console.log(error),
  });

  const checkEmail = async () => {
    await axios
      .post(`https://localhost:7005/Signup`, email, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        dispatch(setEmailStore(email));
        navigate("/verify");
      })
      .catch((err) => {
        console.log(err);
        setBorderEmail("border-danger_border");
        setErrorEmail("Email is existed!");
      });
  };

  const validateForm = (e) => {
    e.preventDefault();
    if (email) {
      checkEmail();
    }
  };

  return (
    <CardLayout>
      <h1 className="card_title font-medium">Sign up</h1>
      <form className="mt-[2.7em]" onSubmit={validateForm}>
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
                setErrorEmail(null);
              }}
            />
          </div>
          <p className="text_error">{errorEmail}</p>
        </div>
        <button
          type={`submit`}
          className={`btn btn_purple btn_submit_form 
          opacity-90 hover:opacity-100 transition-opacity`}
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
      <button
        className="btn btn_submit_form btn_oauth btn_google"
        onClick={loginGoogle}
      >
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

export default SignupMailPage;
