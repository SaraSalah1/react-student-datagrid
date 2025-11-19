import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiUser, FiLock } from "react-icons/fi";

import InputField from "./InputField";
import ErrorMessage from "./ErrorMessage";
import SignInButton from "./SignInButton";

const Auth = () => {
  const userRef = useRef();
  const passwordRef = useRef();

  const [inputs, setInputs] = useState({ user: "", password: "" });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const savedUsername = "sara";
  const savedPassword = "1234";

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSignIn = () => {
    if (!inputs.user) return userRef.current.focus();
    if (!inputs.password) return passwordRef.current.focus();

    let msg = "";
    if (inputs.user !== savedUsername) msg += "Invalid username. ";
    if (inputs.password !== savedPassword) msg += "Invalid password.";

    if (msg) {
      setError(msg);
      return;
    }

    navigate("/home");
  };

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-linear-to-r from-orange-400 to-yellow-200">
      <form className="h-[450px] w-[400px] bg-white rounded-2xl shadow-2xl flex flex-col items-center p-8 space-y-6">
        <h1 className="text-3xl font-extrabold text-orange-600">
          Welcome Back
        </h1>
        <InputField
          icon={FiUser}
          type="text"
          name="user"
          value={inputs.user}
          onChange={handleChange}
          placeholder="Username"
          inputRef={userRef}
        />

        <InputField
          icon={FiLock}
          type="password"
          name="password"
          value={inputs.password}
          onChange={handleChange}
          placeholder="Password"
          inputRef={passwordRef}
        />

        <ErrorMessage message={error} />

        <SignInButton onClick={handleSignIn} />
      </form>
    </div>
  );
};

export default Auth;
