import { AvatarName, GridArtistCard, GridCategoryCard, GridNFTCard } from "ui";

export default function Page() {
  return (
    <div className="flex flex-col xxs:px-2 xs:px-5 sm:px-5 lg:px-0 gap-y-10 md:gap-y-14 lg:gap-y-20">
      <GridNFTCard />

      <div>
        <AvatarName
          avatar="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png"
          name="Mr Fox"
        />
        <AvatarName
          avatar="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png"
          name="Mr Fox"
          theme="big"
        />
      </div>

      <GridArtistCard />
      <GridCategoryCard />
      <GridNFTCard />
      {/* https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/screen-tablet@1x.png */}
    </div>
  );
}
