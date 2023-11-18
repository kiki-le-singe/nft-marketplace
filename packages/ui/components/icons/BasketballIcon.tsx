interface Props {
  className?: string;
}

export default function BasketballIcon({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 md:w-[100px] md:h-[100px] ${className}`}
    >
      <g id="Basketball">
        <path
          id="Vector"
          d="M50 87.5C70.7107 87.5 87.5 70.7107 87.5 50C87.5 29.2893 70.7107 12.5 50 12.5C29.2893 12.5 12.5 29.2893 12.5 50C12.5 70.7107 29.2893 87.5 50 87.5Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M23.4375 23.5176C30.449 30.5474 34.383 40.0732 34.375 50.002C34.383 59.9307 30.449 69.4565 23.4375 76.4863"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M76.5642 23.5176C69.5608 30.5526 65.6289 40.0752 65.6289 50.002C65.6289 59.9287 69.5608 69.4513 76.5642 76.4863"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_4"
          d="M12.5 50H87.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_5"
          d="M50 12.5V87.5"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
