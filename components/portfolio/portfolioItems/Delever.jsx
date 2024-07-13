// import React from "react";

const Delevers = () => {
  return (
    <div
      id="delever"
      className=" w-full py-[80px] bg-cover bg-no-repeat bg-[50%] bg-[url('data:image/jpeg;base64,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')]"
    >
      <div className="container m-auto">
        <div data-aos="fade-up" data-aos-duration="1200" className="mm:hidden block w-full mb-[34px]">
          <img
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUyIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjUyIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNDQgMi44OEMyMy4xNzYgMi44OCAyNy4zMTQ3IDMuODQgMzAuODU2IDUuNzZDMzQuNDQgNy42MzczMyAzNy4xOTIgMTAuMjgyNyAzOS4xMTIgMTMuNjk2QzQxLjAzMiAxNy4xMDkzIDQxLjk5MiAyMS4wMTMzIDQxLjk5MiAyNS40MDhDNDEuOTkyIDI5Ljc2IDQxLjAxMDcgMzMuNjQyNyAzOS4wNDggMzcuMDU2QzM3LjEyOCA0MC40NjkzIDM0LjM3NiA0My4xNTczIDMwLjc5MiA0NS4xMkMyNy4yNTA3IDQ3LjA0IDIzLjEzMzMgNDggMTguNDQgNDhIMC41ODRWMi44OEgxOC40NFpNMTcuNDggMzYuOTI4QzIxLjE0OTMgMzYuOTI4IDI0LjAyOTMgMzUuOTI1MyAyNi4xMiAzMy45MkMyOC4yMTA3IDMxLjkxNDcgMjkuMjU2IDI5LjA3NzMgMjkuMjU2IDI1LjQwOEMyOS4yNTYgMjEuNjk2IDI4LjIxMDcgMTguODM3MyAyNi4xMiAxNi44MzJDMjQuMDI5MyAxNC43ODQgMjEuMTQ5MyAxMy43NiAxNy40OCAxMy43NkgxMy4xMjhWMzYuOTI4SDE3LjQ4Wk04MS45NTA1IDI5LjYzMkM4MS45NTA1IDMwLjYxMzMgODEuODg2NSAzMS41OTQ3IDgxLjc1ODUgMzIuNTc2SDU4LjAxNDVDNTguMTQyNSAzNC41Mzg3IDU4LjY3NTggMzYuMDEwNyA1OS42MTQ1IDM2Ljk5MkM2MC41OTU4IDM3LjkzMDcgNjEuODMzMiAzOC40IDYzLjMyNjUgMzguNEM2NS40MTcyIDM4LjQgNjYuOTEwNSAzNy40NjEzIDY3LjgwNjUgMzUuNTg0SDgxLjE4MjVDODAuNjI3OCAzOC4wNTg3IDc5LjUzOTggNDAuMjc3MyA3Ny45MTg1IDQyLjI0Qzc2LjMzOTggNDQuMTYgNzQuMzM0NSA0NS42NzQ3IDcxLjkwMjUgNDYuNzg0QzY5LjQ3MDUgNDcuODkzMyA2Ni43ODI1IDQ4LjQ0OCA2My44Mzg1IDQ4LjQ0OEM2MC4yOTcyIDQ4LjQ0OCA1Ny4xMzk4IDQ3LjcwMTMgNTQuMzY2NSA0Ni4yMDhDNTEuNjM1OCA0NC43MTQ3IDQ5LjQ4MTIgNDIuNTgxMyA0Ny45MDI1IDM5LjgwOEM0Ni4zNjY1IDM3LjAzNDcgNDUuNTk4NSAzMy43NzA3IDQ1LjU5ODUgMzAuMDE2QzQ1LjU5ODUgMjYuMjYxMyA0Ni4zNjY1IDIzLjAxODcgNDcuOTAyNSAyMC4yODhDNDkuNDM4NSAxNy41MTQ3IDUxLjU3MTggMTUuMzgxMyA1NC4zMDI1IDEzLjg4OEM1Ny4wNzU4IDEyLjM5NDcgNjAuMjU0NSAxMS42NDggNjMuODM4NSAxMS42NDhDNjcuMzc5OCAxMS42NDggNzAuNTE1OCAxMi4zNzMzIDczLjI0NjUgMTMuODI0Qzc1Ljk3NzIgMTUuMjc0NyA3OC4xMTA1IDE3LjM2NTMgNzkuNjQ2NSAyMC4wOTZDODEuMTgyNSAyMi43ODQgODEuOTUwNSAyNS45NjI3IDgxLjk1MDUgMjkuNjMyWk02OS4xNTA1IDI2LjQ5NkM2OS4xNTA1IDI0Ljk2IDY4LjYzODUgMjMuNzY1MyA2Ny42MTQ1IDIyLjkxMkM2Ni41OTA1IDIyLjAxNiA2NS4zMTA1IDIxLjU2OCA2My43NzQ1IDIxLjU2OEM2Mi4yMzg1IDIxLjU2OCA2MC45Nzk4IDIxLjk5NDcgNTkuOTk4NSAyMi44NDhDNTkuMDE3MiAyMy42NTg3IDU4LjM3NzIgMjQuODc0NyA1OC4wNzg1IDI2LjQ5Nkg2OS4xNTA1Wk05OS42MjggMC42Mzk5OTlWNDhIODcuMDg0VjAuNjM5OTk5SDk5LjYyOFpNMTQxLjA3NiAyOS42MzJDMTQxLjA3NiAzMC42MTMzIDE0MS4wMTIgMzEuNTk0NyAxNDAuODg0IDMyLjU3NkgxMTcuMTRDMTE3LjI2OCAzNC41Mzg3IDExNy44MDEgMzYuMDEwNyAxMTguNzQgMzYuOTkyQzExOS43MjEgMzcuOTMwNyAxMjAuOTU4IDM4LjQgMTIyLjQ1MiAzOC40QzEyNC41NDIgMzguNCAxMjYuMDM2IDM3LjQ2MTMgMTI2LjkzMiAzNS41ODRIMTQwLjMwOEMxMzkuNzUzIDM4LjA1ODcgMTM4LjY2NSA0MC4yNzczIDEzNy4wNDQgNDIuMjRDMTM1LjQ2NSA0NC4xNiAxMzMuNDYgNDUuNjc0NyAxMzEuMDI4IDQ2Ljc4NEMxMjguNTk2IDQ3Ljg5MzMgMTI1LjkwOCA0OC40NDggMTIyLjk2NCA0OC40NDhDMTE5LjQyMiA0OC40NDggMTE2LjI2NSA0Ny43MDEzIDExMy40OTIgNDYuMjA4QzExMC43NjEgNDQuNzE0NyAxMDguNjA2IDQyLjU4MTMgMTA3LjAyOCAzOS44MDhDMTA1LjQ5MiAzNy4wMzQ3IDEwNC43MjQgMzMuNzcwNyAxMDQuNzI0IDMwLjAxNkMxMDQuNzI0IDI2LjI2MTMgMTA1LjQ5MiAyMy4wMTg3IDEwNy4wMjggMjAuMjg4QzEwOC41NjQgMTcuNTE0NyAxMTAuNjk3IDE1LjM4MTMgMTEzLjQyOCAxMy44ODhDMTE2LjIwMSAxMi4zOTQ3IDExOS4zOCAxMS42NDggMTIyLjk2NCAxMS42NDhDMTI2LjUwNSAxMS42NDggMTI5LjY0MSAxMi4zNzMzIDEzMi4zNzIgMTMuODI0QzEzNS4xMDIgMTUuMjc0NyAxMzcuMjM2IDE3LjM2NTMgMTM4Ljc3MiAyMC4wOTZDMTQwLjMwOCAyMi43ODQgMTQxLjA3NiAyNS45NjI3IDE0MS4wNzYgMjkuNjMyWk0xMjguMjc2IDI2LjQ5NkMxMjguMjc2IDI0Ljk2IDEyNy43NjQgMjMuNzY1MyAxMjYuNzQgMjIuOTEyQzEyNS43MTYgMjIuMDE2IDEyNC40MzYgMjEuNTY4IDEyMi45IDIxLjU2OEMxMjEuMzY0IDIxLjU2OCAxMjAuMTA1IDIxLjk5NDcgMTE5LjEyNCAyMi44NDhDMTE4LjE0MiAyMy42NTg3IDExNy41MDIgMjQuODc0NyAxMTcuMjA0IDI2LjQ5NkgxMjguMjc2Wk0xNjMuNDI1IDM2LjE2TDE3MC4xNDUgMTIuMDk2SDE4My41MjFMMTcxLjE2OSA0OEgxNTUuNTUzTDE0My4yMDEgMTIuMDk2SDE1Ni41NzdMMTYzLjQyNSAzNi4xNlpNMjIyLjA3NiAyOS42MzJDMjIyLjA3NiAzMC42MTMzIDIyMi4wMTIgMzEuNTk0NyAyMjEuODg0IDMyLjU3NkgxOTguMTRDMTk4LjI2OCAzNC41Mzg3IDE5OC44MDEgMzYuMDEwNyAxOTkuNzQgMzYuOTkyQzIwMC43MjEgMzcuOTMwNyAyMDEuOTU4IDM4LjQgMjAzLjQ1MiAzOC40QzIwNS41NDIgMzguNCAyMDcuMDM2IDM3LjQ2MTMgMjA3LjkzMiAzNS41ODRIMjIxLjMwOEMyMjAuNzUzIDM4LjA1ODcgMjE5LjY2NSA0MC4yNzczIDIxOC4wNDQgNDIuMjRDMjE2LjQ2NSA0NC4xNiAyMTQuNDYgNDUuNjc0NyAyMTIuMDI4IDQ2Ljc4NEMyMDkuNTk2IDQ3Ljg5MzMgMjA2LjkwOCA0OC40NDggMjAzLjk2NCA0OC40NDhDMjAwLjQyMiA0OC40NDggMTk3LjI2NSA0Ny43MDEzIDE5NC40OTIgNDYuMjA4QzE5MS43NjEgNDQuNzE0NyAxODkuNjA2IDQyLjU4MTMgMTg4LjAyOCAzOS44MDhDMTg2LjQ5MiAzNy4wMzQ3IDE4NS43MjQgMzMuNzcwNyAxODUuNzI0IDMwLjAxNkMxODUuNzI0IDI2LjI2MTMgMTg2LjQ5MiAyMy4wMTg3IDE4OC4wMjggMjAuMjg4QzE4OS41NjQgMTcuNTE0NyAxOTEuNjk3IDE1LjM4MTMgMTk0LjQyOCAxMy44ODhDMTk3LjIwMSAxMi4zOTQ3IDIwMC4zOCAxMS42NDggMjAzLjk2NCAxMS42NDhDMjA3LjUwNSAxMS42NDggMjEwLjY0MSAxMi4zNzMzIDIxMy4zNzIgMTMuODI0QzIxNi4xMDIgMTUuMjc0NyAyMTguMjM2IDE3LjM2NTMgMjE5Ljc3MiAyMC4wOTZDMjIxLjMwOCAyMi43ODQgMjIyLjA3NiAyNS45NjI3IDIyMi4wNzYgMjkuNjMyWk0yMDkuMjc2IDI2LjQ5NkMyMDkuMjc2IDI0Ljk2IDIwOC43NjQgMjMuNzY1MyAyMDcuNzQgMjIuOTEyQzIwNi43MTYgMjIuMDE2IDIwNS40MzYgMjEuNTY4IDIwMy45IDIxLjU2OEMyMDIuMzY0IDIxLjU2OCAyMDEuMTA1IDIxLjk5NDcgMjAwLjEyNCAyMi44NDhDMTk5LjE0MiAyMy42NTg3IDE5OC41MDIgMjQuODc0NyAxOTguMjA0IDI2LjQ5NkgyMDkuMjc2Wk0yMzkuNzUzIDE4LjQzMkMyNDEuMTYxIDE2LjM4NCAyNDIuODY4IDE0Ljc2MjcgMjQ0Ljg3MyAxMy41NjhDMjQ2Ljg3OCAxMi4zNzMzIDI0OS4wMzMgMTEuNzc2IDI1MS4zMzcgMTEuNzc2VjI1LjE1MkgyNDcuODE3QzI0NS4wODYgMjUuMTUyIDI0My4wNiAyNS42ODUzIDI0MS43MzcgMjYuNzUyQzI0MC40MTQgMjcuODE4NyAyMzkuNzUzIDI5LjY3NDcgMjM5Ljc1MyAzMi4zMlY0OEgyMjcuMjA5VjEyLjA5NkgyMzkuNzUzVjE4LjQzMloiIGZpbGw9IiNGRjU3MjIiLz4KPC9zdmc+Cg=="
            alt="delever"
            className="mb-[30px]"
          />
          <span className="text-[#ff5722] bg-[rgba(255,87,34,0.2)] inline-flex items-center py-[4px] px-[16px] text-[14px] leading-7 font-medium rounded-[100px]  ">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkxMzQgMTkuNzkxN0M4LjQ0MTkzIDE5Ljc5MTcgOS4zNzQ2NyAxOC44NTg5IDkuMzc0NjcgMTcuNzA4M0M5LjM3NDY3IDE2LjU1NzcgOC40NDE5MyAxNS42MjUgNy4yOTEzNCAxNS42MjVDNi4xNDA3NSAxNS42MjUgNS4yMDgwMSAxNi41NTc3IDUuMjA4MDEgMTcuNzA4M0M1LjIwODAxIDE4Ljg1ODkgNi4xNDA3NSAxOS43OTE3IDcuMjkxMzQgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjcwODMgMTkuNzkxN0MxOC44NTg5IDE5Ljc5MTcgMTkuNzkxNyAxOC44NTg5IDE5Ljc5MTcgMTcuNzA4M0MxOS43OTE3IDE2LjU1NzcgMTguODU4OSAxNS42MjUgMTcuNzA4MyAxNS42MjVDMTYuNTU3NyAxNS42MjUgMTUuNjI1IDE2LjU1NzcgMTUuNjI1IDE3LjcwODNDMTUuNjI1IDE4Ljg1ODkgMTYuNTU3NyAxOS43OTE3IDE3LjcwODMgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMjA4MDEgMTcuNzA4NUgzLjEyNDY3VjEzLjU0MThNMi4wODMwMSA1LjIwODVIMTMuNTQxM1YxNy43MDg1TTkuMzc0NjggMTcuNzA4NUgxNS42MjQ3TTE5Ljc5MTMgMTcuNzA4NUgyMS44NzQ3VjExLjQ1ODVNMjEuODc0NyAxMS40NTg1SDEzLjU0MTNNMjEuODc0NyAxMS40NTg1TDE4Ljc0OTcgNi4yNTAxNkgxMy41NDEzIiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjEyNSA5LjM3NUg3LjI5MTY3IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
              alt="delivery"
              className="mr-[8px] w-6 h-6 "
            />
            Delivery
          </span>
        </div>
        <div className="md:flex-row-reverse items-center flex justify-between flex-col-reverse mt-[80px]">
          <div className="w-full  md:w-[48%] mb-[30px]">
            <div data-aos="fade-up" data-aos-duration="1200" className="mm:block hidden w-full mb-[34px]">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUyIiBoZWlnaHQ9IjQ5IiB2aWV3Qm94PSIwIDAgMjUyIDQ5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cGF0aCBkPSJNMTguNDQgMi44OEMyMy4xNzYgMi44OCAyNy4zMTQ3IDMuODQgMzAuODU2IDUuNzZDMzQuNDQgNy42MzczMyAzNy4xOTIgMTAuMjgyNyAzOS4xMTIgMTMuNjk2QzQxLjAzMiAxNy4xMDkzIDQxLjk5MiAyMS4wMTMzIDQxLjk5MiAyNS40MDhDNDEuOTkyIDI5Ljc2IDQxLjAxMDcgMzMuNjQyNyAzOS4wNDggMzcuMDU2QzM3LjEyOCA0MC40NjkzIDM0LjM3NiA0My4xNTczIDMwLjc5MiA0NS4xMkMyNy4yNTA3IDQ3LjA0IDIzLjEzMzMgNDggMTguNDQgNDhIMC41ODRWMi44OEgxOC40NFpNMTcuNDggMzYuOTI4QzIxLjE0OTMgMzYuOTI4IDI0LjAyOTMgMzUuOTI1MyAyNi4xMiAzMy45MkMyOC4yMTA3IDMxLjkxNDcgMjkuMjU2IDI5LjA3NzMgMjkuMjU2IDI1LjQwOEMyOS4yNTYgMjEuNjk2IDI4LjIxMDcgMTguODM3MyAyNi4xMiAxNi44MzJDMjQuMDI5MyAxNC43ODQgMjEuMTQ5MyAxMy43NiAxNy40OCAxMy43NkgxMy4xMjhWMzYuOTI4SDE3LjQ4Wk04MS45NTA1IDI5LjYzMkM4MS45NTA1IDMwLjYxMzMgODEuODg2NSAzMS41OTQ3IDgxLjc1ODUgMzIuNTc2SDU4LjAxNDVDNTguMTQyNSAzNC41Mzg3IDU4LjY3NTggMzYuMDEwNyA1OS42MTQ1IDM2Ljk5MkM2MC41OTU4IDM3LjkzMDcgNjEuODMzMiAzOC40IDYzLjMyNjUgMzguNEM2NS40MTcyIDM4LjQgNjYuOTEwNSAzNy40NjEzIDY3LjgwNjUgMzUuNTg0SDgxLjE4MjVDODAuNjI3OCAzOC4wNTg3IDc5LjUzOTggNDAuMjc3MyA3Ny45MTg1IDQyLjI0Qzc2LjMzOTggNDQuMTYgNzQuMzM0NSA0NS42NzQ3IDcxLjkwMjUgNDYuNzg0QzY5LjQ3MDUgNDcuODkzMyA2Ni43ODI1IDQ4LjQ0OCA2My44Mzg1IDQ4LjQ0OEM2MC4yOTcyIDQ4LjQ0OCA1Ny4xMzk4IDQ3LjcwMTMgNTQuMzY2NSA0Ni4yMDhDNTEuNjM1OCA0NC43MTQ3IDQ5LjQ4MTIgNDIuNTgxMyA0Ny45MDI1IDM5LjgwOEM0Ni4zNjY1IDM3LjAzNDcgNDUuNTk4NSAzMy43NzA3IDQ1LjU5ODUgMzAuMDE2QzQ1LjU5ODUgMjYuMjYxMyA0Ni4zNjY1IDIzLjAxODcgNDcuOTAyNSAyMC4yODhDNDkuNDM4NSAxNy41MTQ3IDUxLjU3MTggMTUuMzgxMyA1NC4zMDI1IDEzLjg4OEM1Ny4wNzU4IDEyLjM5NDcgNjAuMjU0NSAxMS42NDggNjMuODM4NSAxMS42NDhDNjcuMzc5OCAxMS42NDggNzAuNTE1OCAxMi4zNzMzIDczLjI0NjUgMTMuODI0Qzc1Ljk3NzIgMTUuMjc0NyA3OC4xMTA1IDE3LjM2NTMgNzkuNjQ2NSAyMC4wOTZDODEuMTgyNSAyMi43ODQgODEuOTUwNSAyNS45NjI3IDgxLjk1MDUgMjkuNjMyWk02OS4xNTA1IDI2LjQ5NkM2OS4xNTA1IDI0Ljk2IDY4LjYzODUgMjMuNzY1MyA2Ny42MTQ1IDIyLjkxMkM2Ni41OTA1IDIyLjAxNiA2NS4zMTA1IDIxLjU2OCA2My43NzQ1IDIxLjU2OEM2Mi4yMzg1IDIxLjU2OCA2MC45Nzk4IDIxLjk5NDcgNTkuOTk4NSAyMi44NDhDNTkuMDE3MiAyMy42NTg3IDU4LjM3NzIgMjQuODc0NyA1OC4wNzg1IDI2LjQ5Nkg2OS4xNTA1Wk05OS42MjggMC42Mzk5OTlWNDhIODcuMDg0VjAuNjM5OTk5SDk5LjYyOFpNMTQxLjA3NiAyOS42MzJDMTQxLjA3NiAzMC42MTMzIDE0MS4wMTIgMzEuNTk0NyAxNDAuODg0IDMyLjU3NkgxMTcuMTRDMTE3LjI2OCAzNC41Mzg3IDExNy44MDEgMzYuMDEwNyAxMTguNzQgMzYuOTkyQzExOS43MjEgMzcuOTMwNyAxMjAuOTU4IDM4LjQgMTIyLjQ1MiAzOC40QzEyNC41NDIgMzguNCAxMjYuMDM2IDM3LjQ2MTMgMTI2LjkzMiAzNS41ODRIMTQwLjMwOEMxMzkuNzUzIDM4LjA1ODcgMTM4LjY2NSA0MC4yNzczIDEzNy4wNDQgNDIuMjRDMTM1LjQ2NSA0NC4xNiAxMzMuNDYgNDUuNjc0NyAxMzEuMDI4IDQ2Ljc4NEMxMjguNTk2IDQ3Ljg5MzMgMTI1LjkwOCA0OC40NDggMTIyLjk2NCA0OC40NDhDMTE5LjQyMiA0OC40NDggMTE2LjI2NSA0Ny43MDEzIDExMy40OTIgNDYuMjA4QzExMC43NjEgNDQuNzE0NyAxMDguNjA2IDQyLjU4MTMgMTA3LjAyOCAzOS44MDhDMTA1LjQ5MiAzNy4wMzQ3IDEwNC43MjQgMzMuNzcwNyAxMDQuNzI0IDMwLjAxNkMxMDQuNzI0IDI2LjI2MTMgMTA1LjQ5MiAyMy4wMTg3IDEwNy4wMjggMjAuMjg4QzEwOC41NjQgMTcuNTE0NyAxMTAuNjk3IDE1LjM4MTMgMTEzLjQyOCAxMy44ODhDMTE2LjIwMSAxMi4zOTQ3IDExOS4zOCAxMS42NDggMTIyLjk2NCAxMS42NDhDMTI2LjUwNSAxMS42NDggMTI5LjY0MSAxMi4zNzMzIDEzMi4zNzIgMTMuODI0QzEzNS4xMDIgMTUuMjc0NyAxMzcuMjM2IDE3LjM2NTMgMTM4Ljc3MiAyMC4wOTZDMTQwLjMwOCAyMi43ODQgMTQxLjA3NiAyNS45NjI3IDE0MS4wNzYgMjkuNjMyWk0xMjguMjc2IDI2LjQ5NkMxMjguMjc2IDI0Ljk2IDEyNy43NjQgMjMuNzY1MyAxMjYuNzQgMjIuOTEyQzEyNS43MTYgMjIuMDE2IDEyNC40MzYgMjEuNTY4IDEyMi45IDIxLjU2OEMxMjEuMzY0IDIxLjU2OCAxMjAuMTA1IDIxLjk5NDcgMTE5LjEyNCAyMi44NDhDMTE4LjE0MiAyMy42NTg3IDExNy41MDIgMjQuODc0NyAxMTcuMjA0IDI2LjQ5NkgxMjguMjc2Wk0xNjMuNDI1IDM2LjE2TDE3MC4xNDUgMTIuMDk2SDE4My41MjFMMTcxLjE2OSA0OEgxNTUuNTUzTDE0My4yMDEgMTIuMDk2SDE1Ni41NzdMMTYzLjQyNSAzNi4xNlpNMjIyLjA3NiAyOS42MzJDMjIyLjA3NiAzMC42MTMzIDIyMi4wMTIgMzEuNTk0NyAyMjEuODg0IDMyLjU3NkgxOTguMTRDMTk4LjI2OCAzNC41Mzg3IDE5OC44MDEgMzYuMDEwNyAxOTkuNzQgMzYuOTkyQzIwMC43MjEgMzcuOTMwNyAyMDEuOTU4IDM4LjQgMjAzLjQ1MiAzOC40QzIwNS41NDIgMzguNCAyMDcuMDM2IDM3LjQ2MTMgMjA3LjkzMiAzNS41ODRIMjIxLjMwOEMyMjAuNzUzIDM4LjA1ODcgMjE5LjY2NSA0MC4yNzczIDIxOC4wNDQgNDIuMjRDMjE2LjQ2NSA0NC4xNiAyMTQuNDYgNDUuNjc0NyAyMTIuMDI4IDQ2Ljc4NEMyMDkuNTk2IDQ3Ljg5MzMgMjA2LjkwOCA0OC40NDggMjAzLjk2NCA0OC40NDhDMjAwLjQyMiA0OC40NDggMTk3LjI2NSA0Ny43MDEzIDE5NC40OTIgNDYuMjA4QzE5MS43NjEgNDQuNzE0NyAxODkuNjA2IDQyLjU4MTMgMTg4LjAyOCAzOS44MDhDMTg2LjQ5MiAzNy4wMzQ3IDE4NS43MjQgMzMuNzcwNyAxODUuNzI0IDMwLjAxNkMxODUuNzI0IDI2LjI2MTMgMTg2LjQ5MiAyMy4wMTg3IDE4OC4wMjggMjAuMjg4QzE4OS41NjQgMTcuNTE0NyAxOTEuNjk3IDE1LjM4MTMgMTk0LjQyOCAxMy44ODhDMTk3LjIwMSAxMi4zOTQ3IDIwMC4zOCAxMS42NDggMjAzLjk2NCAxMS42NDhDMjA3LjUwNSAxMS42NDggMjEwLjY0MSAxMi4zNzMzIDIxMy4zNzIgMTMuODI0QzIxNi4xMDIgMTUuMjc0NyAyMTguMjM2IDE3LjM2NTMgMjE5Ljc3MiAyMC4wOTZDMjIxLjMwOCAyMi43ODQgMjIyLjA3NiAyNS45NjI3IDIyMi4wNzYgMjkuNjMyWk0yMDkuMjc2IDI2LjQ5NkMyMDkuMjc2IDI0Ljk2IDIwOC43NjQgMjMuNzY1MyAyMDcuNzQgMjIuOTEyQzIwNi43MTYgMjIuMDE2IDIwNS40MzYgMjEuNTY4IDIwMy45IDIxLjU2OEMyMDIuMzY0IDIxLjU2OCAyMDEuMTA1IDIxLjk5NDcgMjAwLjEyNCAyMi44NDhDMTk5LjE0MiAyMy42NTg3IDE5OC41MDIgMjQuODc0NyAxOTguMjA0IDI2LjQ5NkgyMDkuMjc2Wk0yMzkuNzUzIDE4LjQzMkMyNDEuMTYxIDE2LjM4NCAyNDIuODY4IDE0Ljc2MjcgMjQ0Ljg3MyAxMy41NjhDMjQ2Ljg3OCAxMi4zNzMzIDI0OS4wMzMgMTEuNzc2IDI1MS4zMzcgMTEuNzc2VjI1LjE1MkgyNDcuODE3QzI0NS4wODYgMjUuMTUyIDI0My4wNiAyNS42ODUzIDI0MS43MzcgMjYuNzUyQzI0MC40MTQgMjcuODE4NyAyMzkuNzUzIDI5LjY3NDcgMjM5Ljc1MyAzMi4zMlY0OEgyMjcuMjA5VjEyLjA5NkgyMzkuNzUzVjE4LjQzMloiIGZpbGw9IiNGRjU3MjIiLz4KPC9zdmc+Cg=="
                alt="delever"
                className="mb-[30px]"
              />
              <span className="text-[#ff5722] bg-[rgba(255,87,34,0.2)] inline-flex items-center py-[4px] px-[16px] text-[14px] leading-7 font-medium rounded-[100px]  ">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNSAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTcuMjkxMzQgMTkuNzkxN0M4LjQ0MTkzIDE5Ljc5MTcgOS4zNzQ2NyAxOC44NTg5IDkuMzc0NjcgMTcuNzA4M0M5LjM3NDY3IDE2LjU1NzcgOC40NDE5MyAxNS42MjUgNy4yOTEzNCAxNS42MjVDNi4xNDA3NSAxNS42MjUgNS4yMDgwMSAxNi41NTc3IDUuMjA4MDEgMTcuNzA4M0M1LjIwODAxIDE4Ljg1ODkgNi4xNDA3NSAxOS43OTE3IDcuMjkxMzQgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTE3LjcwODMgMTkuNzkxN0MxOC44NTg5IDE5Ljc5MTcgMTkuNzkxNyAxOC44NTg5IDE5Ljc5MTcgMTcuNzA4M0MxOS43OTE3IDE2LjU1NzcgMTguODU4OSAxNS42MjUgMTcuNzA4MyAxNS42MjVDMTYuNTU3NyAxNS42MjUgMTUuNjI1IDE2LjU1NzcgMTUuNjI1IDE3LjcwODNDMTUuNjI1IDE4Ljg1ODkgMTYuNTU3NyAxOS43OTE3IDE3LjcwODMgMTkuNzkxN1oiIHN0cm9rZT0iI0ZGNTcyMiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTUuMjA4MDEgMTcuNzA4NUgzLjEyNDY3VjEzLjU0MThNMi4wODMwMSA1LjIwODVIMTMuNTQxM1YxNy43MDg1TTkuMzc0NjggMTcuNzA4NUgxNS42MjQ3TTE5Ljc5MTMgMTcuNzA4NUgyMS44NzQ3VjExLjQ1ODVNMjEuODc0NyAxMS40NTg1SDEzLjU0MTNNMjEuODc0NyAxMS40NTg1TDE4Ljc0OTcgNi4yNTAxNkgxMy41NDEzIiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zLjEyNSA5LjM3NUg3LjI5MTY3IiBzdHJva2U9IiNGRjU3MjIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo="
                  alt="delivery"
                  className="mr-[8px] w-6 h-6 "
                />
                Delivery
              </span>
            </div>
            <p
              data-aos="fade-up"
              data-aos-duration="1300"
              className="text-[20px] leading-[40px] font-[500] text-[#464359] mb-[26px]"
            >
              Delever - Delivery service automation targeted at both consumers and restaurants.
            </p>
            <div className="my-[24px] mx-0">
              <h3 data-aos="fade-up" data-aos-duration="1200" className="mb-[25px] text-[24px] font-bold  ">
                What we did?
              </h3>
              <div data-aos="fade-up" data-aos-duration="1300" className="mw:grid-cols-3 grid grid-cols-1 ">
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff] ">
                  <img
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI4IDQ5QzM5LjU5OCA0OSA0OSAzOS41OTggNDkgMjhDNDkgMTYuNDAyIDM5LjU5OCA3IDI4IDdDMTYuNDAyIDcgNyAxNi40MDIgNyAyOEM3IDM5LjU5OCAxNi40MDIgNDkgMjggNDlaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTguNDAwMzkgMjFINDcuNjAwNCIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik04LjQwMDM5IDM1SDQ3LjYwMDQiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjYuODMzMiA3QzIyLjkwMjMgMTMuMjk5MSAyMC44MTg0IDIwLjU3NSAyMC44MTg0IDI4QzIwLjgxODQgMzUuNDI1IDIyLjkwMjMgNDIuNzAwOSAyNi44MzMyIDQ5IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTI5LjE2NyA3QzMzLjA5NzkgMTMuMjk5MSAzNS4xODE4IDIwLjU3NSAzNS4xODE4IDI4QzM1LjE4MTggMzUuNDI1IDMzLjA5NzkgNDIuNzAwOSAyOS4xNjcgNDkiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    alt="Website"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Website</span>
                </div>
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <img
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMyLjY2NjcgMTguNjY2OEMzNS4yNDQgMTguNjY2OCAzNy4zMzMzIDE2LjU3NzUgMzcuMzMzMyAxNC4wMDAyQzM3LjMzMzMgMTEuNDIyOCAzNS4yNDQgOS4zMzM1IDMyLjY2NjcgOS4zMzM1QzMwLjA4OTMgOS4zMzM1IDI4IDExLjQyMjggMjggMTQuMDAwMkMyOCAxNi41Nzc1IDMwLjA4OTMgMTguNjY2OCAzMi42NjY3IDE4LjY2NjhaIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTkuMzMzMDEgMTRIMjcuOTk5NyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNy4zMzMgMTRINDYuNjY2MyIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xOC42NjY3IDMyLjY2NjhDMjEuMjQ0IDMyLjY2NjggMjMuMzMzMyAzMC41Nzc1IDIzLjMzMzMgMjguMDAwMkMyMy4zMzMzIDI1LjQyMjggMjEuMjQ0IDIzLjMzMzUgMTguNjY2NyAyMy4zMzM1QzE2LjA4OTMgMjMuMzMzNSAxNCAyNS40MjI4IDE0IDI4LjAwMDJDMTQgMzAuNTc3NSAxNi4wODkzIDMyLjY2NjggMTguNjY2NyAzMi42NjY4WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik05LjMzMzAxIDI4SDEzLjk5OTciIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMjMuMzMzIDI4SDQ2LjY2NjMiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMzkuNjY2NyA0Ni42NjY4QzQyLjI0NCA0Ni42NjY4IDQ0LjMzMzMgNDQuNTc3NSA0NC4zMzMzIDQyLjAwMDJDNDQuMzMzMyAzOS40MjI4IDQyLjI0NCAzNy4zMzM1IDM5LjY2NjcgMzcuMzMzNUMzNy4wODkzIDM3LjMzMzUgMzUgMzkuNDIyOCAzNSA0Mi4wMDAyQzM1IDQ0LjU3NzUgMzcuMDg5MyA0Ni42NjY4IDM5LjY2NjcgNDYuNjY2OFoiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOS4zMzMwMSA0MkgzNC45OTk3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTQ0LjMzMyA0Mkg0Ni42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt="Admin panel"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Admin panel</span>
                </div>
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <img
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTkiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1OSA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjU5IiBoZWlnaHQ9IjU2IiBmaWxsPSIjQzRDNEM0IiBmaWxsLW9wYWNpdHk9IjAuMDEiLz4KPHBhdGggb3BhY2l0eT0iMC4zIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTQzLjA2MTMgNy43MjcyNEgyMy40MTc4VjQwLjM0OTNINDMuMDYxM1Y3LjcyNzI0Wk0yMy40MTc4IDVDMjEuODA3OSA1IDIwLjUwMjkgNi4yMjEwNiAyMC41MDI5IDcuNzI3MjRWNDAuMzQ5M0MyMC41MDI5IDQxLjg1NTUgMjEuODA3OSA0My4wNzY2IDIzLjQxNzggNDMuMDc2Nkg0My4wNjEzQzQ0LjY3MTEgNDMuMDc2NiA0NS45NzYxIDQxLjg1NTUgNDUuOTc2MSA0MC4zNDkzVjcuNzI3MjRDNDUuOTc2MSA2LjIyMTA2IDQ0LjY3MTEgNSA0My4wNjEzIDVIMjMuNDE3OFoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZD0iTTYuMzIwMzEgMTcuMzc4MUM2LjMyMDMxIDE0LjM2NTYgOC45MzAzNCAxMS45MjM2IDEyLjE1IDExLjkyMzZIMjYuMzg3OEMyOS42MDc0IDExLjkyMzYgMzIuMjE3NSAxNC4zNjU2IDMyLjIxNzUgMTcuMzc4MVY0NC41NDU3QzMyLjIxNzUgNDcuNTU4IDI5LjYwNzQgNTAuMDAwMSAyNi4zODc4IDUwLjAwMDFIMTIuMTVDOC45MzAzNCA1MC4wMDAxIDYuMzIwMzEgNDcuNTU4IDYuMzIwMzEgNDQuNTQ1N1YxNy4zNzgxWiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPgo8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI2LjM4NzggMTQuNjUwOEgxMi4xNUMxMC41NDAyIDE0LjY1MDggOS4yMzUxNCAxNS44NzE5IDkuMjM1MTQgMTcuMzc4MVY0NC41NDU3QzkuMjM1MTQgNDYuMDUxOCAxMC41NDAyIDQ3LjI3MjkgMTIuMTUgNDcuMjcyOUgyNi4zODc4QzI3Ljk5NzYgNDcuMjcyOSAyOS4zMDI3IDQ2LjA1MTggMjkuMzAyNyA0NC41NDU3VjE3LjM3ODFDMjkuMzAyNyAxNS44NzE5IDI3Ljk5NzYgMTQuNjUwOCAyNi4zODc4IDE0LjY1MDhaTTEyLjE1IDExLjkyMzZDOC45MzAzNCAxMS45MjM2IDYuMzIwMzEgMTQuMzY1NiA2LjMyMDMxIDE3LjM3ODFWNDQuNTQ1N0M2LjMyMDMxIDQ3LjU1OCA4LjkzMDM0IDUwLjAwMDEgMTIuMTUgNTAuMDAwMUgyNi4zODc4QzI5LjYwNzQgNTAuMDAwMSAzMi4yMTc1IDQ3LjU1OCAzMi4yMTc1IDQ0LjU0NTdWMTcuMzc4MUMzMi4yMTc1IDE0LjM2NTYgMjkuNjA3NCAxMS45MjM2IDI2LjM4NzggMTEuOTIzNkgxMi4xNVoiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNC4yMDIxIDQ1LjM4NDdIMTQuOTUzMVY0Mi42NTc1SDI0LjIwMjFWNDUuMzg0N1oiIGZpbGw9IiMxQjVCRjciLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yNi41NDA0IDI3LjEzNDJDMjUuMjcwMSAyOC44ODc4IDIzLjUwMTYgMzEuMzI4NyAxOS45OTkgMzEuMzI4N1YyOC42MDE1QzIxLjg0MDEgMjguNjAxNSAyMi43OTU1IDI3LjQzOCAyNC4yNDAyIDI1LjQ0ODhDMjQuMjc2NyAyNS4zOTg1IDI0LjMxMzYgMjUuMzQ3NyAyNC4zNTA5IDI1LjI5NjFDMjUuNjIxMiAyMy41NDI2IDI3LjM4OTYgMjEuMTAxNiAzMC44OTIzIDIxLjEwMTZDMzQuMzk0OSAyMS4xMDE2IDM2LjE2MzMgMjMuNTQyNiAzNy40MzM2IDI1LjI5NjFDMzcuNDcxIDI1LjM0NzcgMzcuNTA3OCAyNS4zOTg1IDM3LjU0NDMgMjUuNDQ4OEMzOC45ODkgMjcuNDM4IDM5Ljk0NDQgMjguNjAxNSA0MS43ODU1IDI4LjYwMTVDNDMuNjI2NiAyOC42MDE1IDQ0LjU4MjEgMjcuNDM4IDQ2LjAyNjYgMjUuNDQ4OEM0Ni4wNjMyIDI1LjM5ODUgNDYuMSAyNS4zNDc3IDQ2LjEzNzMgMjUuMjk2MUM0Ny40MDc3IDIzLjU0MjYgNDkuMTc2MSAyMS4xMDE2IDUyLjY3ODcgMjEuMTAxNlYyMy44Mjg4QzUwLjgzNzYgMjMuODI4OCA0OS44ODIyIDI0Ljk5MjMgNDguNDM3NiAyNi45ODE2QzQ4LjQwMTEgMjcuMDMxOCA0OC4zNjQzIDI3LjA4MjcgNDguMzI3IDI3LjEzNDJDNDcuMDU2NSAyOC44ODc4IDQ1LjI4ODIgMzEuMzI4NyA0MS43ODU1IDMxLjMyODdDMzguMjgyOSAzMS4zMjg3IDM2LjUxNDUgMjguODg3OCAzNS4yNDQxIDI3LjEzNDJDMzUuMjA2OCAyNy4wODI3IDM1LjE2OTkgMjcuMDMxOCAzNS4xMzM0IDI2Ljk4MTZDMzMuNjg4OCAyNC45OTIzIDMyLjczMzQgMjMuODI4OCAzMC44OTIzIDIzLjgyODhDMjkuMDUxMSAyMy44Mjg4IDI4LjA5NTcgMjQuOTkyMyAyNi42NTExIDI2Ljk4MTZDMjYuNjE0NiAyNy4wMzE4IDI2LjU3NzcgMjcuMDgyNyAyNi41NDA0IDI3LjEzNDJaIiBmaWxsPSIjMUI1QkY3Ii8+Cjwvc3ZnPgo="
                    alt="Crossplatform"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Crossplatform</span>
                </div>
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <img
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQ2LjY2NjcgOS4zMzMyNUg5LjMzMzMzQzguMDQ0NjcgOS4zMzMyNSA3IDEwLjM3NzkgNyAxMS42NjY2VjM0Ljk5OTlDNyAzNi4yODg2IDguMDQ0NjcgMzcuMzMzMyA5LjMzMzMzIDM3LjMzMzNINDYuNjY2N0M0Ny45NTUzIDM3LjMzMzMgNDkgMzYuMjg4NiA0OSAzNC45OTk5VjExLjY2NjZDNDkgMTAuMzc3OSA0Ny45NTUzIDkuMzMzMjUgNDYuNjY2NyA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0xNi4zMzMgNDYuNjY2N0gzOS42NjYzIiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPHBhdGggZD0iTTIxIDM3LjMzMzNWNDYuNjY2NiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0zNSAzNy4zMzMzVjQ2LjY2NjYiIHN0cm9rZT0iIzFCNUJGNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K"
                    alt="Web design"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Web design</span>
                </div>
                <div className="pr-[20px] pb-[10px] pt-[10px] pl-[10px] mr-[15px] mb-[15px] rounded-[8px] bg-[#f4f7ff]">
                  <img
                    className="mb-[12px] w-[56px] h-[56px]"
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTYiIGhlaWdodD0iNTYiIHZpZXdCb3g9IjAgMCA1NiA1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTM3LjMzMyA5LjMzMzI1SDE4LjY2NjNDMTcuMzc3NyA5LjMzMzI1IDE2LjMzMyAxMC4zNzc5IDE2LjMzMyAxMS42NjY2VjQ0LjMzMzNDMTYuMzMzIDQ1LjYyMTkgMTcuMzc3NyA0Ni42NjY2IDE4LjY2NjMgNDYuNjY2NkgzNy4zMzNDMzguNjIxNyA0Ni42NjY2IDM5LjY2NjMgNDUuNjIxOSAzOS42NjYzIDQ0LjMzMzNWMTEuNjY2NkMzOS42NjYzIDEwLjM3NzkgMzguNjIxNyA5LjMzMzI1IDM3LjMzMyA5LjMzMzI1WiIgc3Ryb2tlPSIjMUI1QkY3IiBzdHJva2Utd2lkdGg9IjMuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CjxwYXRoIGQ9Ik0yNS42NjcgMTEuNjY2N0gzMC4zMzM3IiBzdHJva2U9IiMxQjVCRjciIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg=="
                    alt="Mobile design"
                  />
                  <span className="text-[#000] text-[18px] font-semibold leading-[30px]">Mobile design</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  md:w-[48%] mb-[30px]">
            <div className="flex items-center justify-center w-full h-full ">
              <img
                data-aos="zoom-in"
                data-aos-duration="1200"
                src="https://udevs.io/static/delever_app-d50b0f5953ce60eec080bad20fe68a78.png"
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

export default Delevers;