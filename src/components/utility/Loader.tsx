import React from "react";

const Loader = () => {
  return (
    <div data-testid="loader" className="flex w-full items-center justify-center">
      <div className="relative">
        <div
          className="w-12 h-12 rounded-full absolute
    border border-solid border-gray-50"
        ></div>

        <div
          className="w-12 h-12 rounded-full animate-spin absolute
    border border-solid border-[#3976E8] border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Loader;

