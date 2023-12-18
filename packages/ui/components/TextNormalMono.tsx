interface Props {
  color?: string;
  text?: string | null;
}

export function TextNormalMono({ color = "text-white", text = null }: Props) {
  return text && <div className={`text-base-normal-mono ${color}`}>{text}</div>;
}
