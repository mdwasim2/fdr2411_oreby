import One from "../assets/one.png";
import Three from "../assets/three.png";
import Two from "../assets/two.png";
import Container from "./Container";

const Offer = () => {
  return (
    <section className="py-5 lg:py-10">
      <Container>
        <div className="flex items-center space-x-2 lg:space-x-10 ">
          <div className="w-6/12">
            <img src={One} alt="" className="w-full" />
          </div>
          <div className="w-6/12 space-y-2 lg:space-y-8">
            <div>
              <img src={Two} alt="" className="w-full" />
            </div>
            <div>
              <img src={Three} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Offer