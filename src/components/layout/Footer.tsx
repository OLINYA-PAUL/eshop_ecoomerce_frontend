import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitch,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  footercompanyLinks,
  footerProductLinks,
  footerSupportLinks,
} from "../../static/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full py-6 bg-inputColor text-white">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-center md:justify-between bg-secondary py-6 rounded-lg">
        <h1 className="lg:text-2xl text-xl font-semibold md:w-2/5 mb-4 md:mb-0">
          <span className="text-green-400 font-Poppins">Subscribe</span> to get
          the latest news, events, and offers.
        </h1>

        {/* Email Subscription Form */}
        <form className="flex w-full md:w-1/2 bg-white rounded-lg overflow-hidden">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 bg-inputColor text-white border-0 outline-none"
            required
          />
          <button
            type="submit"
            className="bg-green-400 text-white px-5 py-2 font-medium hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center items-start justify-start text-left">
        <ul className="px-5 text-center sm:text-start flex sm:block flex-col items-center ">
          <img
            src="https://shopo.quomodothemes.website/assets/images/logo.svg"
            alt="logo"
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <br />
          <p className="text-gray-400">
            {" "}
            The home and elements needed to <br /> create a beautiful product{" "}
          </p>
          <div className="flex items-center mt-[15px]">
            <AiFillFacebook
              size={25}
              className="cursor-pointer mr-3 hover:text-green-400"
            />
            <AiFillInstagram
              size={25}
              className="cursor-pointer mr-3 hover:text-green-400"
            />
            <AiFillYoutube
              size={25}
              className="cursor-pointer mr-3 hover:text-green-400"
            />
            <AiOutlineTwitter
              size={25}
              className="cursor-pointer mr-3 hover:text-green-400"
            />
          </div>
        </ul>
        <ul className="text-center sm:text-start px-5 mt-5">
          <h1 className="mb-1 font-semibold">Company</h1>
          {footerProductLinks.map((link: any) => (
            <li key={link.name}>
              <a
                href={link.link}
                className="text-gray-400 hover:text-green-400 duration-300
                        text-sm cursor-pointer leading-6"
              >
                <Link to={link.link}>{link.name}</Link>
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start px-5 mt-5">
          <h1 className="mb-1 font-semibold">Shop</h1>
          {footercompanyLinks.map((link: any) => (
            <li key={link.name}>
              <a
                href={link.link}
                className="text-gray-400 hover:text-green-400 duration-300
                        text-sm cursor-pointer leading-6"
              >
                <Link to={link.link}>{link.name}</Link>
              </a>
            </li>
          ))}
        </ul>
        <ul className="text-center sm:text-start px-5 mt-5">
          <h1 className="mb-1 font-semibold">Support</h1>
          {footerSupportLinks.map((link: any) => (
            <li key={link.name}>
              <a
                href={link.link}
                className="text-gray-400 hover:text-green-400 duration-300
                        text-sm cursor-pointer leading-6"
              >
                <Link to={link.link}>{link.name}</Link>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2025 React Prodigy. All rights reserved.</span>
        <span>Terms· Privacy Policy</span>
        <div className="sm:block flex items-center justify-center w-full">
          <img
            src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
