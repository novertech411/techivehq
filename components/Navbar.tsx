import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import logo from "@/public/images/logo .png";
import Link from "next/link";
import Container from "@/components/Container";
import Message from "./icons/Message";
import Humbuger from "./icons/Humbuger";

function Navbar() {
  const pathname = usePathname();

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleToggle = () => {
    setIsMenuVisible((prev) => !prev);
  };

  return (
    <div className="  bg-white fixed top-0 left-0 right-0 z-50 ">
      <Container>
        <div className=" flex justify-between py-5  items-cente  px-3 ">
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

          <div onClick={handleToggle} className="md:hidden block">
            <Humbuger className="text-[#FCB64E] " />
          </div>
        </div>
      </Container>
      <ul
        className={` z-50 w-full h-[1000vh] pt-11  century font-[400] text-[16px] gap-[70px] items-center flex  flex-col font-neue-normal  absolute bg-white   md:hidden ${
          isMenuVisible ? "flex" : "hidden"
        }`}
      >
        <Link href="#about" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-white     hover:border-secondary  ${
              pathname === "/about" ? "border-secondary" : ""
            }   `}
          >
            About Us
          </li>
        </Link>

        <Link href="#program" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-white    hover:border-secondary  ${
              pathname === "/program" ? "border-secondary" : ""
            }   `}
          >
            Programs
          </li>
        </Link>

        <Link href="/" onClick={handleToggle}>
          <li
            className={` py-1  border-b-2  border-white    hover:border-secondary  ${
              pathname === "/" ? "border-secondary" : ""
            }   `}
          >
            Contact us
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
