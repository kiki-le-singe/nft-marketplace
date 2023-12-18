interface Props {
  color?: string;
  text?: string | null;
}

export function TextXSNormalMono({
  color = "text-[#858584]",
  text = null,
}: Props) {
  return (
    text && (
      <div className={`text-xs font-mono font-normal ${color}`}>{text}</div>
    )
  );
}
