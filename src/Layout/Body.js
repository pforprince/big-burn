import React from "react";
import Welder from "../assets/welder.svg";
import Line1 from "../assets/Line1.svg";
import Line2 from "../assets/Line2.svg";

export default function Body() {
  return (
    <div className="w-11/12 mx-auto lg:flex lg:flex-row flex-col justify-between items-center px-4 sm:px-6">
      <div className="flex flex-col">
        <div>
          <p className="text-5sm text-yellow font-medium font-knockout text-center sm:text-justify">
            Buy The Pass & Burn Your NFT's
          </p>
          <p className="text-4sm text-white font-normal font-oxygen text-center sm:text-justify">
            Each pass allows you to burn up to 10 NFT's
          </p>
        </div>
        <div className="lg:flex hidden w-96 text-center">
          <img src={Welder} alt="welder" />
        </div>
      </div>
      <div className="subtract flex flex-col items-center lg:my-0 my-5 mx-auto">
        {/* <img src={Substrat} className="absolute z-0 h-3/5 w-11/12 sm:w-full" /> */}
        <span className="font-knockout font-medium text-5sm text-black mt-8 z-10">
          BURN PASS
        </span>
        <span className="font-knockout font-medium text-yellow text-7sm mt-m1 z-10">
          0.042 ETH TO MINT
        </span>
        <span
          className="font-oxygen md:font-normal font-semibold text-black mx-2 text-sm
         md:text-1sm z-10"
        >
          Select the NFT’s you want to burn
        </span>
        <span className="md:font-bold font-oxygen font-semibold text-black text-xs md:text-1sm z-10">
          We buy back each NFT at $1 ea
        </span>
        <button className="bg-grey rounded-lg w-3/5 my-3 py-3 text-4sm z-10 text-black font-knockout font-medium">
          SELECTED
        </button>
        <span className="font-knockout font-medium text-4sm text-yellow z-10">
          CALCULATOR
        </span>
        <div className="flex flex-row z-10 justify-center">
          <div className="flex flex-col">
            <span className="font-oxygen text-black text-xs md:text-0sm ">
              Price Paid
            </span>
            <span className="font-knockout font-medium text-black text-1sm">
              $160
            </span>
          </div>
          <img src={Line2} className="px-3 h-10 mt-1.5" alt="Line2" />
          <div className="flex flex-col">
            <span className="font-oxygen text-black text-xs md:text-0sm">
              Floor Price
            </span>
            <span className="font-knockout font-medium text-black text-1sm">
              $150
            </span>
          </div>
          <img src={Line2} className="px-3 h-10 mt-1.5" alt="Line2" />
          <div className="flex flex-col">
            <span className="font-oxygen font-normal text-black text-xs md:text-0sm">
              Total Loss
            </span>
            <span className="font-knockout font-medium text-red text-1sm">
              $10
            </span>
          </div>
        </div>
        <img src={Line1} alt="line1" className="w-3/4 my-5 z-10" />
        <div className="flex flex-row justify-between w-[90%] m-auto md:w-3/4 h-10 items-center z-10 mb-5">
          <div className="flex flex-col">
            <span className="font-oxygen text-black text-xs md:text-0sm">
              Potential Tax Savings
            </span>
            <div className="flex flex-row font-knockout font-medium text-1sm items-center">
              <span className=" text-black">30%&nbsp;&nbsp;-&nbsp;&nbsp;</span>
              <span className=" text-black">$3.00</span>
            </div>
          </div>
          <button
            className="hover:bg-white hover:text-yellow hover:border-2 hover:border-yellow 
          font-knockout font-medium bg-yellow text-white text-xs py-2 md:text-2sm px-6 rounded-full "
          >
            BUY PASS
          </button>
        </div>
      </div>
      <div className="lg:hidden md:w-96 text-center mt-5">
        <img className="w-[100%]" src={Welder} alt="welder" />
      </div>
    </div>
  );
}
