import { useEffect, useRef, useState } from "react";
import { FaBars, FaCartArrowDown, FaSearch, FaSortDown, FaUser } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";
import { useSelector } from "react-redux";
import Container from "./Container";

const Navbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let [show, setShow] = useState(false)
    let [accshow, setAccShow] = useState(false)

    let cartdata = useSelector((state) => state.product.cartItem);


   

    useEffect(()=>{
      document.addEventListener("click", (e) => {
        if (cateRef.current.contains(e.target) == true) {
          setShow(!show);
        } else {
          setShow(false);
        }
        if (accRef.current.contains(e.target) == true) {
          setAccShow(!accshow);
        } else {
          setAccShow(false);
        }
        
      });

    },[])


  return (
    <div className="bg-[#F5F5F3] py-3">
      <Container>
        <div className="flex items-center">
          <div className="w-2/7 relative">
            <div ref={cateRef} className="flex items-center gap-x-2">
              <FaBars />
              <h3>Shop by Category</h3>
            </div>
            {show && (
              <div className="bg-[#262626] py-3 absolute left-0 top-[34px] w-full">
                <ul>
                  <li className="text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8] cursor-pointer">
                    <div className="flex justify-between items-center pr-2">
                      <span> Accessories</span>
                      <MdChevronRight />
                    </div>
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8]">
                    Furniture
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8]">
                    Electronics
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8]">
                    Clothes
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2 border-b-[1px] border-[#D8D8D8]">
                    Bags
                  </li>
                  <li className="text-[rgba(255,255,255,0.7)] duration-300 ease-in-out pl-[20px] hover:pl-[30px] py-2">
                    Home appliances
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="w-4/7">
            <div className="relative">
              <input
                type="text"
                placeholder="Search...."
                className="py-3 w-full pl-4 rounded-full bg-[#fff] outline-0"
              />
              <div className="absolute right-6 top-[50%] translate-y-[-50%]">
                <FaSearch />
              </div>
            </div>
          </div>
          <div className="w-1/7 relative">
            <div className="flex items-center justify-end gap-x-4">
              <div ref={accRef} className="flex">
                <FaUser />
                <FaSortDown />
              </div>
              <div className="">
                {cartdata.length}
                <FaCartArrowDown />
              </div>
            </div>
            {accshow &&
            <div className="bg-[#fff] py-3 absolute left-0 top-[34px] w-full">
              <ul>
                <li className="hover:bg-[#262626] hover:text-[#fff] py-2 text-center duration-300 ease-in-out">
                  My Account
                </li>
                <li className="hover:bg-[#262626] hover:text-[#fff] py-2 text-center duration-300 ease-in-out">
                  Login
                </li>
              </ul>
            </div>
            }
          </div>
        </div>
      </Container>
    </div>
  );
}
export default Navbar