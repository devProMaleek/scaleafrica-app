"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error);
  }, [error]);

  return (
    <main>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-10 px-4 mx-auto max-w-screen-xl lg:py-20 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              {error.name}
            </h1>
            <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Something went wrong!
            </p>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              {error.message}
            </p>
            <button onClick={() => reset()} className="inline-flex text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4">
              Try again
            </button>
          </div>
        </div>
      </section>
      {/* <h1>Something wrong!</h1>
      <button ></button> */}
    </main>
  );
}
