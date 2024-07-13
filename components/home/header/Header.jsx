// import React from "react";
// import { Typed } from "react-typed";
"use client";
import Image from "next/image";
import { useEffect } from "react";
import Typed from "typed.js";
const Header = () => {
  useEffect(() => {
    const options = {
      strings: [
        "Development and implementation ERP systems",
        "User interface, User experience design",
        "Optimization IT consulting infrastructure",
        "IT consulting",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    const typed = new Typed(".typed-text", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-[100%] h-[100%] bg-cover bg-no-repeat bg-[50%] bg-[url('data:image/jpeg;base64,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')]">
      <div className="container m-auto">
        <div className="mm:flex-row flex-col flex justify-between  items-center h-[100%] py-[110px] px-0 mt-[72px]">
          <div className="w-[48%]">
            <Image
              data-aos="fade-up"
              data-aos-duration="1200"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
              alt="Udevs"
              className="mm:w-[267px] w-[125px]  mb-[24px] m-0 mx-w-[100%] p-0"
            />
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="mm:text-[40px] text-[24px] leading-[32px] mm:leading-[54px] font-[800] opacity-[1] transform-none mb-[20px] line-height-[54px] text-[#464359] "
            >
              IT-Outsourcing Company
            </h1>
            <h1
              data-aos="fade-up"
              data-aos-duration="1800"
              className="text-[#1b5bf7] opacity-[1] transform-none mb-[48px] font-extrabold text-[24px] leading-[32px] mm:leading-[54px] mm:text-[40px] "
            >
              <div className="typed-text" id="typed-text" data-testid="typewriter-wrapper">
                {/* <Typed
                  className="text-[#1b5bf7]"
                  strings={[
                    "Development and implementation ERP systems",
                    "User interface, User experience design",
                    "Optimization IT consulting infrastructure",
                    "IT consulting",
                  ]}
                  typeSpeed={50}
                  backSpeed={50}
                  loop
                /> */}

                {/* <span>Development and implementation ERP systems</span> */}
              </div>
            </h1>
            <div
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mm:block hidden  bg-[#1b5bf7] py-[13px] px-[16px] rounded-[8px] transition-all duration-[.2s] ease-in-out w-[248px] text-center "
            >
              <a
                href="/contact"
                className=" text-[20px] leading-[30px] text-white font-semibold w-[100%] hover:scale-[1.1]"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="">
            <Image
              src="https://udevs.io/static/hero-304cdf863047286a47c1e063154824d8.svg"
              alt="Udevs - Software development agency"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
