import Image from "next/image";
import React from "react";
import Container from "./Container";
import happy from "@/public/images/Group 1000001946.png";

function Modal() {
  return (
    <div className="fixed inset-0  bg-[#0b0b0b35] backdrop-blur-sm flex justify-center items-center">
      <div className="bg-primary  ">
        <Container>
          <div className="flex justify-center  md:py-[100px]   pt-[100px] items-center  flex-col-reverse ">
            <Image src={happy} alt="happy" className="hidden" />

            <div className="text-center px-2">
              <h2 className=" text-white md:text-[64px] text-[40px] font-[600] ">
                Join our Community{" "}
              </h2>
              <p className="max-w-[1000px] mx-auto md:text-[28px] text-[18px] font-[400] text-white w-[90%]   ">
                Learn more about us and stay up to date with our activities.
                Join our community today!
              </p>{" "}
              <div className="flex gap-5 text-[18px] mt-11 flex-col px-4  justify-center max-w-[400px] mx-auto">
                <input
                  placeholder=" FirstName  "
                  className=" p-[14px] bg-white rounded-md"
                />
                <input
                  placeholder=" Email "
                  className=" p-[14px] bg-white  rounded-md"
                />
                <input
                  placeholder=" +234 "
                  className=" p-[14px] bg-white  rounded-md"
                  type="number "
                />
                <button className="p-[7px] bg-[#18B99B] text-[30px] w-[100px] text-white mx-auto rounded-md">
                  Join
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Modal;
