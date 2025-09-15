import { useContext } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Container from "./Container";
import { ApiData } from "./ContextApi";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] left-0 z-100 cursor-pointer"
      onClick={onClick}
    >
      <MdNavigateNext className="text-[40px] lg:text-[50px] text-white bg-[#262626] p-2 rounded-full" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute top-[50%] translate-y-[-50%] right-0 z-100 cursor-pointer"
      onClick={onClick}
    >
      <GrFormPrevious className="text-[40px] lg:text-[50px] text-white bg-[#262626] p-2 rounded-full" />
    </div>
  );
}

const NewArrivals = () => {
    let {info,loading} = useContext(ApiData)
     const settings = {
       slidesToShow: 4,
       slidesToScroll: 1,
       nextArrow: <SampleNextArrow />,
       prevArrow: <SamplePrevArrow />,
       responsive: [
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
           },
         },
        
         
       ],
     };


     if (loading) {
      return(
        <>
          <h2>Loading.......</h2>
        </>
      )
     }

    
    


  return (
    <div>
      <Container>
        <div className="">
          <h2 className="font-dm font-bold text-[20px] lg:text-[30px] text-[#262626] p-3">
            New Arrivals
          </h2>

          <Slider {...settings}>
            {info.map((item) => (
              <div className="!w-[96%] p-3">
                <div className="relative group">
                  <span className="font-dm font-bold text-[14px] text-white inline-block px-3 bg-[red] absolute top-3 left-3 ">
                    {item.discountPercentage}
                  </span>
                <Link to="/shop">
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
                <div className="flex items-center justify-between py-2">
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
          </Slider>
        </div>
      </Container>
    </div>
  );
}
export default NewArrivals