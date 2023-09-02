import React from "react";
import PortfolioCard from "./PortfolioCard";

function Portfolio() {
  const cardNum = [0, 0, 0, 0, 0, 0];
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center gap-3 mb-5 animate-wigglee">
        <p className=" tracking-[.15em] md:tracking-[.20em] text-xs md:text-sm text-primary-300"> VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h1 className="text-6xl font-bold dark:text-slate-400"> My Portfolio</h1>{" "}
      </div>

      <div className="flex flex-wrap gap-5 ">
        {cardNum.map((item, index) => {
          return <PortfolioCard key={index} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
