import React from "react";

type Props = {
  backgroundColor: "white" | "primary";
};

export default function FooterDescription({ backgroundColor }: Props) {
  return (
    <>
      <div className="w-full md:max-w-xs lg:max-w-sm">
        <p
          className={`${
            backgroundColor === "white" ? "text-primary-700" : "text-white"
          } text-sm/6 lg:text-base font-normal`}
        >
          Shaping decisions and driving insights for budding and active players
          in the African tech ecosystem.
        </p>
      </div>
    </>
  );
}
