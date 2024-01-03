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
  const Tag = tag;

  return (
    children && (
      <Tag className={`text-base font-normal font-sans ${color} ${className}`}>
        {children}
      </Tag>
    )
  );
}
