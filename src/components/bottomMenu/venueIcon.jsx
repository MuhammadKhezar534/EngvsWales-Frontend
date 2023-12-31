import React from "react";

const VenueIcon = ({ color, height = 28, width = 25 }) => {
  return (
    <svg
      width={height}
      height={width}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="notification-square">
        <path
          id="Vector"
          d="M16.6667 4H15.3333C9.36221 4 6.37665 4 4.52165 5.85499C2.66667 7.70999 2.66667 10.6955 2.66667 16.6667C2.66667 22.6377 2.66667 25.6233 4.52165 27.4784C6.37665 29.3333 9.36221 29.3333 15.3333 29.3333C21.3044 29.3333 24.29 29.3333 26.1451 27.4784C28 25.6233 28 22.6377 28 16.6667V15.3333"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          id="Vector_2"
          d="M29.3333 7.33332C29.3333 9.91066 27.244 12 24.6667 12C22.0893 12 20 9.91066 20 7.33332C20 4.75599 22.0893 2.66666 24.6667 2.66666C27.244 2.66666 29.3333 4.75599 29.3333 7.33332Z"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
        />
        <path
          id="Vector_3"
          d="M9.33333 14.6667H14.6667"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M9.33333 21.3333H20"
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

export default VenueIcon;
