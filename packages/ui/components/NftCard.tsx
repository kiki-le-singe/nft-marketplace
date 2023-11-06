import Image from "next/image";

interface Props {
  image: string | null;
}

export function NFTCard({ image = null }: Props) {
  if (!image) {
    return null;
  }

  return (
    <div className="bg-dark-gray rounded-20px w-[330px] overflow-hidden">
      <Image src={image} width={330} height={295} alt="Picture of the NFT" />

      <div className="pt-5 pb-[25px] px-[30px]">
        <h5 className="text-white text-[22px] font-sans font-semibold capitalize pb-1">
          Designer bear
        </h5>
        <div className="text-white font-normal font-mono text-base pb-6">
          Orbitian
        </div>

        <div className="flex justify-between">
          <div className="flex flex-col gap-2">
            <div className="text-[#858584] text-xs font-mono font-normal">
              Price
            </div>
            <div className="text-white font-normal font-mono text-base">
              1.63 ETH
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-[#858584] text-xs font-mono font-normal">
              Highest Bid
            </div>
            <div className="text-white font-normal font-mono text-base">
              0.33 wETH
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
