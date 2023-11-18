import { AvatarName, CategoryCard, GridNFTCard } from "ui";

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

      <div className="flex w-full justify-center py-10 md:py-14 lg:py-20 xxs:px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7 lg:gap-7">
          <CategoryCard
            title="Art"
            image="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png"
          />
          <CategoryCard
            title="Music"
            image="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png"
          />
          <CategoryCard
            title="Virtual Worlds"
            image="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png"
          />
          <CategoryCard
            title="Sport"
            image="https://cdn.animaapp.com/projects/63aaf7e2426e9824f0350c11/releases/63aaf8f2426e9824f0350c13/img/image-placeholder-55@2x.png"
          />
        </div>
      </div>
    </div>
  );
}
