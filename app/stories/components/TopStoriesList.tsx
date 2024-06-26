import React from "react";
import CryptoPaymentImage from "@/public/assets/images/crypto-payments.jpeg";
import StakeholderImage from "@/public/assets/images/stakeholder-image.png";
import CompanyFounder from "@/public/assets/images/company-founder.jpeg";
import AdditionalGrowth from "@/public/assets/images/additional-growth-Image.png";
import TopStory from "./TopStory";
import { piazzolla } from "@/app/fonts";

type Props = {};

const stories = [
  {
    image: CryptoPaymentImage,
    title: "A web3 crypto payments company that never peaked",
    startupCompany: "LazerPay",
  },
  {
    image: StakeholderImage,
    title: "The stakeholders who want a restructuring of the company.",
    startupCompany: "Bundle Africa",
  },
  {
    image: AdditionalGrowth,
    title: "Inability to secure additional growth funding from investors.",
    startupCompany: "Zazuu",
  },
];

export default function TopStoriesList({}: Props) {
  return (
    <>
      <div className="w-full mx-auto scrollbar-hide">
        <h4 className={`${piazzolla.className} font-medium mb-2 text-lg md:text-2xl lg:text-3xl text-left md:text-center text-primary-800`}>Top Stories</h4>
        <div className="flex items-center space-x-3 overflow-auto md:space-x-6 lg:space-x-8 flex-nowrap">
          {stories.map((story, index) => (
            <TopStory key={index} story={story} color="white" />
          ))}
        </div>
      </div>
    </>
  );
}
