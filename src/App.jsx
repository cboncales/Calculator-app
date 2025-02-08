import React, { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setValue(value + e.target.value);
  };

  const handleCalculate = () => {
    try {
      setValue(evaluate(value).toString());
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-500">
      <div className="calculator p-5 rounded-[10px] bg-white">
        <div className="display-inpt flex justify-end items-center mt-[5px] mb-[15px]">
          <input
            className="border-none outline-0 w-[60px] flex-1 h-[60px] text-[40px] bg-gray-900 m-[2px] rounded-[10px] font-extrabold text-white text-right py-[5px] px-[10px]"
            type="text"
            value={value}
            readOnly
          />
        </div>
        <div className="grid grid-cols-4 gap-1">
          {/* Buttons */}
          {["AC", "DE", ".", "/"].map((item) => (
            <button
              key={item}
              className="w-[60px] h-[60px] text-[16px] bg-gray-700 rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              onClick={() =>
                item === "AC"
                  ? setValue("")
                  : item === "DE"
                    ? setValue(value.slice(0, -1))
                    : setValue(value + item)
              }
            >
              {item}
            </button>
          ))}

          {["7", "8", "9", "*"].map((item) => (
            <button
              key={item}
              className="btn border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              onClick={handleClick}
              value={item}
            >
              {item}
            </button>
          ))}

          {["4", "5", "6", "+"].map((item) => (
            <button
              key={item}
              className="btn border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              onClick={handleClick}
              value={item}
            >
              {item}
            </button>
          ))}

          {["1", "2", "3", "-"].map((item) => (
            <button
              key={item}
              className="btn border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
              onClick={handleClick}
              value={item}
            >
              {item}
            </button>
          ))}

          {["00", "0", "="].map((item) =>
            item === "=" ? (
              <button
                key={item}
                className="btn border-none outline-0 h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900 col-span-2"
                onClick={handleCalculate}
              >
                {item}
              </button>
            ) : (
              <button
                key={item}
                className="btn border-none outline-0 w-[60px] h-[60px] text-[16px] bg-gray-700 m-[2px] rounded-[10px] font-extrabold text-white cursor-pointer hover:bg-gray-900"
                onClick={handleClick}
                value={item}
              >
                {item}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
