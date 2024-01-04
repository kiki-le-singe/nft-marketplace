interface Props {
  children?: React.ReactNode;
}

export function SectionsContainer({ children = null }: Props) {
  if (!children) {
    return null;
  }

  return (
    <div className="flex flex-col xxs:px-2 xs:px-5 sm:px-10 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] gap-y-12 md:gap-y-16 lg:gap-y-20 w-full">
      {children}
    </div>
  );
}
