interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  text?: string | null;
}

export function TextXSNormalMono({
  tag = "div",
  color = "text-[#858584]",
  text = null,
}: Props) {
  const Tag = tag;

  return (
    text && (
      <Tag className={`text-xs font-mono font-normal ${color}`}>{text}</Tag>
    )
  );
}
