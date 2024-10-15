import Image from "next/image";
import USDT from "../../assets/images/usdt.svg";
import DIFO_TOKEN from "../../assets/images/difo-token.svg";
import CUBE from "../../assets/images/reactive-cube.svg";

export function Token() {
  return (
    <div className="relative w-full py-10 lg:py-20 font-bold text-base font-[family-name:var(--font-karla)] md:text-base lg:text-base 4xl:text-xl 5xl:text-2xl">
      <div className="relative w-full h-1 bg-gradient-to-r from-difo-aqua from-15% via-difo-purple-heart/20 via-45% to-black to-99%"></div>
      <div className="relative container min-w-full w-full bg-black py-12 md:py-20">
        <div className="flex flex-col items-stretch space-x-0 space-y-4 sm:space-y-6 lg:space-y-0 lg:flex-row lg:space-x-8 xl:space-x-11 2xl:space-x-16 3xl:space-x-20">
          <button className="flex-1 bg-gradient-to-tr from-difo-purple-heart/20 from-5% via-difo-aqua via-60% to-difo-purple-heart/20 to-95% p-0.5 rounded-[10px]">
            <div className="grid grid-flow-col place-items-center gap-5 bg-difo-vulcan py-2 px-5 rounded-[10px] h-full sm:py-4 md:py-6 lg:gap-4 lg:py-3 xl:py-6">
              <Image src={USDT} width={32} height={32} alt="USDT coin" unoptimized />
              <span className="text-left">
                Would You Like to Earn $12 for Each Friend You Invite?
              </span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47142 0H15.242C15.3316 0 15.4212 0.0137819 15.5038 0.0413457C15.5521 0.0482367 15.6003 0.0620186 15.6417 0.0826915C15.7657 0.130928 15.8691 0.206729 15.9655 0.296311L15.9793 0.310093C16.0207 0.35833 16.062 0.406567 16.0965 0.454803C16.1378 0.509931 16.1654 0.57195 16.1929 0.633968C16.2481 0.764897 16.2756 0.895825 16.2756 1.03364V11.9765C16.2756 12.5484 15.8071 13.0101 15.242 13.0101C14.6769 13.0101 14.2084 12.5484 14.2084 11.9765V3.49372L1.75638 15.7045C1.34982 16.1042 0.695175 16.0973 0.2955 15.6907C-0.104176 15.2773 -0.0972851 14.6295 0.309282 14.2298L12.713 2.06729H4.47142C3.89947 2.06729 3.43778 1.60559 3.43778 1.03364C3.43778 0.461694 3.89947 0 4.47142 0Z"
                  fill="url(#paint0_linear_267_1237)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_267_1237"
                    x1="8.13741"
                    y1="16.0008"
                    x2="8.13741"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C1E6F8" />
                    <stop offset="1" stopColor="#019BD8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
          <Image
            className="flex-none self-center"
            src={CUBE}
            alt="Reactive cube"
            width={84}
            height={84}
          />
          <button className="flex-1 bg-gradient-to-tr from-difo-purple-heart/20 from-5% via-difo-aqua via-60% to-difo-purple-heart/20 to-95% p-0.5 rounded-[10px]">
            <div className="grid grid-flow-col place-items-center gap-5 bg-difo-vulcan py-2 px-5 rounded-[10px] h-full sm:py-4 md:py-6 lg:gap-4 lg:py-3 xl:py-6">
              <Image src={DIFO_TOKEN} width={32} height={32} alt="USDT coin" unoptimized />
              <span className="text-left">
                Buy $DIFO token now to get early access to promising projects.
              </span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.47142 0H15.242C15.3316 0 15.4212 0.0137819 15.5038 0.0413457C15.5521 0.0482367 15.6003 0.0620186 15.6417 0.0826915C15.7657 0.130928 15.8691 0.206729 15.9655 0.296311L15.9793 0.310093C16.0207 0.35833 16.062 0.406567 16.0965 0.454803C16.1378 0.509931 16.1654 0.57195 16.1929 0.633968C16.2481 0.764897 16.2756 0.895825 16.2756 1.03364V11.9765C16.2756 12.5484 15.8071 13.0101 15.242 13.0101C14.6769 13.0101 14.2084 12.5484 14.2084 11.9765V3.49372L1.75638 15.7045C1.34982 16.1042 0.695175 16.0973 0.2955 15.6907C-0.104176 15.2773 -0.0972851 14.6295 0.309282 14.2298L12.713 2.06729H4.47142C3.89947 2.06729 3.43778 1.60559 3.43778 1.03364C3.43778 0.461694 3.89947 0 4.47142 0Z"
                  fill="url(#paint0_linear_267_1237)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_267_1237"
                    x1="8.13741"
                    y1="16.0008"
                    x2="8.13741"
                    y2="0"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#C1E6F8" />
                    <stop offset="1" stopColor="#019BD8" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </button>
        </div>
      </div>
      <div className="relative w-full h-1 bg-gradient-to-l from-difo-aqua from-15% via-difo-purple-heart/20 via-45% to-black to-99%"></div>
    </div>
  );
}
