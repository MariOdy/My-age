import React from "react";

interface ResultProps {
  label: "day" | "month" | "year";
  result: number;
}

const Result: React.FC<ResultProps> = ({ label, result }) => {
  return (
    <div
      className="
    flex 
    gap-[12px]
    md:gap-[24px]
    lg:gap-[40px] 
    items-center 
   "
    >
      <div
        className="
        text-[60px]
        leading-[60px]
        md:text-[80px] 
        md:leading-[80px] 
        lg:text-[100px] 
        lg:leading-[100px] 
        tracking-[-0.07em]
        text-[#ED5E31] 
        font-black 
        italic
      "
      >
        {result < 10 ? `0${result}` : result}
      </div>
      <div
        className="
      text-[60px] 
      leading-[60px] 
      md:text-[80px] 
      md:leading-[80px] 
      lg:text-[100px] 
      lg:leading-[100px] 
      font-black 
      italic	
      text-black
      "
      >
        {label}
        {result > 1 && "s"}
      </div>
    </div>
  );
};

export default Result;
