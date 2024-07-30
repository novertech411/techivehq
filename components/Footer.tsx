import Image from "next/image";
import React from "react";
import happy from "@/public/images/Group 1000001946.png";
import Container from "./Container";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "@/public/images/Layer_1.png";

function Footer() {
  return (
    <div className="bg-primary p">
      <Container>
        <div className="flex justify-center gap-[60px] pt-[200px] items-center ">
          <Image src={happy} alt="happy" />

          <div className="text-center">
            <h2 className=" text-white text-[64px] font-[600] ">
              Join our Community{" "}
            </h2>
            <p className="max-w-[1000px] mx-auto text-[28px] font-[400] text-white w-[90%]  ">
              Learn more about us and stay up to date with our activities. Join
              our community today!
            </p>{" "}
            <div className="flex gap-1 text-[18px] mt-11">
              <input
                placeholder=" FirstName  "
                className=" p-[14px] bg-white"
              />
              <input placeholder=" Email " className=" p-[14px] bg-white" />
              <button className="p-[14px] bg-[#18B99B] text-[30px] w-[170px] text-white ">
                {" "}
                Join
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex justify-between px-11 pt-[150px]  pb-11">
          <Image src={logo} alt="" />{" "}
          <div className="text-white text-[20px] ">
            <p>We are social</p>
            <div className="flex gap-3 justify-center  text-[30px]">
              <FiInstagram className="" />
              <FaLinkedin />
              <BsTwitterX />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
