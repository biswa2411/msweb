"use client";

import EditProfileModal from "@components/modals/EditProfileModal";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Profile = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    billingFirstName: "",
    billingLastName: "",
    billingEmail: "",
    billingPhone: "",
    companyName: "",
    address: "",
    city: "",
    state: "",
    pin: "",
  });

  const [editProfile, setEditProfile] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      billingFirstName: "",
      billingLastName: "",
      billingEmail: "",
      billingPhone: "",
      companyName: "",
      address: "",
      city: "",
      state: "",
      pin: "",
    });
  };

  const handleToggle = () => {
    setEditProfile(true);
  };

  return (
    <div className="bg-white h-full w-full">
      {/* <BillingAddrs /> */}
      <div className="px-[5%] py-[5%]">
        <div className="flex justify-between">
          <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#0E2920] font-bold">
            Personal Information
          </h2>
          <div
            onClick={() => handleToggle()}
            className="flex justify-center items-center gap-1 py-1 px-2 rounded-[4px] border-[1px] cursor cursor-pointer border-[#0E2920]"
          >
            <img src="/editIcon.svg" className="" width={18} height={18} />
            <button className="text-[#0E2920]">Edit</button>
          </div>
        </div>
        <div className="flex md:justify-start md:items-start flex-col md:flex-row lg:mr-[20%]">
          <div className="flex flex-col py-1 md:mr-5  md:w-[50%]">
            <label className="font-semibold text-[14px] text py-1-[#0E2920]">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col py-1  md:w-[50%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
        </div>
        <div className="flex md:justify-start md:items-start flex-col md:flex-row  lg:mr-[20%]">
          <div className="flex flex-col md:mr-5  md:w-[50%] py-1">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col md:w-[50%] py-1">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Phone No
            </label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              placeholder="Enter Phone No"
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
        </div>
      </div>

      {/* Billing Address  */}
      <div className="px-[5%] pb-[5%]">
        <div className="flex justify-between">
          <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#0E2920] font-bold">
            Billing Address
          </h2>
          <div onClick={() => handleToggle()} className="flex justify-center items-center gap-1 py-1 px-2 rounded-[4px] border-[1px] cursor cursor-pointer border-[#0E2920]">
            <img src="/editIcon.svg" className="" width={18} height={18} />
            <button className="text-[#0E2920]">Edit</button>
          </div>
        </div>
        <div>
          <div className="flex md:justify-start md:items-start flex-col md:flex-row lg:mr-[20%]">
            <div className="flex flex-col py-1 md:mr-5  md:w-[50%]">
              <label className="font-semibold text-[14px] text py-1-[#0E2920]">
                First Name
              </label>
              <input
                type="text"
                name="billingFirstName"
                placeholder="Enter First Name"
                value={formData.billingFirstName}
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px] py-2"
              />
            </div>
            <div className="flex flex-col py-1  md:w-[50%]">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                Last Name
              </label>
              <input
                type="text"
                name="billingLastName"
                placeholder="Enter Last Name"
                value={formData.billingLastName}
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px] py-2"
              />
            </div>
          </div>
          <div className="flex md:justify-start md:items-start flex-col md:flex-row  lg:mr-[20%]">
            <div className="flex flex-col md:mr-5  md:w-[50%] py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                Email Address
              </label>
              <input
                type="email"
                name="billingEmail"
                placeholder="Enter Email"
                value={formData.billingEmail}
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px] py-2"
              />
            </div>
            <div className="flex flex-col md:w-[50%] py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                Phone No
              </label>
              <input
                type="number"
                name="billingPhone"
                value={formData.billingPhone}
                placeholder="Enter Phone No"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px] py-2"
              />
            </div>
          </div>
          <div className="flex flex-col py-1 lg:mr-[20%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Company Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              placeholder="Enter Company Name"
              onChange={handleInputChange}
              className="border border-black  pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col py-1 lg:mr-[20%]">
            <label className="font-semibold text-[14px] text-[#0E2920]">
              Street Adders
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              placeholder="Enter Address"
              onChange={handleInputChange}
              className="border border-black pl-2 rounded-[4px] py-2"
            />
          </div>
          <div className="flex flex-col md:flex-row  lg:mr-[20%] md:mr-[11%]">
            <div className="flex flex-col py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                Town/City
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                placeholder="Enter Town/City"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px] md:w-[70%] py-2"
              />
            </div>
            <div className="flex flex-col py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                State
              </label>
              <input
                type="text"
                name="state"
                value={formData.state}
                placeholder="Enter State"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px]  md:w-[70%] py-2"
              />
            </div>
            <div className="flex flex-col py-1">
              <label className="font-semibold text-[14px] text-[#0E2920]">
                PIN Code
              </label>
              <input
                type="number"
                name="pin"
                value={formData.pin}
                placeholder="Enter PIN Code"
                onChange={handleInputChange}
                className="border border-black pl-2 rounded-[4px]  md:w-[70%] py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center pb-5">
        <button
          className=" bg-[#B88E2F] hover:bg-[#917b47] py-2 px-5 rounded-full text-white"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      {editProfile && (
        <EditProfileModal
          editProfile={editProfile}
          setEditProfile={setEditProfile}
        />
      )}
    </div>
  );
};

export default Profile;
