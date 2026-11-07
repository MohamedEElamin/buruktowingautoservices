import Image from "next/image";
import Link from "next/link";
import emblem from "@/app/buruk_towing_automotive_emblem.webp";
import { business } from "@/lib/business";

type BrandLogoProps = {
  placement?: "header" | "footer";
};

export function BrandLogo({ placement = "header" }: BrandLogoProps) {
  const isFooter = placement === "footer";

  return (
    <Link
      href="/"
      aria-label={`${business.name} home`}
      className="inline-flex shrink-0 items-center"
    >
      <Image
        src={emblem}
        alt={business.name}
        width={1536}
        height={1024}
        priority={!isFooter}
        sizes={isFooter ? "160px" : "(max-width: 640px) 112px, 136px"}
        className={`h-auto object-contain ${
          isFooter
            ? "w-40"
            : "w-[72px] min-[360px]:w-[92px] min-[400px]:w-[108px] sm:w-[136px]"
        }`}
      />
    </Link>
  );
}
