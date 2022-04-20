import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardHeader, CardContent, Grid, Avatar,IconButton,CardMedia,CardActions,Collapse,Typography } from "@mui/material";
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CommentIcon from '@mui/icons-material/Comment';
import CommentSection from './CommentSection';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState,useEffect } from 'react';
import { getDateFromTimestamp } from "../../utils/GetDate";
import { useAuth } from '../../hooks/useAuth';
import { fetchPostImage } from "../../utils/RequestEndPoints";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = ({post}) => {
  const [expanded, setExpanded] = useState(false);
  const [saved, setSaved] = useState(false);
  const [like, setLike] = useState(false);
  const [imageData, setImageData] = React.useState({});

  const getImage = async() => {
        const response = await fetchPostImage(post.id);
        setImageData(response.data);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const saveLike = () => {

  }

  const deleteLike = () => {

  }

  useEffect(() => {
    getImage();
  },[]);
  return (
    <Card sx={{ borderRadius:"25px",boxShadow:1 }} variant="outlined">
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={post.topic.user.profileImage}/>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.postTitle}
        subheader={getDateFromTimestamp(post.timestampOfCreation)}
      /> 
                      {post.contentType == "IMAGE" && (
                    <Grid
                    container
                    spacing={1}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                  
          <Grid item xs={3}>
            {<CardMedia sx={
              (theme) => ({
                [theme.breakpoints.up('xs')]: {
                  height: "200px",
                  width: "200px"
                },
                [theme.breakpoints.up('sm')]: {
                  height: "200px",
                  width: "200px"
                },
                [theme.breakpoints.up('md')]: {
                  height: "200px",
                  width: "200"
                },
                [theme.breakpoints.up('lg')]: {
                  height: "300px",
                  width: "300px"
                },
                [theme.breakpoints.up('xl')]: {
                  height: "300px",
                  width: "300px"
                }
              })} component="img" image={`data:image/jpeg;base64,${imageData}`} alt={post.postTitle} />
            }
             {/*<img
          src={`data:image/jpeg;base64,${imageData}`}
          alt=""
          />*/}
                        </Grid>
                    </Grid>)}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.postDescription}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton onClick={() => setLike(!like)}>
            {!like && <FavoriteBorderIcon />}
            {like && <FavoriteIcon color="error" />}
        </IconButton>
        
        <IconButton aria-label="bookmark" onClick={() => setSaved(!saved)}>
          {!saved && <BookmarkBorderIcon />}
            {saved && <BookmarkIcon color="secondary" />}
          </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon/>
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                  <CommentSection/>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default Post;
