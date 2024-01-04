interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  children?: React.ReactNode;
  textTransform?: string;
  className?: string;
}

export function TextSemiBoldSans({
  tag = "div",
  color = "text-white",
  children = null,
  textTransform = "normal-case",
  className = "",
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag
      className={`font-semibold font-sans ${color} ${textTransform} ${className}`}
    >
      {children}
    </Tag>
  );
}
