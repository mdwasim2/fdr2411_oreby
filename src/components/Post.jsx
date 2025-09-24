
import { useEffect, useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";


const Post = ({ allPage, filterCategory, active }) => {
  let [allFilter, setAllFilter] = useState([]);
  let [showAll, setShowAll] = useState(true);

  useEffect(() => {
    let filterCate = filterCategory.slice(0, 5);
    setAllFilter(filterCate);
    setShowAll(true);
  }, [filterCategory]);

  let handleShow = () => {
    setAllFilter(filterCategory);
    setShowAll(false);
  };
  let handleLess = () => {
    let filterCate = filterCategory.slice(0, 5);
    setAllFilter(filterCate);
    setShowAll(true);
  };

  return (
    <>
      {allFilter.length > 0 ? (
        <div className="">
          <div className="flex flex-wrap justify-between">
            {allFilter.map((item) => (
              <div className="w-[48%] lg:w-[32%]">
                <div className="relative group">
                  <span className="font-dm font-bold text-[14px] text-white inline-block px-3 bg-[#262626] absolute top-3 left-3 ">
                    New
                  </span>
                  <img src={item.thumbnail} alt="" className="w-full " />
                  <div className="bg-white space-y-4 p-5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                    <div className="flex items-center justify-end gap-2 ">
                      <p className="font-dm text-[14px] text-[#262626] hover:font-bold hover:text-[#262626]">
                        Add to Wish List
                      </p>
                      <FaHeart />
                    </div>
                    <div className="flex items-center justify-end gap-2 ">
                      <p className="font-dm text-[14px] text-[#262626] hover:font-bold hover:text-[#262626]">
                        Compare
                      </p>
                      <TfiReload />
                    </div>
                    <div className="flex items-center justify-end gap-2 ">
                      <p className="font-dm text-[14px] text-[#262626] hover:font-bold hover:text-[#262626]">
                        Add to Cart
                      </p>
                      <FaShoppingCart />
                    </div>
                  </div>
                </div>
                <div className="lg:flex items-center justify-between py-2">
                  <h6 className="font-dm font-bold text-[14px] text-[#262626] ">
                    {item.title}
                  </h6>
                  <p className="font-dm text-[14px] text-[#262626] ">
                    ${item.price}
                  </p>
                </div>
                <p className="font-dm text-[14px] text-[#262626] ">Black</p>
              </div>
            ))}
          </div>
          {filterCategory.length > 5 && (
            <div className="text-center mt-4">
              {showAll ? (
                <button
                  onClick={handleShow}
                  className="px-4 py-2 bg-gray-800 text-white rounded"
                >
                  Show All
                </button>
              ) : (
                <button
                  onClick={handleLess}
                  className="px-4 py-2 bg-gray-800 text-white rounded"
                >
                  Show Less
                </button>
              )}
            </div>
          )}
        </div>
      ) : (
        <div
          className={`${
            active == "active" ? "w-full" : "flex flex-wrap justify-between"
          }`}
        >
          {allPage.map((item) => (
            <div className="w-[48%] lg:w-[32%]">
              <div className="relative group">
                <span className="font-dm font-bold text-[14px] text-white inline-block px-3 bg-[#262626] absolute top-3 left-3 ">
                  New
                </span>
                {console.log(item)}
                <Link to={`/shop/${item.id}`}>
                  <img src={item.thumbnail} alt="" className="w-full " />
                </Link>
                <div className="bg-white space-y-4 p-5 w-full absolute bottom-0 opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                  <div className="flex items-center justify-end gap-2 ">
                    <p className="font-dm text-[14px] text-[#262626] hover:font-bold hover:text-[#262626]">
                      Add to Wish List
                    </p>
                    <FaHeart />
                  </div>
                  <div className="flex items-center justify-end gap-2 ">
                    <p className="font-dm text-[14px] text-[#262626] hover:font-bold hover:text-[#262626]">
                      Compare
                    </p>
                    <TfiReload />
                  </div>
                  <div className="flex items-center justify-end gap-2 ">
                    <p className="font-dm text-[14px] text-[#262626] hover:font-bold hover:text-[#262626]">
                      Add to Cart
                    </p>
                    <FaShoppingCart />
                  </div>
                </div>
              </div>
              <div className="lg:flex items-center justify-between py-2">
                <h6 className="font-dm font-bold text-[14px] text-[#262626] ">
                  {item.title}
                </h6>
                <p className="font-dm text-[14px] text-[#262626] ">
                  ${item.price}
                </p>
              </div>
              <p className="font-dm text-[14px] text-[#262626] ">Black</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
export default Post