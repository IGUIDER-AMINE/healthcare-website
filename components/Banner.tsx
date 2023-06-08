import { appleStore, googlePlay } from "@/public";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import React from "react";
import NavBar from "./NavBar";
import "swiper/css";
import "swiper/css/pagination";

const data_brand = [
  // {
  //   id: "logo-1",
  //   link: "/public/images//appStore.png",
  // },
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
      className="grid relative gap-20 pb-8 bg-cover bg-no-repeat origin-right "
      style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
    >
      <NavBar />
      <div className="container grid gap-12 mx-auto px-9">
        <div className="flex  flex-col md:flex-row">
          <div className="space-y-10 text-white flex-1">
            <h1 className="text-[30px] md:text-8xl font-bold">
              The future <br /> of health
            </h1>
            <p className="text-lg max-w-full">
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
            <div className="rounded-3xl max-w-[80%] mx-auto bg-white overflow-hidden shadow-lg p-6 h-full text-center space-y-5">
              <h1 className="text-4xl text-slate-900 font-medium">
                Visit type and date
              </h1>
              <h2 className="text-gray-400">
                Book your appointment day your life
              </h2>
              <div className="bg-gray-200/80 rounded-full text-gray-400 flex justify-between px-4 py-2">
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
        {/* ----------------- */}
        <div>
          <div className="h-[100px] w-full swiper-container">
            <Swiper
              direction={"horizontal"}
              loop={true}
              spaceBetween={15}
              slidesPerView={6}
              simulateTouch={false}
              autoplay={{
                // enabled: true,
                delay: 1,
                disableOnInteraction: false,
              }}
              centerInsufficientSlides={true}
              speed={2000}
              className="swiper-wrapper w-full"
            >
              {data_brand.map((item) => (
                <SwiperSlide key={item?.id} role="button">
                  <div
                    className="swiper-slide active"
                    style={{ minWidth: 100 }}
                  >
                    <Image alt={item?.id} src={item?.link} fill />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* -------------- */}
      </div>
    </section>
  );
};

export default Banner;
