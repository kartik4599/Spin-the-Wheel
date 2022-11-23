import React from "react";
import wheel from "../assets/wheel.webp";

const FirstPage = ({ show }) => {
  const submitHandler = () => {
    show();
  };

  return (
    <div className="lg:container h-full w-full">
      <div className="xs:pt-4 block"></div>
      <div
        className="grid items-center grid-cols-1 xs:grid-cols-12  "
        style={{ perspective: "800px" }}>
        <div className="col-span-5">
          <div className="grid items-center grid-cols-1 xs:grid-cols-12  ">
            <img
              alt="wheel"
              className="lg:mx-auto xs:mx-0 mx-auto md:ml-0 overflow-visible xs:-ml-[175px] max-w-[200px] xs:max-w-[400px] lg:max-w-[400px]"
              src={wheel}
            />
          </div>
        </div>
        <div
          className="block relative text-center xs:text-left  col-span-7 px-3 xs:px-4 xs:px-6 max-w-[500px] mx-auto duration-700"
          style={{ transformStyle: "preserve-3d" }}>
          <form onSubmit={submitHandler}>
            <div className="space-y-3 max-w-[95%] mx-auto lg:my-3 my-3">
              <div className="text-22xl xs:text-4xl lg:text-5xl text-white font-bold">
                Spin The Wheel
              </div>
              <div className="text-black text-md xs:text-lg"> </div>
            </div>
            <div className=" rounded-lg pt-1 pb-3 xs:py-3 px-3">
              <div className="flex flex-col space-y-3 my-0">
                <div className="grid grid-cols-2 gap-x-3"></div>
                <div>
                  <label className="relative block">
                    <input
                      className="animate-ebDarkPulse text-black placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                      placeholder="Your E-Mail here"
                      type={"email"}
                      required
                    />
                  </label>
                </div>
                <button
                  className="md:text-xl min-w-full text-center font-bold py-3 my-3 rounded-full shadow-xl hover:shadow-none cursor-pointer"
                  type="submit"
                  style={{ backgroundColor: "white" }}>
                  Try Your Luck
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
