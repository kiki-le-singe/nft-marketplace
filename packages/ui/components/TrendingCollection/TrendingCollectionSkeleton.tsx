import "./styles.css";

export function TrendingCollectionSkeleton() {
  const items = Array(3)
    .fill(null)
    .map((_, index) => (
      <li key={`TrendingCollectionSkeleton-${index}`}>
        <div>
          <div className="relative w-full rounded-20px overflow-hidden h-[238px] md:h-[295px]  mb-5">
            <div className="bg-slate-700 w-full h-full" />
          </div>

          <div className="flex gap-3 justify-between h-[92px] xs:h-[100px] sm:h-[100px] lg:h-[86px] xl:h-[92px] 2xl:h-[115px] 4k:h-[170px]">
            <div className="flex flex-1 relative h-full rounded-20px overflow-hidden ">
              <div className="bg-slate-700 w-full h-full" />
            </div>
            <div className="flex flex-1 relative h-full rounded-20px overflow-hidden">
              <div className="bg-slate-700 w-full h-full" />
            </div>

            <div className="bg-slate-700 flex flex-1 items-center justify-center h-full rounded-20px" />
          </div>
        </div>
      </li>
    ));

  return (
    <section className="animate-pulse w-full flex flex-col gap-y-6 md:gap-y-10">
      <div>
        <div className="bg-slate-700 rounded mb-4 w-48 md:w-80 h-8" />
        <div className="bg-slate-700 rounded w-60 md:w-96 h-8" />
      </div>

      <ul className="grid-trending-collection grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-30px gap-y-10">
        {items}
      </ul>
    </section>
  );
}
