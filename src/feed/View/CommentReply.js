import { ListItem, ListItemAvatar, Avatar, ListItemText, Typography, IconButton } from "@mui/material";
import { Comment } from "@mui/icons-material";
import { useState } from "react";
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
const CommentReply = ({reply}) => {
  const [like, setLike] = useState(false);
  return (<ListItem alignItems="flex-start" fullWidth sx={{ pl: 6 }}
  secondaryAction={<>
    <IconButton onClick={() => setLike(!like)}>
      {!like && <FavoriteBorderIcon />}
      {like && <FavoriteIcon color="error" />}
    </IconButton></>}
  >
    <ListItemAvatar>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
    </ListItemAvatar>
    <ListItemText
      primary={<React.Fragment>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          Pragati Bagul
        </Typography>
        </React.Fragment>}
      secondary={
        <React.Fragment>
          {reply}
        </React.Fragment>
      }
    />
  </ListItem> );
}
 
export default CommentReply;