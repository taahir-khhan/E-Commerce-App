import React, { useState } from "react";

const Login = () => {
  const [currentUserState, setCurrentUserState] = useState("Sign Up");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700"
    >
      <div className="inline-flex items-center justify-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentUserState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentUserState === "Sign Up" ? (
        <input
          className="w-full px-3 py-2 border border-gray-700"
          type="text"
          placeholder="Name"
          required
        />
      ) : (
        ""
      )}
      <input
        className="w-full px-3 py-2 border border-gray-700"
        type="email"
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-700"
        type="password"
        placeholder="Password"
        required
      />
      <div className="w-full flex items-center justify-between text-sm mt-[-10px]">
        <p className="cursor-pointer hover:text-black">
          Forgot your Password ?
        </p>
        {currentUserState === "Login" ? (
          <p
            onClick={() => setCurrentUserState("Sign Up")}
            className="hover:text-black cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentUserState("Login")}
            className="hover:text-black cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      <button className="w-1/2 px-3 py-2 border bg-black text-white mx-auto mb-10">
        {currentUserState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
