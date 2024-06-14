import React from "react";
import Card from "./Card";

type CardListProps = {
  cards: {
    id: number;
    title: string;
    companyName: string;
    position: string;
    image: string;
  }[];
};

export default function CardList({ cards }: CardListProps) {
  return (
    <div>
      <div className="p-4 overflow-x-auto scrollbar-hide md:p-6">
        <div className="flex items-center space-x-6 flex-nowrap">
          {cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
