"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Container from "@/components/Container";
import circle from "@/public/images/Vector (1).png";
import chain1 from "@/public/images/glass3_dis 5 1.png";
import chain2 from "@/public/images/0021 1 1.png";
import Message from "@/components/icons/Message";
import advoct from "@/public/images/Group 1000001943.png";
import community from "@/public/images/Group 1000001944.png";
import learning from "@/public/images/Group 1000001945.png";

export default function Home() {
  return (
    <div className=" mt-11">
      <div className="">
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
        </Container>
      </div>
      <Container>
        <div className="text-center text-[60px] font-[600] mt-[138px]">
          <h2 id="about" className=" text-primary ">
            Who We Are{" "}
          </h2>
          <p className="max-w-[1000px] mx-auto text-[28px] font-[400]">
            Techive Africa is a community driven non-profit organization with
            the goal to bridge the gap in Tech-talent representation across
            under-represented regions in Africa.
          </p>
        </div>

        <div
          id="program"
          className="text-center text-[60px] font-[600] mt-[250px] flex gap-10 justify-center  "
        >
          <div className="text-left  w-[600px] ">
            {" "}
            <h2 className=" text-primary ">
              Advocacy for inclusivity & Adoption{" "}
            </h2>
            <p className="max-w-[1000px] mx-auto text-[28px] font-[400]">
              Our organization aims to promote the transformative power of
              technology, empowering young individuals to explore diverse
              opportunities and make informed choices aligned with their
              aspirations.
            </p>{" "}
          </div>

          <Image src={advoct} alt="" />
        </div>

        <div className="text-center text-[60px] font-[600] mt-[180px] flex gap-10 justify-center ">
          <Image src={community} alt="community" />

          <div className="text-left  w-[600px] ">
            {" "}
            <h2 className=" text-primary ">Community you can grow with </h2>
            <p className="max-w-[1000px] mx-auto text-[28px] font-[400]">
              At Techive Africa, we foster a supportive community where
              individuals can learn, collaborate, and achieve their career
              aspirations at scale.
            </p>{" "}
          </div>
        </div>

        <div className="text-center text-[60px] font-[600] mt-[180px]  mb-[100px] flex gap-10 justify-center ">
          <div className="text-left  w-[600px] ">
            {" "}
            <h2 className=" text-primary ">
              Learning/Mentorship Opportunities{" "}
            </h2>
            <p className="max-w-[1000px] mx-auto text-[28px] font-[400]">
              We host trainings, seminars, and bootcamps to educate and equip
              individuals within the community with the essential skills needed
              to enter the tech industry.
            </p>{" "}
          </div>

          <Image src={learning} alt="" />
        </div>
      </Container>
    </div>
  );
}
