"use client";
import useOnClickOutside from "@/hooks/useClickOutside";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { useRef, useState } from "react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function DropdownMenu({ label, items }: { label: string; items?: string[] }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null!);
  const menuContainerRef = useRef<HTMLDivElement>(null!);
  const menuArrowRef = useRef<SVGSVGElement>(null!);
  const dropDownTl = useRef<GSAPTimeline>(null!);

  useOnClickOutside(menuRef, (value) => {
    if (!value) {
      setOpen(value);
      dropDownTl.current.reverse();
    }
  });

  useGSAP(
    (_context, contextSafe) => {
      dropDownTl.current = gsap.timeline({ paused: true });

      dropDownTl.current.fromTo(menuArrowRef.current, { rotate: 0 }, { rotate: 180 }).fromTo(
        menuContainerRef.current,
        {
          autoAlpha: 0,
          visibility: "hidden",
          yPercent: 30,
        },
        {
          autoAlpha: 1,
          visibility: "visible",
          yPercent: 20,
        }
      );

      const toggleMenu = contextSafe!(() => {
        if (!items) {
          return;
        }

        if (!open) {
          dropDownTl.current.play();
        }
      });

      menuRef.current.addEventListener("click", toggleMenu);

      return () => {
        menuRef.current.removeEventListener("click", toggleMenu);
      };
    },
    { scope: menuRef.current }
  );

  return (
    <button
      ref={menuRef}
      name={label}
      className="relative flex items-center space-x-2 py-3 px-7 select-none"
    >
      <span className="uppercase">{label}</span>
      <svg
        width="13"
        height="10"
        viewBox="0 0 13 10"
        fill="none"
        ref={menuArrowRef}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.17099 1.84445C0.17099 1.54598 0.3053 1.24751 0.558997 1.04853C0.996748 0.705297 1.63348 0.779914 1.97671 1.22264L6.1254 6.52042L10.2691 1.22264C10.6124 0.784888 11.2491 0.705297 11.6868 1.04853C12.1246 1.39177 12.2042 2.0285 11.8609 2.46625L6.91634 8.77882C6.72731 9.02257 6.43382 9.16683 6.12043 9.16683C5.80704 9.16683 5.51852 9.02257 5.32452 8.77882L0.379917 2.46625C0.235658 2.2822 0.166016 2.06332 0.166016 1.84445H0.17099Z"
          fill="white"
        />
      </svg>
      <div
        ref={menuContainerRef}
        className="absolute top-0 left-0 invisible opacity-0 rounded-xl p-6 bg-difo-vulcan border border-difo-charade"
      >
        {items && (
          <div
            onClick={() => {
              setOpen(false);
              dropDownTl.current.reverse();
            }}
            className="font-[family-name:var(--font-karla)] min-w-[440px] grid gap-6 drop-shadow-2xl"
          >
            {items.map((item) => (
              <Link
                key={`${label}-${item}`}
                href="/"
                className="menu-item flex items-center justify-between text-difo-gray-chateau hover:text-white"
              >
                <span className="text-nowrap">{item}</span>
                <span className="relative font-bold text-xl">&#62;</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </button>
  );
}
