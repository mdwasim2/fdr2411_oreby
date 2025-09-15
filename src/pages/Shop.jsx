import { useContext, useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { CiBoxList } from "react-icons/ci";
import { FaTableCellsLarge } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdMinimize, MdOutlineKeyboardArrowRight } from "react-icons/md";
import Container from "../components/Container";
import { ApiData } from "../components/ContextApi";
import Pagination from "../components/Pagination";
import Post from "../components/Post";



const Shop = () => {
let {info} = useContext(ApiData)
let [perPage, setPerPage] = useState(6);
let [currentPage, setCurrentPage] = useState(1);
let lastPage = perPage * currentPage
let firstPage = lastPage - perPage
let allPage = info.slice(firstPage, lastPage)
let [show, setShow] = useState(false)
let [active, setActive] = useState("")
let [category, setCategory] = useState([])
let [filterCategory, setFilterCategory] = useState([]);
let [brand, setBrand] = useState([])
let [low, setLow] = useState()
let [high, setHigh] = useState()

let pageNumber = [];

for (let i = 1; i <= Math.ceil(info.length / perPage); i++) {
  pageNumber.push(i);
}

let paginate = (index) =>{
  setCurrentPage(index + 1)
  
}
let next = () =>{
  if (currentPage < pageNumber.length) {
    setCurrentPage((state) => state + 1);
  }
  
}
let prev = () =>{
  if (currentPage > 1) {
    setCurrentPage((state) => state - 1);
  }
  
}

let handlePageNumber = (e) =>{
  setPerPage(e.target.value);
  
}

useEffect(() => {
  setCategory([...new Set(info.map((item) => item.category))]);
  setBrand([...new Set(info.map((item) => item.brand))]);
}, [info]);

let handleCaregory = (citem) => {
  let fiterItem = info.filter((item)=>item.category == citem)
  setFilterCategory(fiterItem);
};
let handleAllProduct = () =>{
  setFilterCategory("")
}

let handleActive = () =>{
  setActive("active")
  ami()
}


let handleBrand = (bitem) =>{
  let filterBrand = info.filter((item)=> item.brand == bitem)
  setFilterCategory(filterBrand);
}



let handlePrice = (value) =>{
  setLow(value.low);
  setHigh(value.high);
  let priceFilter = info.filter((item) => item.price > value.low && item.price < value.high);
  setFilterCategory(priceFilter);
  
}








  return (
    <Container>
      <div className="pt-10">
        <div className="w-12/12 pb-5 lg:pb-10">
          <h1 className="font-dm font-bold text-[40px] text-[#262626]">
            Products
          </h1>
          <div className="flex items-center font-dm text-[12px] text-[#262626]">
            <p>Home</p>
            <MdOutlineKeyboardArrowRight />
            <p>Products</p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-[100%] lg:w-[24%] lg:space-y-5 space-y-2">
          {/* one start */}
          <div className="flex justify-between">
            <p
              onClick={() => setShow(!show)}
              className="font-dm font-bold text-[16px] text-[#262626]"
            >
              Shop by Category
            </p>
            {show ? <MdMinimize /> : <BsPlus />}
          </div>

          <ul>
            {show && (
              <>
                <li onClick={handleAllProduct}>All Product</li>
                {category.map((item) => (
                  <li
                    onClick={() => handleCaregory(item)}
                    className="font-dm text-[14px] text-[#262626] py-1 capitalize"
                  >
                    {item}
                  </li>
                ))}
              </>
            )}
          </ul>

          <div className="">
            <h2 className="font-dm font-bold text-[16px] text-[#262626]">
              Brand
            </h2>
            <ul>
              {brand.map((item) => (
                <li
                  className="border-b-2 border-[red] last:border-b-0"
                  onClick={() => handleBrand(item)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="">
            <h2 className="font-dm font-bold text-[16px] text-[#262626]">
              Price
            </h2>
            <ul>
              <li onClick={() => handlePrice({ low: 0, high: 10 })}>
                $0 - $10
              </li>
              <li onClick={() => handlePrice({ low: 11, high: 20 })}>
                $11 - $20
              </li>
            </ul>
          </div>
        </div>
        {/* one end */}
        <div className="w-[74%]">
          <div className="w-12/12 flex flex-wrap items-center pb-5 space-y-5 lg:space-y-0">
            <div className="w-full lg:w-4/12 flex items-center gap-2 justify-end lg:justify-start">
              <div
                onClick={() => setActive("")}
                className={`${
                  active == "active" ? "" : "p-1 bg-[#262626] text-white"
                }`}
              >
                <FaTableCellsLarge />
              </div>
              <div
                onClick={handleActive}
                className={`${
                  active == "active"
                    ? "p-1 border-1 border-[#262626] bg-[#262626] text-white"
                    : ""
                }`}
              >
                <CiBoxList />
              </div>
            </div>

            <div className="w-full lg:w-6/12 flex items-center gap-1 lg:pl-50 justify-end lg:justify-start">
              <p className="font-dm text-[16px] text-[#262626]">Sort by:</p>
              <div className="border-1 border-[#262626] py-1 pl-40 pr-1">
                <IoMdArrowDropdown />
              </div>
            </div>

            <div className="w-full lg:w-2/12 flex items-center gap-1 justify-end lg:justify-start">
              <select
                onChange={handlePageNumber}
                name=""
                id=""
                className="border-1 border-[#262626] py-1 pl-20 pr-1"
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
              </select>
              <div>
                <IoMdArrowDropdown />
              </div>
            </div>
          </div>
          <div>
            <Post
              allPage={allPage}
              filterCategory={filterCategory}
              active={active}
            />
          </div>
          <Pagination
            pageNumber={pageNumber}
            paginate={paginate}
            next={next}
            prev={prev}
            currentPage={currentPage}
            filterCategory={filterCategory}
          />
        </div>
      </div>
    </Container>
  );
}
export default Shop