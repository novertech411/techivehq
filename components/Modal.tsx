import Image from "next/image";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import happy from "@/public/images/Group 1000001946.png";
import logo from "@/public/images/Layer_1.png";
import JSConfetti from "js-confetti";
import { FaWhatsapp } from "react-icons/fa";

interface ModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isVisible, onClose }) => {
  // All hooks are called unconditionally at the top of the component
  const [jsConfetti, setJsConfetti] = useState<JSConfetti | null>(null);
  const [isJoined, setIsJoined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [countryCode, setCountryCode] = useState("+234");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setJsConfetti(new JSConfetti());
    }
  }, []);

  const handleJoinClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsJoined(true);
      if (jsConfetti) {
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
    }, 2000);
  };

  // Conditional rendering after all hooks
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0b0b0b35] backdrop-blur-sm flex justify-center items-center modal-overlay"
      onClick={onClose} // Close the modal if the overlay is clicked
    >
      <div
        className="bg-primary rounded-md z-50 md:w-[57%]"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing if the modal itself is clicked
      >
        <Container>
          <div className="flex justify-center md:py-[100px] py-[20px] items-center flex-col">
            <Image src={logo} alt="" className="mx-auto md:my-9" />

            <div className="text-center px-2">
              <h2
                className={`text-white md:text-[64px] text-[40px] font-[600] ${
                  isJoined ? "hidden" : ""
                }`}
              >
                Join our Community
              </h2>
              <h2
                className={`text-white md:text-[64px] text-[40px] font-[600] ${
                  isJoined ? "" : "hidden"
                }`}
              >
                Welcome to the community
              </h2>

              <p
                className={`max-w-[1000px] mx-auto md:text-[28px] text-[18px] font-[400] text-white w-[90%] ${
                  isJoined ? "hidden" : ""
                }`}
              >
                Learn more about us and stay up to date with our activities.
                Join our community today!
              </p>
              <div
                className={`flex gap-5 text-[18px] mt-11 flex-col px-4 justify-center max-w-[400px] mx-auto ${
                  isJoined ? "hidden" : ""
                }`}
              >
                <input
                  placeholder="FirstName"
                  className="p-[14px] bg-white rounded-md focus:outline-none"
                />
                <input
                  placeholder="Email"
                  className="p-[14px] bg-white rounded-md focus:outline-none"
                />

                <p className="text-[24px] gap-2 flex items-center text-white">
                  <FaWhatsapp className="text-secondary" /> WhatsApp Number
                </p>
                <div className="flex">
                  <input
                    placeholder="+234 Number"
                    className="p-[14px] bg-white rounded-md flex-grow focus:outline-none"
                    type="tel"
                  />
                </div>
                <button
                  className="p-[7px] bg-[#18B99B] text-[30px] w-[100px] text-white mx-auto rounded-md relative"
                  onClick={handleJoinClick}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="w-6 h-6 border-t-2 border-white border-solid rounded-full animate-spin"></div>
                  ) : (
                    "Join"
                  )}
                </button>
              </div>
            </div>
            <Image
              src={happy}
              alt="happy"
              className={isJoined ? "block md:w-[50%] w-[80%]" : "hidden"}
            />
            <p
              className={`max-w-[1000px] mx-auto md:text-[28px] text-[18px] font-[400] text-white w-[90%] text-center my-11 ${
                isJoined ? "" : "hidden"
              }`}
            >
              Sent you an Email 😎 <br></br>check it out !!!
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Modal;
