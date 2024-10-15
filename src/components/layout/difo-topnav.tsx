"use client";
import { classNames } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useCallback, useRef, useState } from "react";
import Button from "../ui/difo-button";
import DropdownMenu from "../ui/difo-dropdown-menu";
import BrandLogo from "../ui/difo-logo";
import Link from "next/link";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function Topnav() {
  const [backdrop, setBackdrop] = useState(false);
  const isOpen = useRef<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null!);
  const menuContainRef = useRef<HTMLDivElement>(null!);
  const backdropRef = useRef<HTMLDivElement>(null!);
  const openMenuRef = useRef<HTMLDivElement | null>(null!);
  const hamburgerRef = useRef<HTMLButtonElement>(null!);
  const hamburgerTl = useRef<GSAPTimeline>(null!);

  useGSAP(
    (_context, contextSafe) => {
      const hamburgerLines = gsap.utils.toArray<HTMLSpanElement>(".hamburger-line");
      const menuItems = menuContainRef.current.querySelectorAll(".main-nav-item")!;
      const accordionGroups = gsap.utils.toArray<HTMLDivElement>(".accordion-group");
      const accordionMenus = gsap.utils.toArray<HTMLDivElement>(".accordion-menu");
      const customLink = gsap.utils.toArray<HTMLAnchorElement>(".custom-link")!;
      const menuToggles = accordionGroups.map(createAnimation);
      hamburgerTl.current = gsap.timeline({ paused: true });

      hamburgerTl.current
        .set(menuContainRef.current, {
          right: "-100%",
        })
        .addLabel("mainMenu")
        .to(hamburgerLines[1], { opacity: 0 }, "<0.3")
        .to(hamburgerLines[0], { y: 5, rotate: 45, ease: "expo.inOut" }, "mainMenu")
        .to(
          hamburgerLines[2],
          {
            y: -6,
            rotate: -45,
            ease: "expo.inOut",
          },
          "mainMenu"
        )
        .to(
          menuContainRef.current,
          {
            right: 0,
            onComplete: () => {
              isOpen.current = false;
              if (openMenuRef.current) {
                openMenuRef.current = null;
              }
            },
          },
          "mainMenu"
        );

      menuItems.forEach((elm, idx) => {
        hamburgerTl.current.to(
          elm,
          { yPercent: 0, autoAlpha: 1, ease: "power4.out", duration: 1.1, stagger: 0.1 },
          `mainMenu+=${idx * 0.1}`
        );
      });

      accordionMenus.forEach((menu) => {
        menu.addEventListener("click", (evt: MouseEvent) => {
          toggleMenu(menu);
          evt.stopPropagation();
        });
      });

      function toggleMenu(clickedMenu: HTMLDivElement) {
        menuToggles.forEach((toggleFn) => toggleFn(clickedMenu));
        openMenuRef.current = clickedMenu;
      }

      function createAnimation(element: HTMLDivElement) {
        const menu = element.querySelector(".accordion-menu");
        const box = element.querySelector(".accordion-content");
        const arrow = element.querySelector(".menu-arrow");

        gsap.set(box, { height: "auto", paddingBottom: 8, paddingTop: 20 });
        gsap.set(arrow, { rotate: 180, transformOrigin: "50% 50%" });
        gsap.set(menu, { color: "#ffca3a" });

        const accordionTl = gsap.timeline({ paused: true });

        accordionTl
          .from(menu, { color: "#ffffff", ease: "sine.in", duration: 0.5 })
          .from(arrow, { rotate: 0, ease: "sine.in", duration: 0.5 })
          .from(
            box,
            { height: 0, paddingBottom: 0, paddingTop: 0, duration: 0.7, ease: "back.in" },
            "<"
          )
          .reverse();

        return function (clickedMenu: HTMLDivElement) {
          if (clickedMenu === menu) {
            accordionTl.reversed(!accordionTl.reversed());
          } else {
            accordionTl.reverse();
          }
        };
      }

      const clickOnHamburger = contextSafe!(() => {
        if (isOpen.current) {
          hamburgerTl.current.play();
          setBackdrop(true);
        } else {
          hamburgerTl.current.reverse();
          isOpen.current = true;
          setBackdrop(false);
          if (openMenuRef.current) {
            toggleMenu(openMenuRef.current);
          }
        }
      });

      const clickOnBackdrop = contextSafe!(() => {
        hamburgerTl.current.reverse();
        isOpen.current = true;
        setBackdrop(false);
        if (openMenuRef.current) {
          toggleMenu(openMenuRef.current);
        }
      });

      hamburgerRef.current.addEventListener("click", clickOnHamburger);
      backdropRef.current.addEventListener("click", clickOnBackdrop);

      customLink.forEach((anchor) => {
        anchor.addEventListener("click", clickOnBackdrop);
      });

      return () => {
        hamburgerRef.current.removeEventListener("click", clickOnHamburger);
        customLink.forEach((anchor) => {
          anchor.removeEventListener("click", clickOnBackdrop);
        });
      };
    },
    { scope: containerRef.current }
  );

  const handleWindowResize = useCallback(() => {
    if (window.innerWidth > 991) {
      hamburgerTl.current.reverse();
      isOpen.current = true;
      setBackdrop(false);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed w-full top-0 left-0 z-10 ">
      <div className="relative z-20 w-full bg-gradient-to-r from-black to-difo-deep-blue py-6">
        <div className="relative flex items-center justify-between container min-w-full font-[family-name:var(--font-karla)]">
          <div className="grid grid-flow-col gap-8">
            <BrandLogo />
            <div className="hidden grid-flow-col gap-4 font-semibold lg:grid">
              <DropdownMenu
                label="ABOUT"
                items={[
                  "About Difo Launcpad",
                  "Tokenomics",
                  "Team",
                  "Career",
                  "Difo Finance",
                  "Whitepaper",
                  "Difo Token",
                ]}
              />
              <DropdownMenu
                label="AWARDS"
                items={[
                  "Referance Program",
                  "Video Contest",
                  "Graphic Contest",
                  "Content Contest",
                  "Airdrop",
                ]}
              />
              <DropdownMenu label="BY $DIFO" />
            </div>
          </div>
          <div className="hidden grid-flow-col gap-4 font-bold lg:grid">
            <Button still="outline">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.726 4.625H2.35938C1.18438 4.625 0.234375 5.575 0.234375 6.75V16.9167C0.234375 18.0917 1.18438 19.0417 2.35938 19.0417H17.7344C18.9094 19.0417 19.8594 18.0917 19.8594 16.9167V6.75C19.8594 5.575 18.9094 4.625 17.7344 4.625H17.726ZM15.326 13.0417C14.5177 13.0417 13.8594 12.3833 13.8594 11.575C13.8594 10.7667 14.5177 10.1083 15.326 10.1083C16.1344 10.1083 16.7927 10.7667 16.7927 11.575C16.7927 12.3833 16.1344 13.0417 15.326 13.0417Z"
                  fill="white"
                />
                <path
                  d="M14.2088 0.98333C16.8338 0.749996 17.9255 3.49166 17.9255 3.49166C17.9255 3.49166 4.85046 3.53333 3.12546 3.49166C1.40046 3.45 0.933797 4.11666 0.933797 4.11666C0.933797 4.11666 0.400464 3.525 5.52546 2.66666C10.6588 1.80833 14.2088 0.98333 14.2088 0.98333Z"
                  fill="white"
                />
              </svg>
              <span className="hidden xl:block">Connect Wallet</span>
            </Button>
            <Button still="fill">
              <span>Log In</span>
            </Button>
            <Button still="gradient">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.84974 10.0501C12.5605 10.0501 14.7581 7.85253 14.7581 5.14173C14.7581 2.43093 12.5605 0.233398 9.84974 0.233398C7.13894 0.233398 4.94141 2.43093 4.94141 5.14173C4.94141 7.85253 7.13894 10.0501 9.84974 10.0501Z"
                  fill="white"
                />
                <path
                  d="M14.1079 10.6919H5.89954C3.39585 10.6919 1.36621 12.7215 1.36621 15.2252V15.2336C1.36621 17.7373 3.39585 19.7669 5.89954 19.7669H14.1079C16.6116 19.7669 18.6412 17.7373 18.6412 15.2336V15.2252C18.6412 12.7215 16.6116 10.6919 14.1079 10.6919Z"
                  fill="white"
                />
              </svg>
              <span>Sign Up</span>
            </Button>
          </div>
          <div className="grid grid-flow-col gap-5 font-bold lg:hidden">
            <div className="hidden md:block">
              <Button still="outline">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.726 4.625H2.35938C1.18438 4.625 0.234375 5.575 0.234375 6.75V16.9167C0.234375 18.0917 1.18438 19.0417 2.35938 19.0417H17.7344C18.9094 19.0417 19.8594 18.0917 19.8594 16.9167V6.75C19.8594 5.575 18.9094 4.625 17.7344 4.625H17.726ZM15.326 13.0417C14.5177 13.0417 13.8594 12.3833 13.8594 11.575C13.8594 10.7667 14.5177 10.1083 15.326 10.1083C16.1344 10.1083 16.7927 10.7667 16.7927 11.575C16.7927 12.3833 16.1344 13.0417 15.326 13.0417Z"
                    fill="white"
                  />
                  <path
                    d="M14.2088 0.98333C16.8338 0.749996 17.9255 3.49166 17.9255 3.49166C17.9255 3.49166 4.85046 3.53333 3.12546 3.49166C1.40046 3.45 0.933797 4.11666 0.933797 4.11666C0.933797 4.11666 0.400464 3.525 5.52546 2.66666C10.6588 1.80833 14.2088 0.98333 14.2088 0.98333Z"
                    fill="white"
                  />
                </svg>
              </Button>
            </div>
            <Button still="gradient">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.84974 10.0501C12.5605 10.0501 14.7581 7.85253 14.7581 5.14173C14.7581 2.43093 12.5605 0.233398 9.84974 0.233398C7.13894 0.233398 4.94141 2.43093 4.94141 5.14173C4.94141 7.85253 7.13894 10.0501 9.84974 10.0501Z"
                  fill="white"
                />
                <path
                  d="M14.1079 10.6919H5.89954C3.39585 10.6919 1.36621 12.7215 1.36621 15.2252V15.2336C1.36621 17.7373 3.39585 19.7669 5.89954 19.7669H14.1079C16.6116 19.7669 18.6412 17.7373 18.6412 15.2336V15.2252C18.6412 12.7215 16.6116 10.6919 14.1079 10.6919Z"
                  fill="white"
                />
              </svg>
            </Button>
            <Button ref={hamburgerRef} still="outline">
              <div className="hamburger-wraper relative bg-transparent grid gap-1">
                <span className="hamburger-line relative bg-white w-5 h-0.5"></span>
                <span className="hamburger-line relative bg-white w-5 h-0.5"></span>
                <span className="hamburger-line relative bg-white w-5 h-0.5"></span>
              </div>
            </Button>
          </div>
        </div>
      </div>
      <div
        ref={menuContainRef}
        className="absolute z-10 h-screen min-w-72 top-0 -right-full bottom-0 pt-[92px] sm:min-w-96 md:min-w-[640px]"
      >
        <div className="block font-[family-name:var(--font-karla)] bg-difo-vulcan w-full h-full py-3 px-3 md:py-5 md:px-6">
          <div className="grid gap-3">
            <div className="grid grid-cols-2 gap-3">
              <Button still="fill">
                <span className="font-bold text-xs">Log In</span>
              </Button>
              <Button still="gradient">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84974 10.0501C12.5605 10.0501 14.7581 7.85253 14.7581 5.14173C14.7581 2.43093 12.5605 0.233398 9.84974 0.233398C7.13894 0.233398 4.94141 2.43093 4.94141 5.14173C4.94141 7.85253 7.13894 10.0501 9.84974 10.0501Z"
                    fill="white"
                  />
                  <path
                    d="M14.1079 10.6919H5.89954C3.39585 10.6919 1.36621 12.7215 1.36621 15.2252V15.2336C1.36621 17.7373 3.39585 19.7669 5.89954 19.7669H14.1079C16.6116 19.7669 18.6412 17.7373 18.6412 15.2336V15.2252C18.6412 12.7215 16.6116 10.6919 14.1079 10.6919Z"
                    fill="white"
                  />
                </svg>
                <span className="font-bold text-xs">Sign Up</span>
              </Button>
            </div>
            <Button bg="bg-difo-vulcan" still="outline">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.726 4.625H2.35938C1.18438 4.625 0.234375 5.575 0.234375 6.75V16.9167C0.234375 18.0917 1.18438 19.0417 2.35938 19.0417H17.7344C18.9094 19.0417 19.8594 18.0917 19.8594 16.9167V6.75C19.8594 5.575 18.9094 4.625 17.7344 4.625H17.726ZM15.326 13.0417C14.5177 13.0417 13.8594 12.3833 13.8594 11.575C13.8594 10.7667 14.5177 10.1083 15.326 10.1083C16.1344 10.1083 16.7927 10.7667 16.7927 11.575C16.7927 12.3833 16.1344 13.0417 15.326 13.0417Z"
                  fill="white"
                />
                <path
                  d="M14.2088 0.98333C16.8338 0.749996 17.9255 3.49166 17.9255 3.49166C17.9255 3.49166 4.85046 3.53333 3.12546 3.49166C1.40046 3.45 0.933797 4.11666 0.933797 4.11666C0.933797 4.11666 0.400464 3.525 5.52546 2.66666C10.6588 1.80833 14.2088 0.98333 14.2088 0.98333Z"
                  fill="white"
                />
              </svg>
              <span className="font-bold text-xs">Connect Wallet</span>
            </Button>
          </div>

          <ul className="grid w-full grid-flow-row font-bold mt-5 gap-3 text-[14px] sm:text-base md:text-xl">
            <li className="accordion-group cursor-pointer main-nav-item">
              <div className="accordion-menu flex items-center justify-between">
                <div>
                  <span className="text-xl mr-1.5">&#8226;</span> <span>About</span>
                </div>
                <span className="menu-arrow font-bold text-xl">&#8744;</span>
              </div>
              <div className="accordion-content pl-5 grid gap-3 h-0 overflow-hidden">
                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>About Difo Launchpad</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Tokenomics</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Team</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Career</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Difo Finance</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Whitepapper</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>
                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Difo Token</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>
              </div>
            </li>
            <li className="accordion-group cursor-pointer main-nav-item">
              <div className="accordion-menu">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl mr-1.5">&#8226;</span> <span>Awards</span>
                  </div>
                  <span className="menu-arrow font-bold text-xl">&#8744;</span>
                </div>
              </div>
              <div className="accordion-content pl-5 grid gap-3 h-0 overflow-hidden">
                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Referance Program</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Video Contest</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Graphic Contest</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Content Contest</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>

                <Link href="/" className="custom-link flex items-center justify-between">
                  <span>Airdrop</span>
                  <span className="relative font-bold text-xl">&#62;</span>
                </Link>
              </div>
            </li>
            <li className="cursor-pointer main-nav-item">
              <div className="accordion-menu">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl mr-1.5">&#8226;</span> <span>By Difo</span>
                  </div>
                  <span className="relative font-bold text-xl">&#62;</span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div
        ref={backdropRef}
        className={classNames(
          backdrop ? "flex" : "hidden",
          "fixed z-0 cursor-pointer inset-0 bg-black/30"
        )}
      ></div>
    </div>
  );
}
