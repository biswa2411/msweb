import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

const ViewSummaryModal = (props: any) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (e: any) => {};

  const cleanup = () => {};

  const handleSubmit = () => {
    // console.log(formData);
    cleanup();
    props.setSummaryModal(false);
  };

  const handleClose = () => {
    cleanup();
    props.setSummaryModal(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <Transition appear show={props?.summaryModal} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-[480px] max-h-auto mt-[100px] fit mx-5 mobile-md:mx-2 rounded-md transform p-5 mobile-md:p-3 overflow-hidden bg-white text-left align-middle transition-all relative">
                  <img
                    src="/crossIconDark.svg"
                    className="absolute text-black right-4 top-4 cursor-pointer"
                    onClick={handleClose}
                    width={20}
                    height={20}
                  />
                  <div className=" font-medium text-[16px] text-[#000000] pt-4">
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
                        className="border border-black pl-2 py-2 px-5 w-full rounded-full mr-2"
                      />
                      <button className=" bg-[#B88E2F] hover:bg-[#917b47] font-bold py-2 px-5 rounded-full text-white">
                        Apply
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

export default ViewSummaryModal;
