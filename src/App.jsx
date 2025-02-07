import React from "react";

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="calculator p-5 rounded-[10px] bg-white">
        <form action="">
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="text"
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="AC"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="DE"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="."
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="/"
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="7"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="8"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="9"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="*"
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="4"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="5"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="6"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="+"
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="00"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="0"
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white"
              type="button"
              value="="
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
