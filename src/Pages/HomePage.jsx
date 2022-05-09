import "../styles/Styles.scss";
import "animate.css";
import { Carousel } from "../Components/Carousel";


export const HomePage = () => {
  
    const images = ["aharen.png", "kaguya.png","loveafterworld.png","skeleton.png","spyxfamily.png"];

 return (
 <div className="home">

     <Carousel images={images} autoplay={true} />


  <h1>Hola</h1>
 
 </div>
 )
};
