import { TextNormalSans } from "./TextNormalSans";
import { TextSemiBoldSans } from "./TextSemiBoldSans";
import InfoIcon from "./icons/InfoIcon";
import InfoIcon2 from "./icons/InfoIcon2";
import InfoIcon3 from "./icons/InfoIcon3";

export function HowItWorks() {
  return (
    <div className="flex flex-col gap-y-6 md:gap-y-10">
      <div className="md:basis-8/12">
        <TextSemiBoldSans
          tag="h2"
          text="How it works"
          className="text-lg md:text-[38px] mb-0 md:mb-4"
        />
        <TextNormalSans
          tag="p"
          text="Find out how to get started"
          className="text-normal md:text-[22px]"
        />
      </div>

      <div className="flex flex-col gap-5 md:flex-row md:gap-30px">
        <div className="flex items-center gap-3 p-5 md:flex-col md:justify-center md:pt-[10px] md:pb-30px md:px-5 rounded-20px bg-dark-gray">
          <div>
            <InfoIcon />
          </div>

          <div className="flex flex-col gap-2.5">
            <TextNormalSans
              text="Setup Your wallet"
              className="font-semibold md:text-center"
            />
            <TextNormalSans
              text="Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner."
              className="text-xs  md:text-center"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-5 md:flex-col md:justify-center md:pt-[10px] md:pb-30px md:px-5 rounded-20px bg-dark-gray">
          <div>
            <InfoIcon2 />
          </div>

          <div className="flex flex-col gap-2.5">
            <TextNormalSans
              text="Create Collection"
              className="font-semibold  md:text-center"
            />
            <TextNormalSans
              text="Upload your work and setup your collection. Add a description, social links and floor price."
              className="text-xs  md:text-center"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 p-5 md:flex-col md:justify-center md:pt-[10px] md:pb-30px md:px-5 rounded-20px bg-dark-gray">
          <div>
            <InfoIcon3 />
          </div>

          <div className="flex flex-col gap-2.5">
            <TextNormalSans
              text="Start Earning"
              className="font-semibold  md:text-center"
            />
            <TextNormalSans
              text="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
              className="text-xs  md:text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
