interface Props {
  color?: string;
  text?: string | null;
}

export function TextNormalMono({ color = "text-white", text = null }: Props) {
  return (
    text && (
      <div className={`font-normal font-mono text-base ${color}`}>{text}</div>
    )
  );
}
