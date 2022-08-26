import React from "react";
import spoon from "../../assets/spoon.png";
import welcome from "../../assets/welcome.png";

const Key = () => {
  return (
    <div className="px-10 pb-44">
      <div className="h-[100vh] grid grid-cols-12 gap-10 ">
        <div className="grid col-span-2  text-white text-lg flex  items-center">
          <div className="absolute flex rotate-[-90deg]   ">
            <p>#Gericht</p>
            <p className="pl-5">#Bar</p>
          </div>
        </div>
        <div className="grid col-span-5  flex items-center ">
          <div className="px-20">
            <p className="text-white text-md font-Comdorant Upright">
              Chase The New Flavour
              <img src={spoon} alt="" className="" />
            </p>
            <p className="text-7xl pt-5 text-[#DCCA87] font-Comdorant font-bold">
              The Key To Fine Dining
            </p>
            <p className="pt-8 text-[#AAAAAA] text-base pr-32 text-left font-normal	">
              Sit tellus lobortis sed senectus vivamus molestice.Condimentum
              volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
              aliquam amet tellus.
            </p>
            <button className="mt-10 bg-[#DCCA87] px-8 py-2 font-semibold hover:bg-[#F3EDD7]">
              Explore Menu
            </button>
          </div>
        </div>
        <div className="grid col-span-5 flex items-center">
          <img src={welcome} alt="" className="h-[80vh]" />
        </div>
      </div>
      <p className="text-white text-center">
        {new Date().toLocaleString() + ""}
      </p>
    </div>
  );
};

export default Key;
