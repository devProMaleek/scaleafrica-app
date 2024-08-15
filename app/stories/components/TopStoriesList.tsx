import React from "react";
import CryptoPaymentImage from "@/public/assets/images/crypto-payments.jpeg";
import StakeholderImage from "@/public/assets/images/stakeholder-image.png";
import CompanyFounder from "@/public/assets/images/company-founder.jpeg";
import AdditionalGrowth from "@/public/assets/images/additional-growth-Image.png";
import TopStory from "./TopStory";


type Props = {
  topStories: {
    id: string;
    title: string;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    metaDescription: string;
    startup: string;
    author: string;
    banner: any;
  }[];
};

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

export default function TopStoriesList({ topStories }: Props) {
  return (
    <>
      <div className="w-full mx-auto pt-3 md:pt-5 pb-5 md:py-8">
        <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 md:grid-cols-3">
          {topStories &&
            topStories?.map((topStory, index) => (
              <TopStory key={index} topStory={topStory} color="white" />
            ))}
        </div>
      </div>
    </>
  );
}
