import { AvatarName, CategoryCard, GridCategoryCard, GridNFTCard } from "ui";

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
    </div>
  );
}
