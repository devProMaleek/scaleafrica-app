"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { montserrat } from "../fonts";

/**
 * HeroSection component.
 * This component returns the hero section of the page.
 * @returns {JSX.Element} The JSX for the hero section.
 */
export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="relative z-10 max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-16">
        <h1 className="max-w-4xl mx-auto mb-4 text-2xl/7 font-medium lg:leading-[90px] tracking-wide text-gray-900 md:text-5xl lg:text-[64px]">
          <p className="md:mb-2">
            Discover the <span className="italic text-primary">stories←</span>
          </p>
          <p className="px-8 md:px-0">
            of failed <span className="font-semibold">African</span>
            <span className="text-secondary">*</span>
            <span className="font-semibold">Startups</span>
          </p>
        </h1>
        <div className="mx-auto mt-4 md:mt-10 max-w-xs">
          <Button
            color="primary"
            radius="full"
            className={`${montserrat.className} w-full py-5 md:py-7 px-4 md:px-10 text-white font-medium text-sm md:text-lg/6`}
          >
            Join our mailing list →
          </Button>
        </div>
      </div>
    </section>
  );
}
