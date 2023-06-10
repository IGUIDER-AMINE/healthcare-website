import React from "react";

const Care = () => {
  return (
    <section className="container space-y-8 text-slate-900 mx-auto  px-9">
      <div className="flex flex-col place-items-center">
        <h1 className="text-5xl text-sm-5xl font-bold font-titleFont">
          We care about you condition
        </h1>
      </div>
      <div>
        <div className="flex h-[120px] gap-2">
          <div
            style={{ backgroundImage: `url('./images/bannerthree.jpg')` }}
            className="w-[40%] px-2 space-y-2 space-x-2 flex-warp box-border bg-cyan-700 rounded-lg bg-cover bg-no-repeat"
          >
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              General
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              General
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              General
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              General
            </button>
            <button className="inline-block text-white h-12 rounded-full shadow-sm text-1xl font-medium border px-8 py-3">
              General
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
      </div>
    </section>
  );
};

export default Care;
