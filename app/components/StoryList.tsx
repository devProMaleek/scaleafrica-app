import React from "react";
import CryptoStoryImage from "@/public/assets/images/crypto-payment.jpg";
import CBNRegulationImage from "@/public/assets/images/cbn-regulations.jpeg";
import DeliveryImage from "@/public/assets/images/delivery.jpeg";
import Story from "./Story";

type Props = {};

const stories = [
  {
    image: CryptoStoryImage,
    title: "A web3 crypto payments company that never peaked",
    writtenBy: "John Doe",
    createdAt: "6 hours ago",
  },
  {
    image: CBNRegulationImage,
    title: "Escaping the challenging shackles of CBN regulations",
    writtenBy: "John Doe",
    createdAt: "6 hours ago",
  },
  {
    image: DeliveryImage,
    title: "Last mile delivery is not for everyone",
    writtenBy: "John Doe",
    createdAt: "6 hours ago",
  },
  {
    image: DeliveryImage,
    title: "Last mile delivery is not for everyone",
    writtenBy: "John Doe",
    createdAt: "6 hours ago",
  },
];

export default function StoryList({}: Props) {
  return (
    <>
      <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 lg:grid-cols-3">
        {stories.map((story, index) => (
          <Story key={index} story={story} color="white" />
        ))}
      </div>
    </>
  );
}
