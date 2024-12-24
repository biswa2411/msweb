"use client";

import React, { useState } from "react";
import Image from "next/image";
import ViewSummaryModal from "@components/modals/ViewSummary";

const Cart = () => {
  const [summaryModal, setSummaryModal] = useState(false);
  const customizeMemory = [
    {
      image:
        "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "2",
    },
    {
      image:
        "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "1",
    },
    {
      image:
        "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "2",
    },
    {
      image:
        "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      type: "Digital",
      size: "A4",
      variant: "Matte Print",
      option: "Hard Copy",
      person: "2",
      price: "2,999",
      count: "4",
    },
  ];

  const [count, setCount] = useState(1);

  const decreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="px-[5%] py-[3%]">
      {summaryModal && (
        <ViewSummaryModal
          summaryModal={summaryModal}
          setSummaryModal={setSummaryModal}
        />
      )}
      <button
        className="flex lg:hidden justify-start items-start bg-[#B88E2F] hover:bg-[#917b47] py-2 font-bold px-5 rounded-full text-white"
        onClick={() => setSummaryModal(true)}
      >
        View Summary
      </button>
      <div className="flex justify-center gap-[5%] ">
        <div className="bg-white">
          {customizeMemory?.map((item, index) => (
            <div key={index} className="">
              <div className="flex flex-col sm:flex-row my-[3%] bg-white shadow-custom rounded-lg">
                <div className="flex justify-center items-center">
                  <Image
                    src={item?.image}
                    width={200}
                    height={200}
                    alt="Image"
                    className=" p-[2%]"
                  />
                </div>
                <div className="p-[7%] w-[300px] sm:w-[400px] text-[16px] text-[#000000]">
                  <h4 className="font-bold text-[20px]">
                    Customize Your Memory:
                  </h4>
                  <p>Type: {item?.type}</p>
                  <p>Size: {item?.size}</p>
                  <p>Variant: {item?.variant}</p>
                  <p>Option: {item?.option}</p>
                  <p>Person: {item?.person}</p>
                  <p>{item?.price}</p>
                </div>
                <div className="flex flex-row-reverse sm:flex-col justify-between items-center p-[7%]">
                  <div className="cursor-pointer ">
                    <Image src="/deleteIcon.svg" alt={"deleteIcon"} width={20} height={20}/>
                  </div>
                  <div className="flex">
                    <button
                      className="border border-gray-400 px-[6px] py-[1px] rounded-tl-[4px] rounded-bl-[4px] text-[20px] "
                      onClick={decreaseCount}
                    >
                      -
                    </button>
                    <div className="border border-gray-400 px-[16px] py-[1px] text-[20px] ">
                      {item?.count}
                    </div>
                    <button
                      className="border border-gray-400 px-[6px] py-[1px] rounded-tr-[4px] rounded-br-[4px] text-[20px] "
                      onClick={increaseCount}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block font-medium text-[16px] text-[#000000] pt-4">
          <h5 className="font-bold text-[24px]">Summary</h5>
          <div className="flex justify-between">
            <div>Subtotal</div>
            <div>{"2,323"}</div>
          </div>
          <div className="flex justify-between py-2">
            <div>Shipping</div>
            <div>{"free"}</div>
          </div>
          <div className="flex justify-between py-2">
            <div>Coupon</div>
            <div>{"NA"}</div>
          </div>
          <hr className="py-1"></hr>
          <div className="flex justify-between py-2 font-bold">
            <div>Total</div>
            <div>{"65,565"}</div>
          </div>
          <button className="justify-center items-center w-full bg-[#B88E2F] hover:bg-[#917b47] py-2 font-bold px-5 rounded-full text-white">
            Pay Now
          </button>
          <div className="flex pt-10">
            <input
              type="text"
              name="coupon"
              placeholder="Enter Coupon"
              // value={formData.firstName}
              // onChange={handleInputChange}
              className="border border-black pl-2 py-2 px-5 rounded-full mr-2"
            />
            <button className=" bg-[#B88E2F] hover:bg-[#917b47] font-bold py-2 px-5 rounded-full text-white">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
