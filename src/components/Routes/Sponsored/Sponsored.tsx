import React from "react";
import styles from "../../../styles/styles";

const Sponsored = () => {
  return (
    <div
      className={`${styles.section} bg-primary h-auto p-5 rounded-md mt-10 mb-10`}
    >
      <div className={`${styles.heading}`}>
        <h1>Sponsored</h1>
      </div>
      <div className="w-full flex items-center justify-center mx-auto gap-3">
        <div className="w-full">
          <img
            src={require("../../../static/images/brush.jpg")}
            alt="sponsored_logo"
            className="w-60 object-contain rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={require("../../../static/images/brush.jpg")}
            alt="sponsored_logo"
            className="w-60 object-contain rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={require("../../../static/images/brush.jpg")}
            alt="sponsored_logo"
            className="w-60 object-contain rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={require("../../../static/images/brush.jpg")}
            alt="sponsored_logo"
            className="w-60 object-contain rounded-lg"
          />
        </div>
        <div className="w-full">
          <img
            src={require("../../../static/images/brush.jpg")}
            alt="sponsored_logo"
            className="w-60 object-contain rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsored;
