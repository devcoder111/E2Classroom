import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

import useWindowSize from "../../hooks/useWindowSize";

export default ({ title, description, className, children }) => {
  const size = useWindowSize();

  const body = () => {
    return (
      <div
        className={
          "px-4 w-full mt-8 md:max-w-sm lg:max-w-sm xl:max-w-sm " + className
        }
      >
        <div
          className="rounded-lg p-6 text-center bg-white"
          style={{ boxShadow: "0px 10px 24px rgba(0, 0, 0, 0.1)" }}
        >
          <h3 className="text-xl font-bold pb-2">{title}</h3>
          <p className="text-base pb-2">{description}</p>
          {children}
        </div>
      </div>
    );
  };
  return size.width < 1024 ? (
    <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
      {body()}
    </ScrollAnimation>
  ) : (
    body()
  );
};
