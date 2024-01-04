interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  children?: React.ReactNode;
}

export function TextXSNormalMono({
  tag = "div",
  color = "text-[#858584]",
  children = null,
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag className={`text-xs font-mono font-normal ${color}`}>{children}</Tag>
  );
}
