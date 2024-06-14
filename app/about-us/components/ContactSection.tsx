import React from "react";
import { piazzolla } from "@/app/fonts";

type Props = {};

export default function ContactSection({}: Props) {
  return (
    <>
      <section id="contact-us" className="bg-white">
        <div className="max-w-screen-md px-4 py-8 mx-auto lg:pb-16 lg:pt-10">
          <h2
            className={`${piazzolla.className} mb-4 text-4xl font-bold tracking-normal text-center text-primary-700 dark:text-white`}
          >
            Send Us a Message
          </h2>
          <p
            className={`${piazzolla.className} mb-8 font-light text-center text-gray-600 lg:mb-12 sm:text-xl`}
          >
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className={`${piazzolla.className} block mb-2 text-sm font-medium text-gray-900 md:text-base dark:text-gray-300`}
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className={`${piazzolla.className} shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                placeholder="johndoe@gmail.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className={`${piazzolla.className} block mb-2 text-sm font-medium text-gray-900 md:text-base dark:text-gray-300`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className={`${piazzolla.className} block w-full p-3 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light`}
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className={`${piazzolla.className} block mb-2 text-sm font-medium text-gray-900 md:text-base dark:text-gray-400`}
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className={`${piazzolla.className} block p-2.5 w-full text-sm md:text-base text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className={`${piazzolla.className} px-6 md:px-10 lg:px-14 py-3 text-sm md:text-base font-medium text-center text-white rounded-full bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
