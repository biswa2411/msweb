import React from "react";

export const Highlight = () => {
  const highlights = [
    {
      type: "Customers",
      description:
        "Of “High-performing” level are led by a certified project manager",
      highlight: "78",
    },
    {
      type: "Hours",
      description: "That meets quality standards required by our users",
      highlight: "78",
    },
    {
      type: "Support",
      description: "Actively engage team members that finishes on time",
      highlight: "78",
    },
  ];
  return (
    <div className="text-[#F8F8F8] px-[3%] md:px-[6%] lg:px-[10%] py-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4%]">
        {highlights.map((item, index) => (
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-3 bg-gradient-to-b bg-clip-text text-transparent from-[#28936F] to-[#0C2D22] font-bold text-[#0e2920]  text-[28px] md:text-[36px] lg:text-[48px]">
                <div className="">{item.highlight}</div>
                <div className="">+</div>
            </div>
            <h3 className="font-bold text-[#000000] text-[18px] md:text-[20px] lg:text-[24px]">{item.type}</h3>
            <p className="text-[#000000]">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
