import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "@/public/images/logo.png";
import Link from "next/link";
import Container from "@/components/Container";

function Navbar() {
  const pathname = usePathname();
  return (
    <div>
      <Container>
        <div className=" flex justify-between ">
          <Image src={logo} alt="techive" />

          <ul className=" ml-auto  century font-[400] text-[13px] gap-11 items-center lg:flex      hidden">
            <Link href="/about">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/about" ? "border-secondary" : ""
                }   `}
              >
                About Us
              </li>
            </Link>

            <Link href="/program ">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/program" ? "border-secondary" : ""
                }   `}
              >
                Programs
              </li>
            </Link>

            <Link href="/">
              <li
                className={` py-1  border-b-2  border-primary     hover:border-secondary  ${
                  pathname === "/" ? "border-secondary" : ""
                }   `}
              >
                Home
              </li>
            </Link>
          </ul>

          <div> join</div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
