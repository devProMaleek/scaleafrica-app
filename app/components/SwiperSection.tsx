import React from "react";
import CardList from "./CardList";

// Define the card data
const cards = [
  {
    id: 1,
    title: "Regulatory Guidelines for Start-up",
    companyName: "Founder/Authors name",
    position: "CEO - ShadesLa",
    image: "/assets/images/regulations.jpg",
  },
  {
    id: 2,
    title: "Building to Solve Problems in the African Market",
    companyName: "Founder/Authors name",
    position: "Co-founder - BitMarket",
    image: "/assets/images/problem-solving.jpg",
  },
  {
    id: 3,
    title: "Why African Startups fail in their first 5 years",
    companyName: "Founder/Authors name",
    position: "CEO - ShadesLa",
    image: "/assets/images/startup-failure.jpg",
  },
  {
    id: 4,
    title: "Exploring the Legal Landscape: Startup Legal Essentials",
    companyName: "Founder/Authors name",
    position: "CEO - ShadesLa",
    image: "/assets/images/legal.jpg",
  },
  {
    id: 5,
    title: "10 Essential Tips for Pitching to Investor",
    companyName: "Founder/Authors name",
    position: "CEO - ShadesLa",
    image: "/assets/images/card-image-1.png",
  },
  {
    id: 6,
    title: "HealthHub: A Healthcare Tech Startup's Struggles in Africa",
    companyName: "Founder/Authors name",
    position: "Co-founder - BitMarket",
    image: "/assets/images/card-image-2.png",
  },
];

/**
 * SwiperSection component.
 * This component returns a section with a list of cards.
 * @returns {JSX.Element} The JSX for the swiper section.
 */
export default function SwiperSection() {
  return (
    <section className="bg-white pt-4 lg:pt-10">
      <CardList cards={cards} />
    </section>
  );
}
