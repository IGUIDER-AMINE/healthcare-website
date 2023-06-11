import { consultaionImg, diagnostic, opthalmologyImg } from "@/public";
import Image from "next/image";
import React from "react";

const OurFeatures = () => {
  return (
    <section
      id="OurFeatures"
      className="container space-y-4 text-slate-900 mx-auto px-9"
    >
      <h1 className="text-[30px] md:text-5xl font-bold font-titleFont">
        Our Features
      </h1>
      <div className="grid grid-flow-col gap-1 grid-rows-2 md:grid-rows-1 items-center">
        <p className="text-gray-400 lg:max-w-[50%]">
          We study lastest scientific achivements ins diagnosing health and
          implemnthing them at work.
        </p>
        <button className="rounded-full text-white text-1xl hover:bg-slate-900 font-medium bg-blue-600/90 px-8 py-3">
          Meet our experts
        </button>
      </div>
      <div className="grid grid-rows-3 md:grid-rows-1 gap-3 grid-flow-col justify-between">
        <div className="border gap-2 flex flex-col items-center border-gray-200 shadow bg-white/30 p-4 box-border rounded-xl">
          <Image
            src={diagnostic}
            alt="Diagnostic Examination"
            className="object-scale-down h-full"
            width={100}
            height={200}
          />
          <h2 className="md:text-[22px] font-bold font-titleFont">
            Diagnostic Examination
          </h2>
          <p className="text-center">
            Depending on the specific health concern being evaluated.
          </p>
        </div>
        <div className="border gap-2 flex flex-col items-center border-gray-200 shadow bg-white/30 p-4 box-border rounded-xl">
          <Image
            src={opthalmologyImg}
            alt="Children's Opthalmology"
            className="object-scale-down h-full"
            width={100}
            height={200}
          />
          <h2 className="md:text-[22px] font-bold font-titleFont">
            Children&apos;s Opthalmology
          </h2>
          <p className="text-center">
            Focuses on the diagnosis, treatment, and vision problems in
            children.
          </p>
        </div>
        <div className="border gap-2 flex flex-col items-center border-gray-200 shadow bg-white/30 p-4 box-border rounded-xl">
          <Image
            src={consultaionImg}
            alt="Consultation"
            className="object-scale-down h-full"
            width={100}
            height={200}
          />
          <h2 className="md:text-[22px] font-bold font-titleFont">
            Consultation
          </h2>
          <p className="text-center">
            In a consultation, the healthcare provider assesses the person
            health and creates a treatment plan?
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
