import Image from "next/image";
import ATTENTION from "../../assets/images/attention.svg";

export default function Attention() {
  return (
    <div className="grid grid-flow-col place-items-center content-center font-[family-name:var(--font-inter)]">
      <div className="relative w-6 h-6 lg:w-20 lg:h-20">
        <Image src={ATTENTION} alt="Difo information" fill />
      </div>
      <div className="relative w-full min-w-8 4xl:min-w-52 rounded-sm h-1 bg-gradient-to-l from-difo-aqua from-15% via-difo-purple-heart/20 via-85% to-black/0 to-99%"></div>
  
      <div className="relative rounded-md bg-gradient-to-tr from-difo-hawks-blue from-4% via-difo-azure via-45% to-difo-hawks-blue to-99% p-[1px] min-w-32 sm:min-w-44 md:min-w-64 lg:rounded-xl">
        <div className="flex items-center justify-center h-full min-w-full bg-black rounded-md py-2 space-x-1 lg:py-5 lg:space-x-4 lg:rounded-xl lg:px-6 xl:px-10 5xl:py-6">
          <span className="font-black text-[10px] text-difo-punch sm:text-[14px] lg:text-2xl xl:text-2xl 2xl:text-3xl 5xl:text-[40px]">ATTENTION!</span>
          <span className="relative block w-3.5 h-3.5 lg:hidden">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              className="absolute w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.55919 3.3335H16.5347C16.6093 3.3335 16.684 3.34498 16.7529 3.36795C16.7931 3.37369 16.8333 3.38518 16.8677 3.40241C16.9711 3.4426 17.0572 3.50577 17.1376 3.58042L17.1491 3.59191C17.1836 3.6321 17.218 3.6723 17.2467 3.7125C17.2812 3.75844 17.3042 3.81012 17.3271 3.8618C17.3731 3.97091 17.396 4.08002 17.396 4.19487V13.3139C17.396 13.7905 17.0056 14.1753 16.5347 14.1753C16.0638 14.1753 15.6733 13.7905 15.6733 13.3139V6.24493L5.29666 16.4206C4.95786 16.7536 4.41232 16.7479 4.07926 16.4091C3.74619 16.0645 3.75194 15.5248 4.09074 15.1917L14.4272 5.05624H7.55919C7.08257 5.05624 6.69782 4.67149 6.69782 4.19487C6.69782 3.71824 7.08257 3.3335 7.55919 3.3335Z"
                fill="white"
              />
            </svg>
          </span>
          <span className="hidden font-black text-[14px] lg:block xl:text-xl 2xl:text-2xl 5xl:text-3xl">Information to consider about $DIFO token</span>
        </div>
      </div>

      <div className="relative w-full min-w-8 4xl:min-w-52 rounded-sm h-1 bg-gradient-to-r from-difo-aqua from-15% via-difo-purple-heart/20 via-85% to-black/0 to-99%"></div>
      <div className="relative w-6 h-6 lg:w-20 lg:h-20">
        <Image src={ATTENTION} alt="Difo information" fill />
      </div>
    </div>
  );
}
