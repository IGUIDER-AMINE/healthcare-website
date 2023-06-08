import { banner, diagnostic } from "@/public";
import Image from "next/image";
import React from "react";

const OurFeatures = () => {
  return (
    <section
      id="OurFeatures"
      className="container space-y-6 text-slate-900 mx-auto px-9"
    >
      <h1 className="text-5xl font-bold font-titleFont">Our Features</h1>
      <div className="flex justify-between items-center">
        <p className="text-gray-400 max-w-[50%]">
          We study lastest scientific achivements ins diagnosing health and
          implemnthing them at work.
        </p>
        <button className="rounded-full text-white text-1xl hover:bg-slate-900 font-medium bg-blue-600/90 px-8 py-3">
          Meet our experts
        </button>
      </div>
      <div className="flex justify-between">
        <div className="border gap-2 flex flex-col items-center max-w-[30%] border-gray-200 shadow bg-white/30 p-4 box-border rounded-xl">
          <Image src={diagnostic} alt="diagnostic" width={200} height={300} />
          <h2 className="text-[22px] font-bold font-titleFont">
            Diagnostic Examination
          </h2>
          <p className="text-center">
            Depending on the specific health concern being evaluated
          </p>
        </div>
        <div className="border gap-2 flex flex-col items-center max-w-[30%] border-gray-200 shadow bg-white/30 p-4 box-border rounded-xl">
          <Image src={diagnostic} alt="diagnostic" width={200} height={300} />
          <h2 className="text-[22px] font-bold font-titleFont">
            Diagnostic Examination
          </h2>
          <p className="text-center">
            Depending on the specific health concern being evaluated
          </p>
        </div>
        <div className="border gap-2 flex flex-col items-center max-w-[30%] border-gray-200 shadow bg-white/30 p-4 box-border rounded-xl">
          <Image src={diagnostic} alt="diagnostic" width={200} height={300} />
          <h2 className="text-[22px] font-bold font-titleFont">
            Diagnostic Examination
          </h2>
          <p className="text-center">
            Depending on the specific health concern being evaluated
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
