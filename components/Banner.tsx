import { appleStore, googlePlay } from "@/public";
import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";

const Banner = () => {
  return (
    <section
      id="banner"
      className="grid min-h-[600px] relative bg-cover bg-no-repeat origin-right "
      style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
    >
      <NavBar />
      <div className="container mx-auto px-9">
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
            <div className="rounded-3xl max-w-[75%] mx-auto bg-white overflow-hidden shadow-lg p-6 h-full text-center space-y-5">
              <h1 className="text-4xl text-slate-900 font-medium">
                Visit type and date
              </h1>
              <h2 className="text-gray-400">
                Book your appointment day your life
              </h2>
              <div className="bg-gray-200 rounded-full text-gray-400 flex justify-between px-4 py-2">
                <button className="bg-white text-slate-900 font-medium rounded-full px-4 py-1 ">
                  General
                </button>
                <button className="bg-white text-slate-900 font-medium rounded-full px-4 py-1">
                  Dentist
                </button>
                <button className="bg-white text-slate-900 font-medium rounded-full px-4 py-1">
                  Pediatic
                </button>
                <button className="bg-white text-slate-900 font-medium rounded-full px-4 py-1">
                  Heart
                </button>
              </div>
              <div className="text-gray-400 space-y-2">
                <div className="flex items-center justify-center rounded-full border px-4 py-2">
                  <label className="text-gray-300 mr-2">type</label>
                  <select className="w-full hover:border-0">
                    <option>general consultation</option>
                  </select>
                </div>
                <div className="flex items-center justify-center rounded-full border px-4 py-2">
                  <label className="text-gray-300 mr-2">time</label>
                  <select className="w-full hover:border-0">
                    <option>6.30 pm</option>
                  </select>
                </div>
                <div className="flex items-center justify-center rounded-full border px-4 py-2">
                  <label className="text-gray-300 mr-2">date</label>
                  <select className="w-full hover:border-0">
                    <option>Monday, July 5th</option>
                  </select>
                </div>
              </div>
              <button className="rounded-full text-1xl bg-blue-600/90 text-white w-full text-center px-4 py-2">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
