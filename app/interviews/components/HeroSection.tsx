import React from "react";
import { piazzolla, robotoSerif, notoSans } from "@/app/fonts";
import Card from "./Card";
type Props = {};

const interviews = [
  {
    id: 1,
    nam: "Ajao AL Ameen",
    role: "Founder",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 2,
    nam: "Olu Ibitoye",
    role: "Founder",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
  {
    id: 3,
    nam: "Ajao AL Ameen",
    role: "CEO Upwork",
    story: "“Starting a company with my wife almost ruined my marriage”",
  },
];

const HeroSection = (props: Props) => {
  return (
    <div className="px-5 pt-4 pb-6 bg-white md:px-7 md:pb-8 lg:pb-10 lg:px-12">
      <div className="flex flex-col items-center justify-center my-10 md:mt-10 md:mb-16">
        <h3
          className={` ${piazzolla.className} text-4xl md:text-5xl text-center lg:text-[54px] font-medium text-[#413667]`}
        >
          Top Interviews With Founders
        </h3>
        <p
          className={` ${piazzolla.className} text-center text-lg text-[#413667CC] font-medium w-full sm:w-4/5 md:1/2 sm:text-2xl leading-[30px]`}
        >
          Read about the inspiration behind the vision
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {interviews.map((interview) => {
          return <Card key={interview.id} value={interview} />;
        })}
      </div>
    </div>
  );
};

export default HeroSection;
