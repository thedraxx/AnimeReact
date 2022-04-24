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
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "animate.css";

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

export const HomePage = ({ dataRandom }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  console.log(dataRandom.data);
  return (
    <div className="Grid-Home animate__animated animate__bounceIn">
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          title={`Episodes: ${dataRandom.data.episodes}`}
          subheader={dataRandom.data.genres.map((genre) => {
            return `-${genre.name}-`;
          })}
        />
        {console.log()}
        <CardMedia
          component="img"
          height="194"
          image={dataRandom.data.images.jpg.large_image_url}
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {dataRandom.data.title}
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
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography paragraph>synopsis:</Typography>
            <Typography paragraph>{dataRandom.data.synopsis}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};
