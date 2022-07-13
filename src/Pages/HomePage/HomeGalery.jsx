import "../../styles/Styles.scss";
import { HomeGaleryRecomends } from "./HomeGaleryRecomends";
import { recomends } from "../../data/recomends";

export const HomeGalery = () => {
  return (
    <div className="HomeGalery">
      <h1>Recomendaciones</h1>
      <hr />
      <HomeGaleryRecomends recomends={recomends} />
    </div>
  );
};
