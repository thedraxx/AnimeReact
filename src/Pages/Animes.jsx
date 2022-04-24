import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Loader2 } from "../Components/Loader2";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "animate.css";
import "../Components/styles/Styles.scss";

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

export const Animes = ({ AnimeData, condition }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = (id) => {
    setExpanded((expanded) => ({
      ...expanded,
      [id]: !expanded[id],
    }));
  };

  return (
    <div className="Grid">

      {!condition ? (
        <div className="container-random">
          <Loader2 />
        </div>
      ) : (
        AnimeData.data.map((Anime) => {
          return (
            <div
              key={Anime.mal_id}
              className="animate__animated animate__bounceIn"
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  action={<IconButton aria-label="settings"></IconButton>}
                  title={<h1>Episodes: {Anime.episodes} </h1>}
                  subheader={Anime.genres.map((genre) => {
                    return `-${genre.name}-`;
                  })}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={Anime.images.jpg.large_image_url}
                  alt="image"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {Anime.title}
                  </Typography>
                </CardContent>

                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={(id) => handleExpandClick(Anime.mal_id)}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>

                <Collapse
                  in={expanded[Anime.mal_id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <CardContent>
                    <Typography paragraph>synopsis:</Typography>
                    <Typography paragraph>{Anime.synopsis}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          );
        })
      )}
    </div>
  );
};
