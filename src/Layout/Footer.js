import React from "react";

export default function Footer() {
  return (
    <div
      className="w-11/12 mt-10 mx-auto mb-10 lg:flex flex-row justify-between 
    items-center px-2 md:px-4 bg-white rounded-full md:h-14 h-10"
    >
      <div className="font-oxygen text-black lg:flex hidden text-sm">
        © All rights reserved by The Big Burn
      </div>
      <div className="flex flex-row h-full items-center justify-between w-auto">
        <div className="px-3">
          <a
            className="hover:text-yellow no-underline text-xs md:text-sm"
            href="#contract"
          >
            Contract
          </a>
          <span className="px-1 md:px-2 text-black text-sm">|</span>
          <a
            className="hover:text-yellow no-underline text-xs md:text-sm"
            href="#disclaimer"
          >
            Disclaimer
          </a>
          <span className="px-1 md:px-2 text-black text-sm">|</span>
          <a
            className="hover:text-yellow no-underline text-xs md:text-sm"
            href="#discord"
          >
            Discord
          </a>
          <span className="px-1 md:px-2 text-black text-sm">|</span>
          <a
            className="hover:text-yellow no-underline text-xs md:text-sm"
            href="#twitter"
          >
            Twitter
          </a>
        </div>
        <button className="hover:bg-white hover:text-yellow hover:border-2 hover:border-yellow font-knockout font-medium bg-yellow text-white text-2sm px-6 rounded-full sm:flex hidden ">
          BUY PASS
        </button>
      </div>
    </div>
  );
}
