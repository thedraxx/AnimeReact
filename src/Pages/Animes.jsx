import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (id) => {
    setExpanded(expanded => ({
      ...expanded,
      [id]: !expanded[id],
    }));
  };
  
  return (
    <div className="Grid">
      {condition &&
        AnimeData.data.map((Anime,i) => {
          return (
            <div key={Anime.mal_id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      <MoreVertIcon />
                    </IconButton>
                  }
                  title={`Episodes: ${Anime.episodes}`}
                  subheader={Anime.genres.map((genre) => {return (`-${genre.name}-`)})}
                />
                <CardMedia
                  component="img"
                  height="194"
                  image={Anime.images.jpg.image_url}
                  alt="imaga"
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

                <Collapse in={expanded[Anime.mal_id]} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>synopsis:</Typography>
                    <Typography paragraph>
                      {Anime.synopsis}
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </div>
          );
        })}
    </div>
  );
};
