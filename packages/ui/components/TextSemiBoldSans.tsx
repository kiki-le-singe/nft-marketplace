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
        className={`font-semibold font-sans ${color} ${textTransform} ${className}`}
      >
        {text}
      </Tag>
    )
  );
}
