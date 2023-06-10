import { appleStore, googlePlay, ourApp } from "@/public";
import Image from "next/image";
import React from "react";

const OurApp = () => {
  return (
    <section id="ourApp" className="container mx-auto px-9">
      <div className="bg-cyan-500 flex rounded-3xl h-[300px]">
        <div className="flex-1 pl-24 grid space-y-5 place-content-center justify-start flex-col">
          <h1 className="text-5xl text-white font-titleFont font-bold">
            Trust us, it will all <br /> look much easier
          </h1>
          <div className="flex gap-5">
            <div>
              <Image
                src={appleStore}
                alt="out-app"
                className="object-cover"
                width={145}
                height={100}
              />
            </div>
            <div>
              <Image
                src={googlePlay}
                alt="out-app"
                className="object-cover"
                width={145}
                height={50}
              />
            </div>
          </div>
        </div>
        <div className="flex-1 grid place-content-center relative">
          <Image
            src={ourApp}
            alt="out-app"
            className="object-contain h-full absolute bottom-0 right-[-10px]"
            width={400}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default OurApp;
