import React from "react";
import E2CWindow from "../common/Window";

export default () => {
  return (
    <E2CWindow
      title="Schedule Live Classes"
      description="Create and manage all your classes across multiple courses"
      className="home-schedule"
    >
      <div className="w-84 relative mx-auto">
        <img
          src="/images/schedule_left.svg"
          alt="schedule_left"
          className="w-2/3"
        />
        <img
          src="/images/zoom.svg"
          alt="zoom"
          className="w-1/3 absolute"
          style={{ top: "11%", right: "5%" }}
        />
      </div>
    </E2CWindow>
  );
};
