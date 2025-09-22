import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus, FaStar } from "react-icons/fa";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { ApiData } from "../components/ContextApi";
import { addToCart } from "../components/slice/productSlice";


const ProductDetails = () => {
  let productId = useParams();
  let dispatch = useDispatch()
  
  let info = useContext(ApiData)
  let [show1, setShow1] = useState(false)
  let [show2, setShow2] =useState (false)
  let [singleProducts, setSingleProducts] = useState({})

  let singleProduct = () => {
    axios
      .get(`https://dummyjson.com/products/${productId.id}`)
      .then((response) => {
        setSingleProducts(response.data);
      });
  };
  useEffect(() => {
    singleProduct();
  }, []);



  
  let clientRating = Array.from({length:5},(_, index)=>{
    let number = index + 0.5
    return singleProducts.rating > index + 1 ? (
      <IoMdStar />
    )  : singleProducts.rating > number ? <IoMdStarHalf/> : (
      <IoMdStarOutline />
    );
  })

  let mainPrice = (singleProducts.price / 100) * singleProducts.discountPercentage;
  let mulPrice = singleProducts.price - mainPrice;

  

  

  // let handleCart = (item) =>{
  //   dispatch(addToCart({ ...item, qun: 1 }));
  // }


  // function handleAddtoCart(){
  //   alert("add to card successfull")
  // }


  const handleAddtoCart =(item)=>{
     dispatch(addToCart({...item}));

  }
  



  return (
    <Container>
      <div>
        <div className="py-5 space-y-15">
          <div className="w-6/12 lg:w-3/12 mx-auto">
            <img src={singleProducts.thumbnail} alt="" className="w-full" />
            <h2 className="font-dm text-[26px] font-bold text-nlihcolor text-center">
              {singleProducts.title}
            </h2>
          </div>

          <div className="w-8/12 lg:w-6/12 space-y-5">
            <div className="flex gap-3">
              <div className="flex gap-1 text-amber-400">
                {clientRating}
                {/* <IoMdStar />
                <IoMdStarHalf />
                <IoMdStarOutline /> */}
              </div>

              <div>
                <p className="font-dm text-[16px] text-nlicolor">1 Review</p>
              </div>
            </div>

            <div className="flex gap-3">
              <p className="font-dm text-[16px] line-through text-nlicolor">
                ${singleProducts.price}
              </p>
              <p className="font-dm font-bold text-[16px] text-nlihcolor">
                ${mulPrice.toFixed(2)}
              </p>
            </div>

            {/* <div className="flex gap-3">
              <p className="font-dm font-bold text-[16px] text-nlihcolor">
                QUANTITY:
              </p>
              <div className="flex items-center gap-3 border-1 border-nlicolor px-2">
                <FaMinus />
                <p>1</p>
                <FaPlus />
              </div>
            </div> */}

            <div className="flex gap-3 pb-3 border-b-1 border-nlicolor pt-3">
              <p className="font-dm font-bold text-[16px] text-[#262626]">
                STATUS:
              </p>
              <p className="font-dm text-[16px] text-[#262626]">grtyrtyy</p>
            </div>

            <div className="space-x-5 space-y-5 lg:space-y-0">
              <button className="font-dm font-bold text-[14px] text-[#262626] border-1 border-[#262626] px-12 py-3 bg-white hover:bg-[#262626] hover:text-white">
                Add to Wish List
              </button>
              <button
                onClick={() => handleAddtoCart(singleProducts)}
                className="font-dm font-bold text-[14px] text-[#262626] border-1 border-[#262626] px-12 py-3 bg-white hover:bg-[#262626] hover:text-white"
              >
                Add to Cart
              </button>
            </div>

            <div>
              <div onClick={() => setShow1(!show1)}>
                <div className="flex justify-between items-center py-3 border-t-1 border-b-1 border-nlicolor">
                  <p className="font-dm font-bold text-[16px] text-nlihcolor">
                    FEATURES & DETAILS
                  </p>
                  {show1 ? <FaMinus /> : <FaPlus />}
                </div>
                {show1 && (
                  <p className="font-dm text-[16px] text-nlicolor py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                )}
              </div>

              <div onClick={() => setShow2(!show2)}>
                <div className="flex justify-between items-center py-3 border-b-1 border-nlicolor">
                  <p className="font-dm font-bold text-[16px] text-nlihcolor">
                    SHIPPING & RETURNS
                  </p>
                  {show2 ? <FaMinus /> : <FaPlus />}
                </div>
                {show2 && (
                  <p className="font-dm text-[16px] text-nlicolor py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                )}
              </div>
            </div>

            <div className="space-x-5">
              <div class="mb-4 border-b border-gray-200 dark:border-gray-700">
                <ul
                  class="flex flex-wrap -mb-px text-sm font-medium text-center"
                  id="default-tab"
                  data-tabs-toggle="#default-tab-content"
                  role="tablist"
                >
                  <li class="me-2" role="presentation">
                    <button
                      class="inline-block p-4 border-b-2 rounded-t-lg"
                      id="profile-tab"
                      data-tabs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Description
                    </button>
                  </li>
                  <li class="me-2" role="presentation">
                    <button
                      class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                      id="dashboard-tab"
                      data-tabs-target="#dashboard"
                      type="button"
                      role="tab"
                      aria-controls="dashboard"
                      aria-selected="false"
                    >
                      Reviews
                    </button>
                  </li>
                </ul>
              </div>
              <div id="default-tab-content">
                <div
                  class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {singleProducts.description}
                  </p>
                </div>
                <div
                  class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="dashboard"
                  role="tabpanel"
                  aria-labelledby="dashboard-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {singleProducts?.reviews?.map((item) => (
                      <div>{item.comment}</div>
                    ))}
                  </p>
                </div>
                <div
                  class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="settings"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong class="font-medium text-gray-800 dark:text-white">
                      Settings tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
                <div
                  class="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
                  id="contacts"
                  role="tabpanel"
                  aria-labelledby="contacts-tab"
                >
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    This is some placeholder content the{" "}
                    <strong class="font-medium text-gray-800 dark:text-white">
                      Contacts tab's associated content
                    </strong>
                    . Clicking another tab will toggle the visibility of this
                    one for the next. The tab JavaScript swaps classes to
                    control the content visibility and styling.
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b-1 border-nlicolor py-3 space-y-3">
              <div className="flex items-center gap-3">
                <p className="font-dm font-bold text-[16px] text-nlihcolor">
                  John Ford
                </p>
                <div className="flex text-amber-300 gap-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
              <p className="font-dm text-[16px] text-nlicolor">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>

            <div className="mt-10">
              <p className="font-dm font-bold text-[25px] text-nlihcolor pb-5">
                Add a Review
              </p>
              <form action="">
                <p className="font-dm font-bold text-[16px] text-nlihcolor">
                  Name
                </p>
                <input
                  type="text"
                  placeholder="Your name here"
                  className="py-1 border-b-1 border-nlicolor w-full"
                />
                <p className="font-dm font-bold text-[16px] text-nlihcolor mt-4">
                  Email
                </p>
                <input
                  type="text"
                  placeholder="Your email here"
                  className="py-1 border-b-1 border-nlicolor w-full mb-4"
                />
                <p className="font-dm font-bold text-[16px] text-nlihcolor">
                  Review
                </p>
                <input
                  type="text"
                  placeholder="Your review hereere"
                  className="py-1 border-b-1 border-nlicolor w-full pb-10"
                />
                <button className="font-dm font-bold text-[14px] text-white px-12 py-3 bg-nlihcolor mt-5">
                  Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default ProductDetails;
