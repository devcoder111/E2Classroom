import React from "react";

export default ({ image, title, subtitle }) => {
  return (
    <div className="w-full px-4 my-2 flex flex-row">
      <div className="mr-6 flex items-center">
        <div className="feature-card-parent rounded-full ">
          <div className="feature-card rounded-full py-2 px-8">
            <img src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <h4 className="text-xl leading-10">{title}</h4>
        <p className="text-sm leading-8">{subtitle}</p>
      </div>
    </div>
  );
};
