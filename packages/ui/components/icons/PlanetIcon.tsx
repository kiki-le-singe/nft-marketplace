interface Props {
  className?: string;
}

export default function PlanetIcon({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 md:w-[100px] md:h-[100px] ${className}`}
    >
      <g id="Planet">
        <path
          id="Vector"
          d="M50 84.375C68.9848 84.375 84.375 68.9848 84.375 50C84.375 31.0152 68.9848 15.625 50 15.625C31.0152 15.625 15.625 31.0152 15.625 50C15.625 68.9848 31.0152 84.375 50 84.375Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M71.9529 23.5547C82.7732 20.586 90.8982 20.8594 93.3201 25C97.617 32.461 81.7186 49.7266 57.8123 63.5157C33.9061 77.3047 11.0154 82.461 6.6795 75C4.29669 70.8594 8.12481 63.6719 16.0936 55.7813"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
