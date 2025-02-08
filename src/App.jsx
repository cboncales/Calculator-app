import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="calculator p-5 rounded-[10px] bg-white">
        <form action="">
          <div className="display-inpt flex justify-end items-center mt-[5px] mb-[15px]">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[40px] bg-gray-900 m-[2px] rounded-[10px] font-extrabold text-white text-right flex-1 py-[5px] px-[10px]"
              type="text"
              value={value}
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="AC"
              onClick={(e) => setValue("")}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="DE"
              onClick={(e) => setValue(value.slice(0, -1))}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="."
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="/"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="7"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="8"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="9"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="*"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="4"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="5"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="6"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="+"
              onClick={(e) => setValue(value + e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="00"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="0"
              onClick={(e) => setValue(value + e.target.value)}
            />
            <input
              className="border-none outline-0 w-[123px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              type="button"
              value="="
              onClick={(e) => setValue(eval(value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
