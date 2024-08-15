import { Button } from "@nextui-org/react";
import React from "react";

type Props = {
  message: string;
};

export default function ErrorMessage({ message }: Props) {
  return (
    <>
      <section className="min-h-screen w-full bg-white">
        <div className="flex flex-col pt-16 md:pt-24 lg:pt-32 items-center justify-center h-full w-full space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">
              Oops! Something went wrong.
            </h1>
            <p className="text-xl font-semibold text-gray-600">{message}</p>
          </div>
          <Button
            onPress={() => window.location.reload()}
            color="primary"
            className="px-10"
          >
            Try Again
          </Button>
        </div>
      </section>
    </>
  );
}
