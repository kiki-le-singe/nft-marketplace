import {
  ArtistCard,
  AvatarName,
  Button,
  CategoryCard,
  GridArtistCard,
  GridArtistCardSkeleton,
  GridNFTCard,
  NFTCard,
  NFTHighlight,
  SectionsContainer,
  TrendingCollection,
  TrendingCollectionSkeleton,
} from "ui";
import { ButtonTheme } from "ui/types";

const IMG_PATH = process.env.IMG_URL;

export default function Page() {
  return (
    <div className="flex flex-col gap-y-12 md:gap-y-16 lg:gap-y-20 w-full pt-8 pb-20">
      <SectionsContainer>
        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            TrendingCollection
          </div>
          <TrendingCollection />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            TrendingCollectionSkeleton
          </div>
          <TrendingCollectionSkeleton />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            GridArtistCard
          </div>
          <GridArtistCard />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            GridArtistCardSkeleton
          </div>
          <GridArtistCardSkeleton />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            ArtistCard
          </div>
          <ArtistCard
            creator={{
              avatar: `${IMG_PATH}/fox.webp`,
              name: "Mr Fox",
            }}
          />
        </div>

        <div className="flex flex-col gap-5">
          <div className="mb-5 text-white text-2xl underline underline-offset-2">
            AvatarName
          </div>

          <div>
            <div className="mb-5 text-white underline underline-offset-2">
              Default
            </div>
            <AvatarName name="Mr Fox" avatar={`${IMG_PATH}/cat.webp`} />
          </div>

          <div>
            <div className="mb-5 text-white underline underline-offset-2">
              Big
            </div>
            <AvatarName
              theme="big"
              name="Mr Fox"
              avatar={`${IMG_PATH}/dog.webp`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <div className="mb-5 text-white text-2xl underline underline-offset-2">
            Button
          </div>

          <div>
            <div className="mb-5 text-white underline underline-offset-2">
              Default
            </div>
            <Button>Click me</Button>
          </div>

          <div>
            <div className="mb-5 text-white underline underline-offset-2">
              ButtonWhite
            </div>
            <Button theme={ButtonTheme.WHITE}>Click me</Button>
          </div>

          <div>
            <div className="mb-5 text-white underline underline-offset-2">
              ButtonTransparent
            </div>
            <Button theme={ButtonTheme.TRANSPARENT}>Click me</Button>
          </div>
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            CategoryCard
          </div>
          <CategoryCard title="Art" image={`${IMG_PATH}/crocodile.webp`} />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            GridNFTCard
          </div>
          <GridNFTCard />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            NFTCard
          </div>
          <NFTCard
            image={`${IMG_PATH}/ant.webp`}
            title="designer bear"
            creator={{
              avatar: `${IMG_PATH}/cat.webp`,
              name: "animakid",
            }}
          />
        </div>

        <div>
          <div className="mb-10 text-white text-2xl underline underline-offset-2">
            NFTHighlight
          </div>
          <NFTHighlight />
        </div>
      </SectionsContainer>
    </div>
  );
}
