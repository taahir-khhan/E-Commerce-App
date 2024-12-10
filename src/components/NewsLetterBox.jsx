import React from "react";

const NewsLetterBox = () => {
  return (
    <div className="text-center py-10">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now and get 20% off.
      </p>
      <p className="text-gray-400 mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, fugiat.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
      >
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none"
        />
        <button
          type="submit"
          className="bg-black text-white text-sm px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
