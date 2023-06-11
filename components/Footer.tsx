import Link from "next/link";
import { SlSocialYoutube } from "react-icons/sl";
import {
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

const Footer = () => {
  return (
    <section id="footer" className="py-7 px-4 bg-bodyColor">
      <div className="grid uppercase grid-cols-1 md:grid-cols-4 lg:grid-cols-5 container leading-10 mx-auto text-gray-400 text-[15px]">
        <div className="flex flex-col justify-between">
          <div>
            <a href="#">🌃Pharmadi</a>
          </div>
          <div>Pharmadi inc, 2023</div>
        </div>
        <div>
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
        <div>
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
        <div>
          <div>
            <a href="#">Follow Us</a>
          </div>
          <div>
            <a href="#">Disclaimer</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <a href="#">(677) 234-4566</a>
          </div>
          <div className="flex gap-3">
            <Link href="#footer">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialFacebook />
              </span>
            </Link>
            <Link href="#footer">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialYoutube />
              </span>
            </Link>
            <Link href="#footer">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialInstagram />
              </span>
            </Link>
            <Link href="#footer">
              <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
                <SlSocialLinkedin />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
