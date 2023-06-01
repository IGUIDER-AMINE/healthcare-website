import React from "react";

const NavBar = () => {
  return (
    <section className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-titleFont flex items-center justify-between">
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
