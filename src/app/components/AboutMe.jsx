import React from "react";

const AboutMe = () => {
  return (
    <div
      className="window-shadow w-full max-w-[600px] bg-[#292928] h-[340px] p-3 rounded-[10px] m-auto lg:m-0"
      style={{ opacity: 1, transform: "none" }}
    >
      <div className="flex gap-2 pb-9">
        <div className="w-[13px] h-[13px] bg-[#ff5e57] rounded-full"></div>
        <div className="w-[13px] h-[13px] bg-[#febc2e] rounded-full"></div>
        <div className="w-[13px] h-[13px] bg-[#2bc740] rounded-full"></div>
      </div>
      <div className="w-full text-white mx-auto md:ml-5">
        <span className="text-[#7c6ad7]">const </span>
        <span className="text-yellow-400">developer </span>
        <span className="text-[#2bbac5]">= </span>
        <span className="text-orange-300">{`{`}</span>
        <br />
        <br />
        <div className="mx-auto mt-[-10px] md:ml-5">
          <span className="text-red-500">
            {" "}
            name<span className="text-white">:</span>{" "}
            <span className="text-[#6ba564]">&quot;Marcelo&quot;</span>
          </span>
          ,<br />
          <span className="text-red-500">
            {" "}
            lastName<span className="text-white">:</span>{" "}
            <span className="text-[#6ba564]">&quot;Garcia&quot;</span>
          </span>
          ,<br />
          <span className="text-red-500">
            {" "}
            age<span className="text-white">:</span>{" "}
            <span className="text-orange-300">32</span>
          </span>
          , <br />
          <span className="text-red-500">
            {" "}
            country<span className="text-white">:</span>{" "}
            <span className="text-[#6ba564]">&quot;Mexico&quot;</span>
          </span>
          , <br />
          <span className="text-red-500">
            {" "}
            education<span className="text-white">:</span>{" "}
            <span className="text-[#7c6ad7]">[</span>
          </span>{" "}
          <br />
          <span className="ml-4 text-[#6ba564]">
            &quot;Full Stack Javascript Bootcamp P5&quot;
          </span>
          , <br />
          <span className="ml-4 text-[#6ba564]">
            &quot;Industrial Engineering @ ITESM&quot;
          </span>{" "}
          <br />
          <span className="text-[#7c6ad7]">]</span> <br />
          <span className="text-orange-300">{`}`}</span>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
