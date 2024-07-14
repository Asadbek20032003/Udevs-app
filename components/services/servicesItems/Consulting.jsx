// import React from "react";
import Image from "next/image";
const Consulting = () => {
  return (
    <div
      id="consulting"
      className=" w-full py-[80px] bg-cover bg-no-repeat bg-[50%] bg-[url('data:image/jpeg;base64,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')]"
    >
      <div className="container m-auto">
        <h1
          data-aos="fade-up"
          data-aos-duration="1200"
          className="mm:text-[64px] mm:text-start text-[32px] text-center leading-[64px] font-extrabold text-[#1b5bf7]"
        >
          IT consulting
        </h1>
        <div className="md:flex-row flex-col-reverse items-center flex justify-between mt-[80px]">
          <div className="w-full max-w-[500px] md:w-[48%] mb-[30px]">
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="text-[24px] leading-[40px] font-[500] text-[#18191f] mb-[26px]"
            >
              We can improve the qualifications of your employees thereby increasing the efficiency of your company
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="1400"
              className="grid mw:grid-cols-3  grid-cols-1 my-[40px] mx-0"
            >
              <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff] ">
                <Image
                  width="56"
                  height="56"
                  className="mb-[12px] w-[56px] h-[56px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ0LjMzMyA5LjMzMzVIMTEuNjY2M0MxMC4zNzc3IDkuMzMzNSA5LjMzMzAxIDEwLjM3ODIgOS4zMzMwMSAxMS42NjY4VjQ0LjMzMzVDOS4zMzMwMSA0NS42MjIyIDEwLjM3NzcgNDYuNjY2OCAxMS42NjYzIDQ2LjY2NjhINDQuMzMzQzQ1LjYyMTcgNDYuNjY2OCA0Ni42NjYzIDQ1LjYyMjIgNDYuNjY2MyA0NC4zMzM1VjExLjY2NjhDNDYuNjY2MyAxMC4zNzgyIDQ1LjYyMTcgOS4zMzM1IDQ0LjMzMyA5LjMzMzVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzMzMDEgMTguNjY2NUg0Ni42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE4LjY2NyA5LjMzMzVWMTguNjY2OCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="Frontend"
                />
                <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Frontend</span>
              </div>
              <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                <Image
                  width="56"
                  height="56"
                  className="mb-[12px] w-[56px] h-[56px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjMzMzMgMTguNjY2NUw3IDI3Ljk5OThMMTYuMzMzMyAzNy4zMzMyIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM5LjY2NyAxOC42NjY1TDQ5LjAwMDMgMjcuOTk5OEwzOS42NjcgMzcuMzMzMiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zMi42NjYzIDkuMzMzNUwyMy4zMzMgNDYuNjY2OCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="Backend"
                />
                <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Backend</span>
              </div>
              <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                <Image
                  width="56"
                  height="56"
                  className="mb-[12px] w-[56px] h-[56px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjY2NjMgOS4zMzM1SDQ0LjMzM0M0NC45NTE4IDkuMzMzNSA0NS41NDUzIDkuNTc5MzMgNDUuOTgyOSAxMC4wMTY5QzQ2LjQyMDUgMTAuNDU0NSA0Ni42NjYzIDExLjA0OCA0Ni42NjYzIDExLjY2NjhWMjMuMzMzNUM0Ni42NjYzIDIzLjk1MjMgNDYuNDIwNSAyNC41NDU4IDQ1Ljk4MjkgMjQuOTgzNEM0NS41NDUzIDI1LjQyMSA0NC45NTE4IDI1LjY2NjggNDQuMzMzIDI1LjY2NjhIMjcuOTk5N0MyNy4zODA4IDI1LjY2NjggMjYuNzg3MyAyNS45MTI3IDI2LjM0OTggMjYuMzUwMkMyNS45MTIyIDI2Ljc4NzggMjUuNjY2MyAyNy4zODEzIDI1LjY2NjMgMjguMDAwMlY0NC4zMzM1QzI1LjY2NjMgNDQuOTUyMyAyNS40MjA1IDQ1LjU0NTggMjQuOTgyOSA0NS45ODM0QzI0LjU0NTMgNDYuNDIxIDIzLjk1MTggNDYuNjY2OCAyMy4zMzMgNDYuNjY2OEgxMS42NjYzQzExLjA0NzUgNDYuNjY2OCAxMC40NTQgNDYuNDIxIDEwLjAxNjQgNDUuOTgzNEM5LjU3ODg0IDQ1LjU0NTggOS4zMzMwMSA0NC45NTIzIDkuMzMzMDEgNDQuMzMzNVYxMS42NjY4QzkuMzMzMDEgMTEuMDQ4IDkuNTc4ODQgMTAuNDU0NSAxMC4wMTY0IDEwLjAxNjlDMTAuNDU0IDkuNTc5MzMgMTEuMDQ3NSA5LjMzMzUgMTEuNjY2MyA5LjMzMzUiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzMwMSAxOC42NjY1SDEzLjk5OTciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzMwMSAyOEgxNi4zMzMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzMwMSAzNy4zMzM1SDEzLjk5OTciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTguNjY3IDkuMzMzNVYxNC4wMDAyIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI4IDkuMzMzNVYxNi4zMzM1IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTM3LjMzMyA5LjMzMzVWMTQuMDAwMiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="Architecture"
                />
                <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Architecture</span>
              </div>
              <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                <Image
                  width="56"
                  height="56"
                  className="mb-[12px] w-[56px] h-[56px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIyLjkzMiAyMS40MDEyQzIxLjYyNjkgMjAuMDk1NiAxOS45NjM4IDE5LjIwNjQgMTguMTUzMyAxOC44NDYxQzE2LjM0MjcgMTguNDg1NyAxNC40NjU5IDE4LjY3MDQgMTIuNzYwMyAxOS4zNzY3QzExLjA1NDcgMjAuMDgzIDkuNTk2ODggMjEuMjc5MyA4LjU3MTE5IDIyLjgxNDJDNy41NDU1MSAyNC4zNDkxIDYuOTk4MDUgMjYuMTUzOCA2Ljk5ODA1IDI3Ljk5OThDNi45OTgwNSAyOS44NDU5IDcuNTQ1NTEgMzEuNjUwNSA4LjU3MTE5IDMzLjE4NTVDOS41OTY4OCAzNC43MjA0IDExLjA1NDcgMzUuOTE2NyAxMi43NjAzIDM2LjYyM0MxNC40NjU5IDM3LjMyOTMgMTYuMzQyNyAzNy41MTQgMTguMTUzMyAzNy4xNTM2QzE5Ljk2MzggMzYuNzkzMyAyMS42MjY5IDM1LjkwNDEgMjIuOTMyIDM0LjU5ODVDMjUuMDAzMSAzMi43MjAzIDI2LjcxOTcgMzAuNDg1MyAyOCAyNy45OTk4QzI5LjI4MDQgMjUuNTE0NCAzMC45OTcgMjMuMjc5MyAzMy4wNjggMjEuNDAxMkMzNC4zNzMyIDIwLjA5NTYgMzYuMDM2MyAxOS4yMDY0IDM3Ljg0NjggMTguODQ2MUMzOS42NTc0IDE4LjQ4NTcgNDEuNTM0MiAxOC42NzA0IDQzLjIzOTggMTkuMzc2N0M0NC45NDU0IDIwLjA4MyA0Ni40MDMyIDIxLjI3OTMgNDcuNDI4OSAyMi44MTQyQzQ4LjQ1NDYgMjQuMzQ5MSA0OS4wMDIgMjYuMTUzOCA0OS4wMDIgMjcuOTk5OEM0OS4wMDIgMjkuODQ1OSA0OC40NTQ2IDMxLjY1MDUgNDcuNDI4OSAzMy4xODU1QzQ2LjQwMzIgMzQuNzIwNCA0NC45NDU0IDM1LjkxNjcgNDMuMjM5OCAzNi42MjNDNDEuNTM0MiAzNy4zMjkzIDM5LjY1NzQgMzcuNTE0IDM3Ljg0NjggMzcuMTUzNkMzNi4wMzYzIDM2Ljc5MzMgMzQuMzczMiAzNS45MDQxIDMzLjA2OCAzNC41OTg1QzMwLjk5NyAzMi43MjAzIDI5LjI4MDQgMzAuNDg1MyAyOCAyNy45OTk4QzI2LjcxOTcgMjUuNTE0NCAyNS4wMDMxIDIzLjI3OTMgMjIuOTMyIDIxLjQwMTIiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                  alt="DevOps"
                />
                <span className="text-[#000] text-[18px] font-semibold leading-[30px]">DevOps</span>
              </div>
              <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                <Image
                  width="56"
                  height="56"
                  className="mb-[12px] w-[56px] h-[56px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQyLjAwMDMgOS4zMzM1SDIzLjMzMzdDMjAuNzU2MyA5LjMzMzUgMTguNjY3IDExLjQyMjggMTguNjY3IDE0LjAwMDJWMzIuNjY2OEMxOC42NjcgMzUuMjQ0MiAyMC43NTYzIDM3LjMzMzUgMjMuMzMzNyAzNy4zMzM1SDQyLjAwMDNDNDQuNTc3NyAzNy4zMzM1IDQ2LjY2NyAzNS4yNDQyIDQ2LjY2NyAzMi42NjY4VjE0LjAwMDJDNDYuNjY3IDExLjQyMjggNDQuNTc3NyA5LjMzMzUgNDIuMDAwMyA5LjMzMzVaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTMyLjY2NjMgMTguNjY2NUgxMy45OTk3QzExLjQyMjMgMTguNjY2NSA5LjMzMzAxIDIwLjc1NTggOS4zMzMwMSAyMy4zMzMyVjQxLjk5OThDOS4zMzMwMSA0NC41NzcyIDExLjQyMjMgNDYuNjY2NSAxMy45OTk3IDQ2LjY2NjVIMzIuNjY2M0MzNS4yNDM3IDQ2LjY2NjUgMzcuMzMzIDQ0LjU3NzIgMzcuMzMzIDQxLjk5OThWMjMuMzMzMkMzNy4zMzMgMjAuNzU1OCAzNS4yNDM3IDE4LjY2NjUgMzIuNjY2MyAxOC42NjY1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="UX/UI"
                />
                <span className="text-[#000] text-[18px] font-semibold leading-[30px]">UX/UI</span>
              </div>
              <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                <Image
                  width="56"
                  height="56"
                  className="mb-[12px] w-[56px] h-[56px]"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM3LjMzMzggOS4zMzM1TDQ0LjMzMzggMTYuMzMzNUwxNS41MTcxIDQ1LjE1MDJDMTQuNTg4OSA0Ni4wNzg0IDEzLjMyOTkgNDYuNTk5OSAxMi4wMTcxIDQ2LjU5OTlDMTAuNzA0NCA0Ni41OTk5IDkuNDQ1MzkgNDYuMDc4NCA4LjUxNzEzIDQ1LjE1MDJDNy41ODg4NyA0NC4yMjE5IDcuMDY3MzggNDIuOTYyOSA3LjA2NzM4IDQxLjY1MDJDNy4wNjczOCA0MC4zMzc0IDcuNTg4ODcgMzkuMDc4NCA4LjUxNzEzIDM4LjE1MDJMMzcuMzMzOCA5LjMzMzUiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMuMzMzIDIzLjMzMzVIMzcuMzMzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ0LjMzMzcgMzVMNDcuODMzNyAzOC43MzMzQzQ4LjQyNzcgMzkuNDA2OSA0OC44MTQ3IDQwLjIzNzYgNDguOTQ4NCA0MS4xMjU3QzQ5LjA4MiA0Mi4wMTM3IDQ4Ljk1NjUgNDIuOTIxNSA0OC41ODcgNDMuNzQwMUM0OC4yMTc1IDQ0LjU1ODYgNDcuNjE5NyA0NS4yNTMyIDQ2Ljg2NTIgNDUuNzQwNEM0Ni4xMTA4IDQ2LjIyNzYgNDUuMjMxNyA0Ni40ODY3IDQ0LjMzMzcgNDYuNDg2N0M0My40MzU2IDQ2LjQ4NjcgNDIuNTU2NiA0Ni4yMjc2IDQxLjgwMjEgNDUuNzQwNEM0MS4wNDc2IDQ1LjI1MzIgNDAuNDQ5OCA0NC41NTg2IDQwLjA4MDMgNDMuNzQwMUMzOS43MTA4IDQyLjkyMTUgMzkuNTg1MyA0Mi4wMTM3IDM5LjcxODkgNDEuMTI1N0MzOS44NTI2IDQwLjIzNzYgNDAuMjM5NiAzOS40MDY5IDQwLjgzMzcgMzguNzMzM0w0NC4zMzM3IDM1IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                  alt="QA"
                />
                <span className="text-[#000] text-[18px] font-semibold leading-[30px]">QA</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[500px] md:w-[48%] mb-[30px]">
            <div className="">
              <Image
                width="500"
                height="314"
                data-aos="zoom-in"
                data-aos-duration="1200"
                src="https://udevs.io/static/consulting-41b53d1dd307a65f09f8017660a0304c.svg"
                alt="Мобильная разработка"
                className="w-full object-contain z-[10] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consulting;
