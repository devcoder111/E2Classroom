import React from "react";

export default ({ number, title, subtitle }) => {
  return (
    <div className="w-full px-4 my-2 flex flex-row items-center my-8">
      <div className="step-card rounded-lg bg-white flex items-center justify-center mr-4">
        <p className="text-5xl text-brand-01">{number}</p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-2xl font-bold text-white leading-8">{title}</h4>
        <p className="text-sm text-white leading-6">{subtitle}</p>
      </div>
    </div>
  );
};
