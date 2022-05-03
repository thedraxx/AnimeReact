import React, { useState } from "react";
import "../Components/styles/Styles.scss";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "animate.css";
import DeleteIcon from "@mui/icons-material/Delete";
import ActionAlerts from "../Components/ActionsAlerts";

let nombre = JSON.parse(localStorage.getItem("animeFavs"));

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const Favorites = () => {
  const [expanded, setExpanded] = useState(false);
  const [confirm, setConfirm] = useState(false)

  const handleExpandClick = (id) => {
    setExpanded((expanded) => ({
      ...expanded,
      [id]: !expanded[id],
    }));
  };

  const DeleteAnimeFavorites = (nombre, anime) => {
    alert("Estas seguro que quieres eliminar este anime de tus favoritos?");
    setConfirm(true);
    const newAnimeFavs = nombre.filter((serie) => serie !== anime);
    localStorage.setItem("animeFavs", JSON.stringify(newAnimeFavs));
    setTimeout(() => {
      setConfirm(false);
    }, 1000);
  };

  return (
    <div className="Grid">
      {nombre.length === 0 ? (
        <div>
          <h1>No hay Favoritos, actualiza la pagina para verlos</h1>
        </div>
      ) : (
        nombre.map((anime) => {
          return (
            <div
              key={anime.mal_id}
              className="animate__animated animate__bounceIn"
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={<h1>Episodes: {anime.episodes} </h1>}
                  subheader={anime.genres.map((genre) => {
                    return `-${genre.name}-`;
                  })}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={anime.images.jpg.large_image_url}
                  alt="image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {anime.title}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton
                    aria-label="delete"
                    onClick={() => DeleteAnimeFavorites(nombre, anime)}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={(id) => handleExpandClick(anime.mal_id)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>

                <Collapse
                  in={expanded[anime.mal_id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>synopsis:</Typography>
                    <Typography paragraph>{anime.synopsis}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          );
        })
      )}
      {confirm === true ? <ActionAlerts /> : null}
    </div>
  );
};
