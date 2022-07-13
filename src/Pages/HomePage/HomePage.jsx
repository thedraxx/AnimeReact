import "../../styles/HomePage.scss";
import "animate.css";
import { images } from "../../data";
import { Carousel } from "./Carousel";
import { HomeGalery } from "./HomeGalery";
import { Banner } from "./Banner";

export const HomePage = () => {
  return (
    <div className="home">
      <Carousel images={images} autoplay={true} />
      <HomeGalery />
      <Banner />
    </div>
  );
};
