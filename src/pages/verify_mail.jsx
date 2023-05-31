import React, { useState, useEffect } from "react";
import CardLayout from "./card_layout";
import MailIcon from "../assets/mail.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function VerifyMailPage() {
  const navigate = useNavigate();
  const [codeValue1, setCodeValue1] = useState("");
  const [codeValue2, setCodeValue2] = useState("");
  const [codeValue3, setCodeValue3] = useState("");
  const [codeValue4, setCodeValue4] = useState("");
  const [codeLength, setCodeLength] = useState(0);

  const emailStore = useSelector((state) => state.mail.value);

  useEffect(() => {
    document.title = "Verify mail || Trim";
  });

  const validateCode = (e) => {
    e.preventDefault();
    if (codeLength === 4) {
      navigate("/signup-info");
    }
  };

  return (
    <CardLayout>
      <h1 className="card_title font-medium">Varification code</h1>
      <img
        src={MailIcon}
        alt="Mail Icon"
        className="w-[130px] h-auto mt-[2.7em]"
      />
      <p className="mt-[2.3em] text-gray-700">
        We have to sent the code verification to your email
      </p>
      <p className="mt-[0.5em] text-[18px]">{emailStore}</p>
      <form onSubmit={validateCode}>
        <div className="flex flex-row items-center mt-[2.3em] w-full">
          <div className={`verify_code_border`}>
            <input
              id="code1"
              type="text"
              maxLength={1}
              value={codeValue1}
              onChange={(e) => {
                setCodeValue1(e.target.value);
                if (e.target.value) {
                  document.getElementById("code2").focus();
                  setCodeLength(codeLength + 1);
                } else setCodeLength(codeLength - 1);
              }}
              className="verify_code_input"
            />
          </div>
          <div className={`verify_code_border`}>
            <input
              id="code2"
              type="text"
              maxLength={1}
              value={codeValue2}
              onChange={(e) => {
                setCodeValue2(e.target.value);
                if (e.target.value) {
                  document.getElementById("code3").focus();
                  setCodeLength(codeLength + 1);
                } else {
                  document.getElementById("code1").focus();
                  setCodeLength(codeLength - 1);
                }
              }}
              className="verify_code_input"
            />
          </div>
          <div className={`verify_code_border`}>
            <input
              id="code3"
              type="text"
              maxLength={1}
              value={codeValue3}
              onChange={(e) => {
                setCodeValue3(e.target.value);
                if (e.target.value) {
                  document.getElementById("code4").focus();
                  setCodeLength(codeLength + 1);
                } else {
                  document.getElementById("code2").focus();
                  setCodeLength(codeLength - 1);
                }
              }}
              className="verify_code_input"
            />
          </div>
          <div className={`verify_code_border mr-0`}>
            <input
              id="code4"
              type="text"
              maxLength={1}
              value={codeValue4}
              onChange={(e) => {
                setCodeValue4(e.target.value);
                if (!e.target.value) {
                  document.getElementById("code3").focus();
                  setCodeLength(codeLength - 1);
                } else setCodeLength(codeLength + 1);
              }}
              className="verify_code_input"
            />
          </div>
        </div>
        <button
          className={`btn btn_submit_form btn_purple
        mt-[1.5em] py-[9px] ${
          codeLength == 4
            ? "cursor-pointer opacity-100"
            : "cursor-not-allowed opacity-50"
        }`}
          type="submit"
        >
          Continue
        </button>
        <p
          className="text-center text-purple_button
        text-[14px] font-medium mt-[2em] select-none
        cursor-pointer"
          onClick={() => {
            navigate("/signup-info");
          }}
        >
          Resend Code
        </p>
      </form>
    </CardLayout>
  );
}

export default VerifyMailPage;
