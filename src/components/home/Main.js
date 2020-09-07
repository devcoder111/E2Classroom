import React from "react";

export default () => {
  return (
    <div className="w-full px-4 lg:w-2/3 xl:w-2/3 mx-auto relative sm:block hidden">
      <img src="/images/main_bg.svg" className="w-full" alt="main_bg" />
      <img
        src="/images/main.svg"
        className="w-1/2 absolute"
        alt="main"
        style={{ top: "20%", right: "15%" }}
      />
    </div>
  );
};
