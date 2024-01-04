interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  children?: React.ReactNode;
  textTransform?: string;
  className?: string;
}

export function TextNormalSans({
  tag = "div",
  color = "text-white",
  children = null,
  className = "",
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag className={`text-base font-normal font-sans ${color} ${className}`}>
      {children}
    </Tag>
  );
}
