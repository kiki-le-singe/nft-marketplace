import { ArtistCard, AvatarName, GridCategoryCard, GridNFTCard } from "ui";

export default function Page() {
  return (
    <div>
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

      <GridCategoryCard />

      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-[30px]">
          <ArtistCard
            creator={{
              avatar:
                "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
              name: "Mr Fox",
            }}
          />
          <ArtistCard
            creator={{
              avatar:
                "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
              name: "Mr Fox",
            }}
          />
          <ArtistCard
            creator={{
              avatar:
                "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
              name: "Mr Fox",
            }}
          />
          <ArtistCard
            creator={{
              avatar:
                "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
              name: "Mr Fox",
            }}
          />
          <ArtistCard
            creator={{
              avatar:
                "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
              name: "Mr Fox",
            }}
          />
          <ArtistCard
            creator={{
              avatar:
                "https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/avatar-placeholder-98@2x.png",
              name: "Mr Fox",
            }}
          />
        </div>
      </div>
    </div>
  );
}
