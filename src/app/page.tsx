import dynamic from "next/dynamic";
import Image from "next/image";
import IDO from "../assets/images/ido.png";
// LAZY LOAD COMPONENTS
const CurrencySlider = dynamic(() =>
  import("@/components/ui/difo-currency-slider").then((m) => m.CurrencySlider)
);
const SaleDetails = dynamic(() =>
  import("./_components/difo-sale-details").then((m) => m.SaleDetails)
);
const Token = dynamic(() =>
  import("./_components/difo-token").then((m) => m.Token)
);

export default function Home() {
  return (
    <>
      <div className="relative container min-w-full w-full my-10 lg:my-20">
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-full top-0 rounded-2xl left-0 bg-gradient-to-tr from-black from-20% via-difo-azure via-50% to-black to-80%"></div>
          <div className="relative z-10 w-full p-1">
            <div className="relative z-0 grid grid-flow-row gap-10 bg-black rounded-2xl py-10 px-3 sm:py-20 sm:px-4 md:px-10 lg:grid-flow-col lg:px-10 lg:gap-5 xl:px-24 xl:gap-11 2xl:gap-10">
              <div className="block my-auto order-last lg:order-first">
                <h1 className="font-black tracking-wide font-[family-name:var(--font-inter)] text-base leading-tight sm:text-lg md:text-3xl lg:text-2xl xl:text-[31px] 2xl:text-[42px] 2xl:leading-[48px] 4xl:text-5xl 5xl:text-6xl">
                  <span className="text-difo-azure">Difo Launchpad</span> is a new generation hybrid
                  launch ramp that brings together the valuable features of both centralized{" "}
                  <span className="text-difo-azure">IEO</span> platforms and decentralized{" "}
                  <span className="text-difo-azure">IDO</span> platforms.
                </h1>
                <p className="font-bold text-difo-gray-chateau text-xs tracking-wide font-[family-name:var(--font-karla)] mt-6 sm:text-lg md:text-base lg:text-lg xl:text-xl">
                  Gain early access to promising ideas of tomorrow with Difo Launchpad.
                </p>
              </div>
              <Image
                className="px-6 sm:px-10 md:px-32 lg:px-0"
                src={IDO}
                alt="Difo Launchpad"
                priority
              />
              <div className="absolute bottom-0 w-full z-20 text-2xl font-black translate-y-1/2 sm:text-3xl md:pl-10 lg:pl-10 lg:text-5xl xl:pl-24">
                <span className="bg-clip-text text-transparent bg-gradient-to-tr from-difo-hawks-blue from-4% via-difo-azure via-45% to-difo-hawks-blue to-99%">
                  TRENDING
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CurrencySlider />
      <Token />
      <SaleDetails />
    </>
  );
}
