import { cn } from "../utils/cn";

interface Props {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  textTransform?: string;
  className?: string;
}

export function TextNormalSans({
  tag = "div",
  children = null,
  className = "",
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag
      className={cn(`text-base font-normal font-sans text-white`, className)}
    >
      {children}
    </Tag>
  );
}
