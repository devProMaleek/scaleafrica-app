import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo-purple-overlay.svg";
import WhiteBackgroundLogo from "@/public/assets/images/logo-white-overlay.svg";
import { piazzolla } from "../fonts";

type Props = {
  backgroundColor: "white" | "primary";
};

export default function Footer({ backgroundColor }: Props) {
  const ImageLogo = backgroundColor === "white" ? WhiteBackgroundLogo : Logo;
  return (
    <>
      <footer
        className={`${piazzolla.className} ${
          backgroundColor === "white" ? "bg-white" : "bg-primary"
        }`}
      >
        <div className="px-5 py-10 mx-auto md:py-20 max-w-screen-2xl lg:px-24">
          <div className="md:flex">
            <div className="mb-6 md:min-w-[350px] lg:min-w-[550px] md:mb-0">
              <div className="flex flex-col space-y-5 md:flex-col-reverse md:space-y-10 md:space-y-reverse">
                <div className="">
                  <div className="flex items-center">
                    <div className="relative w-24 h-12 md:w-32 md:h-16 lg:w-44 lg:h-20">
                      <Image
                        src={ImageLogo}
                        sizes="500px"
                        layout="fill"
                        objectFit="contain"
                        alt="Scale Africa Logo"
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full md:max-w-xs lg:max-w-sm">
                  <p
                    className={`${
                      backgroundColor === "white"
                        ? "text-primary-700"
                        : "text-white"
                    } text-sm/6 lg:text-base font-normal`}
                  >
                    Shaping decisions and driving insights for budding and
                    active players in the African tech ecosystem.
                  </p>
                </div>
              </div>
            </div>
            <div
              className={`w-full pt-5 border-t ${
                backgroundColor === "white"
                  ? "border-primary-100"
                  : "border-primary-500"
              }  md:border-t-0 md:border-l md:pt-0 md:pl-5 lg:pl-10`}
            >
              <div className="grid justify-between grid-cols-2 gap-y-5 gap-x-7 md:gap-x-3 lg:gap-x-0 md:gap-y-0 justify-items-start lg:justify-items-center xs:grid-cols-3">
                <div>
                  <ul
                    className={`space-y-3 md:space-y-6 ${
                      backgroundColor === "white"
                        ? "text-primary-700"
                        : "text-white"
                    }`}
                  >
                    <li>
                      <Link
                        href="/"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about-us"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/stories"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Stories
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/interviews"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Founder Interviews
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="order-last xs:order-2">
                  <ul
                    className={`space-y-3 md:space-y-6 ${
                      backgroundColor === "white"
                        ? "text-primary-700"
                        : "text-white"
                    }`}
                  >
                    <li>
                      <Link
                        href="/about-us#contact-us"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Share Your Story
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="order-2 xs:order-last">
                  <ul
                    className={`space-y-3 md:space-y-6 ${
                      backgroundColor === "white"
                        ? "text-primary-700"
                        : "text-white"
                    }`}
                  >
                    <li>
                      <Link
                        href="https://x.com/scale_africa?s=21"
                        target="_blank"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.linkedin.com/company/scale-africa/"
                        target="_blank"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        LinkedIn
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://www.instagram.com/scale_africa?igsh=N3gzZDRrdWg5ZXlv"
                        target="_blank"
                        className="text-xs font-normal md:text-base hover:underline"
                      >
                        Instagram
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="text-xs font-normal cursor-not-allowed md:text-base hover:underline"
                      >
                        Facebook
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
