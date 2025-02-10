import React from "react";
import styles from "../../styles/styles";
import CountDown from "../Routes/Events/CountDown";

const EventCard = ({ active }: { active?: boolean }) => {
  return (
    <div
      className={`w-full mt-5 bg-primary max-w-6xl flex ${
        active ? "unset" : "mb-12"
      } flex-col md:flex-row items-center md:items-start justify-between gap-3 sm:gap-5 rounded-lg mx-auto px-3 sm:px-5 md:px-8 lg:px-10 py-4`}
    >
      {/* Image Section */}
      <div className="w-full md:w-[45%] lg:w-[40%] p-2 sm:p-3">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <img
            src="https://m.media-amazon.com/images/I/51KxuUmFqeL._AC_SL1000_.jpg"
            alt="product_image"
            className="w-full h-full object-contain p-2 sm:p-4 bg-inputColor rounded-md"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-[55%] lg:w-[60%] p-2 sm:p-3 flex flex-col justify-center">
        <h3
          className={`${styles.productTitle} text-base sm:text-lg md:text-xl lg:text-2xl font-semibold`}
        >
          Apple iPhone 13, 128GB, Green for AT&T (Renewed)
        </h3>
        <p className="mt-2 sm:mt-4 text-xs sm:text-sm md:text-base leading-5 sm:leading-6 md:leading-7 text-gray-500">
          Stronger Magnetic Lock: powerful built-in magnets with 1,500 g of
          holding force enable faster, easier place-and-go wireless charging and
          a secure lock on any HaloLock or MagSafe accessory. Compatibility:
          only compatible with iPhone 14 and iPhone 13; full functionality
          maintained via precise speaker and port cutouts and easy-press
          buttons. Military-Grade Drop Protection: rigorously tested to ensure
          total protection on all sides, with specially designed Air-Guard
          corners that absorb shock so your phone doesn't have to. Screen and
          Camera Protection: raised screen edges and Camera Guard lens frame
          provide enhanced scratch protection where it really counts. Stay
          Original: scratch-resistant, crystal-clear acrylic back lets you show
          off your iPhone 14's or iPhone 13's true style in stunning clarity
          that lasts.
        </p>
        <div className="flex justify-between mt-3 sm:mt-4">
          <div className="flex items-center">
            <h5 className="font-medium text-sm sm:text-base md:text-lg text-green-400 line-through mr-2">
              $1000
            </h5>
            <h5 className="font-bold text-sm sm:text-base md:text-lg  ">
              $1000
            </h5>
          </div>
          <span className="font-bold text-sm sm:text-base md:text-lg text-green-400 ">
            {" "}
            160 Sold
          </span>
        </div>
        <div className="w-full mt-10">
          <CountDown />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
