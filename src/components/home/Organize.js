import React from "react";
import E2CWindow from "../common/Window";

export default () => {
  return (
    <E2CWindow
      title="Organise Students"
      description="Complete student assessments, classes, tutorials, and communication all from one place "
      className="home-organize"
    >
      <div className="w-5/6 mx-auto flex flex-row justify-between">
        <img src="/images/students_left.svg" alt="students_left" />
        <img src="/images/students_right.svg" alt="students_right" />
      </div>
    </E2CWindow>
  );
};
