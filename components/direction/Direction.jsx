// import React from "react";

import { data } from "./data";

const Direction = () => {
  return (
    <div className="py-[100px] px-0 w-full" id="directs">
      <div className="container m-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="700"
          className="mm:text-[64px] mm:text-start text-[32px] text-center leading-[64px] font-extrabold text-[#1b5bf7] mb-[42px]"
        >
          Our services
        </h1>
        <div data-aos="fade-up" data-aos-duration="800" className="mm:grid-cols-3 sd:grid-cols-2 grid grid-cols-1">
          {data.icons.map((item, index) => (
            <div key={index} className="mr-[30px] mb-[24px] rounded-[8px] p-[32px] bg-[#f4f7ff]  ">
              <img className="w-[32px] h-[32px] mb-[24px]" src={item.img} alt="Group icon" />
              <h3 className="text-[#18191f] font-semibold leading-[30px] text-[20px]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Direction;
