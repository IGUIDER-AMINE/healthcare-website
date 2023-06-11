import { useState, useEffect } from "react";

const NavBar = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const [scrollChangeButton, setScrollChangeButton] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      const scrollCheckButton = window.scrollY > 600;

      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }

      if (scrollCheckButton !== scrollChangeButton) {
        setScrollChangeButton(scrollCheckButton);
      }
    });
  });
  return (
    <section
      style={scroll ? { background: "#0A192F" } : { background: "none" }}
      className="w-full font-titleFont text-white px-9 h-20 z-50 lg:h-[12vh] sticky top-0"
    >
      <div className="w-full  text-white container mx-auto h-20 lg:h-[12vh]">
        <div className="h-full py-1 font-titleFont flex items-center justify-between">
          <div className="text-3xl">Pharmadi</div>
          <div>
            <ul className="hidden font-light gap-6 text-1xl lg:flex">
              <li>Home</li>
              <li>Services</li>
              <li>About Us</li>
              <li>Find Doctor</li>
            </ul>
          </div>
          <button className="rounded-full hidden lg:block text-1xl bg-blue-600/90 px-8 py-2">
            Login
          </button>
          <div className="w-6 h-5 flex flex-col justify-between items-center lg:hidden text-4xl text-textGreen cursor-pointer overflow-hidden group">
            <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-3 group-hover:translate-x-0 transition-all ease-in-out duration-300"></span>
            <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-1 group-hover:translate-x-3 transition-all ease-in-out duration-300"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
