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
      className="w-full text-white h-20 lg:h-[12vh] sticky top-0"
    >
      <div className="w-full text-white container px-9 mx-auto h-20 lg:h-[12vh]">
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
          <button className="rounded-full text-1xl bg-blue-600/90 px-8 py-2">
            Login
          </button>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
