"use client";
import { useState } from "react";
import NavbarResponsive from "./navbarItem/NavbarResponsive";
import Image from "next/image";
const Navbar = () => {
  const [activeTab, setActiveTab] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toogleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div data-aos="fade-down" className=" container m-auto ">
        <nav className="flex justify-between items-center w-[100%] pt-[15px] pb-[15px] ">
          <a
            href="/home"
            className={`pt-[10px] pb-[10px] ${activeTab === "home" ? "" : " "} transition duration-100 ease-in-out`}
            onClick={() => setActiveTab("home")}
          >
            <Image
              className="w-[96px]"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTY4IiBoZWlnaHQ9IjU2IiB2aWV3Qm94PSIwIDAgMTY4IDU2IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE2MS40MzIgNDIuNjE5MkMxNjUuNTg0IDQxLjIwMzQgMTY4IDM4LjE4OCAxNjggMzMuNzU2N0MxNjggMzEuNTczNCAxNjcuMjQzIDI5LjU3NzEgMTY1Ljc5IDI3Ljg5MzZDMTYzLjY0MiAyNS4zOTc0IDE2MC4wNDEgMjMuODM2NCAxNTUuMjQzIDIzLjMzNjZDMTUzLjYwNCAyMy4xMzM0IDE0OS40OTQgMjIuNjEwOSAxNDkuNDk0IDIwLjM0MDVDMTQ5LjQ5NCAxNy44MjQ5IDE1Ny42NDkgMTcuMTYwNiAxNTkuNzkgMjAuMDMwOUMxNjAuMzQ4IDIwLjc4ODggMTYwLjM1OCAyMS43MDE1IDE2MC4zNTggMjIuNTg4M0gxNjhDMTY4IDIwLjE5MjEgMTY3LjU4OSAxNy45NzAxIDE2Ni4yMzEgMTUuOTEyNUMxNjQuNjUxIDEzLjQ3NzUgMTYxLjM2NyAxMC42MDcyIDE1NC43OTkgMTAuNjA3MkMxNDkuODExIDEwLjYwNzIgMTQ2LjE0OCAxMS45MTY2IDE0My44NzMgMTQuNDc3M0MxNDIuNzk5IDE1LjY2MDkgMTQxLjYwMSAxNy43MjE3IDE0MS42MDEgMjAuNzE0NkMxNDEuNjAxIDIyLjk2MjUgMTQyLjM1OCAyNC44OTc1IDE0My44NzMgMjYuNTgxQzE0NC45NDcgMjcuNzAzMyAxNDYuMzM4IDI4LjY0MTggMTQ4LjA0MiAyOS4zMjU1QzE0OS43NDYgMzAuMDc2OSAxNTEuODk0IDMwLjU3MzYgMTU0LjM1OCAzMC44MjUyQzE1Ni41MDYgMzEuMDczNSAxNjAuMTY5IDMxLjc2MDQgMTYwLjE2OSAzMy43NTY3QzE2MC4xNjkgMzQuMTMwOCAxNjAuMDQxIDM0Ljc1NjUgMTU5LjAyOSAzNS4yNTMyQzE1Ni45NjYgMzYuMzQzMiAxNTEuMzI2IDM2LjQxNzQgMTQ5LjkzNSAzNC4xMzA4QzE0OS4zNzMgMzMuMjQzOSAxNDkuMjQzIDMyLjEwNTUgMTQ5LjI0MyAzMS4wNzM1TDE0MS42MDEgMzAuOTUwOUMxNDEuNjAxIDM2LjM0IDE0My41NSA0MC42MjI5IDE0OC45MjYgNDIuNTU0N0MxNTIuNDcxIDQzLjk4MzQgMTU3Ljg0MSA0My43OTk2IDE2MS40MzIgNDIuNjE5MlpNODQuNzI2MiAxMS45MzZDNzYuMDM5NyAxNC4xNDg0IDcwLjc3NDMgMjIuOTE0MSA3My4wMTY5IDMxLjQ5MjdDNzUuMjU2MyA0MC4wNzE0IDg0LjEyNTUgNDUuMjczNCA5Mi44MTIgNDMuMDYxQzk5LjY1NzMgNDEuMzAzNCAxMDIuNDI5IDM3LjU5NDYgMTA0LjQ2MiAzMS43NTA3TDk1Ljg3MDcgMzEuMjQxMkM5NC42NDY2IDMzLjI1NjkgOTMuMDc2NCAzNC41NjMgOTAuNzU1NSAzNS4yMDhDODcuNjU0MyAzNS45NzU2IDg0LjAwNDggMzQuNzg1NSA4Mi4yMjI0IDMyLjEwODdMMTA1LjI3MiAyNi40NjgxQzEwNC4yNDcgMTYuNzE4NyA5NC40ODY2IDkuNDQ2MjEgODQuNzI2MiAxMS45MzZaTTkyLjg2NDIgMjAuNjYzQzkzLjc5NzggMjEuMjY5MyA5NC42MjM3IDIxLjk2NTkgOTUuMjM3NCAyMi44NDMxTDgwLjg0MTYgMjYuNDAzNkM4MC45NjI0IDI1LjM0NTggODEuMzYwNiAyNC4zNDYgODEuODUwMyAyMy40NTI3Qzg0LjEwNiAxOS43MzQyIDg5LjA3NDMgMTguNTI0OCA5Mi44NjQyIDIwLjY2M1pNMTMwLjQ4MyAxMS40MTk5TDEyMi4yNzMgMjkuMzlMMTEzLjQzIDExLjQxOTlIMTAzLjEzN0wxMTguOTI3IDQzLjU1NDVIMTI1LjYyMkwxNDAuNzE2IDExLjQxOTlIMTMwLjQ4M1pNNjkuOTE1OCA0My41NTQ1TDY5Ljg1MDUgMEg2MS4wMTA3VjE1LjA5OTdDNTguMTY3NCAxMi43OTA2IDU0LjU2NjggMTEuNDE5OSA1MC41ODc2IDExLjQxOTlDNDEuNjIwNCAxMS40ODEyIDM0LjM1NzIgMTguNzE4MyAzNC40MTkyIDI3LjU4MDdDMzQuNDg0NSAzNi40NCA0MS44MDk3IDQzLjYxNTggNTAuNzc2OSA0My41NTQ1QzU0LjY5NDEgNDMuNTU0NSA1OC4yOTQ3IDQyLjExOTMgNjEuMDcyNyAzOS44NzE1VjQzLjU1NDVINjkuOTE1OFpNNTYuMzk4MSAzMy4wNjk4QzU0Ljg4MzUgMzQuNTY5NSA1Mi44NjI4IDM1LjM3ODkgNTAuNzE0OSAzNS40NDM0QzQ4LjU2NjkgMzUuNDQzNCA0Ni41NDYzIDM0LjYzMDcgNDUuMDMxNiAzMy4xMzQzQzQzLjUxMzcgMzEuNjM0NiA0Mi42OTQ0IDI5LjYzODMgNDIuNjk0NCAyNy41MTYyQzQyLjYzMjMgMjUuMzk3NCA0My41MTM3IDIzLjQ2MjMgNDQuOTY2MyAyMS45MDE0QzQ2LjQ4NDMgMjAuNDA1IDQ4LjUwNDkgMTkuNTkyMyA1MC42NTI5IDE5LjU5MjNDNTIuODAwOCAxOS41OTIzIDU0LjgyMTQgMjAuNDA1IDU2LjMzNjEgMjEuODQwMUM1Ny44NTA4IDIzLjMzNjYgNTguNjczNCAyNS4zMzI5IDU4LjczNTQgMjcuNDU1QzU4LjczNTQgMjkuNTc3MSA1Ny45MTYgMzEuNTczNCA1Ni4zOTgxIDMzLjA2OThaIiBmaWxsPSIjMUQxQTJGIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMS4zNjQ1IDU2VjQ3Ljg3MjlIMjkuODMyOVY1NkgxLjM2NDVaTTAgMjguMTQxOUMwIDQ4LjY3OTEgMzEuMjAwNyA0OC42NzkxIDMxLjIwMDcgMjguMTQxOUMzMS4yMDA3IDIzLjAyMzcgMzEuMjAwNyAxMS4yOTQyIDMxLjIwMDcgMTEuMjk0MkgyMi45ODc2QzIyLjk4NzYgMTYuNzAyNiAyMi45ODc2IDIyLjExMTEgMjIuOTg3NiAyNy41MTYzQzIyLjk4NzYgMzcuOTg0OCA4LjIwOTg1IDM3Ljk4NDggOC4yMDk4NSAyNy41MTYzQzguMjA5ODUgMjIuMTExMSA4LjIwOTg1IDE2LjcwMjYgOC4yMDk4NSAxMS4yOTQySDBDMCAxMS4yOTQyIDAgMjMuMDIzNyAwIDI4LjE0MTlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
              alt="IT-Аутсорсинг компания Udevs - IT консалтинг, разработка и внедрение ERP систем, разработка мобильных приложений, UI / UX дизайн, оптимизация инфраструктуры"
            />
          </a>
          <button
            onClick={toggleMenu}
            className="mm:hidden flex justify-between self-center border-none outline-none bg-transparent px-[6px] py-[1px] "
          >
            <svg
              className="inline-block w-6 h-6 text-[#1b5bf7]  text-lg transition duration-200 ease-in-out flex-shrink-0 select-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <ul className="mm:flex hidden items-center m-0 p-0 list-none">
            <li className=" mr-[32px] mb-0  ">
              <a
                className={`pt-[10px] pb-[10px] ${
                  activeTab === "directs"
                    ? "border-b-2 border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark"
                    : "hover:border-b-2 hover:border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark border-transparent"
                } transition duration-100 ease-in-out`}
                href="/directs"
                onClick={() => setActiveTab("directs")}
              >
                Direction
              </a>
            </li>
            <li className=" mr-[32px] mb-0  ">
              <a
                className={`pt-[10px] pb-[10px] ${
                  activeTab === "team"
                    ? "border-b-2 border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark"
                    : "hover:border-b-2 hover:border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark border-transparent"
                } transition duration-100 ease-in-out`}
                href="/team"
                onClick={() => setActiveTab("team")}
              >
                Command
              </a>
            </li>
            <li className=" mr-[32px] mb-0 relative group">
              <a
                href="/services"
                className="flex items-center py-[20px] font-[700] text-[14px] leading-[5px] text-dark   border-transparent transition duration-100 ease-in-out cursor-pointer"
              >
                Services
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzY3MzEgNC4xNDY0NUM5LjU3ODg0IDMuOTUxMTggOS45MjE4MSAzLjk1MTE4IDEwLjEzMzMgNC4xNDY0NUMxMC4zNDQ5IDQuMzQxNzEgMTAuMzQ0OSA0LjY1ODI5IDEwLjEzMzMgNC44NTM1NUw2Ljg4MzM0IDcuODUzNTVDNi42NzgyOCA4LjA0Mjg0IDYuMzQ4MDkgOC4wNDk0NyA2LjEzNDMxIDcuODY4NThMMi44ODQzMSA1LjExODU4QzIuNjYzNzggNC45MzE5OCAyLjY0ODg5IDQuNjE1NyAyLjg1MTAzIDQuNDEyMTRDMy4wNTMxOCA0LjIwODU4IDMuMzk1ODIgNC4xOTQ4MyAzLjYxNjM0IDQuMzgxNDJMNi40ODQwMyA2LjgwNzkzTDkuMzY3MzEgNC4xNDY0NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
                  alt="Angle Down"
                />
              </a>
              <ul className="group-hover:block hidden absolute top-70 min-w-[300px] left-1/2 py-[18px] rounded-[8px] shadow-md bg-white list-none transition-all transition-200 transform -translate-x-1/2">
                <p className="px-[24px] mb-[20px] text-sm leading-18 font-bold tracking-wide text-gray-400">Services</p>
                <li className="mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff] ">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/mobile"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjU3MTQgMTUuODU3MUMxOS45Nzk3IDE1Ljg1NzEgMTkuNSAxNi4zMzY4IDE5LjUgMTYuOTI4NVYzMS4wNzE0QzE5LjUgMzEuNjYzMSAxOS45Nzk3IDMyLjE0MjggMjAuNTcxNCAzMi4xNDI4SDI3LjQyODZDMjguMDIwMyAzMi4xNDI4IDI4LjUgMzEuNjYzMSAyOC41IDMxLjA3MTRWMTYuOTI4NUMyOC41IDE2LjMzNjggMjguMDIwMyAxNS44NTcxIDI3LjQyODYgMTUuODU3MUgyMC41NzE0WiIgZmlsbD0iIzFCNUJGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTIwLjU3MSAxNC41NzE1SDI3LjQyODJDMjguNzMgMTQuNTcxNSAyOS43ODUzIDE1LjYyNjkgMjkuNzg1MyAxNi45Mjg3VjMxLjA3MTVDMjkuNzg1MyAzMi4zNzMzIDI4LjczIDMzLjQyODcgMjcuNDI4MiAzMy40Mjg3SDIwLjU3MUMxOS4yNjkyIDMzLjQyODcgMTguMjEzOSAzMi4zNzMzIDE4LjIxMzkgMzEuMDcxNVYxNi45Mjg3QzE4LjIxMzkgMTUuNjI2OSAxOS4yNjkyIDE0LjU3MTUgMjAuNTcxIDE0LjU3MTVaTTIwLjU3MSAxNS44NTcyQzE5Ljk3OTMgMTUuODU3MiAxOS40OTk2IDE2LjMzNjkgMTkuNDk5NiAxNi45Mjg3VjMxLjA3MTVDMTkuNDk5NiAzMS42NjMzIDE5Ljk3OTMgMzIuMTQzIDIwLjU3MSAzMi4xNDNIMjcuNDI4MUMyOC4wMTk5IDMyLjE0MyAyOC40OTk2IDMxLjY2MzMgMjguNDk5NiAzMS4wNzE1VjE2LjkyODdDMjguNDk5NiAxNi4zMzY5IDI4LjAxOTkgMTUuODU3MiAyNy40MjgxIDE1Ljg1NzJIMjYuNDY4MlYxNi4wMDU3QzI2LjQ2ODIgMTYuNTU4IDI2LjAyMDUgMTcuMDA1NyAyNS40NjgyIDE3LjAwNTdIMjIuNTMxQzIxLjk3ODggMTcuMDA1NyAyMS41MzEgMTYuNTU4IDIxLjUzMSAxNi4wMDU3VjE1Ljg1NzJIMjAuNTcxWiIgZmlsbD0iIzFCNUJGNyIvPgo8L3N2Zz4K"
                      alt="Mobile development"
                    />
                    <span className="text-xs leading-19 font-normal  ">Development of mobile applications</span>
                  </a>
                </li>
                <li className="mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff] ">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/erp"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS40Mjg3IDE4QzE1LjQyODcgMTkuODkzNiAxNi45NjM3IDIxLjQyODYgMTguODU3MyAyMS40Mjg2QzIwLjc1MDggMjEuNDI4NiAyMi4yODU5IDE5Ljg5MzYgMjIuMjg1OSAxOEMyMi4yODU5IDE2LjEwNjUgMjAuNzUwOCAxNC41NzE1IDE4Ljg1NzMgMTQuNTcxNUMxNi45NjM3IDE0LjU3MTUgMTUuNDI4NyAxNi4xMDY1IDE1LjQyODcgMThaTTIwLjU3MTcgMThDMjAuNTcxNyAxOC45NDY4IDE5LjgwNDEgMTkuNzE0MyAxOC44NTc0IDE5LjcxNDNDMTcuOTEwNiAxOS43MTQzIDE3LjE0MzEgMTguOTQ2OCAxNy4xNDMxIDE4QzE3LjE0MzEgMTcuMDUzMyAxNy45MTA2IDE2LjI4NTggMTguODU3NCAxNi4yODU4QzE5LjgwNDEgMTYuMjg1OCAyMC41NzE3IDE3LjA1MzMgMjAuNTcxNyAxOFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjU3MDQgMjIuMjg1N1YyNEgyMS40Mjc2QzIwLjgwMzEgMjQgMjAuMjE3NiAyMy44MzMgMTkuNzEzMyAyMy41NDEzVjI4LjI4NTdDMTkuNzEzMyAyOS4yMzI1IDIwLjQ4MDggMzAgMjEuNDI3NiAzMEgyNi41NzA0VjMxLjcxNDNIMjEuNDI3NkMxOS41MzQgMzEuNzE0MyAxNy45OTkgMzAuMTc5MyAxNy45OTkgMjguMjg1N1YyMC41NzE0VjIwLjE0MjlWMTkuNzE0M0gxOS43MTMzVjIwLjE0MjlWMjAuNTcxNEMxOS43MTMzIDIxLjUxODIgMjAuNDgwOCAyMi4yODU3IDIxLjQyNzYgMjIuMjg1N0gyNi41NzA0WiIgZmlsbD0iIzFCNUJGNyIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI1LjcxMzkgMzAuODU3MkMyNS43MTM5IDMyLjc1MDcgMjcuMjQ4OSAzNC4yODU3IDI5LjE0MjQgMzQuMjg1N0MzMS4wMzYgMzQuMjg1NyAzMi41NzEgMzIuNzUwNyAzMi41NzEgMzAuODU3MkMzMi41NzEgMjguOTYzNiAzMS4wMzYgMjcuNDI4NiAyOS4xNDI0IDI3LjQyODZDMjcuMjQ4OSAyNy40Mjg2IDI1LjcxMzkgMjguOTYzNiAyNS43MTM5IDMwLjg1NzJaTTMwLjg1NjggMzAuODU3MkMzMC44NTY4IDMxLjgwMzkgMzAuMDg5MyAzMi41NzE0IDI5LjE0MjUgMzIuNTcxNEMyOC4xOTU4IDMyLjU3MTQgMjcuNDI4MiAzMS44MDM5IDI3LjQyODIgMzAuODU3MkMyNy40MjgyIDI5LjkxMDQgMjguMTk1OCAyOS4xNDI5IDI5LjE0MjUgMjkuMTQyOUMzMC4wODkzIDI5LjE0MjkgMzAuODU2OCAyOS45MTA0IDMwLjg1NjggMzAuODU3MloiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNS43MTM5IDIzLjE0MjlDMjUuNzEzOSAyNS4wMzY0IDI3LjI0ODkgMjYuNTcxNCAyOS4xNDI0IDI2LjU3MTRDMzEuMDM2IDI2LjU3MTQgMzIuNTcxIDI1LjAzNjQgMzIuNTcxIDIzLjE0MjlDMzIuNTcxIDIxLjI0OTMgMzEuMDM2IDE5LjcxNDMgMjkuMTQyNCAxOS43MTQzQzI3LjI0ODkgMTkuNzE0MyAyNS43MTM5IDIxLjI0OTMgMjUuNzEzOSAyMy4xNDI5Wk0zMC44NTY4IDIzLjE0MjlDMzAuODU2OCAyNC4wODk2IDMwLjA4OTMgMjQuODU3MSAyOS4xNDI1IDI0Ljg1NzFDMjguMTk1OCAyNC44NTcxIDI3LjQyODIgMjQuMDg5NiAyNy40MjgyIDIzLjE0MjlDMjcuNDI4MiAyMi4xOTYxIDI4LjE5NTggMjEuNDI4NiAyOS4xNDI1IDIxLjQyODZDMzAuMDg5MyAyMS40Mjg2IDMwLjg1NjggMjIuMTk2MSAzMC44NTY4IDIzLjE0MjlaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                      alt="ERP systems"
                    />
                    <span className="text-xs leading-19 font-normal  ">Development and implementation ERP systems</span>
                  </a>
                </li>
                <li className="mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff] ">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/design"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggZD0iTTIzLjA2NTMgMjcuMzg1MUMyMy42MTIxIDI3LjgxOTggMjQuMzg2NiAyNy44MTk2IDI0LjkzMyAyNy4zODQ1TDMwLjMwOCAyMy4xMDU2QzMxLjAyNjUgMjIuNTM2NyAzMS4wMjc2IDIxLjQ0NjggMzAuMzEwNCAyMC44NzY0TDI0LjkzMzEgMTYuNTk5OEMyNC4zODY2IDE2LjE2NTEgMjMuNjEyMyAxNi4xNjUxIDIzLjA2NTggMTYuNTk5OEwxNy42ODMyIDIwLjg4MDVDMTYuOTY3OCAyMS40NDk1IDE2Ljk2NzQgMjIuNTM2IDE3LjY4MjMgMjMuMTA1NkwyMy4wNjUzIDI3LjM4NTFaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIG9wYWNpdHk9IjAuMyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC45MjQxIDI5LjYxMTVDMjQuMzc3NiAzMC4wNDYxIDIzLjYwMzUgMzAuMDQ2MiAyMy4wNTcgMjkuNjExN0wxOC4yODkyIDI1LjgyMTNDMTcuOTUwNCAyNS41NTE5IDE3LjQ1NjggMjUuNjExNSAxNy4xOTE4IDI1Ljk1MzdDMTYuOTI4MSAyNi4yOTQyIDE2Ljk5MTkgMjYuNzg0NCAxNy4zMzQxIDI3LjA0NjFMMjMuMDg2NyAzMS40NDZDMjMuNjI0NSAzMS44NTczIDI0LjM3MTIgMzEuODU3NCAyNC45MDkgMzEuNDQ2MUwzMC42NTg4IDI3LjA1MDFDMzEuMDAzOSAyNi43ODYzIDMxLjA2OCAyNi4yOTE5IDMwLjgwMTggMjUuOTQ4OEMzMC41MzQ2IDI1LjYwNDQgMzAuMDM3NiAyNS41NDQ3IDI5LjY5NjUgMjUuODE2TDI0LjkyNDEgMjkuNjExNVoiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg=="
                      alt="UX/UI design"
                    />
                    <span className="text-xs leading-19 font-normal  ">User interface, User experience design</span>
                  </a>
                </li>
                <li className="mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff] ">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/consulting"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTE4IDE5LjcxNDNWMjYuNTcxNEgzMFYxOS43MTQzSDE4WiIgZmlsbD0iIzFCNUJGNyIvPgo8cGF0aCBvcGFjaXR5PSIwLjMiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjMuOTk5MyAyNi41NzE0QzIzLjUyNTkgMjYuNTcxNCAyMy4xNDIxIDI2Ljk1NTIgMjMuMTQyMSAyNy40Mjg2VjMwSDIxLjg1NjNDMjEuNjE5NiAzMCAyMS40Mjc3IDMwLjE5MTkgMjEuNDI3NyAzMC40Mjg2QzIxLjQyNzcgMzAuNjY1MyAyMS42MTk2IDMwLjg1NzEgMjEuODU2MyAzMC44NTcxSDIzLjk5NTZDMjMuOTk2OSAzMC44NTcyIDIzLjk5ODEgMzAuODU3MiAyMy45OTkzIDMwLjg1NzJDMjQuMDAwNSAzMC44NTcyIDI0LjAwMTcgMzAuODU3MiAyNC4wMDI5IDMwLjg1NzFIMjYuMTQyQzI2LjM3ODcgMzAuODU3MSAyNi41NzA2IDMwLjY2NTMgMjYuNTcwNiAzMC40Mjg2QzI2LjU3MDYgMzAuMTkxOSAyNi4zNzg3IDMwIDI2LjE0MiAzMEgyNC44NTY0VjI3LjQyODZDMjQuODU2NCAyNi45NTUyIDI0LjQ3MjcgMjYuNTcxNCAyMy45OTkzIDI2LjU3MTRaIiBmaWxsPSIjMUI1QkY3Ii8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjkuNzg1MiAxOEgxOC4yMTM3QzE3LjE0ODYgMTggMTYuMjg1MiAxOC43Njc1IDE2LjI4NTIgMTkuNzE0M1YyNi41NzE1QzE2LjI4NTIgMjcuNTE4MiAxNy4xNDg2IDI4LjI4NTcgMTguMjEzNyAyOC4yODU3SDI5Ljc4NTJDMzAuODUwMyAyOC4yODU3IDMxLjcxMzcgMjcuNTE4MiAzMS43MTM3IDI2LjU3MTVWMTkuNzE0M0MzMS43MTM3IDE4Ljc2NzUgMzAuODUwMyAxOCAyOS43ODUyIDE4Wk0xNy45OTk2IDI2LjU3MTVWMTkuNzE0M0gyOS45OTk2VjI2LjU3MTVIMTcuOTk5NloiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg=="
                      alt="IT Consulting"
                    />
                    <span className="text-xs leading-19 font-normal  ">IT consulting</span>
                  </a>
                </li>
                <li className="mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff] ">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/optimization"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBkPSJNMjkuNjc1OSAyMi4wNzE0SDI5Ljc4NTJDMzAuODUwMyAyMi4wNzE0IDMxLjcxMzcgMjIuOTM0OSAzMS43MTM3IDI0QzMxLjcxMzcgMjUuMDY1MSAzMC44NTAzIDI1LjkyODYgMjkuNzg1MiAyNS45Mjg2TDI5LjcyOTkgMjUuOTI4NkMyOS41NjMzIDI1LjkyOTIgMjkuNDEzMSAyNi4wMjg3IDI5LjM0NzUgMjYuMTgxOEMyOS4yNzU3IDI2LjM0NDQgMjkuMzA4OCAyNi41MjY5IDI5LjQyMzMgMjYuNjQ0TDI5LjQ2MTYgMjYuNjgyM0MyOS44MjM4IDI3LjA0NDEgMzAuMDI3MiAyNy41MzQ5IDMwLjAyNzIgMjguMDQ2OEMzMC4wMjcyIDI4LjU1ODYgMjkuODIzOCAyOS4wNDk1IDI5LjQ2MjEgMjkuNDEwN0MyOS4xMDA0IDI5Ljc3MjkgMjguNjA5NSAyOS45NzY0IDI4LjA5NzcgMjkuOTc2NEMyNy41ODU4IDI5Ljk3NjQgMjcuMDk0OSAyOS43NzI5IDI2LjczMzQgMjkuNDExTDI2LjY5OTkgMjkuMzc3NEMyNi41Nzc4IDI5LjI1OCAyNi4zOTUzIDI5LjIyNDkgMjYuMjMyNyAyOS4yOTY2QzI2LjA3OTYgMjkuMzYyMiAyNS45ODAxIDI5LjUxMjQgMjUuOTc5NCAyOS42NzY0VjI5Ljc4NTdDMjUuOTc5NCAzMC44NTA4IDI1LjExNiAzMS43MTQzIDI0LjA1MDkgMzEuNzE0M0MyMi45ODU4IDMxLjcxNDMgMjIuMTIyMyAzMC44NTA4IDIyLjEyMjMgMjkuNzg1N0MyMi4xMTg1IDI5LjU3MTQgMjIuMDEgMjkuNDE5NyAyMS44MTEzIDI5LjM0NTNDMjEuNjU1IDI5LjI3NjMgMjEuNDcyNSAyOS4zMDk0IDIxLjM1NTQgMjkuNDIzOEwyMS4zMTcxIDI5LjQ2MjJDMjAuOTU1NCAyOS44MjQzIDIwLjQ2NDUgMzAuMDI3OCAxOS45NTI3IDMwLjAyNzhDMTkuNDQwOCAzMC4wMjc4IDE4Ljk0OTkgMjkuODI0MyAxOC41ODg3IDI5LjQ2MjdDMTguMjI2NiAyOS4xMDA5IDE4LjAyMzEgMjguNjEwMSAxOC4wMjMxIDI4LjA5ODJDMTguMDIzMSAyNy41ODYzIDE4LjIyNjYgMjcuMDk1NSAxOC41ODg0IDI2LjczNEwxOC42MjIgMjYuNzAwNUMxOC43NDE1IDI2LjU3ODQgMTguNzc0NiAyNi4zOTU4IDE4LjcwMjkgMjYuMjMzMkMxOC42MzcyIDI2LjA4MDIgMTguNDg3IDI1Ljk4MDcgMTguMzIzIDI1Ljk4SDE4LjIxMzdDMTcuMTQ4NiAyNS45OCAxNi4yODUyIDI1LjExNjUgMTYuMjg1MiAyNC4wNTE0QzE2LjI4NTIgMjIuOTg2MyAxNy4xNDg2IDIyLjEyMjggMTguMjEzNyAyMi4xMjI4QzE4LjQyODEgMjIuMTE5IDE4LjU3OTcgMjIuMDEwNiAxOC42NTQyIDIxLjgxMTlDMTguNzIzMSAyMS42NTU2IDE4LjY5IDIxLjQ3MzEgMTguNTc1NiAyMS4zNTZMMTguNTM3MyAyMS4zMTc3QzE4LjE3NTEgMjAuOTU1OSAxNy45NzE2IDIwLjQ2NTEgMTcuOTcxNiAxOS45NTMyQzE3Ljk3MTYgMTkuNDQxMyAxOC4xNzUxIDE4Ljk1MDUgMTguNTM2OCAxOC41ODkyQzE4Ljg5ODUgMTguMjI3MSAxOS4zODk0IDE4LjAyMzYgMTkuOTAxMiAxOC4wMjM2QzIwLjQxMzEgMTguMDIzNiAyMC45MDQgMTguMjI3MSAyMS4yNjU0IDE4LjU4OUwyMS4yOTkgMTguNjIyNkMyMS40MjExIDE4Ljc0MiAyMS42MDM2IDE4Ljc3NTEgMjEuNzU5OSAxOC43MDYyTDIxLjg1MjIgMTguNjg2N0MyMS45ODU1IDE4LjYxNDUgMjIuMDcwMyAxOC40NzQ5IDIyLjA3MDkgMTguMzIzNlYxOC4yMTQzQzIyLjA3MDkgMTcuMTQ5MiAyMi45MzQzIDE2LjI4NTcgMjMuOTk5NCAxNi4yODU3QzI1LjA2NDYgMTYuMjg1NyAyNS45MjggMTcuMTQ5MiAyNS45MjggMTguMjE0M0wyNS45MjggMTguMjY5NkMyNS45Mjg3IDE4LjQzNjEgMjYuMDI4MiAxOC41ODY0IDI2LjE4NzYgMTguNjU0N0MyNi4zNDM5IDE4LjcyMzcgMjYuNTI2NCAxOC42OTA2IDI2LjY0MzQgMTguNTc2MUwyNi42ODE4IDE4LjUzNzhDMjcuMDQzNSAxOC4xNzU3IDI3LjUzNDQgMTcuOTcyMiAyOC4wNDYyIDE3Ljk3MjJDMjguNTU4MSAxNy45NzIyIDI5LjA0OSAxOC4xNzU3IDI5LjQxMDIgMTguNTM3M0MyOS43NzIzIDE4Ljg5OTEgMjkuOTc1OCAxOS4zODk5IDI5Ljk3NTggMTkuOTAxOEMyOS45NzU4IDIwLjQxMzYgMjkuNzcyMyAyMC45MDQ1IDI5LjQxMDQgMjEuMjY2TDI5LjM3NjkgMjEuMjk5NUMyOS4yNTc0IDIxLjQyMTYgMjkuMjI0MyAyMS42MDQyIDI5LjI5MzMgMjEuNzYwNEwyOS4zMTI3IDIxLjg1MjdDMjkuMzg1IDIxLjk4NjEgMjkuNTI0NiAyMi4wNzA4IDI5LjY3NTkgMjIuMDcxNFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMy45OTkyIDI2LjU3MTRDMjUuNDE5MyAyNi41NzE0IDI2LjU3MDYgMjUuNDIwMiAyNi41NzA2IDI0QzI2LjU3MDYgMjIuNTc5OSAyNS40MTkzIDIxLjQyODYgMjMuOTk5MiAyMS40Mjg2QzIyLjU3OSAyMS40Mjg2IDIxLjQyNzcgMjIuNTc5OSAyMS40Mjc3IDI0QzIxLjQyNzcgMjUuNDIwMiAyMi41NzkgMjYuNTcxNCAyMy45OTkyIDI2LjU3MTRaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                      alt="Optimization"
                    />
                    <span className="text-xs leading-19 font-normal  ">Optimization IT consulting infrastructure</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" mr-[32px] mb-0  ">
              <a
                className={`pt-[10px] pb-[10px] ${
                  activeTab === "tools"
                    ? "border-b-2 border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark"
                    : "hover:border-b-2 hover:border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark border-transparent"
                } transition duration-100 ease-in-out`}
                href="/tools"
                onClick={() => setActiveTab("tools")}
              >
                Tools
              </a>
            </li>
            <li className=" mr-[32px] mb-0  ">
              <a
                className={`pt-[10px] pb-[10px] ${
                  activeTab === "clients"
                    ? "border-b-2 border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark"
                    : "hover:border-b-2 hover:border-[#1b5bf7] font-[700] text-[14px] leading-5 text-dark border-transparent"
                } transition duration-100 ease-in-out`}
                href="/clients"
                onClick={() => setActiveTab("clients")}
              >
                Clients
              </a>
            </li>
            <li className=" mr-[32px] mb-0 relative group">
              <a
                href="/portfolio"
                className="flex items-center py-[20px] font-[700] text-[14px] leading-[5px] text-dark   border-transparent transition duration-100 ease-in-out cursor-pointer"
              >
                Portfolio
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzY3MzEgNC4xNDY0NUM5LjU3ODg0IDMuOTUxMTggOS45MjE4MSAzLjk1MTE4IDEwLjEzMzMgNC4xNDY0NUMxMC4zNDQ5IDQuMzQxNzEgMTAuMzQ0OSA0LjY1ODI5IDEwLjEzMzMgNC44NTM1NUw2Ljg4MzM0IDcuODUzNTVDNi42NzgyOCA4LjA0Mjg0IDYuMzQ4MDkgOC4wNDk0NyA2LjEzNDMxIDcuODY4NThMMi44ODQzMSA1LjExODU4QzIuNjYzNzggNC45MzE5OCAyLjY0ODg5IDQuNjE1NyAyLjg1MTAzIDQuNDEyMTRDMy4wNTMxOCA0LjIwODU4IDMuMzk1ODIgNC4xOTQ4MyAzLjYxNjM0IDQuMzgxNDJMNi40ODQwMyA2LjgwNzkzTDkuMzY3MzEgNC4xNDY0NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
                  alt="Angle Down"
                />
              </a>
              {/* hidden */}
              <ul className=" group-hover:block hidden absolute top-70 min-w-[300px] left-1/2 min-w-300 py-[18px] rounded-[8px] shadow-md bg-white list-none transform -translate-x-1/2">
                <p className="px-[24px] mb-[20px] text-sm leading-18 font-bold tracking-wide text-gray-400">
                  Portfolio
                </p>
                <li className=" mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff]">
                  <a
                    //   padding: 8px 11px 8px 34px;
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/delever"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGRkRERDMiLz4KPHBhdGggZD0iTTIzLjg1IDE3LjM2NEMyNS4xODIgMTcuMzY0IDI2LjM0NiAxNy42MjggMjcuMzQyIDE4LjE1NkMyOC4zMzggMTguNjg0IDI5LjEwNiAxOS40MjggMjkuNjQ2IDIwLjM4OEMzMC4xOTggMjEuMzM2IDMwLjQ3NCAyMi40MzQgMzAuNDc0IDIzLjY4MkMzMC40NzQgMjQuOTE4IDMwLjE5OCAyNi4wMTYgMjkuNjQ2IDI2Ljk3NkMyOS4xMDYgMjcuOTM2IDI4LjMzMiAyOC42OCAyNy4zMjQgMjkuMjA4QzI2LjMyOCAyOS43MzYgMjUuMTcgMzAgMjMuODUgMzBIMTkuMTE2VjE3LjM2NEgyMy44NVpNMjMuNjUyIDI3LjMzNkMyNC44MTYgMjcuMzM2IDI1LjcyMiAyNy4wMTggMjYuMzcgMjYuMzgyQzI3LjAxOCAyNS43NDYgMjcuMzQyIDI0Ljg0NiAyNy4zNDIgMjMuNjgyQzI3LjM0MiAyMi41MTggMjcuMDE4IDIxLjYxMiAyNi4zNyAyMC45NjRDMjUuNzIyIDIwLjMxNiAyNC44MTYgMTkuOTkyIDIzLjY1MiAxOS45OTJIMjIuMTk0VjI3LjMzNkgyMy42NTJaIiBmaWxsPSIjRkY1NzIyIi8+Cjwvc3ZnPgo="
                      alt="Delever"
                    />
                    <span className="text-xs leading-19 font-normal  ">Delever</span>
                  </a>
                </li>
                <li className=" mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff]">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/smsuz"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjQiIGN5PSIyNCIgcj0iMjQiIGZpbGw9IiNGNEY3RkYiLz4KPHBhdGggZD0iTTI0LjY4OCAzMS4xMjZDMjMuNzY0IDMxLjEyNiAyMi45MzYgMzAuOTc2IDIyLjIwNCAzMC42NzZDMjEuNDcyIDMwLjM3NiAyMC44ODQgMjkuOTMyIDIwLjQ0IDI5LjM0NEMyMC4wMDggMjguNzU2IDE5Ljc4IDI4LjA0OCAxOS43NTYgMjcuMjJIMjMuMDMyQzIzLjA4IDI3LjY4OCAyMy4yNDIgMjguMDQ4IDIzLjUxOCAyOC4zQzIzLjc5NCAyOC41NCAyNC4xNTQgMjguNjYgMjQuNTk4IDI4LjY2QzI1LjA1NCAyOC42NiAyNS40MTQgMjguNTU4IDI1LjY3OCAyOC4zNTRDMjUuOTQyIDI4LjEzOCAyNi4wNzQgMjcuODQ0IDI2LjA3NCAyNy40NzJDMjYuMDc0IDI3LjE2IDI1Ljk2NiAyNi45MDIgMjUuNzUgMjYuNjk4QzI1LjU0NiAyNi40OTQgMjUuMjg4IDI2LjMyNiAyNC45NzYgMjYuMTk0QzI0LjY3NiAyNi4wNjIgMjQuMjQ0IDI1LjkxMiAyMy42OCAyNS43NDRDMjIuODY0IDI1LjQ5MiAyMi4xOTggMjUuMjQgMjEuNjgyIDI0Ljk4OEMyMS4xNjYgMjQuNzM2IDIwLjcyMiAyNC4zNjQgMjAuMzUgMjMuODcyQzE5Ljk3OCAyMy4zOCAxOS43OTIgMjIuNzM4IDE5Ljc5MiAyMS45NDZDMTkuNzkyIDIwLjc3IDIwLjIxOCAxOS44NTIgMjEuMDcgMTkuMTkyQzIxLjkyMiAxOC41MiAyMy4wMzIgMTguMTg0IDI0LjQgMTguMTg0QzI1Ljc5MiAxOC4xODQgMjYuOTE0IDE4LjUyIDI3Ljc2NiAxOS4xOTJDMjguNjE4IDE5Ljg1MiAyOS4wNzQgMjAuNzc2IDI5LjEzNCAyMS45NjRIMjUuODA0QzI1Ljc4IDIxLjU1NiAyNS42MyAyMS4yMzggMjUuMzU0IDIxLjAxQzI1LjA3OCAyMC43NyAyNC43MjQgMjAuNjUgMjQuMjkyIDIwLjY1QzIzLjkyIDIwLjY1IDIzLjYyIDIwLjc1MiAyMy4zOTIgMjAuOTU2QzIzLjE2NCAyMS4xNDggMjMuMDUgMjEuNDMgMjMuMDUgMjEuODAyQzIzLjA1IDIyLjIxIDIzLjI0MiAyMi41MjggMjMuNjI2IDIyLjc1NkMyNC4wMSAyMi45ODQgMjQuNjEgMjMuMjMgMjUuNDI2IDIzLjQ5NEMyNi4yNDIgMjMuNzcgMjYuOTAyIDI0LjAzNCAyNy40MDYgMjQuMjg2QzI3LjkyMiAyNC41MzggMjguMzY2IDI0LjkwNCAyOC43MzggMjUuMzg0QzI5LjExIDI1Ljg2NCAyOS4yOTYgMjYuNDgyIDI5LjI5NiAyNy4yMzhDMjkuMjk2IDI3Ljk1OCAyOS4xMSAyOC42MTIgMjguNzM4IDI5LjJDMjguMzc4IDI5Ljc4OCAyNy44NSAzMC4yNTYgMjcuMTU0IDMwLjYwNEMyNi40NTggMzAuOTUyIDI1LjYzNiAzMS4xMjYgMjQuNjg4IDMxLjEyNloiIGZpbGw9IiMxQjVCRjciLz4KPC9zdmc+Cg=="
                      alt="SmsUz"
                    />
                    <span className="text-xs leading-19 font-normal  ">Sms.uz</span>
                  </a>
                </li>
                <li className=" mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff]">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/goodzone"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIgZmlsbD0iI0Y1MDAwMCIvPgo8cGF0aCBkPSJNMjYuNTA0IDIyLjM2QzI2LjI3NiAyMS45NCAyNS45NDYgMjEuNjIyIDI1LjUxNCAyMS40MDZDMjUuMDk0IDIxLjE3OCAyNC41OTYgMjEuMDY0IDI0LjAyIDIxLjA2NEMyMy4wMjQgMjEuMDY0IDIyLjIyNiAyMS4zOTQgMjEuNjI2IDIyLjA1NEMyMS4wMjYgMjIuNzAyIDIwLjcyNiAyMy41NzIgMjAuNzI2IDI0LjY2NEMyMC43MjYgMjUuODI4IDIxLjAzOCAyNi43NCAyMS42NjIgMjcuNEMyMi4yOTggMjguMDQ4IDIzLjE2OCAyOC4zNzIgMjQuMjcyIDI4LjM3MkMyNS4wMjggMjguMzcyIDI1LjY2NCAyOC4xOCAyNi4xOCAyNy43OTZDMjYuNzA4IDI3LjQxMiAyNy4wOTIgMjYuODYgMjcuMzMyIDI2LjE0SDIzLjQyNlYyMy44NzJIMzAuMTIyVjI2LjczNEMyOS44OTQgMjcuNTAyIDI5LjUwNCAyOC4yMTYgMjguOTUyIDI4Ljg3NkMyOC40MTIgMjkuNTM2IDI3LjcyMiAzMC4wNyAyNi44ODIgMzAuNDc4QzI2LjA0MiAzMC44ODYgMjUuMDk0IDMxLjA5IDI0LjAzOCAzMS4wOUMyMi43OSAzMS4wOSAyMS42NzQgMzAuODIgMjAuNjkgMzAuMjhDMTkuNzE4IDI5LjcyOCAxOC45NTYgMjguOTY2IDE4LjQwNCAyNy45OTRDMTcuODY0IDI3LjAyMiAxNy41OTQgMjUuOTEyIDE3LjU5NCAyNC42NjRDMTcuNTk0IDIzLjQxNiAxNy44NjQgMjIuMzA2IDE4LjQwNCAyMS4zMzRDMTguOTU2IDIwLjM1IDE5LjcxOCAxOS41ODggMjAuNjkgMTkuMDQ4QzIxLjY2MiAxOC40OTYgMjIuNzcyIDE4LjIyIDI0LjAyIDE4LjIyQzI1LjUzMiAxOC4yMiAyNi44MDQgMTguNTg2IDI3LjgzNiAxOS4zMThDMjguODggMjAuMDUgMjkuNTcgMjEuMDY0IDI5LjkwNiAyMi4zNkgyNi41MDRaIiBmaWxsPSIjRjUwMDAwIi8+Cjwvc3ZnPgo="
                      alt="Goodzone"
                    />
                    <span className="text-xs leading-19 font-normal  ">Goodzone</span>
                  </a>
                </li>
                <li className=" mb-[8px] hover:bg-[#1b5bf7] hover:text-[#ffff]">
                  <a
                    className="flex items-center w-full pt-[8px] pb-[8px] pr-[11px] pl-[34px] transition duration-100 ease-in-out"
                    href="/iman"
                  >
                    <Image
                      className="mr-[24px]"
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBvcGFjaXR5PSIwLjIiIGN4PSIyNCIgY3k9IjI0IiByPSIyNCIgZmlsbD0iIzAxQ0FCMCIvPgo8cGF0aCBkPSJNMjUuMTk0IDE3LjM2NFYzMEgyMi4xMTZWMTcuMzY0SDI1LjE5NFoiIGZpbGw9IiMwMUNBQjAiLz4KPC9zdmc+Cg=="
                      alt="Iman"
                    />
                    <span className="text-xs leading-19 font-normal  ">Iman</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className=" mr-[32px] mb-0 relative group">
              <a
                href=""
                className="flex items-center py-2 font-[700] text-[14px] leading-5 text-dark   border-transparent transition duration-100 ease-in-out cursor-pointer"
              >
                Language
                <Image
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTMiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMyAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkuMzY3MzEgNC4xNDY0NUM5LjU3ODg0IDMuOTUxMTggOS45MjE4MSAzLjk1MTE4IDEwLjEzMzMgNC4xNDY0NUMxMC4zNDQ5IDQuMzQxNzEgMTAuMzQ0OSA0LjY1ODI5IDEwLjEzMzMgNC44NTM1NUw2Ljg4MzM0IDcuODUzNTVDNi42NzgyOCA4LjA0Mjg0IDYuMzQ4MDkgOC4wNDk0NyA2LjEzNDMxIDcuODY4NThMMi44ODQzMSA1LjExODU4QzIuNjYzNzggNC45MzE5OCAyLjY0ODg5IDQuNjE1NyAyLjg1MTAzIDQuNDEyMTRDMy4wNTMxOCA0LjIwODU4IDMuMzk1ODIgNC4xOTQ4MyAzLjYxNjM0IDQuMzgxNDJMNi40ODQwMyA2LjgwNzkzTDkuMzY3MzEgNC4xNDY0NVoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="
                  alt="Language"
                />
              </a>
              <ul className="group-hover:block hidden absolute min-w-[120px] py-[5px] rounded-[8px] shadow-md bg-white list-none transform-translate-x-1/2 mb-[8px]   ">
                <li className="mb-[14px]  hover:bg-[#1b5bf7]  hover:text-[#fff]">
                  <a
                    href=""
                    className="flex items-center w-[100%] pt-[8px] pl-[11px] pb-[8px] pr-[11px] transition duration-100 ease-in-out cursor-pointer "
                  >
                    <Image
                      className="mr-[16px] h-[28px] w-full max-w-[28px] "
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM5Ny4zODUgNTEyIDUxMiAzOTcuMzg1IDUxMiAyNTZDNTEyIDExNC42MTUgMzk3LjM4NSAwIDI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZDMCAzOTcuMzg1IDExNC42MTUgNTEyIDI1NiA1MTJaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik00OTYuMDc3IDM0NS4wNDNDNTA2LjM2OCAzMTcuMzEgNTEyIDI4Ny4zMTQgNTEyIDI1NkM1MTIgMjI0LjY4NiA1MDYuMzY4IDE5NC42OSA0OTYuMDc3IDE2Ni45NTdIMTUuOTIzQzUuNjMzIDE5NC42OSAwIDIyNC42ODYgMCAyNTZDMCAyODcuMzE0IDUuNjMzIDMxNy4zMSAxNS45MjMgMzQ1LjA0M0wyNTYgMzY3LjMwNEw0OTYuMDc3IDM0NS4wNDNaIiBmaWxsPSIjMDA1MkI0Ii8+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM2Ni4wNzEgNTEyIDQ1OS45MDYgNDQyLjUyOCA0OTYuMDc3IDM0NS4wNDNIMTUuOTIzMUM1Mi4wOTQxIDQ0Mi41MjggMTQ1LjkyOSA1MTIgMjU2IDUxMloiIGZpbGw9IiNEODAwMjciLz4KPC9zdmc+Cg=="
                      alt="Russian"
                    />
                    <span className="text-[16px] leading-19 font-normal ">Рус</span>
                  </a>
                </li>
                <li className="mb-0  hover:bg-[#1b5bf7]  hover:text-[#fff]">
                  <a
                    href=""
                    className="flex items-center w-[100%] pt-[8px] pl-[11px] pb-[8px] pr-[11px] transition duration-100 ease-in-out cursor-pointer "
                  >
                    <Image
                      className="mr-[16px] h-[28px] w-full max-w-[28px] "
                      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0yNTYgNTEyQzM5Ny4zODUgNTEyIDUxMiAzOTcuMzg1IDUxMiAyNTZDNTEyIDExNC42MTUgMzk3LjM4NSAwIDI1NiAwQzExNC42MTUgMCAwIDExNC42MTUgMCAyNTZDMCAzOTcuMzg1IDExNC42MTUgNTEyIDI1NiA1MTJaIiBmaWxsPSIjRjBGMEYwIi8+CjxwYXRoIGQ9Ik01Mi45MiAxMDAuMTQyQzMyLjgxMSAxMjYuMzA1IDE3LjY0OCAxNTYuNDYgOC44MTg5NyAxODkuMjE5SDE0MS45OTdMNTIuOTIgMTAwLjE0MloiIGZpbGw9IiMwMDUyQjQiLz4KPHBhdGggZD0iTTUwMy4xODEgMTg5LjIxOUM0OTQuMzUyIDE1Ni40NjEgNDc5LjE4OCAxMjYuMzA2IDQ1OS4wOCAxMDAuMTQzTDM3MC4wMDUgMTg5LjIxOUg1MDMuMTgxWiIgZmlsbD0iIzAwNTJCNCIvPgo8cGF0aCBkPSJNOC44MTg5NyAzMjIuNzg0QzE3LjY0OSAzNTUuNTQyIDMyLjgxMiAzODUuNjk3IDUyLjkyIDQxMS44NTlMMTQxLjk5NCAzMjIuNzg0SDguODE4OTdaIiBmaWxsPSIjMDA1MkI0Ii8+CjxwYXRoIGQ9Ik00MTEuODU4IDUyLjkyMTFDMzg1LjY5NSAzMi44MTIxIDM1NS41NDEgMTcuNjQ5MSAzMjIuNzgyIDguODE5MDlWMTQxLjk5Nkw0MTEuODU4IDUyLjkyMTFaIiBmaWxsPSIjMDA1MkI0Ii8+CjxwYXRoIGQ9Ik0xMDAuMTQyIDQ1OS4wNzlDMTI2LjMwNSA0NzkuMTg4IDE1Ni40NiA0OTQuMzUxIDE4OS4yMTggNTAzLjE4MVYzNzAuMDA1TDEwMC4xNDIgNDU5LjA3OVoiIGZpbGw9IiMwMDUyQjQiLz4KPHBhdGggZD0iTTE4OS4yMTcgOC44MTkwOUMxNTYuNDU5IDE3LjY0OTEgMTI2LjMwNCAzMi44MTIxIDEwMC4xNDIgNTIuOTIwMUwxODkuMjE3IDE0MS45OTVWOC44MTkwOVoiIGZpbGw9IiMwMDUyQjQiLz4KPHBhdGggZD0iTTMyMi43ODMgNTAzLjE4MUMzNTUuNTQxIDQ5NC4zNTEgMzg1LjY5NiA0NzkuMTg4IDQxMS44NTggNDU5LjA4TDMyMi43ODMgMzcwLjAwNVY1MDMuMTgxWiIgZmlsbD0iIzAwNTJCNCIvPgo8cGF0aCBkPSJNMzcwLjAwNSAzMjIuNzg0TDQ1OS4wOCA0MTEuODZDNDc5LjE4OCAzODUuNjk4IDQ5NC4zNTIgMzU1LjU0MiA1MDMuMTgxIDMyMi43ODRIMzcwLjAwNVoiIGZpbGw9IiMwMDUyQjQiLz4KPHBhdGggZD0iTTUwOS44MzMgMjIyLjYwOUgyODkuMzkzSDI4OS4zOTJWMi4xNjdDMjc4LjQ2MSAwLjc0NCAyNjcuMzE3IDAgMjU2IDBDMjQ0LjY4MSAwIDIzMy41MzkgMC43NDQgMjIyLjYwOSAyLjE2N1YyMjIuNjA3VjIyMi42MDhIMi4xNjdDMC43NDQgMjMzLjUzOSAwIDI0NC42ODMgMCAyNTZDMCAyNjcuMzE5IDAuNzQ0IDI3OC40NjEgMi4xNjcgMjg5LjM5MUgyMjIuNjA3SDIyMi42MDhWNTA5LjgzM0MyMzMuNTM5IDUxMS4yNTYgMjQ0LjY4MSA1MTIgMjU2IDUxMkMyNjcuMzE3IDUxMiAyNzguNDYxIDUxMS4yNTcgMjg5LjM5MSA1MDkuODMzVjI4OS4zOTNWMjg5LjM5Mkg1MDkuODMzQzUxMS4yNTYgMjc4LjQ2MSA1MTIgMjY3LjMxOSA1MTIgMjU2QzUxMiAyNDQuNjgzIDUxMS4yNTYgMjMzLjUzOSA1MDkuODMzIDIyMi42MDlaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik0zMjIuNzgzIDMyMi43ODRMNDM3LjAxOSA0MzcuMDJDNDQyLjI3MyA0MzEuNzY4IDQ0Ny4yODUgNDI2LjI3NyA0NTIuMDY3IDQyMC41ODVMMzU0LjI2NSAzMjIuNzgzSDMyMi43ODNWMzIyLjc4NFoiIGZpbGw9IiNEODAwMjciLz4KPHBhdGggZD0iTTE4OS4yMTcgMzIyLjc4NEgxODkuMjE1TDc0Ljk4IDQzNy4wMTlDODAuMjMyIDQ0Mi4yNzMgODUuNzIzIDQ0Ny4yODUgOTEuNDE1IDQ1Mi4wNjdMMTg5LjIxNyAzNTQuMjYzVjMyMi43ODRaIiBmaWxsPSIjRDgwMDI3Ii8+CjxwYXRoIGQ9Ik0xODkuMjE3IDE4OS4yMTlWMTg5LjIxN0w3NC45ODEgNzQuOThDNjkuNzI3IDgwLjIzMiA2NC43MTUgODUuNzIzIDU5LjkzMyA5MS40MTVMMTU3LjczNiAxODkuMjE4SDE4OS4yMTdWMTg5LjIxOVoiIGZpbGw9IiNEODAwMjciLz4KPHBhdGggZD0iTTMyMi43ODMgMTg5LjIxOUw0MzcuMDIgNzQuOTgxMUM0MzEuNzY4IDY5LjcyNzEgNDI2LjI3NyA2NC43MTUxIDQyMC41ODUgNTkuOTM0MUwzMjIuNzgzIDE1Ny43MzdWMTg5LjIxOVoiIGZpbGw9IiNEODAwMjciLz4KPC9zdmc+Cg=="
                      alt="United kingdom"
                    />
                    <span className="text-[16px] leading-[19px] font-normal  ">Eng</span>
                  </a>
                </li>
              </ul>
            </li>
            <button className="bg-[#1b5bf7] pt-[10px] pl-[16px] pb-[10px] pr-[16px] w-full rounded-[8px] transform perspective-800 transition duration-200 ease-in-out hover:scale-[1.1]">
              <a className=" text-[14px] w-full  leading-[20px]  font-[600] text-[#fff]" href="/contact">
                Contact
              </a>
            </button>
          </ul>
        </nav>
        <NavbarResponsive isOpen={isOpen} toogleClose={toogleClose} />
      </div>
    </>
  );
};

export default Navbar;
