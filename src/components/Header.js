import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import E2CButton from "./common/Button";
import useWindowSize from "../hooks/useWindowSize";

export default () => {
  const size = useWindowSize();
  const [mobileShow, setMobileShow] = useState(false);
  const [coursesShow, setCoursesShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (size.width < 768) {
      setIsMobile(true);
    } else {
      setMobileShow(false);
      setIsMobile(false);
    }
  }, [size.width]);

  return (
    <header className={`py-2 relative z-20 ${mobileShow ? "bg-white" : ""}`}>
      <div className="container m-auto flex justify-between flex-row">
        <div className="logo">
          <NavLink to="/">
            <img src="/images/logo-1.svg" alt="E2C Logo" />
          </NavLink>
        </div>
        <div className="flex-row items-center justify-center flex">
          <button
            className="block lg:hidden mx-2 focus:outline-none"
            onClick={() => setMobileShow(!mobileShow)}
          >
            <img
              src={mobileShow ? "/images/close.svg" : "/images/hamburgar.svg"}
              className="w-8"
              alt="hamburgar"
            />
          </button>
          <nav className="hidden lg:block">
            <ul className="flex flex-row items-center justify-center uppercase">
              <li>
                <NavLink
                  to="/guide"
                  className="text-text-01 md:px-2 lg:px-4 xl:px-6"
                >
                  Guide
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="hidden lg:block">
            <NavLink to="/signup">
              <E2CButton color="white" bgColor="primary">
                Sign Up
              </E2CButton>
            </NavLink>
            <NavLink to="/login">
              <E2CButton color="primary" bgColor="white" showBorder={false}>
                Login
              </E2CButton>
            </NavLink>
          </div>
        </div>
      </div>
      <nav className="block lg:hidden relative">
        <ul
          className={`absolute bg-white w-full left-0 right-0 top-0 ${
            mobileShow ? "flex flex-col" : "hidden"
          }  justify-center`}
        >
          <li className="h-16 py-5 px-8 text-brand-04">
            <NavLink to="/guide">Guide</NavLink>
          </li>
          <li className="h-16 py-5 px-8 text-brand-04">
            <NavLink to="/login">Login</NavLink>
          </li>
          <li className="h-16 py-5 px-8 bg-brand-04 text-white">
            <NavLink to="/signup">Sign Up</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
