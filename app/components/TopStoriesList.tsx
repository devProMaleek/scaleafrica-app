import React from "react";
import CryptoPaymentImage from "@/public/assets/images/crypto-payments.jpeg";
import StakeholderImage from "@/public/assets/images/stakeholder-image.png";
import CompanyFounder from "@/public/assets/images/company-founder.jpeg";
import AdditionalGrowth from "@/public/assets/images/additional-growth-Image.png";
import TopStory from "./TopStory";

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
    image: CompanyFounder,
    title: "Founder pays himself a monthly salary of $15,000",
    startupCompany: "Payday",
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
      <div className="scrollbar-hide">
        <div className="flex items-center overflow-auto flex-nowrap">
          {stories.map((story, index) => (
            <TopStory key={index} story={story} color="primary" />
          ))}
        </div>
      </div>
    </>
  );
}
