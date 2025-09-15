import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import Container from "./Container";

const Header = () => {
    let [menu, setMenu] = useState(false)
  return (
    <header className="py-3">
      <Container>
        <div className="lg:flex items-center">
          <div className="lg:w-2/12 relative z-[2]">
            <img src={Logo} alt="" />
          </div>
          <div className="w-full lg:w-10/12">
            <ul
              className={`lg:flex gap-6 justify-center m-0 p-0 duration-300 ease-in-out ${
                menu == true ? "bg-red-500" : "mt-[-150px] lg:mt-0"
              }`}
            >
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                <Link to="/"> Home</Link>
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                <Link to="/shop"> Shop</Link>
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                About
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                Contact
              </li>
              <li className="font-dm text-[16px] text-[#767676] hover:text-[#262626] duration-300 ease-in-out hover:font-bold">
                Journal
              </li>
            </ul>
          </div>
          <div
            className="lg:hidden absolute top-0 right-0 border-2"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <div className="border-2 border-[red]">
                <RxCross2 />
              </div>
            ) : (
              <div className="border-2 border-[green]">
                <FaBars />
              </div>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
}
export default Header