'use client'

import React, { useState, useEffect, useRef } from "react";

export const Highlight = () => {
  const highlights = [
    {
      type: "Customers",
      description:
        "Of 'High-performing' level are led by a certified project manager",
      highlight: 500,
    },
    {
      type: "Hours",
      description: "That meets quality standards required by our users",
      highlight: 78,
    },
    {
      type: "Support",
      description: "Actively engage team members that finishes on time",
      highlight: 300,
    },
  ];

  const [counts, setCounts] = useState(highlights.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const animationDuration = 2000; // 2 seconds

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const easeInOutCubic = (t: any) => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;

    const startTime = Date.now();

    const animate = () => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      setCounts(highlights.map(item => 
        Math.round(easeInOutCubic(progress) * item.highlight)
      ));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible]);

  return (
    <div ref={sectionRef} className="text-[#F8F8F8] px-[3%] md:px-[6%] lg:px-[10%] py-[10%] bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[4%]">
        {highlights.map((item, index) => (
          <div key={index} className="flex flex-col justify-center items-center">
            <div className="flex justify-center items-center gap-3 bg-gradient-to-b bg-clip-text text-transparent from-[#28936F] to-[#0C2D22] font-bold text-[#0e2920] text-[28px] md:text-[36px] lg:text-[48px]">
              <div>{isVisible ? counts[index] : 0}</div>
              <div>+</div>
            </div>
            <h3 className="font-bold text-[#000000] text-[18px] md:text-[20px] lg:text-[24px]">{item.type}</h3>
            <p className="text-[#000000] text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};