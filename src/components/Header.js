import React from "react";

export const Header = () => {
  return (
    <div className="flex items-center h-screen w-screen">
      <img
        src={require("../images/header.png")}
        className="object-cover object-right relative bottom-4 h-screen"
      />
      <div className="flex items-center absolute inset-0 justify-center bg-white bg-opacity-80">
        <div>
          <h1 className="gradient font-poppins text-6xl drop-shadow-md">
            Sten
          </h1>
          <h1 className="gradient font-poppins text-6xl drop-shadow-md">
            Vassiljev
          </h1>
          <p className="font-poppinslight text-xl">
            Junior React Native Developer
          </p>
        </div>
      </div>
    </div>
  );
};
