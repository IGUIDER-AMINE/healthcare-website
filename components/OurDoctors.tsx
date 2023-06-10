import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { doctorone, phoneImg, star } from "@/public";
import { doctors_info } from "@/util/data";

const OurDoctors = () => {
  const [option, setOption] = useState<number>(0);
  const styleOne =
    "rounded-full shadow-sm text-white text-1xl font-medium bg-blue-600/90 px-8 py-3";
  const styleTwo =
    "rounded-full shadow-sm text-1xl font-medium border px-8 py-3";

  return (
    <section className="container mx-auto text-slate-900 px-9">
      <div className="flex flex-col gap-6 place-items-center">
        <h1 className="text-5xl font-bold font-titleFont">
          Our dedicated doctors
        </h1>
        <div className="space-x-4">
          <button
            onClick={() => setOption(0)}
            className={option == 0 ? styleOne : styleTwo}
          >
            General
          </button>
          <button
            onClick={() => setOption(1)}
            className={option == 1 ? styleOne : styleTwo}
          >
            Dentist
          </button>
          <button
            onClick={() => setOption(2)}
            className={option == 2 ? styleOne : styleTwo}
          >
            Pediatric
          </button>
          <button
            onClick={() => setOption(3)}
            className={option == 3 ? styleOne : styleTwo}
          >
            Heart
          </button>
        </div>
        <div className="grid max-w-containerSmall min-w-[1024px]">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="swiper-wrapper pt-5"
            breakpoints={{
              0: {
                slidesPerView: 4,
              },
              400: {
                slidesPerView: 4,
              },
              639: {
                slidesPerView: 4,
              },
              865: {
                slidesPerView: 4,
              },
            }}
          >
            {doctors_info?.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="min-h-[300px] space-y-2">
                    <div className="bg-danger">
                      <Image
                        alt="doctor"
                        src={item?.image}
                        height={200}
                        width={200}
                        className="object-cover w-full rounded-t-lg"
                      />
                    </div>
                    <div>
                      <div className="text-slate-900 font-medium">
                        dr. {item?.name}
                      </div>
                      <div className="flex justify-between">
                        <div className="flex gap-2">
                          <Image
                            alt="doctor"
                            src={star}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          <span>{item?.star}</span>
                        </div>
                        <div className="flex gap-2">
                          <Image
                            alt="doctor"
                            src={phoneImg}
                            width={16}
                            height={16}
                            className="object-contain"
                          />
                          <span>+{item?.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurDoctors;
