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
  const Tag = tag;

  return (
    children && (
      <Tag className={`text-xs font-mono font-normal ${color}`}>{children}</Tag>
    )
  );
}
