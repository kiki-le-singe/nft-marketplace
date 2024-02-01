import { cn } from "../utils/cn";

interface Props {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

export function TextNormalMono({
  tag = "div",
  children = null,
  className = "",
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag
      className={cn("font-mono text-white font-normal text-base", className)}
    >
      {children}
    </Tag>
  );
}
