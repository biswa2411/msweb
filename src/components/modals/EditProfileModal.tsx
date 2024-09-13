import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const EditProfileModal = (props: any) => {
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

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const cleanup = () => {
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

  const handleSubmit = () => {
    console.log(formData);
    cleanup();
    props.setEditProfile(false);
  };

  const handleClose = () => {
    cleanup();
    props.setEditProfile(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Transition appear show={props?.editProfile} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-60" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex h-full inset-x-0 top-0 justify-center items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-[880px] max-h-auto mt-[400px] md:mt-[100px] fit mx-5 mobile-md:mx-2 rounded-md transform p-5 mobile-md:p-3 overflow-hidden bg-white text-left align-middle transition-all relative">
                  <img
                    src="/crossIconDark.svg"
                    className="absolute text-black right-4 top-4 cursor-pointer"
                    onClick={handleClose}
                    width={20}
                    height={20}
                  />

                  <div>
                    {/* <BillingAddrs /> */}
                    <div className="px-[5%] py-[5%]">
                      <div className="flex justify-between">
                        <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#0E2920] font-bold">
                          Personal Information
                        </h2>
                      </div>
                      <div className="flex md:justify-start md:items-start flex-col md:flex-row mr-[20%]">
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
                      <div className="flex md:justify-start md:items-start flex-col md:flex-row  mr-[20%]">
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
                            type="tel"
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
                    <div className="px-[5%]">
                      <div className="flex justify-between">
                        <h2 className="text-[16px] md:text-[22px] lg:text-[32px] text-[#0E2920] font-bold">
                          Billing Address
                        </h2>
                      </div>
                      <div>
                        <div className="flex md:justify-start md:items-start flex-col md:flex-row mr-[20%]">
                          <div className="flex flex-col py-1 md:mr-5  md:w-[50%]">
                            <label className="font-semibold text-[14px] text py-1-[#0E2920]">
                              First Name
                            </label>
                            <input
                              type="text"
                              name="firstName"
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
                              name="lastName"
                              placeholder="Enter Last Name"
                              value={formData.billingLastName}
                              onChange={handleInputChange}
                              className="border border-black pl-2 rounded-[4px] py-2"
                            />
                          </div>
                        </div>
                        <div className="flex md:justify-start md:items-start flex-col md:flex-row  mr-[20%]">
                          <div className="flex flex-col md:mr-5  md:w-[50%] py-1">
                            <label className="font-semibold text-[14px] text-[#0E2920]">
                              Email Address
                            </label>
                            <input
                              type="email"
                              name="email"
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
                              type="tel"
                              name="phone"
                              value={formData.billingPhone}
                              placeholder="Enter Phone No"
                              onChange={handleInputChange}
                              className="border border-black pl-2 rounded-[4px] py-2"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col py-1 mr-[20%]">
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
                        <div className="flex flex-col py-1 mr-[20%]">
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
                        <div className="flex flex-col md:flex-row  mr-[20%] md:mr-[11%]">
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
                              type="text"
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
                    {/* Save button */}
                    <div className="relative py-8">
                      <button
                        className={`w-[73px] h-[37px] bg-[#B88E2F] hover:bg-[#917b47] text-[#FCFCFC] text-[12px] font-medium rounded-[5px] shadow-button-shadow absolute right-2 ${
                          props?.loader ? "cursor-not-allowed opacity-60" : ""
                        }`}
                        id="editProfile"
                        onClick={(e) => handleSubmit()}
                        disabled={props?.loader}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditProfileModal;
