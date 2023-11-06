import Image from "next/image";

interface Props {
  name: string;
  avatar: string;
  theme?: "big" | "small";
}

export function AvatarName({ name, avatar, theme = "small" }: Props) {
  const imageSizes = theme === "big" ? 60 : 24;
  const containerClassNames = theme === "big" ? "gap-5" : "gap-3";
  const imageClassNames = theme === "big" ? "w-[60px] h-[60px]" : "w-6 h-6";
  const nameClassNames =
    theme === "big"
      ? "font-semibold capitalize font-sans text-[22px]"
      : "font-normal font-mono text-base";

  return (
    <div className={`flex items-center ${containerClassNames}`}>
      <Image
        src={avatar}
        width={imageSizes}
        height={imageSizes}
        className={`rounded-full ${imageClassNames}`}
        alt={`Picture of ${name}`}
      />
      <div className={`text-white ${nameClassNames}`}>{name}</div>
    </div>
  );
}
