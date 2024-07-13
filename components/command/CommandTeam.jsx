// import React from "react";

const CommandTeam = () => {
  return (
    <div className="py-[80px] px-0 w-full bg-[#f4f7ff]" id="team">
      <div className="container m-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="1200"
          className="mm:text-[64px] mm:text-start text-[32px] text-center leading-[64px] font-extrabold text-[#1b5bf7] mb-[43px] "
        >
          Team
        </h1>
        <div className="md:justify-between md:flex-row flex flex-col-reverse  justify-center items-center  w-full">
          <div className="w-full max-w-[500px] md:w-[48%] ">
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="text-[20px] leading-[40px] font-medium text-[#464359] mb-[26px] "
            >
              For each project, we form a team that includes a project manager, business analyst, UI / UX designer,
              DevOps, QA engineer, backend and front-end developers.
            </p>
            <div data-aos="fade-up" data-aos-duration="1400" className="mt-[40px]">
              <div>
                <span className="mb-[4px] text-[120px] leading-[96px] font-bold text-[#1b5bf7]">
                  100
                  <span id="plus" className="transition-all duration-400 ease-in-out opacity-100">
                    +
                  </span>
                </span>
              </div>
              <p className="text-[40px] leading-[72px] font-semibold text-[#464359] ">Dedicated team</p>
            </div>
          </div>
          <div className="w-full max-w-[500px] md:w-[48%] mb-[30px]">
            <img
              data-aos="zoom-in"
              data-aos-duration="1200"
              src="https://udevs.io/static/teamIcon-7e3107c853b8ec1d129a87af0e68945a.svg"
              alt="Software development agency"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandTeam;
