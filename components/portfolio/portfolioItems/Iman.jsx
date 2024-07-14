// import React from "react";
import Image from "next/image";

const Iman = () => {
  return (
    <div
      id="iman"
      className=" w-full py-[80px] bg-cover bg-no-repeat bg-[50%] bg-[url('data:image/jpeg;base64,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')]"
    >
      <div className="container m-auto">
        <div data-aos="fade-up" data-aos-duration="1200" className="mm:hidden block w-full mb-[34px]">
          <Image
            width="170"
            height="64"
            src="https://udevs.io/static/iman-8d343bfc270029c181003633c9652299.svg"
            alt="smsuz"
            className="mb-[30px]"
          />
          <span className="text-[##01CAB0] bg-[rgba(1,202,176,0.2)] inline-flex items-center py-[4px] px-[16px] text-[14px] leading-7 font-medium rounded-[100px]  ">
            <Image
              width="24"
              height="24"
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjFIMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyAxMEgyMSIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDZMMTIgM0wxOSA2IiBzdHJva2U9IiMwMUNBQjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQgMTBWMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjAgMTBWMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNiAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="delivery"
              className="mr-[8px] w-6 h-6 "
            />
            Finance
          </span>
        </div>
        <div className="md:flex-row flex-col-reverse  flex justify-between  mt-[80px]">
          <div className="w-full   md:w-[48%] mb-[30px]">
            <div data-aos="fade-up" data-aos-duration="1200" className="mm:block hidden w-full mb-[34px]">
              <Image
                width="170"
                height="64"
                src="https://udevs.io/static/iman-8d343bfc270029c181003633c9652299.svg"
                alt="smsuz"
                className="mb-[30px]"
              />
              <span className="text-[#4473E5] bg-[rgba(68, 115, 229, 0.2)] inline-flex items-center py-[4px] px-[16px] text-[14px] leading-7 font-medium rounded-[100px]  ">
                <Image
                  width="24"
                  height="24"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMjFIMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMyAxMEgyMSIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik01IDZMMTIgM0wxOSA2IiBzdHJva2U9IiMwMUNBQjAiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQgMTBWMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjAgMTBWMjEiIHN0cm9rZT0iIzAxQ0FCMCIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xMiAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNiAxNFYxNyIgc3Ryb2tlPSIjMDFDQUIwIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="delivery"
                  className="mr-[8px] w-6 h-6 "
                />
                Finance
              </span>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1200"
              className="text-[20px] leading-[40px] font-[500] text-[#464359] mb-[26px]"
            >
              Iman - It is a mutual financing platform based on the principles of Islamic Finance. Buyers, sellers and
              investors meet here.
            </p>
            <div className="my-[24px] mx-0">
              <h3 data-aos="fade-up" data-aos-duration="1200" className="mb-[25px] text-[24px] font-bold  ">
                What we did?
              </h3>
              <div data-aos="fade-up" data-aos-duration="1200" className="mw:grid-cols-3 grid grid-cols-1">
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <Image
                    width="56"
                    height="56"
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM3LjMzMyA5LjMzMzI1SDE4LjY2NjNDMTcuMzc3NyA5LjMzMzI1IDE2LjMzMyAxMC4zNzc5IDE2LjMzMyAxMS42NjY2VjQ0LjMzMzNDMTYuMzMzIDQ1LjYyMTkgMTcuMzc3NyA0Ni42NjY2IDE4LjY2NjMgNDYuNjY2NkgzNy4zMzNDMzguNjIxNyA0Ni42NjY2IDM5LjY2NjMgNDUuNjIxOSAzOS42NjYzIDQ0LjMzMzNWMTEuNjY2NkMzOS42NjYzIDEwLjM3NzkgMzguNjIxNyA5LjMzMzI1IDM3LjMzMyA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNS42NjcgMTEuNjY2N0gzMC4zMzM3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt="Mobile design"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Mobile design</span>
                </div>
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <Image
                    width="56"
                    height="56"
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjY2NjcgMTguNjY2OEMzNS4yNDQgMTguNjY2OCAzNy4zMzMzIDE2LjU3NzUgMzcuMzMzMyAxNC4wMDAyQzM3LjMzMzMgMTEuNDIyOCAzNS4yNDQgOS4zMzM1IDMyLjY2NjcgOS4zMzM1QzMwLjA4OTMgOS4zMzM1IDI4IDExLjQyMjggMjggMTQuMDAwMkMyOCAxNi41Nzc1IDMwLjA4OTMgMTguNjY2OCAzMi42NjY3IDE4LjY2NjhaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzMzMDEgMTRIMjcuOTk5NyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNy4zMzMgMTRINDYuNjY2MyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC42NjY3IDMyLjY2NjhDMjEuMjQ0IDMyLjY2NjggMjMuMzMzMyAzMC41Nzc1IDIzLjMzMzMgMjguMDAwMkMyMy4zMzMzIDI1LjQyMjggMjEuMjQ0IDIzLjMzMzUgMTguNjY2NyAyMy4zMzM1QzE2LjA4OTMgMjMuMzMzNSAxNCAyNS40MjI4IDE0IDI4LjAwMDJDMTQgMzAuNTc3NSAxNi4wODkzIDMyLjY2NjggMTguNjY2NyAzMi42NjY4WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjMzMzAxIDI4SDEzLjk5OTciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMuMzMzIDI4SDQ2LjY2NjMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzkuNjY2NyA0Ni42NjY4QzQyLjI0NCA0Ni42NjY4IDQ0LjMzMzMgNDQuNTc3NSA0NC4zMzMzIDQyLjAwMDJDNDQuMzMzMyAzOS40MjI4IDQyLjI0NCAzNy4zMzM1IDM5LjY2NjcgMzcuMzMzNUMzNy4wODkzIDM3LjMzMzUgMzUgMzkuNDIyOCAzNSA0Mi4wMDAyQzM1IDQ0LjU3NzUgMzcuMDg5MyA0Ni42NjY4IDM5LjY2NjcgNDYuNjY2OFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzMwMSA0MkgzNC45OTk3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ0LjMzMyA0Mkg0Ni42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt="Admin panel"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Admin panel</span>
                </div>
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <Image
                    width="56"
                    height="56"
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                    alt="Crossplatform"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Crossplatform</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mm:  md:w-[48%] mb-[30px]">
            <div className="flex items-center justify-center w-full h-full ">
              <Image
                width="547"
                height="408"
                data-aos="zoom-in"
                data-aos-duration="1200"
                src="https://udevs.io/static/imanApp-121e2c6598e85d2d53bec9ad7504dee3.png"
                alt="Мобильная разработка"
                className="w-full object-contain  rounded-[20px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iman;
