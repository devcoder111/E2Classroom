import React from "react";
import cx from "classnames";

export default ({
  color = "white",
  bgColor = "transparent",
  onClick,
  icon,
}) => {
  return (
    <button
      onClick={onClick}
      className={cx(
        "text-md rounded-full w-10 h-10 mx-1 flex items-center justify-center",
        "bg-" + bgColor,
        "text-" + color
      )}
    >
      {icon}
    </button>
  );
};
