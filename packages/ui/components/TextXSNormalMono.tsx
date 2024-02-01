import { cn } from "../utils/cn";

interface Props {
  tag?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}

export function TextXSNormalMono({
  tag = "div",
  children = null,
  className = "",
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag
      className={cn("text-xs font-mono font-normal text-[#858584]", className)}
    >
      {children}
    </Tag>
  );
}
