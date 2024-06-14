"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/public/assets/images/logo.svg";
import { usePathname } from "next/navigation";
import { piazzolla, robotoSerif } from "../fonts";

type Props = {};

export default function Navbar({}: Props) {
  const pathname = usePathname();
  return (
    <>
      <nav className="bg-white">
        <div className="flex items-center justify-between px-5 py-4 mx-auto flex-nowrap md:px-7 lg:px-12">
          <Link href="/" className="flex items-center">
            <div className="relative w-12 h-10 md:w-20 md:h-16">
              <Image
                src={Logo}
                sizes="500px"
                layout="fill"
                objectFit="contain"
                alt="Scale Africa Logo"
              />
            </div>
          </Link>
          <div className="flex items-center space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Link
              href="/about-us#contact-us"
              className={`${robotoSerif.className} block py-1.5 transition bg-primary hover:bg-primary-700 duration-500 px-4 lg:py-2.5 lg:px-7 text-sm/6 font-normal tracking-normal text-white rounded-full`}
              aria-current="page"
            >
              Talk to Us
            </Link>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:space-x-6 lg:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link
                  href="/"
                  className={`${robotoSerif.className} block ${
                    pathname === "/"
                      ? "bg-primary text-white hover:bg-white hover:text-primary"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  } py-1 transition duration-500 px-4 lg:py-2 lg:px-7 border text-sm/6 font-normal tracking-normal border-gray-400 rounded-full`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={`${robotoSerif.className} block ${
                    pathname === "/about-us"
                      ? "bg-primary text-white hover:bg-white hover:text-primary"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  } py-1 transition duration-500 px-4 lg:py-2 lg:px-7 border text-sm/6 font-normal tracking-normal border-gray-400 rounded-full`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className={`${robotoSerif.className} block ${
                    pathname === "/stories"
                      ? "bg-primary text-white hover:bg-white hover:text-primary"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  } py-1 transition duration-500 px-4 lg:py-2 lg:px-7 border text-sm/6 font-normal tracking-normal border-gray-400 rounded-full`}
                  aria-current="page"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/interviews"
                  className={`${robotoSerif.className} block ${
                    pathname === "/interviews"
                      ? "bg-primary text-white hover:bg-white hover:text-primary"
                      : "bg-white text-primary hover:bg-primary hover:text-white"
                  } py-1 transition duration-500 px-4 lg:py-2 lg:px-7 border text-sm/6 font-normal tracking-normal border-gray-400 rounded-full`}
                >
                  Interviews
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
