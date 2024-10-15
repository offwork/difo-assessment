"use client";
import { forwardRef, MouseEvent, ReactNode } from "react";

type BTN_STILL = "fill" | "gradient" | "outline";

type ButtonProps = {
  bg?: string;
  children?: ReactNode;
  still: BTN_STILL;
  onClick?: (evt: MouseEvent<HTMLButtonElement>) => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, bg = "bg-difo-deep-blue", still, onClick }, ref) => {
  return (
    <>
      {
        {
          fill: (
            <button
              ref={ref}
              className="relative flex justify-center items-center bg-difo-azure rounded-lg px-6 py-3"
              onClick={onClick}
            >
              {children}
            </button>
          ),
          gradient: (
            <button
              ref={ref}
              className="relative flex justify-center items-center space-x-2 rounded-lg py-3 px-4 bg-gradient-to-tr from-difo-hawks-blue from-4% via-difo-azure via-45% to-difo-hawks-blue to-99% xl:px-6"
              onClick={onClick}
            >
              {children}
            </button>
          ),
          outline: (
            <button
              ref={ref}
              className="relative rounded-lg p-[1px] overflow-hidden"
              onClick={onClick}
            >
              <div className="absolute z-0 w-full h-full top-0 left-0 bg-gradient-to-tr from-difo-hawks-blue from-4% via-difo-azure via-45% to-difo-hawks-blue to-99%"></div>
              <div className={`flex justify-center items-center space-x-2 py-3 px-3 rounded-lg relative z-10 ${bg} w-full h-full xl:px-6`}>
                {children}
              </div>
            </button>
          ),
        }[still]
      }
    </>
  );
});

Button.displayName = "DifoButton";
export default Button;
