import { AvatarName, TextSemiBoldSans, TextNormalMono, Button } from "..";
import { ButtonTheme } from "../types";
import EyeIcon from "./icons/EyeIcon";

export function NFTHighlight() {
  return (
    <section className="bg-[url('http://localhost:3002/images/virtual_world-600x600.webp')] md:bg-[url('http://localhost:3002/images/virtual_world.webp')]  lg:bg-[url('http://localhost:3002/images/virtual_world.webp')] bg-cover bg-no-repeat bg-top md:bg-center lg:bg-center w-full h-auto">
      <div className="bg-gradient-to-t from-[#A259FF] pt-[120px] px-7 xs:px-14 lg:px-[5vw] xl:px-[15vw] 2xl:px-[15vw] pb-10">
        <div className="py-[10px] mb-7 px-5 bg-black rounded-20px w-fit">
          <AvatarName
            avatar="http://localhost:3002/images/cat.webp"
            name="Mr Fox"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-y-7 md:gap-y-4">
          <div className="row-start-1">
            <TextSemiBoldSans tag="h2" className="text-[38px] leading-10">
              Magic World
            </TextSemiBoldSans>
          </div>

          <div className="col-span-1 md:row-span-2 row-start-2">
            <div className="md:flex md:justify-end md:items-end md:h-full">
              <div className="flex flex-col w-full gap-y-2 p-30px rounded-20px bg-black-transparent md:justify-center md:h-fit md:w-fit">
                <TextNormalMono tag="p" className="text-xs">
                  Action ends in:
                </TextNormalMono>

                <div className="flex flex-row gap-x-2">
                  <TextNormalMono
                    tag="span"
                    className="font-bold text-2xl md:text-4xl"
                  >
                    59
                  </TextNormalMono>
                  <TextNormalMono
                    tag="span"
                    className="font-bold text-2xl md:text-4xl"
                  >
                    :
                  </TextNormalMono>
                  <TextNormalMono
                    tag="span"
                    className="font-bold text-2xl md:text-4xl"
                  >
                    59
                  </TextNormalMono>
                  <TextNormalMono
                    tag="span"
                    className="font-bold text-2xl md:text-4xl"
                  >
                    :
                  </TextNormalMono>
                  <TextNormalMono
                    tag="span"
                    className="font-bold text-2xl md:text-4xl"
                  >
                    59
                  </TextNormalMono>
                </div>
              </div>
            </div>
          </div>

          <div className="row-start-3 md:row-start-2">
            <Button
              theme={ButtonTheme.WHITE}
              icon={<EyeIcon />}
              classNames="w-full md:w-fit"
            >
              See NFT
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
