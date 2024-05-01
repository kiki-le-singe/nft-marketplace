import "./styles.css";

export function GridNFTCardSkeleton() {
  const items = Array(3)
    .fill(null)
    .map((_, index) => (
      <li key={`GridNFTCardSkeleton-${index}`}>
        <div className="rounded-20px h-[415px] bg-slate-700" />
      </li>
    ));

  return (
    <section className="animate-pulse flex flex-col gap-y-6 md:gap-y-10 md:items-end md:flex-row md:flex-wrap">
      <div className="md:basis-8/12">
        <div className="bg-slate-700 rounded mb-4 w-48 md:w-80 h-8" />
        <div className="bg-slate-700 rounded w-60 md:w-96 h-8" />
      </div>

      <div className="max-md:order-last md:basis-4/12 md:flex md:justify-end">
        <div className="w-full h-14 bg-slate-700 rounded-20px" />
      </div>

      <div className="w-full">
        <ul className="grid-nft-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-7">
          {items}
        </ul>
      </div>
    </section>
  );
}
