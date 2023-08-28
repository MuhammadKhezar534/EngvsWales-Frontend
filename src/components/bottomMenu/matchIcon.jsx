const TeamIcon = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="notification-03">
        <path
          id="Vector"
          d="M3.37322 19.192C3.08969 20.9961 4.35733 22.2483 5.9094 22.8723C11.8597 25.2648 20.1403 25.2648 26.0905 22.8723C27.6427 22.2483 28.9103 20.9961 28.6268 19.192C28.4525 18.0833 27.5909 17.1601 26.9525 16.2587C26.1164 15.0633 26.0333 13.7596 26.0332 12.3725C26.0332 7.01212 21.5412 2.66666 16 2.66666C10.4588 2.66666 5.96684 7.01212 5.96684 12.3725C5.9667 13.7596 5.88362 15.0633 5.04748 16.2587C4.40912 17.1601 3.54748 18.0833 3.37322 19.192Z"
          stroke={color}
          stroke-opacity="0.8"
          stroke-width="1.5"
          stroke-linecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M12 28C13.0615 28.8292 14.4633 29.3333 16 29.3333C17.5367 29.3333 18.9385 28.8292 20 28"
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

export default TeamIcon;
