import { List,ListItem,TextField,ListItemAvatar,Avatar,ListSubheader,IconButton,Tooltip } from "@mui/material";
import Comment from "./Comment";
import "../../css/general.css";
import SendIcon from '@mui/icons-material/Send';
import React, { useEffect, useState } from 'react';
import { useAuth } from "../../hooks/useAuth";
const CommentSection = () => {
  const { user } = useAuth();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const saveComment = () => {
    if (String(comment) == "")
    {
      alert("Cannot add empty comment");
    }
    else
    {
      setComments([...comments, comment]);
      setComment("");  
    }
  }
  const deleteComment = () => {
    
  }
  return (
    <>
      <List subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Add a comment
        </ListSubheader>
      } >
       <ListItem alignItems="flex-start" position="sticky">
    <ListItemAvatar>
      <Avatar alt={user.displayName} src={user.photoURL} />
    </ListItemAvatar> 
          <TextField size="small" fullWidth value={comment} onChange={ (e) => setComment(e.target.value)}/>
          <Tooltip title="Add Comment">
            <IconButton flex="end" onClick={() => saveComment()}><SendIcon /></IconButton>
      </Tooltip>
  </ListItem>
      </List>
        <List className="infinitescroll" sx={{
        width: '100%',
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
        '& ul': { padding: 0 },
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Comments
        </ListSubheader>
      }
      >
        {comments.map((comment, i) => (
          <Comment key={i} comment={comment}/>
        ))}
    </List>
    </>);
}
 
export default CommentSection;