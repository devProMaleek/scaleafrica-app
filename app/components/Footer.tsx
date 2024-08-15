import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/assets/images/logo-purple-overlay.svg";
import WhiteBackgroundLogo from "@/public/assets/images/logo-white-overlay.svg";
import { piazzolla } from "../fonts";
import FooterLogo from "./FooterLogo";
import FooterDescription from "./FooterDescription";
import FooterLinks from "./FooterLinks";

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
                <FooterLogo ImageLogo={ImageLogo} />
                <FooterDescription backgroundColor={backgroundColor} />
              </div>
            </div>
            <div
              className={`w-full pt-5 border-t ${
                backgroundColor === "white"
                  ? "border-primary-100"
                  : "border-primary-500"
              }  md:border-t-0 md:border-l md:pt-0 md:pl-5 lg:pl-10`}
            >
              <FooterLinks backgroundColor={backgroundColor} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
