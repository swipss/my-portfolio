import React from "react";
// comment
export const Navbar = () => {
  return (
    <div className="h-20 glass px-5 fixed w-full z-10">
      <div className="flex items-center justify-between max-w-[1100px]  mx-auto h-full">
        <p className="gradient text-2xl font-poppins">Sten Vassiljev</p>

        <div className="flex gap-4 items-center justify-center">
          <a href="https://github.com/swipss">
            <img
              src={require("../images/github.png")}
              className="h-8 cursor-pointer"
              alt=""
            />
          </a>
          <a href="https://www.linkedin.com/in/stenvassiljev/">
            <img
              src={require("../images/linkedin-circled.png")}
              className="h-8 cursor-pointer"
              alt=""
            />
          </a>
          <a href="mailto:vassiljevsten1@gmail.com">
            <img
              src={require("../images/new-post.png")}
              className="h-8 cursor-pointer"
              alt=""
            />
          </a>
        </div>
        <img
          src={require("../images/moon.png")}
          className="h-8 cursor-pointer"
        />
      </div>
    </div>
  );
};
