"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import { notoSans, piazzolla, robotoSerif } from "../fonts";
import OluIbitoyeImage from "@/public/assets/images/olu-ibitoye.png";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function InterviewFounder({}: Props) {
  return (
    <>
      <section className="w-full mx-auto bg-primary">
        <div className="px-5 py-10 md:px-14 lg:px-28 lg:py-20">
          <div className="space-y-12 lg:space-y-16">
            <div className="space-y-1 text-center md:space-y-3 lg:space-y-5">
              <p
                className={`${notoSans.className} font-medium uppercase text-lg/6 text-white/60`}
              >
                Behind the vision
              </p>
              <h3
                className={`${piazzolla.className} font-semibold text-2xl md:text-[32px]/8 lg:text-[40px]/[50px] text-white`}
              >
                Interviews With Founders
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              <div className="bg-interview-image1 bg-cover bg-center h-80 md:h-[450px] lg:h-[650px] rounded">
                <div className="bg-gradient-to-b from-[#41366700] to-[#413569] w-full h-full relative">
                  <div className="flex flex-col items-center justify-end w-full h-full mb-5 space-y-5">
                    <div className="max-w-md text-center">
                      <p
                        className={`${robotoSerif.className} text-lg/6 tracking-wide font-normal`}
                      >
                        “Starting a company with my wife almost ruined my
                        marriage”
                      </p>
                    </div>
                    <div className="pb-5 text-center">
                      <h6
                        className={`${robotoSerif.className} text-[26px]/8 font-semibold capitalize`}
                      >
                        Olu Ibitoye
                      </h6>
                      <p
                        className={`${notoSans.className} font-medium text-lg/7 tracking-wide text-white/80`}
                      >
                        Co-founder - BitMarket
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-interview-image2 bg-cover bg-center h-80 md:h-[450px] lg:h-[650px] rounded">
                <div className="bg-gradient-to-b from-[#41366700] to-[#413569] w-full h-full relative">
                  <div className="flex flex-col items-center justify-end w-full h-full mb-5 space-y-5">
                    <div className="pb-5 text-center">
                      <h6
                        className={`${robotoSerif.className} text-[26px]/8 font-semibold capitalize`}
                      >
                        Alex Idris
                      </h6>
                      <p
                        className={`${notoSans.className} font-medium text-lg/7 tracking-wide text-white/80`}
                      >
                        CEO - ShadesLa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-interview-image3 bg-cover bg-center h-80 md:h-[450px] lg:h-[650px] rounded">
                <div className="bg-gradient-to-b from-[#41366700] to-[#413569] w-full h-full relative">
                  <div className="flex flex-col items-center justify-end w-full h-full mb-5 space-y-5">
                    <div className="pb-5 text-center">
                      <h6
                        className={`${robotoSerif.className} text-[26px]/8 font-semibold capitalize`}
                      >
                        Samuel Martin
                      </h6>
                      <p
                        className={`${notoSans.className} font-medium text-lg/7 tracking-wide text-white/80`}
                      >
                        Founder - Pentool
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-interview-image4 bg-cover bg-top h-80 md:h-[450px] lg:h-[650px] rounded">
                <div className="bg-gradient-to-b from-[#41366700] to-[#413569] w-full h-full relative">
                  <div className="flex flex-col items-center justify-end w-full h-full mb-5 space-y-5">
                    <div className="pb-5 text-center">
                      <h6
                        className={`${robotoSerif.className} text-[26px]/8 font-semibold capitalize`}
                      >
                        Dapson Grey
                      </h6>
                      <p
                        className={`${notoSans.className} font-medium text-lg/7 tracking-wide text-white/80`}
                      >
                        Founder - Brighta
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center w-full">
              <Link href="/interviews">
                <Button
                  color="default"
                  radius="full"
                  variant="ghost"
                  className={`${piazzolla.className} px-10 py-6 text-white hover:border-primary hover:text-primary font-bold tracking-normal text-sm/5 md:text-lg/6`}
                >
                  Read all Interviews→
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
