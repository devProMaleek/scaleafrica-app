"use client";
import React, { useEffect, useState } from "react";
import { piazzolla } from "../../fonts";
import Story from "@/app/components/Story";
import { Button } from "@nextui-org/react";
import { StaticImageData } from "next/image";

type Props = {
  stories: {
    image: StaticImageData;
    title: string;
    writtenBy: string;
    createdAt: string;
  }[];
};

export default function ListStories({ stories }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window === "undefined") {
      return 9;
    }
    return window.innerWidth <= 768 ? 8 : 9;
  });

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 768 ? 8 : 9);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const totalPages = Math.ceil(stories.length / itemsPerPage);

  const currentItems = stories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <>
      <div className="w-full mx-auto">
        <h4
          className={`${piazzolla.className} text-xl max-w-xl mx-auto text-center tracking-normal text-white md:text-[32px]/[45px] font-medium capitalize`}
        >
          Discover all our stories and learn from them
        </h4>
      </div>
      <div className="">
        <div className="grid grid-cols-2 gap-y-4 md:gap-y-0 md:grid-cols-3">
          {currentItems.map((story, index) => (
            <Story key={index} story={story} color="primary" />
          ))}
        </div>
      </div>
      <div className="px-3 md:px-5">
        <div className="flex items-center justify-between">
          <div className="">
            <p
              className={`${piazzolla.className} text-white/70 text-lg md:text-xl font-normal`}
            >
              Page {currentPage}/{totalPages}
            </p>
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="">
              <Button
                color="default"
                radius="full"
                variant="ghost"
                onClick={prevPage}
                className={`${piazzolla.className} ${
                  currentPage === 1 ? "hidden" : "block"
                } text-white hover:text-primary-700 px-4 md:px-6`}
              >
                ← Previous
              </Button>
            </div>
            <div className="">
              <Button
                color="default"
                radius="full"
                variant="ghost"
                onClick={nextPage}
                className={`${piazzolla.className} ${
                  currentPage === totalPages ? "hidden" : "block"
                }  text-white hover:text-primary-700 px-6 md:px-8`}
              >
                Next →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
