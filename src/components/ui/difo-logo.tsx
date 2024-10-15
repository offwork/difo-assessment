"use client";
import Link from "next/link";
import Image from "next/image";

import LOGO from "../../assets/images/brand.svg";

export default function BrandLogo() {
  return (
    <Link href="/" scroll={false} className="mt-1">
      <Image src={LOGO} alt="" width={106} height={40} unoptimized />
    </Link>
  );
}
