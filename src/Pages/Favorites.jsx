import React, { useState } from "react";
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
import DeleteIcon from "@mui/icons-material/Delete";
import ActionAlerts from "../Components/ActionsAlerts";
import "animate.css";
import "../styles/Styles.scss";

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
  const [confirm, setConfirm] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleExpandClick = (id) => {
    setExpanded((expanded) => ({
      ...expanded,
      [id]: !expanded[id],
    }));
    setIcon(!icon);
  };

  const DeleteAnimeFavorites = (nombre, anime) => {
    alert("Estas seguro que quieres eliminar este anime de tus favoritos?");
    setConfirm(true);
    const newAnimeFavs = nombre.filter((serie) => serie !== anime);
    localStorage.setItem("animeFavs", JSON.stringify(newAnimeFavs));
    setTimeout(() => {
      setConfirm(false);
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="Grid">
      {nombre === null ? (
        <div>
          <h1 className="No-Favorite" style={{ color: "white" }}>
            No hay Favoritos, actualiza la pagina para verlos
          </h1>
        </div>
      ) : (
        nombre.map((anime) => {
          return (
            <div
              key={anime.mal_id}
              className="animate__animated animate__bounceIn"
            >
              <Card
                sx={{ maxWidth: 345 }}
                style={{ backgroundColor: "#2e3138", color: "white" }}
              >
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={
                    <h1 style={{ color: "white" }}>
                      Episodes: {anime.episodes}{" "}
                    </h1>
                  }
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={anime.images.jpg.large_image_url}
                  alt="image"
                />
                <CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{ color: "white" }}
                  >
                    {anime.title}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton
                    aria-label="delete"
                    onClick={() => DeleteAnimeFavorites(nombre, anime)}
                    style={{ color: "white" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                  <IconButton aria-label="share" style={{ color: "white" }}>
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={icon}
                    onClick={(id) => handleExpandClick(anime.mal_id)}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ color: "white" }}
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
