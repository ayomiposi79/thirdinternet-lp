import Image from "next/image";
import { Button } from "@/components/ui/button";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <footer className="relative bg-[url('/grid.svg')] object-cover object-center pb-[177px] pt-[95px] max-lg:pt-[185px] max-sm:pb-[90px] max-sm:pt-[48px]">
      <div className="container mb-[96px] flex items-center justify-between max-lg:flex-col max-lg:gap-[26px] max-lg:text-center max-sm:mb-[74px]">
        <h2 className="max-w-[619px] font-maglony text-[48px] font-normal leading-[120%] text-[#0E1F38] max-sm:text-[32px]">
          We strive to help the young generation benefit from building onchain
        </h2>
        <div className="grid grid-cols-3 gap-[56px]">
          <a href="https://warpcast.com/thirdinternet" target="_blank" rel="noopener noreferrer">
              <Image
                alt="social"
                src="social.svg"
                width={69}
                height={69}
                className="max-sm:h-[30px] max-sm:w-[30px]"
              />
            </a>
          <a href="https://www.instagram.com/thethirdinternet?igsh=cmlwM2lvNjZ2Nmtr&utm_source=qr" target="_blank" rel="noopener noreferrer">
              <Image
                alt="insta"
                src="insta.svg"
                width={67}
                height={67}
                className="max-sm:h-[30px] max-sm:w-[30px]"
              />
            </a>
          <a href="https://x.com/3rd_internet_?s=21" target="_blank" rel="noopener noreferrer">
            <Image
              alt="x"
              src="x.svg"
              width={70}
              height={67}
              className="max-sm:h-[30px] max-sm:w-[30px]"
            />
          </a>
        </div>
      </div>
      <div className="container grid grid-cols-3 items-center font-clashGrotesk text-[16px] font-medium leading-[20px] -tracking-[0.04em] text-[#0E1F38] max-lg:grid-cols-1 max-lg:gap-[23px] max-lg:text-center">
        <span>Built Onchain with ☕</span>
        <Button className="mx-auto rounded-[100px] bg-[#828282] font-clashGrotesk text-[16px] font-medium leading-[20px] -tracking-[0.04em] text-[#FAFAFA] max-lg:-order-1 max-lg:mb-[52px]">
          Give To The Community
        </Button>
        <span className="text-right max-lg:text-center">
          All Rights Reserved © 2024 Thirdinternet
        </span>
      </div>
      <div className="container flex items-center justify-center">
        <Image
          alt="footer-icon"
          className="absolute bottom-0 max-sm:hidden"
          src="/footer-icon.svg"
          width={1200}
          height={88}
        />
        <Image
          alt="footer-icon-mobile"
          className="absolute bottom-0 hidden max-sm:flex"
          src="/footer-icon-mobile.svg"
          width={398}
          height={31}
        />
      </div>
    </footer>
  );
}
