import React from "react";
import E2CWindow from "../common/Window";

export default () => {
  return (
    <E2CWindow
      title="Rich media lesson creator"
      description="Create interactive lessons, with video, audio, quizzes and create "
      className="home-richmedia"
    >
      <div className="w-5/6 mx-auto flex flex-row justify-between">
        <img src="/images/media1.svg" alt="media1" />
        <img src="/images/media2.svg" alt="media2" />
        <img src="/images/media3.svg" alt="media3" />
      </div>
    </E2CWindow>
  );
};
