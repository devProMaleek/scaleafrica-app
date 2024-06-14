import React from "react";

type CardProps = {
  card: {
    id: number;
    title: string;
    companyName: string;
    position: string;
    image: string;
  };
};

export default function Card({ card }: CardProps) {
  const { id, image, title } = card;

  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "",
        backgroundPosition: "center",
      }}
      className="flex flex-row md:flex-col min-w-72 min-h-80 lg:min-w-[340px] lg:min-h-[370px] max-w-md bg-center bg-gray-600 bg-cover p-4 bg-no-repeat bg-blend-multiply rounded-xl shadow"
    >
      <div
        className={`${
          id % 2 === 0
            ? "content-start md:content-end"
            : "justify-end md:justify-end"
        }`}
      >
        <h5 className="text-base font-semibold leading-6 tracking-tight text-white/85 md:mb-4 md:text-2xl">
          {title}
        </h5>
      </div>
    </div>
  );
}
