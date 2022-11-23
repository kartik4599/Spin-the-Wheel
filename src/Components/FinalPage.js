import React, { useEffect, useState } from "react";
import wheel from "../assets/wheel.webp";

const FinalPage = ({ data, again }) => {
  const [reward, setreward] = useState("");
  const num = Math.floor(Math.random() * 10000000);
  useEffect(() => {
    if (data >= 0 && data <= 170) {
      setreward("Blance 50ml Rs 499");
    } else if (data > 170 && data <= 350) {
      setreward("Flat 20% off");
    } else if (data > 350 && data <= 510) {
      setreward("Rs.5000 voucher");
    } else if (data > 510 && data <= 660) {
      setreward("EDT Noir Rs 999");
    } else if (data > 660 && data <= 840) {
      setreward("Flat Rs 500 off");
    } else if (data > 840 && data <= 999) {
      setreward("Free Gift Box");
    }
  }, [data]);

  const copyHandler = () => {
    navigator.clipboard.writeText(num);
    alert("Copied The Coupon code");
  };

  return (
    <div className="lg:container h-full w-full">
      <div className="grid items-center grid-cols-1 xs:grid-cols-12 ">
        <div className="col-span-5">
          <div className="flex justify-center md:mx-auto xs:max-w-fit xs:px-0 xs:pt-0 px-3 pt-1">
            <img
              alt="wheel"
              className="lg:mx-auto xs:mx-0 mx-auto md:ml-0 overflow-visible xs:-ml-[175px] max-w-[200px] xs:max-w-[400px] lg:max-w-[400px]"
              src={wheel}
            />
          </div>
        </div>
        <div className="block mx-auto text-center xs:text-left col-span-7 xs:col-start-6 col-start-1 px-4 xs:px-6 max-w-[600px]">
          <div className="mt-3">
            <div className="space-y-3 lg:my-9" style={{ color: "white" }}>
              <div className="opacity-80 text-xl">Congrats! You won: </div>
              <div className="text-3xl xs:text-4xl lg:text-5xl font-bold">
                {reward}
              </div>
            </div>
            <div
              onClick={copyHandler}
              className="flex flex-col space-y-3 my-3 lg:my-6">
              <span className="flex group shadow-2xl hover:shadow-3xl  justify-between border-[2px] border-[#fff] text-center cursor-pointer uppercase font-bold text-2xl lg:text-3xl my-2  rounded-md">
                <span
                  className="px-8 py-2 text-[90%]"
                  style={{ color: "white" }}>
                  {num}
                </span>
                <div className="inline-block rounded-sm shadow-xl hover:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] min-w-[115px] py-1 px-3 uppercase font-normal border-solid">
                  <span className="text-[60%] font-bold capitalize bg-white py-[15px] px-10 -mx-4 ">
                    Copy
                  </span>
                </div>
              </span>
            </div>
            <button
              className="md:text-xl min-w-full text-center font-bold py-3 my-3 rounded-full shadow-xl hover:shadow-none cursor-pointer"
              type="submit"
              onClick={again}
              style={{ backgroundColor: "white" }}>
              Play Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;
