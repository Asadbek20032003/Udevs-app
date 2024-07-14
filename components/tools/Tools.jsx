"use client";

import { useState } from "react";
import Image from "next/image";
import tools from "./tools.json";

const Tools = () => {
  const [active, setActive] = useState("");

  const handleClick = (category) => {
    setActive((prevCategory) => (prevCategory === category ? "" : category));
  };

  return (
    <section id="tools" className="w-full py-[80px] px-0 bg-[#f4f7ff] ">
      <div className="container m-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="1200"
          className="mm:text-[64px] mm:text-start text-[32px] text-center leading-[64px] font-extrabold text-[#1b5bf7] mb-[42px]"
        >
          Tools
        </h1>
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <nav
            data-aos="fade-up"
            data-aos-duration="1300"
            className="grid lg:grid-cols-7 sm:grid-cols-3  grid-cols-2   gap-1 p-2 text-base font-normal text-blue-gray-700"
          >
            {["testing", "design", "infrastructure", "frontend", "backend", "devops", "mobile"].map((category) => (
              <div
                role="button"
                key={category}
                className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900"
                onClick={() => handleClick(category)}
              >
                <label
                  htmlFor={`horizontal-list-${category}`}
                  className="flex items-center w-full px-3 py-2 cursor-pointer"
                >
                  <div className="grid mr-3 place-items-center">
                    <div className="inline-flex items-center">
                      <label
                        className="relative flex items-center p-0 rounded-full cursor-pointer"
                        htmlFor={`horizontal-list-${category}`}
                      >
                        <input
                          name={`horizontal-list-${category}`}
                          id={`horizontal-list-${category}`}
                          type="radio"
                          value={category}
                          checked={active === category}
                          readOnly
                          className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                        />
                        <span className="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 16 16"
                            fill="#1b5bf7"
                          >
                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                          </svg>
                        </span>
                      </label>
                    </div>
                  </div>
                  <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-400">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </p>
                </label>
              </div>
            ))}
          </nav>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1300"
          className="grid mm:grid-cols-12 mw:grid-cols-5  grid-cols-3 mt-[48px] gap-[8px]"
        >
          {tools.data.map((tool, index) => (
            <div
              key={index}
              style={{
                backgroundColor: active === tool.category || active === "" ? tool.color : "transparent",
                opacity: active === tool.category || active === "" ? 1 : 0.4,
              }}
              className="w-full mm:h-[90px] h-[54px] flex flex-col items-center content-center justify-center overflow-hidden rounded-[5px] transition-opacity duration-[0.2s]"
            >
              <Image
                width="24"
                height="24"
                src={tool.imgUrl}
                alt={tool.toolsName}
                className="mm:w-[24px] w-[15px] mm:h-[24px] h-[15px]"
              />
              <span className="text-[11px] leading-[13px] text-[#000] mt-[15px] text-center">{tool.toolsName}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
