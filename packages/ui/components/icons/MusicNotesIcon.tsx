interface Props {
  className?: string;
}

export default function MusicNotesIcon({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 md:w-[100px] md:h-[100px] ${className}`}
    >
      <g id="MusicNotes">
        <path
          id="Vector"
          d="M70.3125 78.125C76.3531 78.125 81.25 73.2281 81.25 67.1875C81.25 61.1469 76.3531 56.25 70.3125 56.25C64.2719 56.25 59.375 61.1469 59.375 67.1875C59.375 73.2281 64.2719 78.125 70.3125 78.125Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M20.3125 90.625C26.3531 90.625 31.25 85.7281 31.25 79.6875C31.25 73.6469 26.3531 68.75 20.3125 68.75C14.2719 68.75 9.375 73.6469 9.375 79.6875C9.375 85.7281 14.2719 90.625 20.3125 90.625Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M81.25 31.25L31.25 43.75"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M31.25 79.6875V25L81.25 12.5V67.1875"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
