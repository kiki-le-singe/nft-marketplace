interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  text?: string | null;
}

export function TextNormalMono({
  tag = "div",
  color = "text-white",
  text = null,
}: Props) {
  const Tag = tag;

  return (
    text && (
      <Tag className={`font-normal font-mono text-base ${color}`}>{text}</Tag>
    )
  );
}
