import Image from "next/image";
import React from "react";
import happy from "@/public/images/Group 1000001946.png";

function Footer() {
  return (
    <div className="bg-primary">
      <div className="flex">
        <Image src={happy} alt="happy" />

        <div>
          <h2 className=" text-primary ">Learning/Mentorship Opportunities </h2>
          <p className="max-w-[1000px] mx-auto text-[28px] font-[400]">
            We host trainings, seminars, and bootcamps to educate and equip
            individuals within the community with the essential skills needed to
            enter the tech industry.
          </p>{" "}
          <div> </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
