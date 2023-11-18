interface Props {
  className?: string;
}

export default function PaintBrushIcon({ className = "" }: Props) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-20 h-20 md:w-[100px] md:h-[100px] ${className}`}
    >
      <g id="PaintBrush">
        <path
          id="Vector"
          d="M7.8125 84.375H35.9375C39.9549 84.375 43.8821 83.1837 47.2225 80.9517C50.5629 78.7198 53.1664 75.5474 54.7038 71.8358C56.2412 68.1241 56.6435 64.04 55.8597 60.0997C55.0759 56.1595 53.1414 52.5402 50.3006 49.6994C47.4598 46.8586 43.8405 44.9241 39.9003 44.1403C35.96 43.3565 31.8759 43.7588 28.1642 45.2962C24.4526 46.8336 21.2802 49.4371 19.0483 52.7775C16.8163 56.1179 15.625 60.0451 15.625 64.0625C15.625 78.125 7.8125 84.375 7.8125 84.375Z"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M43.9053 45.3906C51.4053 35.2734 70.4678 12.1094 87.8896 12.1094C87.8896 29.5312 64.7256 48.5938 54.6084 56.0938"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_3"
          d="M51.9531 35.3906C57.246 38.3777 61.6223 42.754 64.6094 48.0469"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}
