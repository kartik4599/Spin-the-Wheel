import React, { useState } from "react";
import wheel from "../assets/download.png";
import pointer from "../assets/cropped-essential-journeys-pointer.png";
import "./custom.css";

const SecondPage = ({ get, again }) => {
  const [rotate, setrotate] = useState("circle");
  const rotateHandler = () => {
    setrotate("circle start-rotate");
    let ran = Math.floor(Math.random() * 10000);
    // let ran = 1900;
    setTimeout(() => {
      setrotate("circle start-rotate stop-rotate");

      setTimeout(() => {
        get((ran % 1000) + 100);
      }, 1000);
    }, ran);
  };

  return (
    <div className="lg:container h-full w-full">
      <div className="xs:pt-4 block">
        <div className="text-black pt-6 xs:pt-2 ">
          <div
            onClick={rotateHandler}
            className="flex justify-center flex-col items-center">
            <div className="cursor-pointer">
              <div className="flex flex-col min-h-[250px]">
                <img alt="pointer" className="w-10" src={pointer} />
                <div className="-my-10 "></div>
                <img className={rotate} alt="wheel" src={wheel} />
              </div>
            </div>
            <div
              className="text-2xl py-3 px-20 rounded-full animate-ebPulse font-bold cursor-pointer hover:scale-105"
              style={{
                background: "rgb(255, 255, 255)",
                color: "rgb(0, 0, 0)",
              }}>
              Spin
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
