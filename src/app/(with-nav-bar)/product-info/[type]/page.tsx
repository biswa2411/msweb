"use client";

import { NumberInput } from "@components/lib/inputs/NumberInput";
import Shop from "@components/pages/shop";
import { ShoppingBag, ShoppingCart } from "@mui/icons-material";
import { Rating, TextField } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const ProductInfo = () => {
  const availableSizes = [
    { name: "A4", h: 11.7, w: 8.3 },
    { name: "A1", h: 33.1, w: 23.4 },
    { name: "A2", h: 23.4, w: 16.5 },
    { name: "A3", h: 16.5, w: 11.7 },
    { name: "A0", h: 46.8, w: 33.1 },
    { name: "Customize", h: 11.7, w: 8.3 }];
  const [activeSize, setActiveSize] = useState("A4")
  const [isCanvas, setIsCanvas] = useState(true)
  const [isHardCopy, setIsHardCopy] = useState(true)
  const [personCount, setPersonCount] = useState(1)
  const [price, setPrice] = useState({
    sp: 2278.04,
    mrp: 4094.28
  })

  const [scale, setScale] = useState({
    h: 11.7,
    w: 8.3
  })

  useEffect(() => {
    calculateCanvasCost(personCount)
  }, [scale, isCanvas, isHardCopy, personCount])

  const smallImages = [
    {
      img: "/productInfo/img1.svg",
    },
    {
      img: "/productInfo/img2.svg",
    },
    {
      img: "/productInfo/img3.svg",
    },
    {
      img: "/productInfo/img4.svg",
    },
    {
      img: "/productInfo/img5.svg",
    },
  ];

  const additionalInfo = [
    { label: "Weight", value: "2.5kg" },
    { label: "Type", value: "Digital" },
    { label: "Sizes", value: "A0, A1" },
    { label: "Variant", value: "Canvas Print, Matte Print" },
    { label: "Option", value: "Hard Copy, Soft Copy (Contact us on WhatsApp)" },
    {
      label: "Person",
      value: "One, Two, Three, Four+ (Contact us on WhatsApp)",
    },
  ];

  const shopSupport = [
    {
      img: "/shopVerified.svg",
    },
    {
      img: "/shopVan.svg",
    },
    {
      img: "/shopIcon3.svg",
    },
    {
      img: "/shopSupport.svg",
    },
  ];

  const shoppingItems = [
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      paintingType: "Digital Painting",
      price: "600",
      id: "1",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      paintingType: "Acrylic Painting",
      price: "1000",
      id: "2",
    },
    {
      img: "https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714780800&semt=sph",
      paintingType: "Sketch Art",
      price: "1200",
      id: "3",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(smallImages[0].img);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % smallImages.length);
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSelectedImage(smallImages[currentIndex].img);
  }, [currentIndex]);

  const calculateCanvasCost = (numPersons = 1) => {
    // Calculate the printing price
    const printPrice = (isCanvas ? 29.19 : 8.3) * (scale.h * scale.w) / 12;

    // Calculate the frame price
    const framePrice = 50 * ((scale.h + scale.w) / 6);

    // Calculate the board price
    const boardPrice = scale.h * scale.w * (isCanvas ? 2.1 : 1.577);

    // Calculate the person cost
    // Calculate the person cost using a predefined tier structure
    const tiers = [
      { count: 2, price: 900 },
      { count: 2, price: 800 },
      { count: 2, price: 700 },
      { count: Infinity, price: 650 }
    ];

    let personCost = 0;
    for (const tier of tiers) {
      if (numPersons <= 0) break;
      const peopleInTier = Math.min(numPersons, tier.count);
      personCost += peopleInTier * tier.price;
      numPersons -= peopleInTier;
    }
    // Calculate the total price before GST
    const totalPriceBeforeGST = (isHardCopy ? (printPrice + framePrice + boardPrice) : 0) + personCost;
    // Calculate the total selling price with 18% GST
    const sp = Number.isNaN(totalPriceBeforeGST) ? 0 : Number((totalPriceBeforeGST + (totalPriceBeforeGST * 0.18) + (isCanvas ? 500 : 0)).toFixed(2));
    const mrp = Number((sp + (isCanvas ? 700 : 0) + (sp * (isCanvas ? .49 : .39))).toFixed(2))

    setPrice({ mrp, sp })
  }

  // Example usage:
  // const height = 30; // Height in inches
  // const width = 36;  // Width in inches
  // const numPersons = 7; // Number of persons
  // const cost = calculateCanvasCost(height, width, numPersons);
  // console.log(`The total cost of the canvas painting is: ₹${cost.sp.toFixed(2)} and mrp is ₹${cost.mrp.toFixed(2)}`);


  return (
    <div className="px-2 md:px-[5%] py-2 md:py-[2%] overflow-hidden">
      <div className="">
        <div className="flex-row md:flex gap-3">
          <div className="w-full md:w-[50%] ">
            <div className="flex flex-col-reverse lg:flex-row justify-between items-start h-[65vh] gap-5">
              <div className="flex flex-row lg:flex-col lg:justify-between lg:h-full gap-2 cursor-pointer  ">
                {smallImages.map((item, index) => (
                  <div key={index} onClick={() => setSelectedImage(item.img)} className="flex relative lg:size-24 smx:size-16  size-14" >
                    <Image
                      src={item.img}
                      alt="profile image"
                    fill
                      priority
                      loading="eager"
                      objectFit="cover"
                      className={`border hover:border-[#0E2920] rounded-lg ${selectedImage === item.img ? 'border-[#0E2920]' : ''}`}
                    />
                  </div>
                ))}
              </div>
              <div className="h-full w-full relative">
                <Image
                  src={selectedImage}
                  alt="profile image"
                  fill
                  priority
                  loading="eager"
                  objectFit="cover"
                  className="rounded-lg"

                />
              </div>
            </div>
            <div className="flex justify-between py-[2%] gap-2">
              <div className="flex justify-center items-center cursor-pointer gap-2 font-medium text-[16px] text-white bg-[#B88E2F] rounded-lg shadow-lg py-2 w-full hover:bg-[#917b47]">
                <ShoppingCart />
                <button className="">Add to Cart</button>
              </div>
              <div className="flex justify-center items-center cursor-pointer gap-2 font-medium text-[16px] text-white bg-[#B88E2F] rounded-lg shadow-lg py-2 w-full hover:bg-[#917b47]">
                <ShoppingBag />
                <button className="">Buy Now</button>
              </div>
            </div>
            <div className="py-2 space-y-2 hidden md:flex flex-col">
              <h4 className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px]">
                Description
              </h4>
              <p>
                We offer different services to turn your photos, ideas, or
                memories into beautiful artworks. You can choose digital
                painting and our artists will create your custom artworks with
                high quality and fast delivery. You can also customize and
                revise your artworks until you are happy.
              </p>
              <p>
                We offer different services to turn your photos, ideas, or
                memories into beautiful artworks. You can choose digital
                painting and our artists will create your custom artworks with
                high quality and fast delivery. You can also customize and
                revise your artworks until you are happy.
              </p>
            </div>
            <div className="py-2 space-y-2 hidden md:flex flex-col w-full">
              <h4 className="font-semibold  text-[16px] md:text-[18px] lg:text-[20px]">
                Additional information
              </h4>
              <div className="bg-red-400 w-full">
                {additionalInfo.map((info, index) => (
                  <div
                    className="flex bg-[#F0F0F0] gap-1 py-2 border border-b-gray-300 px-4"
                    key={index}
                  >
                    <p className="font-semibold w-20">
                      {info.label}
                      {":"}
                    </p>
                    <p className="w-full">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-[50%] flex flex-col gap-2">
            <h1 className="text-[#000000] text-[16px] md:text-[26px] lg:text-[32px] font-bold">
              Digital Painting
            </h1>
            <h3 className="text-[#000000] text-sm  md:text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              voluptas placeat, recusandae fugit neque vel velit odio laborum
              quia odit necessitatibus eligendi, natus sed officia eos provident
              iure veritatis amet?
            </h3>
            <p className="font-semibold text-[#B88E2F] text-[16px] md:text-[20px] lg:text-[28px]">
              ₹{price.sp}
            </p>
            {price.mrp ? <p className="font-normal text-[12px] md:text-[18px] lg:text-[18px] text-gray-400 line-through decoration-black deco">
              ₹{price.mrp}
            </p> : <></>}
            <Rating name="half-rating" readOnly defaultValue={2.3} precision={0.1} />

            {/* Frame Size */}
            <div className="">
              <p className="font-semibold  text-[14px] md:text-[18px] lg:text-[20px] pb-2">
                Frame size
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {availableSizes.map(({ name, h, w }, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      name != "Customize" ? setScale({ h, w }) : "";
                      setActiveSize(name)
                    }}
                    className={`font-medium  text-[12px] md:text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border  ${activeSize == name ? 'bg-[#B88E2F] text-white' : ''}`}
                  >
                    {name}
                  </button>
                ))}
                {activeSize == "Customize" &&
                  <> <TextField
                    label="Height in Inches"
                    variant="outlined"
                    fullWidth
                    value={scale.h}
                    onChange={(e) => { setScale({ ...scale, h: parseFloat(e.target.value) }) }}
                    type="number" // Ensures only numeric input
                    inputProps={{ step: '0.01' }} // Allows decimal input
                    margin="normal"
                  />
                    <TextField
                      label="Width in Inches"
                      variant="outlined"
                      fullWidth
                      value={scale.w}
                      onChange={(e) => { setScale({ ...scale, w: parseFloat(e.target.value) }) }}
                      type="number" // Ensures only numeric input
                      inputProps={{ step: '0.01' }} // Allows decimal input
                      margin="normal"
                    /></>
                }
              </div>
            </div>

            {/* Choose Variant */}
            <div className="">
              <p className="font-semibold  text-[14px] md:text-[18px] lg:text-[20px] pb-2">
                Choose Variant
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => setIsCanvas(true)}
                  className={`font-medium text-[12px] md:text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border ${isCanvas ? 'bg-[#B88E2F] text-white' : ''}`}
                >
                  Canvas Paint
                </button>

                <button
                  onClick={() => setIsCanvas(false)}
                  className={`font-medium text-[12px] md:text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border ${!isCanvas ? 'bg-[#B88E2F] text-white' : ''}`}
                >
                  Matte Paint
                </button>
              </div>
            </div>

            {/* Choose Option */}
            <div className="">
              <p className="font-semibold  text-[14px] md:text-[18px] lg:text-[20px] pb-2">
                Choose Option
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">

                <button
                  onClick={() => setIsHardCopy(true)}
                  className={`font-medium text-[12px] md:text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border ${isHardCopy ? 'bg-[#B88E2F] text-white' : ''}`}
                >
                  Hard Copy
                </button>

                <button
                  onClick={() => setIsHardCopy(false)}
                  className={`font-medium text-[12px] md:text-[16px] hover:bg-[#B88E2F] hover:text-white py-2 px-10 rounded-lg shadow-lg border ${!isHardCopy ? 'bg-[#B88E2F] text-white' : ''}`}
                >
                  Soft Copy
                </button>

              </div>
            </div>

            {/* No. of Person in your photo */}
            <div className="">
              <p className="font-semibold  text-[14px] md:text-[18px] lg:text-[20px] pb-2">
                No. of Person in your photo
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
               

                <NumberInput min={1} max={99} defaultValue={personCount} onChange={(event, newValue) => setPersonCount(newValue ?? 1)} />
              </div>
            </div>

            <div className="md:pt-10 gap-2 flex flex-row">
              <input
                type="text"
                name="coupon"
                placeholder="Enter Pincode"
                // value={formData.firstName}
                // onChange={handleInputChange}
                className="border border-black  py-2 px-2 rounded-lg  w-1/2"
              />
              <button className=" bg-[#B88E2F] hover:bg-[#917b47]   text-[12px] md:text-[16px] font-bold py-2 px-5 rounded-lg text-white">
                Check Pincode
              </button>
            </div>

            <label
              htmlFor="file-upload"
              className="flex justify-center items-center py-[10%] px-10 mt-7 rounded-lg shadow-lg border border-gray-300 cursor-pointer gap-2"
            >
              <img
                src={"/fileUpload.svg"}
                alt="profile image"
                height={30}
                width={30}
                className=""
              />
              <p>Upload Your Image</p>
            </label>
            <input id="file-upload" type="file" className="hidden" />

            <div className="py-2 space-y-2 text-[12px]  flex md:hidden  flex-col">
              <h4 className="font-semibold  text-[14px] ">
                Description
              </h4>
              <p>
                We offer different services to turn your photos, ideas, or
                memories into beautiful artworks. You can choose digital
                painting and our artists will create your custom artworks with
                high quality and fast delivery. You can also customize and
                revise your artworks until you are happy.
              </p>
              <p>
                We offer different services to turn your photos, ideas, or
                memories into beautiful artworks. You can choose digital
                painting and our artists will create your custom artworks with
                high quality and fast delivery. You can also customize and
                revise your artworks until you are happy.
              </p>
            </div>
            <div className="py-2 space-y-2 flex md:hidden w-full flex-col">
              <h4 className="font-semibold  text-[14px] ">
                Additional information
              </h4>
              <div className="w-full">
                {additionalInfo.map((info, index) => (
                  <div
                    className="flex bg-[#F0F0F0]  py-2 border border-b-gray-300 px-4 text-[12px] w-full"
                    key={index}
                  >
                    <p className="font-semibold w-20">
                      {info.label}
                      {":"}
                    </p>
                    <p className="w-full">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[#F0F0F0] py-[3%] px-[6%] my-[2%]">
          {shopSupport.map((items, index) => (
            <img
              key={index}
              src={items.img}
              alt="profile image"
              height={50}
              width={50}
              className=""
            />
          ))}
        </div>

        {/* Our Happy Customers  */}
        <div className="flex justify-center items-center text-[#000000] text-[16px] md:text-[26px] lg:text-[32px] font-bold">
          Related Product
        </div>
      </div>
      <Shop />


    </div>
  );
};

export default ProductInfo;
