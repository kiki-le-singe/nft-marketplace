import clsx from "clsx";

interface Props {
  tag?: keyof JSX.IntrinsicElements;
  color?: string;
  fontWeight?: string;
  fontSize?: string;
  text?: string | null;
  classNames?: string;
}

export function TextNormalMono({
  tag = "div",
  color = "text-white",
  fontWeight = "font-normal",
  fontSize = "text-base",
  text = null,
  classNames = "",
}: Props) {
  const Tag = tag;
  const className = clsx("font-mono", fontWeight, color, fontSize, classNames);

  return text && <Tag className={className}>{text}</Tag>;
}
