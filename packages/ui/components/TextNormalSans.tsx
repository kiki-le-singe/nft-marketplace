interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  text?: string | null;
  textTransform?: string;
  className?: string;
}

export function TextNormalSans({
  tag = "div",
  color = "text-white",
  text = null,
  className = "",
}: Props) {
  const Tag = tag;

  return (
    text && (
      <Tag className={`text-base font-normal font-sans ${color} ${className}`}>
        {text}
      </Tag>
    )
  );
}
