import { List,ListItem, ListItemAvatar, Avatar, ListItemText,Typography, IconButton} from "@mui/material";
import React from 'react'
import CommentIcon from '@mui/icons-material/Comment';
import CommentReply from "./CommentReply";
import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentReply from "./AddCommentReply";
const Comment = ({comment}) => {
  const [replies, setReplies] = useState([]);
  const [like, setLike] = useState(false);
  const [showReplyBox, setShowReplyBox] = useState(false);
  return (<>
    <ListItem alignItems="flex-start" fullWidth disableGutters
      secondaryAction={
        <>
        <IconButton onClick={() => setShowReplyBox(!showReplyBox)}>
          <CommentIcon />
        </IconButton>
          <IconButton onClick={() => setLike(!like)}>
            {!like && <FavoriteBorderIcon />}
            {like && <FavoriteIcon color="error" />}
          </IconButton>
        </>
      }>
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
          Any Human
        </Typography>
        </React.Fragment>}
      secondary={
        <React.Fragment>
          {comment}
        </React.Fragment>
      }
      />
    </ListItem>
    <List disablePadding>
      {showReplyBox && <AddCommentReply replies={replies} setReplies={setReplies} setShowReplyBox={ setShowReplyBox}/>}
      {replies.map((reply, i) => (
          <>
          <CommentReply key={i} reply={reply} />
          </>
          ))}
        </List>
  </>);
}
 
export default Comment;