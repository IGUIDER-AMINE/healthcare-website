import { appleStore, googlePlay } from "@/public";
import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Autoplay, Navigation]);

import "swiper/css";
import "swiper/css/pagination";

const data_brand = [
  {
    id: "logo-1",
    link: "/images/brands/sample-logo-3.svg",
  },
  {
    id: "logo-2",
    link: "/images/brands/sample-logo-1.svg",
  },
  {
    id: "logo-3",
    link: "/images/brands/sample-logo-3.svg",
  },
  {
    id: "logo-4",
    link: "/images/brands/sample-logo-4.svg",
  },
  {
    id: "logo-5",
    link: "/images/brands/sample-logo-5.svg",
  },
  {
    id: "logo-6",
    link: "/images/brands/sample-logo-6.svg",
  },
];

const Banner = () => {
  return (
    <section
      id="banner"
      className="grid relative gap-16 pb-8 bg-cover bg-no-repeat origin-right "
      style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
    >
      <NavBar />
      <div className="container space-y-10 mx-auto px-9">
        <div className="grid gap-4 grid-rows-2 lg:grid-rows-1 grid-flow-col grid-cols-2 md:flex-row">
          <div className="col-span-2 space-y-6 md:space-y-10 text-white flex-1">
            <h1 className="font-titleFont md:text-[50px] lg:text-8xl text-[30px] font-bold">
              The future of health
            </h1>
            <p className="text-lg max-w-[425px]">
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
          <div className="col-span-2">
            <div className="rounded-3xl p-4 bg-white shadow-lg text-center space-y-2 md:space-y-5">
              <h1 className="text-[20px] md:text-4xl text-slate-900 font-medium">
                Visit type and date
              </h1>
              <h2 className="text-gray-400">
                Book your appointment day your life
              </h2>
              <div className="bg-gray-200/80 overflow-auto scrollbar-none rounded-full text-gray-400 flex justify-between px-4 py-2">
                <button className="bg-white text-slate-900 font-medium rounded-full px-4 py-1 ">
                  General
                </button>
                <button className="text-slate-500 font-medium rounded-full px-4 py-1">
                  Dentist
                </button>
                <button className=" text-slate-500 font-medium rounded-full px-4 py-1">
                  Pediatic
                </button>
                <button className="text-slate-500 font-medium rounded-full px-4 py-1">
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
        <div className="h-[100px] max-w-containerSmall mx-auto w-full swiper-container">
          <Swiper
            slidesPerView={6}
            spaceBetween={15}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="swiper-wrapper"
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              400: {
                slidesPerView: 4,
              },
              639: {
                slidesPerView: 6,
              },
              865: {
                slidesPerView: 6,
              },
            }}
            pagination={true}
            modules={[Pagination]}
          >
            {data_brand.map((item) => (
              <SwiperSlide key={item?.id} role="button">
                <div className="swiper-slide active">
                  <Image
                    width={300}
                    height={300}
                    alt={item?.id}
                    src={item?.link}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
