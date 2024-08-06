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
import leftIMG from "@/public/images/Layer 0 1.png";
import rightIMG from "@/public/images/mod 2 1.png";
import Modal from "@/components/Modal";

export default function Home() {
  return (
    <div className=" mt-11">
      <div className="   md:bg-none bg-[#202624]">
        <Container>
          <div
            className=" bg-hero-section relative bg-no-repeat h-[718px]  md:rounded-xl 
   "
          >
            <div>
              {" "}
              <div className="text-center relative pt-[60px] ">
                {" "}
                <h2 className="font-clash-semi font-[700] text-white md:text-[58px] text-[30px] realtive  z-50 ">
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

            {/* <Image src={leftIMG} alt="" className="absolute left-0 bottom-0" />
            <Image
              src={rightIMG}
              alt=""
              className="absolute right-0 bottom-0"
            /> */}
          </div>
        </Container>
      </div>
      <Container>
        <div className="text-center md:text-[60px] text-[45px] font-[600] mt-[138px]">
          <h2 id="about" className=" text-primary ">
            Who We Are{" "}
          </h2>
          <p className="max-w-[1000px] mx-auto md:text-[28px]  text-[20px] font-[400] px-3">
            Techive Africa is a community driven non-profit organization with
            the goal to bridge the gap in Tech-talent representation across
            under-represented regions in Africa.
          </p>
        </div>

        <div className="text-center md:text-[60px]  text-[45px] font-[600] md:mt-[250px] mt-[90px] flex gap-10 justify-center md:flex-row  flex-col  px-3 ">
          <div className="text-left  max-w-[600px]  ">
            {" "}
            <h2 className=" text-primary  text-center">
              Advocacy for inclusivity & Adoption{" "}
            </h2>
            <p className="md:max-w-[1000px]  mx-auto  md:text-[28px]  text-[20px] font-[400] text-center ">
              Our organization aims to promote the transformative power of
              technology, empowering young individuals to explore diverse
              opportunities and make informed choices aligned with their
              aspirations.
            </p>{" "}
          </div>

          <Image src={advoct} alt="" />
        </div>

        <div className="text-center  md:text-[60px]  text-[45px] font-[600] md:mt-[180px] mt-[90px] flex gap-10 justify-center  md:flex-row  flex-col-reverse p-3   ">
          <Image src={community} alt="community" />

          <div className="md:text-left  max-w-[600px] text-center ">
            {" "}
            <h2 className=" text-primary ">Community you can grow with </h2>
            <p className="max-w-[1000px] mx-auto  md:text-[28px]  text-[20px] font-[400]">
              At Techive Africa, we foster a supportive community where
              individuals can learn, collaborate, and achieve their career
              aspirations at scale.
            </p>{" "}
          </div>
        </div>

        <div className="text-center md:text-[60px]  text-[45px] font-[600] md:mt-[180px]  mt-[90px] mb-[100px] flex gap-10 justify-center  md:flex-row  flex-col  p-3 ">
          <div className="md:text-left text-center  max-w-[600px] ">
            {" "}
            <h2 className=" text-primary ">
              Learning/Mentorship Opportunities{" "}
            </h2>
            <p className="max-w-[1000px] mx-auto md:text-[28px]  text-[20px] font-[400]">
              We host trainings, seminars, and bootcamps to educate and equip
              individuals within the community with the essential skills needed
              to enter the tech industry.
            </p>{" "}
          </div>

          <Image src={learning} alt="" className=" " />
        </div>
      </Container>

      <Modal />
    </div>
  );
}
