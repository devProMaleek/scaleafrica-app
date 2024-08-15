import React from "react";
import Link from "next/link";

type Props = {
  backgroundColor: "white" | "primary";
};

export default function FooterLinks({ backgroundColor }: Props) {
  const linkClass = `text-xs font-normal md:text-base hover:underline ${
    backgroundColor === "white" ? "text-primary-700" : "text-white"
  }`;
  return (
    <>
      <div className="grid justify-between grid-cols-2 gap-y-5 gap-x-7 md:gap-x-3 lg:gap-x-0 md:gap-y-0 justify-items-start lg:justify-items-center xs:grid-cols-3">
        <div>
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about-us" className={linkClass}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/stories" className={linkClass}>
                Stories
              </Link>
            </li>
            <li>
              <Link href="/interviews" className={linkClass}>
                Founder Interviews
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-last xs:order-2">
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link href="/about-us#contact-us" className={linkClass}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClass}>
                Share Your Story
              </Link>
            </li>
            <li>
              <Link href="/" className={linkClass}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="order-2 xs:order-last">
          <ul className="space-y-3 md:space-y-6">
            <li>
              <Link
                href="https://x.com/scale_africa?s=21"
                target="_blank"
                className={linkClass}
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/company/scale-africa/"
                target="_blank"
                className={linkClass}
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/scale_africa?igsh=N3gzZDRrdWg5ZXlv"
                target="_blank"
                className={linkClass}
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link href="/" className={`${linkClass} cursor-not-allowed`}>
                Facebook
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
