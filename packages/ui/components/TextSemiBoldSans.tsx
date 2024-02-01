import { cn } from "../utils/cn";

interface Props {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}

export function TextSemiBoldSans({
  tag = "div",
  children = null,
  className = "",
}: Props) {
  if (!children) return null;

  const Tag = tag;

  return (
    <Tag
      className={cn(
        `font-semibold font-sans text-white normal-case`,
        className
      )}
    >
      {children}
    </Tag>
  );
}
