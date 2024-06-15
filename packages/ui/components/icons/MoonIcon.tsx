interface Props {
  className?: string;
}

export default function MoonIcon({ className = "" }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MoonIconContainer({ className = "" }: Props) {
  return (
    <div className={className}>
      <MoonIcon />
    </div>
  );
}
