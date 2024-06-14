"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { piazzolla, robotoSerif } from "../fonts";
import StoryList from "./StoryList";
import Link from "next/link";

type Props = {};

export default function FeaturedStories({}: Props) {
  return (
    <>
      <section className="w-full mx-auto bg-white">
        <div className="px-3 py-10 md:px-10 lg:px-24 lg:py-20">
          <div className="space-y-6 md:space-y-12 lg:space-y-16">
            <div className="flex justify-center w-full">
              <h3
                className={`${robotoSerif.className} font-semibold max-w-sm text-center md:leading-[50px] text-2xl md:text-3xl lg:text-[40px] text-primary-800`}
              >
                Explore Our Featured Stories
              </h3>
            </div>
            <div className="">
              <StoryList />
            </div>
            <div className="flex justify-center w-full">
              <Link href="/stories">
                <Button
                  color="primary"
                  radius="full"
                  variant="ghost"
                  className={`${piazzolla.className} hover:bg-primary hover:text-white transition duration-500 px-10 py-6 font-bold text-primary tracking-normal text-sm/5 md:text-lg/6`}
                >
                  See all stories→
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
