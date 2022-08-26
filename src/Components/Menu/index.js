import React from "react";
import spoon from "../../assets/spoon.png";
import Ma from "../../assets/menu.png";

const Menu = () => {
  return (
    <div className="bg-black h-content text-[white] mt-32">
      <div className="flex items-center flex-col pt-32">
        <div>
          {" "}
          <p className="text-white font-semibold text-xl font-Comdorant">
            Menu That Fits Your Palatte
          </p>
        </div>
        <div>
          <img src={spoon} alt="" className="object-center	" />
        </div>
        <div>
          {" "}
          <p className="text-[#DCCA87] pt-5 font-bold font-Comdorant text-6xl">
            Today's Special
          </p>{" "}
        </div>
      </div>

      <div className="example2 grid grid-cols-3 gap-10 mt-10 flex justify-between   px-20  ">
        <div className="pt-10 text-center ">
          <p className="text-5xl pb-10 font-semibold font-Comdorant text-white">
            Wine & Beer
          </p>
          <table className="flex items-center justify-center">
            <tbody>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <img src={Ma} alt="" className="w-[444px] h-[659px] " />
        </div>
        <div className="pt-10 text-center ">
          <p className="text-5xl pb-10 font-semibold font-Comdorant text-white">
            Wine & Beer
          </p>
          <table className="flex items-center justify-center">
            <tbody>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
              <tr>
                <td className="text-[#DCCA87] pt-5   font-Comdorant text-xl">
                  Chapel Hill Shiraz
                  <td className="text-base text-[#AAAAAA]">AU | Bottle</td>
                </td>
                <td className="px-5">_______________</td>
                <td>56$</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="pt-10 flex items-center justify-center">
        <button className="text-[black] bg-[#DCCA87] text-xl font-Comdorant mt-10 px-10 py-3">
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
