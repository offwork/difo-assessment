import Image from "next/image";
import BUY_PACK from "../../assets/images/buy-puck.svg";
import Button from "@/components/ui/difo-button";

export default function BuyPack() {
  return (
    <div className="relative rounded-md bg-gradient-to-tr from-difo-hawks-blue from-4% via-difo-azure via-45% to-difo-hawks-blue to-99% p-[1px] lg:rounded-2xl">
      <div className="grid gap-4 bg-black rounded-md xl:gap lg:rounded-2xl p-4 lg:p-11 xl:p-14 2xl:p-16 5xl:px-28">
        <h3 className="font-black -tracking-wide text-xl text-center md:text-4xl lg:hidden">
          The buy-back protection program
        </h3>

        <div className="grid grid-flow-col gap-4 place-items-center md:gap-5 lg:gap-10 xl:gap-12 2xl:gap-20 4xl:gap-36 5xl:gap-56">
          <div className="grid gap-4">
            <h3 className="hidden font-black -tracking-wide lg:block lg:text-4xl lg:text-left xl:text-4xl 2xl:text-[46px] 4xl:text-5xl">
              The buy-back protection program
            </h3>
            <p className="font-bold text-xs text-difo-gray-chateau sm:text-[14px] md:text-base xl:text-2xl 2xl:text-3xl">
              If the $DIFO token falls below the public sale price within the first 6 months after
              its initial listing, Difo Finance commits to repurchasing $DIFO tokens at a 90%
              protection level.
            </p>
          </div>
          <Image src={BUY_PACK} alt="Buy-pack protection program" />
        </div>

        <div className="grid grid-flow-row gap-y-4 font-[family-name:var(--font-inter)] 2xl:grid-flow-col lg:max-w-md xl:max-w-lg 2xl:max-w-3xl 4xl:max-w-6xl">
          <p className="font-bold text-[10px] font-[family-name:var(--font-karla)] sm:text-xs xl:text-[14px] xl:leading-tight 2xl:text-xl">
            You can check out detailed information about the buyback protection program below.
          </p>
          <div className="place-self-start">
            <Button still="fill">
              <span className="mr-4">Learn More</span>
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.55919 3.3335H16.5347C16.6093 3.3335 16.684 3.34498 16.7529 3.36795C16.7931 3.37369 16.8333 3.38518 16.8677 3.40241C16.9711 3.4426 17.0572 3.50577 17.1376 3.58042L17.1491 3.59191C17.1836 3.6321 17.218 3.6723 17.2467 3.7125C17.2812 3.75844 17.3042 3.81012 17.3271 3.8618C17.3731 3.97091 17.396 4.08002 17.396 4.19487V13.3139C17.396 13.7905 17.0056 14.1753 16.5347 14.1753C16.0638 14.1753 15.6733 13.7905 15.6733 13.3139V6.24493L5.29666 16.4206C4.95786 16.7536 4.41232 16.7479 4.07926 16.4091C3.74619 16.0645 3.75194 15.5248 4.09074 15.1917L14.4272 5.05624H7.55919C7.08257 5.05624 6.69782 4.67149 6.69782 4.19487C6.69782 3.71824 7.08257 3.3335 7.55919 3.3335Z"
                  fill="white"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
