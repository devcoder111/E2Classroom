import React from "react";
import E2CWindow from "../common/Window";

const Tag = ({ bgColor, children }) => {
  return (
    <div
      className="rounded-md p-1 m-1 text-white text-xs"
      style={{ backgroundColor: bgColor }}
    >
      {children}
    </div>
  );
};

export default () => {
  return (
    <E2CWindow
      title="Coursework"
      description="Convert your offline coursework, or use our extensive library of lessons."
      className="home-coursework"
    >
      <div className="w-2/3 mx-auto flex flex-row flex-wrap justify-center">
        <Tag bgColor="rgba(217, 47, 79, 0.6)">IELTS-A</Tag>
        <Tag bgColor="rgba(217, 47, 79, 0.6)">IELTS-G</Tag>
        <Tag bgColor="rgba(105, 148, 133, 0.8)">PTE-A</Tag>
        <Tag bgColor="rgba(162, 41, 204, 0.6)">TOEFL</Tag>
        <Tag bgColor="rgba(25, 139, 203, 0.8)">OET</Tag>
        <Tag bgColor="rgba(255, 167, 38, 0.6)">B1 PRELIMARY</Tag>
        <Tag bgColor="rgba(255, 167, 38, 0.6)">A2 KEY</Tag>
        <Tag bgColor="rgba(255, 167, 38, 0.6)">B2 FIRST</Tag>
      </div>
    </E2CWindow>
  );
};
