import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/public/images/logo .png";
import Link from "next/link";
import Container from "@/components/Container";
import Message from "./icons/Message";

function Navbar() {
  const pathname = usePathname();
  return (
    <div className="  bg-white">
      <Container>
        <div className=" flex justify-between py-5  items-center ">
          <Image src={logo} alt="techive" className=" md:w-[130px] w-[90px]" />

          <ul className="  century font-[400] text-[16px] gap-[70px] items-center lg:flex  font-neue-normal    hidden">
            <Link href="#about">
              <li
                className={` py-1  border-b-2  border-white     hover:border-secondary  ${
                  pathname === "/about" ? "border-secondary" : ""
                }   `}
              >
                About Us
              </li>
            </Link>

            <Link href="#program ">
              <li
                className={` py-1  border-b-2  border-white    hover:border-secondary  ${
                  pathname === "/program" ? "border-secondary" : ""
                }   `}
              >
                Programs
              </li>
            </Link>

            <Link href="/">
              <li
                className={` py-1  border-b-2  border-white    hover:border-secondary  ${
                  pathname === "/" ? "border-secondary" : ""
                }   `}
              >
                Contact us
              </li>
            </Link>
          </ul>

          <div className=" text-white  bg-primary rounded-full py-4 px-9 md:flex gap-3 items-center font-neue-medium hidden">
            {" "}
            <h2>Join our Community</h2> <Message classes=" bg-white" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
