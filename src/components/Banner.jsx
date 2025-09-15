import { FaTruck, FaUndoAlt } from "react-icons/fa";
import { TbNumber2 } from "react-icons/tb";
import Slider from "react-slick";
import BanImage from "../assets/ban.png";
import Container from "./Container";
const Banner = () => {
    const settings = {
      dots: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      appendDots: (dots) => (
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            position: "absolute",
            left: "10%",
            top: "50%",
            transform: "translateY(-50%)",
          }}
        >
          <ul style={{ margin: "0px" }}> {dots} </ul>
        </div>
      ),
      customPaging: (i) => (
        <div
          style={{
            width: "30px",
            color: "transparent",
            borderRight: "2px #fff solid",
            padding: "10px 0",
          }}
        >
          0{i + 1}
        </div>
      ),
    };

  
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="">
          <img src={BanImage} alt="" />
        </div>
        <div className="">
          <img src={BanImage} alt="" />
        </div>
        <div className="">
          <img src={BanImage} alt="" />
        </div>
        <div className="">
          <img src={BanImage} alt="" />
        </div>
      </Slider>
      <Container>

      <div className="w-12/12">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <TbNumber2 />
            <p className="font-dm font-bold lg:font-normal text-[8px] lg:text-[16px] text-nlicolor">
              Two years warranty
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaTruck />
            <p className="font-dm text-[8px] lg:text-[16px] text-nlicolor">
              Free shipping
            </p>
          </div>
          <div className="flex items-center gap-2">
            <FaUndoAlt />
            <p className="font-dm text-[8px] lg:text-[16px] text-nlicolor">
              Return policy in 30 days
            </p>
          </div>
        </div>
      </div>
      </Container>
    </div>
  );
}
export default Banner