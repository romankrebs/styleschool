import React, { useState } from "react";

const Vk = function(props) {
  const [hover, setHover] = useState(false);

  const color = props.color || "rgb(160,160,160)";
  const hoverColor = props.hoverColor || "rgb(191,159,37)";

  return (
    <a
      href={props.link || "https://vk.com/stylemsk"}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        width={props.size || "24px"}
        height={props.size || "24px"}
        viewBox="0 0 24 24"
        style={{ marginBottom: -6, ...props.style }}
        onMouseOver={() => setHover(!hover)}
        onMouseOut={() => setHover(!hover)}
      >
        <path
          fill={hover ? hoverColor : color}
          d="M20.8,7.74C20.93,7.32 20.8,7 20.18,7H18.16C17.64,7 17.41,7.27 17.28,7.57C17.28,7.57 16.25,10.08 14.79,11.72C14.31,12.19 14.1,12.34 13.84,12.34C13.71,12.34 13.5,12.19 13.5,11.76V7.74C13.5,7.23 13.38,7 12.95,7H9.76C9.44,7 9.25,7.24 9.25,7.47C9.25,7.95 10,8.07 10.05,9.44V12.42C10.05,13.08 9.93,13.2 9.68,13.2C9,13.2 7.32,10.67 6.33,7.79C6.13,7.23 5.94,7 5.42,7H3.39C2.82,7 2.7,7.27 2.7,7.57C2.7,8.11 3.39,10.77 5.9,14.29C7.57,16.7 9.93,18 12.08,18C13.37,18 13.53,17.71 13.53,17.21V15.39C13.53,14.82 13.65,14.7 14.06,14.7C14.36,14.7 14.87,14.85 16.07,16C17.45,17.38 17.67,18 18.45,18H20.47C21.05,18 21.34,17.71 21.18,17.14C21,16.57 20.34,15.74 19.47,14.76C19,14.21 18.29,13.61 18.07,13.3C17.77,12.92 17.86,12.75 18.07,12.4C18.07,12.4 20.54,8.93 20.8,7.74Z"
        />
      </svg>
    </a>
  );
};

export default Vk;
