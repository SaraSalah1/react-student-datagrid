import React from "react";

const SignInButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold transition duration-300"
    >
      Sign In
    </button>
  );
};

export default SignInButton;
