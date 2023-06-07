import { appleStore, googlePlay } from "@/public";
import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <section
      id="banner"
      className="grid min-h-[600px] relative bg-cover"
      style={{ backgroundImage: `url('./images/bannertwo.jpg')` }}
    >
      <NavBar />
      <div className="container mx-auto z-10">
        <div className="flex">
          <div className="space-y-10 text-white flex-1">
            <h1 className="text-8xl font-bold">
              The future <br /> of health
            </h1>
            <p className="text-lg">
              Tremendous potential for advancements in personalized medcine,
              digital health, preventive care, integrated healthcare, and
              improved patient outocomes.
            </p>
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
          <div className="flex-1">
            <div className="max-w-sm rounded bg-white overflow-hidden shadow-lg">
              s
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
