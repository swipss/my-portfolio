import React from "react";

export const About = () => {
  return (
    <div className="px-4 lg:px-10 py-10 max-w-[1400px] mx-auto">
      <div className="">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse">
          <img
            src={require("../images/profile.png")}
            className="drop-shadow-lg blob bg-gradient-to-r from-[#474BFF] to-[#BC48FF] shadow-xl"
          />
          <div>
            <div className="flex flex-col items-center lg:items-baseline lg:mr-10">
              <h1 className="gradient text-6xl font-poppins text-center my-7 md:text-7xl lg:text-8xl lg:text-left">
                I am a...
              </h1>
              <p className="leading-9 font-poppinslight text-lg text-center lg:text-left lg:text-xl lg:leading-9">
                ...18 year old self-taugh React Native Developer based in Tartu,
                Estonia. I enjoy developing, designing and gaming. My design
                tool of choice is Figma. I’m currently studying Information
                Technology at Tartu Tamme High School. I’m passionate about
                creating eye pleasing, user-friendly mobile applications for iOS
                and Android.
              </p>
              <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="flex justify-center bg-green-200 items-center px-2 py-1 rounded-md mt-5 w-40 lg:mr-5">
                  <div className=" bg-green-500 rounded-full w-3 h-3 mr-2" />
                  <p className="font-poppinslight text-base">Open to work</p>
                </div>
                <div className="flex items-center justify-center mt-7 hover:bg-gradient-to-r from-[#474BFF] to-[#BC48FF] border hover:border-white border-[#BC48FF] px-4 py-2 rounded-full hover:text-white  transition ease-out ">
                  <img
                    src={require("../images/download.png")}
                    className="h-7 mr-2"
                  />
                  <a
                    href={require("../data/CV.pdf")}
                    download
                    className="font-poppinslight"
                  >
                    Download my CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
