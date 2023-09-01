import React from "react";

const HomeIcon = ({ color, height = 28, width = 25 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="maps-location-02">
        <path
          id="Vector"
          d="M29.3333 14V12.9567C29.3333 10.3705 29.3333 9.07744 28.5523 8.27401C27.7712 7.4706 26.5141 7.4706 24 7.4706H21.2285C20.0053 7.4706 19.9952 7.46822 18.8953 6.9178L14.4532 4.69486C12.5985 3.76673 11.6711 3.30266 10.6832 3.33492C9.69524 3.36717 8.79836 3.89078 7.0046 4.93802L5.36744 5.89384C4.04986 6.66306 3.39106 7.04769 3.02886 7.68753C2.66667 8.32738 2.66667 9.10658 2.66667 10.665V21.6209C2.66667 23.6685 2.66667 24.6924 3.12302 25.2623C3.42668 25.6413 3.85222 25.8963 4.32267 25.9808C5.02969 26.1077 5.89531 25.6024 7.6265 24.5916C8.80208 23.9053 9.93349 23.1925 11.3398 23.3859C12.5183 23.5477 13.6133 24.2913 14.6667 24.8184"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M10.6667 3.33334V23.3333"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M20 7.33334V12.6667"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M23.3333 16C26.5804 16 29.3333 18.6887 29.3333 21.9505C29.3333 25.2643 26.5356 27.5899 23.9513 29.1711C23.7631 29.2775 23.55 29.3333 23.3333 29.3333C23.1167 29.3333 22.9036 29.2775 22.7153 29.1711C20.1359 27.5744 17.3333 25.2757 17.3333 21.9505C17.3333 18.6887 20.0863 16 23.3333 16Z"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
        />
        <path
          id="Vector_5"
          d="M23.3333 22H23.3453"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default HomeIcon;
