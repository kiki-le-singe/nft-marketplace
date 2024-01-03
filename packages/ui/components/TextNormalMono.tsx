import clsx from "clsx";

interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  children?: React.ReactNode;
  classNames?: string;
}

export function TextNormalMono({
  tag = "div",
  color = "text-white",
  fontWeight = "font-normal",
  fontSize = "text-base",
  children = null,
  classNames = "",
}: Props) {
  const Tag = tag;
  const className = clsx("font-mono", fontWeight, color, fontSize, classNames);

  return children && <Tag className={className}>{children}</Tag>;
}
