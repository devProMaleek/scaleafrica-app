"use client";
import React, { useState } from "react";
import { notoSans, piazzolla, robotoSerif } from "@/app/fonts";
import { Button } from "@nextui-org/react";
import ShareStory from "@/app/components/ShareStory";

type Props = {};

const interviews = [
  {
    id: 1,
    nam: "Dev Pro",
    role: "CEO - Foundit",
    img: "image3",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 2,
    nam: "Abdul Maleek",
    role: "CEO - Foundit",
    img: "image1",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 3,
    nam: "Olubitoye",
    role: "CEO - Foundit",
    img: "image4",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 4,
    nam: "Olubitoye",
    role: "CEO - Foundit",
    img: "image1",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 5,
    nam: "Olubitoye Emmanuel",
    role: "CEO - Foundit",
    img: "image3",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 6,
    nam: "Samuel Martin",
    role: "CEO - Foundit",
    img: "image4",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 7,
    nam: "Olubitoye",
    role: "CEO - Foundit",
    img: "image1",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 8,
    nam: "Olubitoye Emmanuel",
    role: "CEO - Foundit",
    img: "image3",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 9,
    nam: "Samuel Martin",
    role: "CEO - Foundit",
    img: "image4",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
];

const MoreInterviews = () => {
  return (
    <section className="w-full mx-auto bg-primary">
      <div className="px-5 py-10 md:px-7 lg:px-12 lg:py-20">
        <div className="space-y-8 lg:space-y-12">
          <div className="flex flex-col items-start justify-start sm:flex-row sm:justify-between sm:items-center">
            <p
              className={`${piazzolla.className} font-medium uppercase text-lg md:text-2xl text-white`}
            >
              More Interviews
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {interviews.map((interview) => {
              const { id, nam, role, img, story } = interview;
              return (
                <div
                  key={id}
                  className={`bg-interview-${img} bg-cover bg-center h-80 md:h-[300px] lg:h-[400px] rounded`}
                >
                  <div className="bg-gradient-to-b from-[#41366700] to-[#413569] w-full h-full relative">
                    <div className="flex flex-col items-center justify-end w-full h-full mb-5 space-y-5">
                      <div className="max-w-md text-center">
                        <p
                          className={`${robotoSerif.className} text-lg/6 tracking-wide font-normal`}
                        >
                          {story}
                        </p>
                      </div>
                      <div className="pb-5 text-center">
                        <h6
                          className={`${robotoSerif.className} text-[26px]/8 font-semibold capitalize`}
                        >
                          {nam}
                        </h6>
                        <p
                          className={`${notoSans.className} font-medium text-lg/7 tracking-wide text-white/80`}
                        >
                          {role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center w-full">
            <Button
              color="default"
              radius="full"
              variant="ghost"
              className={`${piazzolla.className} px-10 py-6 text-white hover:border-primary hover:text-primary font-bold tracking-normal text-sm/5 md:text-lg/6`}
            >
              See More→
            </Button>
          </div>

          <div className="">
            <ShareStory backgroundColor="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInterviews;
