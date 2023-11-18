interface Props {
  className?: string;
}

export default function VideoCameraIcon({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 md:w-[100px] md:h-[100px] ${className}`}
    >
      <g id="VideoCamera">
        <path
          id="Vector"
          d="M9.375 23.4375H59.375C62.6902 23.4375 65.8696 24.7545 68.2138 27.0987C70.558 29.4429 71.875 32.6223 71.875 35.9375V73.4375C71.875 74.2663 71.5458 75.0612 70.9597 75.6472C70.3737 76.2333 69.5788 76.5625 68.75 76.5625H18.75C15.4348 76.5625 12.2554 75.2455 9.91117 72.9013C7.56696 70.5571 6.25 67.3777 6.25 64.0625V26.5625C6.25 25.7337 6.57924 24.9388 7.16529 24.3528C7.75134 23.7667 8.5462 23.4375 9.375 23.4375V23.4375Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M71.875 43.75L93.75 31.25V68.75L71.875 56.25"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
