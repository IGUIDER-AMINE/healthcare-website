import React from "react";

const Footer = () => {
  return (
    <section id="footer" className="py-7 px-4 bg-bodyColor">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 container leading-10 mx-auto text-gray-400 text-[15px]">
        <div className="flex flex-col justify-between">
          <div>
            <a href="#">🌃Pharmadi</a>
          </div>
          <div>Pharmadi inc, 2023</div>
        </div>
        <div className="uppercase">
          <div>
            <a href="#">Contact Us</a>
          </div>
          <div>
            <a href="#">Privacy plicy</a>
          </div>
          <div>
            <a href="#">Terms of use</a>
          </div>
        </div>
        <div className="uppercase">
          <div>
            <a href="#">About Us</a>
          </div>
          <div>
            <a href="#">FAQS</a>
          </div>
          <div>
            <a href="#">BLOG</a>
          </div>
        </div>
        <div className="uppercase">
          <div>
            <a href="#">Follow Us</a>
          </div>
          <div>
            <a href="#">Disclaimer</a>
          </div>
        </div>
        <div className="uppercase flex flex-col justify-between">
          <div>
            <a href="#">(677) 234-4566</a>
          </div>
          <div>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
