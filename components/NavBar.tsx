import React from "react";

const NavBar = () => {
  return (
    <section className="w-full text-white container mx-auto h-20 lg:h-[12vh] sticky top-0 z-50 px-4">
      <div className="h-full py-1 font-titleFont flex items-center justify-between">
        <div className="text-3xl">Pharmadi</div>
        <div>
          <ul className="hidden gap-6 text-1xl md:flex">
            <li>Home</li>
            <li>Services</li>
            <li>About Us</li>
            <li>Find Doctor</li>
          </ul>
        </div>
        <button className="rounded-full text-1xl bg-cyan-400 flex content-center px-4 py-2">
          Login
        </button>
      </div>
    </section>
  );
};

export default NavBar;
