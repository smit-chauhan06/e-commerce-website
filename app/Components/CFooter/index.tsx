import React from "react";
import { Setting } from "../../apis/settings";
import { FaFacebookF } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import "./styles.css";

const CFooter = () => {
  return (
    <section className="bg-black w-[100%] flex flex-col justify-center items-center pt-[20px] pb-[20px]">
      <div className="content-div text-whiteColor grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-4">
        <div className="flex flex-col  flex-1">
          <span className="font-medium text-[18px] xs:text-[20px]">
            Support
          </span>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <p>367, Aradhana Street, Bhavanipura</p>
            <p>Petlad, Anand, Gujarat, India</p>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <p>shop@gmail.com</p>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <p>+91 9876543210</p>
          </div>
        </div>
        <div className="flex flex-col  flex-1">
          <span className="font-medium text-[18px] xs:text-[20px]">
            Account
          </span>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              My Account
            </a>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              Login / Register
            </a>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              Cart
            </a>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              Whistlist
            </a>
          </div>
        </div>
        <div className="flex flex-col  flex-1">
          <span className="font-medium text-[18px] xs:text-[20px]">
            Quick Links
          </span>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              Terms of use
            </a>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              FAQ
            </a>
          </div>
          <div className="mt-[5px] text-[14px] xs:text-[16px]">
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
        <div className=" flex-col hidden sm:flex  flex-1">
          <span className="font-medium text-[20px]">Newsletter</span>
          <div className="mt-[5px] text-[16px]">
            <p>
              Subscribe to our newsletter to get the update news related to our
              latest properties and time-limited discounts.
            </p>
          </div>
          <div className="mt-[10px] text-[16px] w-[100%]">
            <div className="flex w-[100%">
              <input
                type="email"
                placeholder="Enter your e-mail address"
                className=" w-[100%]  bg-whiteColor p-[10px] text-[16px]  text-blackColor focus:outline-none font-extralight"
              />
              <button className="px-4  py-2 bg-blackColor text-white font-bold border border-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-col flex sm:hidden flex-1 content-div mt-[20px]">
        <span className="font-medium text-[18px] xs:text-[20px] text-whiteColor">
          Newsletter
        </span>
        <div className="mt-[5px] text-[14px] xs:text-[16px] text-whiteColor">
          <p>
            Subscribe to our newsletter to get the update news related to our
            latest properties and time-limited discounts.
          </p>
        </div>
        <div className="mt-[10px] text-[14px] xs:text-[16px] w-[100%]">
          <div className="flex w-[100%">
            <input
              type="email"
              placeholder="Enter your e-mail address"
              className=" w-[100%]  bg-whiteColor p-[10px] text-[16px]  text-blackColor focus:outline-none font-light"
            />
            <button className="px-4  py-2 bg-blackColor text-white font-bold border border-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="content-div bg-whiteColor h-[1px] mt-[20px] mb-[10px]"></div>
      <div className="content-div flex center flex-col sm:flex-row sm:justify-between items-center">
        <span className="text-whiteColor text-[14px] md:text-[16px] ">
          {Setting.copyRightText}
        </span>
        <div className="grid grid-cols-4 gap-4 mt-[10px] sm:mt-0">
          <a href="#" className="group">
            <div className="border p-[10px] rounded-md group-hover:bg-whiteColor">
              <FaFacebookF className="text-whiteColor group-hover:text-blackColor" />
            </div>
          </a>
          <a href="#" className="group">
            <div className="border p-[10px] rounded-md group-hover:bg-whiteColor">
              <BsInstagram className="text-whiteColor group-hover:text-blackColor" />
            </div>
          </a>
          <a href="#" className="group">
            <div className="border p-[10px] rounded-md group-hover:bg-whiteColor">
              <RiTwitterXFill className="text-whiteColor group-hover:text-blackColor" />
            </div>
          </a>
          <a href="#" className="group">
            <div className="border p-[10px] rounded-md group-hover:bg-whiteColor">
              <FaLinkedinIn className="text-whiteColor group-hover:text-blackColor" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CFooter;
