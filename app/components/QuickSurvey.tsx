"use client";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { piazzolla, roboto } from "../fonts";
import { Button } from "@nextui-org/react";

type Props = {};

export default function QuickSurvey({}: Props) {
  const [userAnswer, setUserAnswer] = useState<string>("");

  function handleUserAnswer(answer: string) {
    setUserAnswer(answer);
  }

  return (
    <>
      <section className="bg-white">
        <div
          className={`${piazzolla.className} px-4 py-6 md:px-10 lg:px-24 md:py-16 lg:py-20`}
        >
          <div className="">
            <span
              className={`${roboto.className} font-medium md:text-lg/4 tracking-wide uppercase text-secondary`}
            >
              quick survey
            </span>
            <span className="">💬</span>
            <div className="flex items-center justify-between mt-2">
              <div className="w-full md:max-w-lg lg:max-w-2xl">
                <p className="font-bold tracking-wide text-primary text-2xl/7 lg:text-3xl/10 md:font-semibold">
                  What do you think is the number one cause of failure for
                  African
                  <span className="text-secondary">*</span>startups?
                </p>
              </div>
              <div className="hidden md:block">
                <Button
                  color="primary"
                  radius="full"
                  variant="ghost"
                  className={`${piazzolla.className} px-6 py-4 lg:px-10 lg:py-6 font-bold tracking-normal text-sm/5`}
                >
                  Submit Answers
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 mb-6 md:mt-12 lg:mt-16">
            <div className="flex flex-col items-center w-full md:flex-row">
              <div
                onClick={() => handleUserAnswer("limitedAccess")}
                className="border-t border-l md:rounded-tl-md md:rounded-tr-none rounded-t-md border-r border-primary-200 h-[150px] md:h-48 lg:h-52 w-full py-4 px-5 md:py-8 lg:p-10 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="max-w-xl space-y-2 lg:space-y-4">
                    <h5 className="text-xl font-bold tracking-wide lg:text-2xl text-primary-600">
                      Limited Access to Funding
                    </h5>
                    <p
                      className={`${piazzolla.className} lg:text-base text-sm max-w-72 pr-4 md:pr-0 lg:max-w-sm text-primary-500/80 font-normal tracking-normal`}
                    >
                      African startups face the formidable hurdle of restricted
                      access to funding, hindering their growth and
                      sustainability.
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full lg:w-10 lg:h-10 border-primary-200">
                    {userAnswer === "limitedAccess" && (
                      <FaCheck className="w-5 h-5 text-primary-600 lg:w-7 lg:h-7 " />
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleUserAnswer("limitedEcosystem")}
                className="border-t border-r border-l md:border-l-0 md:rounded-tr-md border-primary-200 h-[150px] md:h-48 lg:h-52 w-full py-4 px-5 md:py-8 lg:p-10 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="max-w-xl space-y-2 lg:space-y-4">
                    <h5 className="text-xl font-bold tracking-wide lg:text-2xl text-primary-600">
                      Limited Ecosystem Collaboration
                    </h5>
                    <p
                      className={`${piazzolla.className} lg:text-base text-sm max-w-72 pr-4 md:pr-0 lg:max-w-sm text-primary-500/80 font-normal tracking-normal`}
                    >
                      African startups face the formidable hurdle of restricted
                      access to funding, hindering their growth and
                      sustainability
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full lg:w-10 lg:h-10 border-primary-200">
                    {userAnswer === "limitedEcosystem" && (
                      <FaCheck className="w-5 h-5 text-primary-600 lg:w-7 lg:h-7 " />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center w-full md:flex-row">
              <div
                onClick={() => handleUserAnswer("regulatoryChallenges")}
                className="border-t border-l border-r border-b-0 md:border-b md:rounded-bl-md border-primary-200 h-[150px] md:h-48 lg:h-52 w-full py-4 px-5 md:py-8 lg:p-10 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="max-w-xl space-y-2 lg:space-y-4">
                    <h5 className="text-xl font-bold tracking-wide lg:text-2xl text-primary-600">
                      Regulatory Challenges
                    </h5>
                    <p
                      className={`${piazzolla.className} lg:text-base text-sm max-w-72 pr-4 md:pr-0 lg:max-w-sm text-primary-500/80 font-normal tracking-normal`}
                    >
                      Regulatory hurdles poses a substantial threat to the
                      success of African startups, with legal constraints
                      becoming a significantly problematic to their operations
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full lg:w-10 lg:h-10 border-primary-200">
                    {userAnswer === "regulatoryChallenges" && (
                      <FaCheck className="w-5 h-5 text-primary-600 lg:w-7 lg:h-7 " />
                    )}
                  </div>
                </div>
              </div>
              <div
                onClick={() => handleUserAnswer("marketUnderstanding")}
                className="border-t border-r border-l md:border-l-0 border-b md:rounded-br-md md:rounded-bl-none rounded-b-md border-primary-200 h-[150px] md:h-48 lg:h-52 w-full py-4 px-5 md:py-8 lg:p-10 cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="max-w-xl space-y-2 lg:space-y-4">
                    <h5 className="text-xl font-bold tracking-wide lg:text-2xl text-primary-600">
                      Lack of Market Understanding
                    </h5>
                    <p
                      className={`${piazzolla.className} lg:text-base text-sm max-w-72 pr-4 md:pr-0 lg:max-w-sm text-primary-500/80 font-normal tracking-normal`}
                    >
                      The absence of robust mentorship networks and adequate
                      support structures leaves African startups vulnerable
                    </p>
                  </div>
                  <div className="flex items-center justify-center w-8 h-8 border rounded-full lg:w-10 lg:h-10 border-primary-200">
                    {userAnswer === "marketUnderstanding" && (
                      <FaCheck className="w-5 h-5 text-primary-600 lg:w-7 lg:h-7 " />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4 md:hidden md:mt-0">
              <Button
                color="primary"
                radius="full"
                variant="ghost"
                className={`${piazzolla.className} md:px-10 md:py-6 font-bold tracking-normal text-sm/5`}
              >
                Submit Answers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
