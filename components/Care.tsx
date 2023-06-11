import Image from "next/image";
import React from "react";

const Care = () => {
  return (
    <section className="container overflow-hidden space-y-8 text-slate-900 mx-auto  px-9">
      <div className="flex flex-col place-items-center">
        <h1 className="text-[30px] md:text-5xl text-sm-5xl font-bold font-titleFont">
          We care about you condition
        </h1>
      </div>
      <div className="space-y-2">
        <div className="grid grid-flow-col grid-rows-2 md:grid-rows-1 grid-cols-5 gap-4">
          <div
            style={{ backgroundImage: `url('./images/bgone.jpg')` }}
            className="col-span-5 md:col-span-2 p-4 grid grid-flow-col grid-rows-3 lg:grid-rows-2 lg:grid-cols-3 gap-2 box-border bg-cyan-700 rounded-3xl bg-cover bg-no-repeat"
          >
            <button className="inline-block text-white rounded-full shadow-sm text-1xl font-medium border py-2">
              General
            </button>
            <button className="inline-block text-white rounded-full shadow-sm text-1xl font-medium border py-2">
              Diagnosis
            </button>
            <button className="inline-block text-white rounded-full shadow-sm text-1xl font-medium border py-2">
              Therapy
            </button>
            <button className="inline-block text-white rounded-full shadow-sm text-1xl font-medium border py-2">
              Surgery
            </button>
            <button className="inline-block text-white rounded-full shadow-sm text-1xl font-medium border py-2">
              Health
            </button>
          </div>
          <div
            style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
            className="grid col-span-5 md:col-span-3 p-4 bg-cover bg-no-repeat place-content-center rounded-3xl box-border"
          >
            <h1 className="text-[22px] md:text-3xl text-sm-5xl text-white font-bold font-titleFont">
              #WeCareAboutYou
            </h1>
          </div>
        </div>
        <div className="grid grid-flow-col md:grid-flow-row grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 box-border gap-4">
          <div className="flex flex-col justify-between gap-5 p-10 text-white bg-blue-400 rounded-3xl">
            <div className="text-5xl font-medium">50%</div>
            <p className="text-[14px] text-gray-200">
              Take a discount for a child under 6 years of age, for first
              examination
            </p>
            <button className="font-bold text-slate-900 border bg-gray-50 rounded-full w-full py-2">
              Get discount
            </button>
          </div>
          <div className="flex flex-col justify-between gap-5 p-10 text-white bg-green-400 rounded-3xl">
            <div className="text-5xl font-medium">25%</div>
            <p className="text-[14px] text-gray-200">
              Take a discount for the first visit of an our services
            </p>
            <button className="font-bold text-slate-900 border bg-gray-50 rounded-full w-full py-2">
              Get discount
            </button>
          </div>
          <div className="md:col-span-2 bg-gray-200/50 relative rounded-3xl">
            <div>
              <Image
                alt=""
                src="/images/doctors/doctrorsix-removebgpng.png"
                className="absolute bottom-0 object-cover h-full"
                width={200}
                height={500}
              />
            </div>
            <div className="absolute top-[30%] left-[40%]">
              <q className="font-bold text-slate-900">
                Stand up to the sick as you would have them stand up to you in
                the hour of lilness.
              </q>
              <div className="text-gray-300">Cheyenne Calzoni</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Care;
