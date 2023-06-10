import React from "react";

const Care = () => {
  return (
    <section className="container space-y-8 text-slate-900 mx-auto  px-9">
      <div className="flex flex-col place-items-center">
        <h1 className="text-5xl text-sm-5xl font-bold font-titleFont">
          We care about you condition
        </h1>
      </div>
      <div className="space-y-2">
        <div className="flex h-[120px] gap-4">
          <div
            style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
            className="w-[40%] px-2 space-y-2 space-x-2 flex-warp box-border bg-cyan-700 rounded-lg bg-cover bg-no-repeat"
          >
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              General
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              Surgery
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              Diagnosis
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              Therapy
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              Health
            </button>
          </div>
          <div
            style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
            className="grid w-[60%] bg-cover bg-no-repeat place-content-center rounded-lg box-border"
          >
            <h1 className="text-3xl text-sm-5xl text-white font-bold font-titleFont">
              #WeCareAboutYou
            </h1>
          </div>
        </div>
        <div className="flex min-h-[130px] justify-between gap-4">
          <div className="flex flex-col justify-between gap-5 p-10 text-white w-[25%] bg-blue-400 rounded-3xl">
            <div className="text-5xl font-medium">50%</div>
            <p className="text-[14px] text-gray-200">
              Take a discount for a child under 6 years of age, for first
              examination
            </p>
            <button className="font-bold text-slate-900 border bg-gray-50 rounded-full w-full py-2">
              Get discount
            </button>
          </div>
          <div className="flex flex-col justify-between gap-5 p-10 text-white w-[25%] bg-green-400 rounded-3xl">
            <div className="text-5xl font-medium">25%</div>
            <p className="text-[14px] text-gray-200">
              Take a discount for the first visit of an our services
            </p>
            <button className="font-bold text-slate-900 border bg-gray-50 rounded-full w-full py-2">
              Get discount
            </button>
          </div>
          <div className="w-[50%] bg-red-50 rounded-3xl">3</div>
        </div>
      </div>
    </section>
  );
};

export default Care;
