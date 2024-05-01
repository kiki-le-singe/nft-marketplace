export function GridCategoryCardSkeleton() {
  const items = Array(8)
    .fill(null)
    .map((_, index) => (
      <li key={`GridCategoryCardSkeleton-${index}`}>
        <div className="rounded-20px bg-slate-700 h-52 lg:h-[308px] w-full" />
      </li>
    ));
  return (
    <section className="animate-pulse w-full flex flex-col gap-y-6 md:gap-y-10">
      <div>
        <div className="bg-slate-700 rounded mb-4 w-48 md:w-80 h-8" />
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-2 xs:gap-5 md:gap-7 lg:gap-y-7">
        {items}
      </ul>
    </section>
  );
}
