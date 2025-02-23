import React from "react";
import Image from "next/image";
import Navbar from "./ui/navbar";
import { DataStrings } from "@/utils/constants";

export default function Welcome() {
  return (
    <div className="relative isolate overflow-hidden pb-24 pt-10 sm:pb-32 sm:pt-16"
      style={{
        backgroundImage: 'url(/images/backgrounds/background1.jpeg)',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
      }}
    >
      {/* Background Image */}
      {/* <div className="absolute inset-0 -z-10">
        <Image
          src="/images/backgrounds/background1.jpeg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          quality={100}
        />
      </div> */}

      {/* Navbar */}
      <Navbar />

      {/* Gradients */}
      <div className="absolute inset-0 -z-10 h-full w-full object-cover object-top md:object-top bgimg-2"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-transparent to-black h-full w-full pointer-events-none"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black h-full w-full pointer-events-none"></div>

      {/* Glowy orbs */}
      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="shaders lg-shaders aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="shaders lg-shaders aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      {/* Content */}
      <div className="mx-auto min-h-[30vh] lg:min-h-[40vh] max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-[100rem] md:mt-36 lg:mr-[30rem]  lg:mt-56">
          <h2 className="text-left text-4xl font-Oi tracking-tight text-red-100 sm:text-6xl">
            Welcome!
          </h2>
          <p className="font-lemon text-ellipsist-left mt-8 text-lg leading-8 text-gray-300">
            {DataStrings.welcomeSentence}
          </p>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold leading-7 text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <a
              className="font-lemon text-white text hover:text-[#E84545] hover:scale-125 transition-all duration-300 mt-4 mx-3"
              href="/contact"
            >
              Contact me
              <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
