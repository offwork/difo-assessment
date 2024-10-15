export default function SaleWidget() {
  return (
    <>
      <div className="hidden grid-cols-3 gap-8 lg:grid lg:gap-4 xl:gap-6 4xl:gap-10 5xl:gap-12">
        <div className="grid h-full bg-gradient-to-tr from-difo-purple-heart/10 from-15% via-difo-aqua via-50% to-difo-purple-heart/10 to-85% p-1 rounded-[10px]">
          <div className="grid gap-3 justify-items-center content-center bg-difo-vulcan rounded-[10px] lg:p-3 xl:p-5 4xl:p-6">
            <h3 className="font-black text-3xl text-difo-aqua font-[family-name:var(--font-inter)] lg:text-xl 4xl:text-4xl 5xl:text-5xl">
              Total Token Supply
            </h3>
            <p className="font-bold text-xl font-[family-name:var(--font-karla)] lg:text-base 2xl:text-xl">
              MAX: It is limited to <br /> 879,000,000 $DIFO.
            </p>
          </div>
        </div>
        <div className="grid h-full bg-gradient-to-tr from-difo-purple-heart/10 from-15% via-difo-aqua via-50% to-difo-purple-heart/10 to-85% p-1 rounded-[10px]">
          <div className="grid gap-3 justify-items-center content-center bg-difo-vulcan rounded-[10px] lg:p-3 xl:p-5 4xl:p-6">
            <h3 className="font-black text-3xl text-difo-aqua font-[family-name:var(--font-inter)] lg:text-xl 4xl:text-4xl 5xl:text-5xl">
              Type of Sale
            </h3>
            <p className="font-bold text-xl font-[family-name:var(--font-karla)] lg:text-base 2xl:text-xl">
              Public Sale
            </p>
          </div>
        </div>
        <div className="grid h-full bg-gradient-to-tr from-difo-purple-heart/10 from-15% via-difo-aqua via-50% to-difo-purple-heart/10 to-85% p-1 rounded-[10px]">
          <div className="grid gap-3 justify-items-center content-center bg-difo-vulcan rounded-[10px] lg:p-3 xl:p-5 4xl:p-6">
            <h3 className="font-black text-3xl text-difo-aqua font-[family-name:var(--font-inter)] lg:text-xl 4xl:text-4xl 5xl:text-5xl">
              Token Sale Format
            </h3>
            <p className="font-bold text-xl font-[family-name:var(--font-karla)] lg:text-base 2xl:text-xl">
              First come, first served
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 md:gap-6 lg:hidden">
        <div className="grid gap-1 bg-difo-tuna border border-difo-aqua p-2 rounded">
          <h3 className="font-black text-[10px] text-difo-aqua font-[family-name:var(--font-inter)] sm:text-[14px]">
            Type of Sale
          </h3>
          <p className="font-bold text-[10px] font-[family-name:var(--font-karla)] sm:text-xs">Public Sale</p>
        </div>
        <div className="grid gap-1 bg-difo-tuna border border-difo-aqua p-2 rounded">
          <h3 className="font-black text-[10px] text-difo-aqua font-[family-name:var(--font-inter)] sm:text-[14px]">
            Token Sale Format
          </h3>
          <p className="font-bold text-[10px] font-[family-name:var(--font-karla)] sm:text-xs">
            First come, first served
          </p>
        </div>
      </div>
    </>
  );
}
