import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import NavLogo from "../assets/logo.png";
import Container from "./Container";

function Footer() {
  return (
    <footer className="bg-[#F5F5F3] py-10">
      <Container>
        <div className="flex justify-between flex-wrap lg:space-y-0 space-y-10">
          <div className="w-[33%] lg:w-[15%]">
            <ul>
              <p className="font-dm font-bold text-[16px] text-[#262626] pb-2">
                MENU
              </p>
              <li className="font-dm text-[14px] text-[#262626] py-1">Home</li>
              <li className="font-dm text-[14px] text-[#262626] py-1">Shop</li>
              <li className="font-dm text-[14px] text-[#262626] py-1">About</li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Contact
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Journal
              </li>
            </ul>
          </div>
          <div className="w-[33%] lg:w-[15%]">
            <ul>
              <p className="font-dm font-bold text-[16px] text-[#262626] pb-2">
                SHOP
              </p>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Category 1
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Category 2
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Category 3
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Category 4
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Category 5
              </li>
            </ul>
          </div>
          <div className="w-[33%] lg:w-[15%]">
            <ul>
              <p className="font-dm font-bold text-[16px] text-[#262626] pb-2">
                HELP
              </p>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Privacy Policy
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Terms & Conditions
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Special E-shop
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Shipping
              </li>
              <li className="font-dm text-[14px] text-[#262626] py-1">
                Secure Payments
              </li>
            </ul>
          </div>
          <div className="w-[70%] lg:w-[30%]">
            <p className="font-dm font-bold text-[16px] text-[#262626] py-1">
              (052) 611-5711
            </p>
            <p className="font-dm font-bold text-[16px] text-[#262626] py-1">
              company@domain.com
            </p>
          </div>
          <div className="w-[30%] lg:w-[25%]">
            <img src={NavLogo} alt="" />
          </div>
        </div>
        <div className="flex items-center justify-between lg:pt-11">
          <div className="w-[50%] flex items-center gap-3">
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

          <div className="w-[50%]">
            <p className="font-dm text-[12px] text-nlicolor lg:text-end">
              2020 Orebi Minimal eCommerce Figma Template by Adveits
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
