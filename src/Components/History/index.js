import React from "react";
import bgimg from "../../assets/G.png";
import knife from "../../assets/knife.png";
import spoon from "../../assets/spoon.png";
import "../History/style.css";
const History = () => {
  return (
    <div className="h-screen ">
      <div className="example1  grid grid-cols-3 px-96 py-44 flex justify-between ">
        <div className="relative flex items-center justify-center">
          <div className=" absolute -left-0 w-full w-full ">
            <div className="text-right">
              <p className="text-[#DCCA87] font-semibold font-Comdorant text-7xl">
                About Us
              </p>
              <img src={spoon} alt="" className="float-right	" />
              <p className="text-[#AAAAAA] text-lg text-right pt-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </p>
              <button className="text-[black] bg-[#DCCA87] mt-10 px-10 py-3">
                Know More
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={knife} alt="" className="h-[80vh]" />
        </div>
        <div className="relative flex items-center justify-center">
          <div className=" absolute -left-0 w-full w-full ">
            <div className="text-left">
              <p className="text-[#DCCA87] font-semibold font-Comdorant text-7xl">
                Our History
              </p>
              <img src={spoon} alt="" className="float-left	" />
              <p className="text-[#AAAAAA] text-lg text-left pt-10 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                pharetra adipiscing ultrices vulputate posuere tristique. In sed
                odio nec aliquet eu proin mauris et.
              </p>
              <button className="text-[black] bg-[#DCCA87] mt-10 px-10 py-3">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
