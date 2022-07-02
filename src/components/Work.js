import React from "react";

export const Work = ({ project, index }) => {
  const { name, desc, technologies, images, source } = project;
  console.log(index);
  return (
    <div className="p-4 max-w-[1400px] mx-auto">
      {/* left */}
      <div className="">
        <h2 className="gradient text-3xl font-poppinslight text-center lg:text-5xl">
          {name}
        </h2>
        <p className="text-center my-7 font-poppinslight w-6/12 mx-auto">
          <span className="font-poppinsbold">{name} </span>
          {desc}
        </p>
      </div>

      {/* right */}
      <div className="flex flex-wrap items-center lg:flex-row justify-center">
        {images.map((image) => (
          <img
            src={image}
            alt=""
            className="w-[300px] hover:scale-105 transition ease-in 300ms"
          />
        ))}
      </div>
      <h2 className="text-center text-3xl font-poppinslight my-7">
        Technologies
      </h2>

      <div className="text-center">
        {technologies.map((technology) => (
          <p>{technology}</p>
        ))}
      </div>
      <div className="flex items-center justify-center">
        <a
          href={source}
          className=" my-7 border border-[#BC48FF] px-4 py-2 rounded-full hover:bg-gradient-to-r from-[#474BFF] to-[#BC48FF] hover:text-white transition ease-out hover:border-white"
        >
          Source Code
        </a>
      </div>
    </div>
  );
};
