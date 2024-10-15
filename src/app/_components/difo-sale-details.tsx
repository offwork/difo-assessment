import Attention from "./difo-attention";
import BuyPack from "./difo-buy-pack";
import PreSale from "./difo-pre-sale";
import SaleWidget from "./difo-sale-widget";

export function SaleDetails() {
  return (
    <div className="relative container min-w-full w-full py-10 lg:py-20">
      <div className="block w-full bg-transparent rounded-2xl shadow-none lg:shadow-[0_2px_24px_16px_rgba(133,171,244,0.3)] py-0 lg:py-16 lg:bg-difo-vulcan lg:px-10 xl:px-16 5xl:px-36">
        <div className="grid gap-12 font-[family-name:var(--font-inter)]">
          <PreSale />
          <SaleWidget />
          <BuyPack />
          <Attention />
        </div>
      </div>
    </div>
  );
}
