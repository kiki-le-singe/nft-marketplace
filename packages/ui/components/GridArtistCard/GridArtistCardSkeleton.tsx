import "./styles.css";

export function GridArtistCardSkeleton() {
  const items = Array(12)
    .fill(null)
    .map((_, index) => (
      <li className="relative" key={`GridArtistCardSkeleton-${index}`}>
        <div className="absolute top-3 left-3 lg:top-3.5 lg:left-5 flex justify-center items-center w-[30px] h-[30px] rounded-full bg-purple text-white">
          {index + 1}
        </div>

        <div className="flex lg:flex-col lg:items-center gap-5 rounded-20px bg-slate-700 p-5">
          <div className="rounded-full h-[60px] w-[60px] lg:h-[120px] lg:w-[120px]" />

          <div>
            <div className="w-full h-8" />

            <div className="flex gap-1.5">
              <div className="w-full h-8" />
              <div className="w-full h-8" />
            </div>
          </div>
        </div>
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
        <ul className="grid-artist-card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-30px">
          {items}
        </ul>
      </div>
    </section>
  );
}
