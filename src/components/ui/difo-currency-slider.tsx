import Image from "next/image";
import AWAX from "../../assets/images/AWAX.svg";
import BNB from "../../assets/images/BNB.svg";
import SOL from "../../assets/images/SOL.svg";
import TRON from "../../assets/images/TRON.svg";

export function CurrencySlider() {
  return (
    <div className="marquee py-1 lg:py-4">
      <div className="track">
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={AWAX} alt="AVAX/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">AVAX/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈28.07</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-lochinvar lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.77778 5.11111C6.47095 5.11111 6.22222 4.86238 6.22222 4.55556C6.22222 4.24873 6.47095 4 6.77778 4H13.4444C13.7513 4 14 4.24873 14 4.55556V11.2222C14 11.529 13.7513 11.7778 13.4444 11.7778C13.1376 11.7778 12.8889 11.529 12.8889 11.2222V5.89679L4.94839 13.8373C4.73143 14.0542 4.37968 14.0542 4.16272 13.8373C3.94576 13.6203 3.94576 13.2686 4.16272 13.0516L12.1032 5.11111H6.77778Z"
                fill="#16DB93"
              />
            </svg>{" "}
            +1.15%
          </span>
        </div>
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={BNB} alt="BNB/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">BNB/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈595.80</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-lochinvar lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.77778 5.11111C6.47095 5.11111 6.22222 4.86238 6.22222 4.55556C6.22222 4.24873 6.47095 4 6.77778 4H13.4444C13.7513 4 14 4.24873 14 4.55556V11.2222C14 11.529 13.7513 11.7778 13.4444 11.7778C13.1376 11.7778 12.8889 11.529 12.8889 11.2222V5.89679L4.94839 13.8373C4.73143 14.0542 4.37968 14.0542 4.16272 13.8373C3.94576 13.6203 3.94576 13.2686 4.16272 13.0516L12.1032 5.11111H6.77778Z"
                fill="#16DB93"
              />
            </svg>{" "}
            +1.04%
          </span>
        </div>
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={SOL} alt="SOL/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">SOL/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈152.00</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-punch lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16272 4.16272C4.37968 3.94576 4.73143 3.94576 4.94839 4.16272L12.8889 12.1032V6.77778C12.8889 6.47095 13.1376 6.22222 13.4444 6.22222C13.7513 6.22222 14 6.47095 14 6.77778L14 13.4444C14 13.7513 13.7513 14 13.4444 14H6.77778C6.47095 14 6.22222 13.7513 6.22222 13.4444C6.22222 13.1376 6.47095 12.8889 6.77778 12.8889L12.1032 12.8889L4.16272 4.94839C3.94576 4.73143 3.94576 4.37968 4.16272 4.16272Z"
                fill="#DD1C1A"
              />
            </svg>{" "}
            -1.21%
          </span>
        </div>
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={TRON} alt="TRON/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">TRON/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈0.15</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-punch lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16272 4.16272C4.37968 3.94576 4.73143 3.94576 4.94839 4.16272L12.8889 12.1032V6.77778C12.8889 6.47095 13.1376 6.22222 13.4444 6.22222C13.7513 6.22222 14 6.47095 14 6.77778L14 13.4444C14 13.7513 13.7513 14 13.4444 14H6.77778C6.47095 14 6.22222 13.7513 6.22222 13.4444C6.22222 13.1376 6.47095 12.8889 6.77778 12.8889L12.1032 12.8889L4.16272 4.94839C3.94576 4.73143 3.94576 4.37968 4.16272 4.16272Z"
                fill="#DD1C1A"
              />
            </svg>{" "}
            -1.51%
          </span>
        </div>
      </div>
      <div aria-hidden="true" className="track">
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={AWAX} alt="AVAX/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">AVAX/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈28.07</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-lochinvar lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.77778 5.11111C6.47095 5.11111 6.22222 4.86238 6.22222 4.55556C6.22222 4.24873 6.47095 4 6.77778 4H13.4444C13.7513 4 14 4.24873 14 4.55556V11.2222C14 11.529 13.7513 11.7778 13.4444 11.7778C13.1376 11.7778 12.8889 11.529 12.8889 11.2222V5.89679L4.94839 13.8373C4.73143 14.0542 4.37968 14.0542 4.16272 13.8373C3.94576 13.6203 3.94576 13.2686 4.16272 13.0516L12.1032 5.11111H6.77778Z"
                fill="#16DB93"
              />
            </svg>{" "}
            +1.15%
          </span>
        </div>
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={BNB} alt="BNB/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">BNB/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈595.80</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-lochinvar lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.77778 5.11111C6.47095 5.11111 6.22222 4.86238 6.22222 4.55556C6.22222 4.24873 6.47095 4 6.77778 4H13.4444C13.7513 4 14 4.24873 14 4.55556V11.2222C14 11.529 13.7513 11.7778 13.4444 11.7778C13.1376 11.7778 12.8889 11.529 12.8889 11.2222V5.89679L4.94839 13.8373C4.73143 14.0542 4.37968 14.0542 4.16272 13.8373C3.94576 13.6203 3.94576 13.2686 4.16272 13.0516L12.1032 5.11111H6.77778Z"
                fill="#16DB93"
              />
            </svg>{" "}
            +1.04%
          </span>
        </div>
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={SOL} alt="SOL/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">SOL/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈152.00</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-punch lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16272 4.16272C4.37968 3.94576 4.73143 3.94576 4.94839 4.16272L12.8889 12.1032V6.77778C12.8889 6.47095 13.1376 6.22222 13.4444 6.22222C13.7513 6.22222 14 6.47095 14 6.77778L14 13.4444C14 13.7513 13.7513 14 13.4444 14H6.77778C6.47095 14 6.22222 13.7513 6.22222 13.4444C6.22222 13.1376 6.47095 12.8889 6.77778 12.8889L12.1032 12.8889L4.16272 4.94839C3.94576 4.73143 3.94576 4.37968 4.16272 4.16272Z"
                fill="#DD1C1A"
              />
            </svg>{" "}
            -1.21%
          </span>
        </div>
        <div className="grid grid-flow-col gap-4 place-items-center bg-difo-vulcan border border-difo-lochinvar rounded p-3.5 lg:border-difo-charade lg:p-5 lg:rounded-lg lg:border-2">
          <div className="relative w-6 h-6 lg:w-8 lg:h-8">
            <Image src={TRON} alt="TRON/USDT" fill />
          </div>
          <div className="grid font-[family-name:var(--font-inter)]">
            <span className="text-[14px] font-black lg:text-xl">TRON/USDT</span>
            <span className="text-xs font-bold text-difo-gray-chateau lg:text-base">≈0.15</span>
          </div>
          <span className="flex items-center space-x-1 font-bold font-[family-name:var(--font-karla)] text-xs text-difo-punch lg:text-xl">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.16272 4.16272C4.37968 3.94576 4.73143 3.94576 4.94839 4.16272L12.8889 12.1032V6.77778C12.8889 6.47095 13.1376 6.22222 13.4444 6.22222C13.7513 6.22222 14 6.47095 14 6.77778L14 13.4444C14 13.7513 13.7513 14 13.4444 14H6.77778C6.47095 14 6.22222 13.7513 6.22222 13.4444C6.22222 13.1376 6.47095 12.8889 6.77778 12.8889L12.1032 12.8889L4.16272 4.94839C3.94576 4.73143 3.94576 4.37968 4.16272 4.16272Z"
                fill="#DD1C1A"
              />
            </svg>{" "}
            -1.51%
          </span>
        </div>
      </div>
    </div>
  );
}
