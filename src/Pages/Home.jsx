import { HomePage } from "./HomePage";
import { RandomAnime } from "../Components/RandomAnime";
import { useState } from "react";
import { Loader } from "../Components/Loader";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Stack from "@mui/material/Stack";
import "../Components/styles/Styles.scss";

const Input = styled("input")({
  display: "none",
});

export const Home = () => {
  const [condicion, setCondicion] = useState(false);
  const [number, setNumber] = useState(0);
  const [dataRandom, setDataRandom] = useState([]);
  const [load, setLoad] = useState(false);

  const randomNumber = () => {
    let value = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    setNumber(value);
    setCondicion(true);
    setLoad(true);
  };

  return (
    <div className="home">
      <p className="title-home">Welcome To MyAnimeList.</p>
      <Stack
        direction="column"
        alignItems="center"
        spacing={2}
        onClick={randomNumber}
      >
        <label htmlFor="contained-button-file">
          <Button variant="contained" component="span">
            Search
          </Button>
        </label>
      </Stack>
      {condicion === false ? (
        <>
          <p className="parraph">
            An Anime has not been randomly generated, click on the button to generate it
          </p>
        </>
      ) : (
        <div className="container-home">
          {load === true ? <Loader /> : <></>}
          <RandomAnime
            setDataRandom={setDataRandom}
            number={number}
            setLoad={setLoad}
          />
        </div>
      )}
      {Object.keys(dataRandom).length === 0 ? (
        <></>
      ) : (
        <HomePage dataRandom={dataRandom} />
      )}
    </div>
  );
};
