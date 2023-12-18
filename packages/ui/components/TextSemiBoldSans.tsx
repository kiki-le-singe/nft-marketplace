interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  text?: string | null;
  textTransform?: string;
  className?: string;
}

export function TextSemiBoldSans({
  tag = "div",
  color = "text-white",
  text = null,
  textTransform = "normal-case",
  className = "",
}: Props) {
  const Tag = tag;

  return (
    text && (
      <Tag
        className={`text-semibold-sans ${color} ${textTransform} ${className}`}
      >
        {text}
      </Tag>
    )
  );
}
