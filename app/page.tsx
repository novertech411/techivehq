"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Container from "@/components/Container";
import circle from "@/public/images/Vector (1).png";
import chain1 from "@/public/images/glass3_dis 5 1.png";
import chain2 from "@/public/images/0021 1 1.png";
import Message from "@/components/icons/Message";

export default function Home() {
  return (
    <div>
      <Container>
        <div
          className="bg-hero-section bg-no-repeat h-[718px]  bg-yellow-300 rounded-xl
   "
        >
          <div>
            {" "}
            <div className="text-center relative pt-[60px] ">
              {" "}
              <h2 className="font-clash-semi font-[700] text-white text-[58px]  realtive  z-50 ">
                Empowering <br />
                African Youths <br />
                Through Tech.
              </h2>
              <Image
                src={chain1}
                alt=""
                className="absolute top-1 right-[32%] z-50 w-[100px]"
              />
              <Image
                src={chain2}
                alt=""
                className="absolute buttom-4 left-[32%] z-50 w-[100px]"
              />
              <div className="z-0">
                <Image
                  src={circle}
                  alt=""
                  className="absolute bottom-1 right-[32%] z-0 w-[200px]"
                />
              </div>
            </div>
            <div className=" bg-[#FCB64E] p-4  rounded-full w-[300px]  text-[24px] text-center mx-auto flex items-center gap-2 justify-center ">
              <p>Join our Community</p> <Message classes="bg-black " />
            </div>
            <p className="text-center text-[#ffffffa8] text-[12px] mt-4 font-clash-semi">
              {" "}
              Currently Serving Plateau, Nigeria.
            </p>
          </div>
        </div>

        <div className="text-center text-[60px] font-[600] mt-[70px]">
          <h2 className=" text-primary ">Who We Are </h2>
          <p className="max-w-[1000px] mx-auto text-[36px]">
            Techive Africa is a community driven non-profit organization with
            the goal to bridge the gap in Tech-talent representation across
            under-represented regions in Africa.
          </p>
        </div>
      </Container>
    </div>
  );
}
