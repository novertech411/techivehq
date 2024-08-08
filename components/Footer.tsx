import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import happy from "@/public/images/1 SCENE 2.png";
import Container from "./Container";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import logo from "@/public/images/Layer_1.png";
import JSConfetti from "js-confetti";

function Footer() {
  const [jsConfetti, setJsConfetti] = useState<JSConfetti | null>(null);

  useEffect(() => {
    // Initialize JSConfetti only on the client-side
    if (typeof window !== "undefined") {
      setJsConfetti(new JSConfetti());
    }
  }, []);

  const handleJoinClick = () => {
    if (jsConfetti && jsConfetti.addConfetti) {
      jsConfetti.addConfetti({
        confettiColors: [
          "#ff0a54",
          "#ff477e",
          "#ff7096",
          "#ff85a1",
          "#fbb1bd",
          "#f9bec7",
        ],
        confettiNumber: 100,
        emojis: ["🥳", "🎊 ", "🔥", "✨"],
      });
    }
  };

  return (
    <div className="bg-primary ">
      <Container>
        <div
          id="contact"
          className="flex justify-center  md:pt-[200px]   pt-[100px] items-center  md:flex-row flex-col-reverse"
        >
          <Image src={happy} alt="happy" />

          <div className="text-center px-2">
            <h2 className=" text-white md:text-[64px] text-[40px] font-[600] ">
              Join our Community{" "}
            </h2>
            <p className="max-w-[1000px] mx-auto md:text-[28px] text-[18px] font-[400] text-white w-[90%]   ">
              Learn more about us and stay up to date with our activities. Join
              our community today!
            </p>{" "}
            <div className="flex gap-1 text-[18px] mt-11 flex-wrap px-4  flex-col max-w-[500px] mx-auto justify-center">
              <input
                placeholder=" FirstName  "
                className=" p-[14px] bg-white focus:outline-none rounded-md"
              />
              <input
                placeholder=" Email "
                className=" p-[14px] bg-white focus:outline-none rounded-md"
              />

              <div className="my-3">
                <p className="text-[24px] gap-2 flex items-center text-white ">
                  <FaWhatsapp className="text-secondary" /> WhatsApp Number
                </p>
                <div className="flex">
                  <input
                    placeholder="+234 Number"
                    className="p-[14px] bg-white rounded-md flex-grow focus:outline-none"
                    type="tel"
                  />
                </div>
              </div>
              <button
                className="p-[7px] bg-[#18B99B] text-[30px] w-[100px] mt-3 text-white mx-auto rounded-md"
                onClick={handleJoinClick}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <div className="flex md:justify-between md:px-11  px-3 md:pt-[150px] pt-9   pb-11 flex-col md:flex-row justify-center items-center">
          <Image src={logo} alt="" className=" md:mx-0 mx-auto my-9" />{" "}
          <div className="text-white md:text-[20px]  text-center ">
            <p>We are social</p>
            <div className="flex gap-3 justify-center  text-[30px]   ">
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
