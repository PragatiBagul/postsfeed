import { ListItem, ListItemAvatar, Avatar, TextField,Tooltip,IconButton } from "@mui/material";
import { useState } from "react";
import React from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useAuth } from "../../hooks/useAuth";
const AddCommentReply = ({ replies, setReplies, setShowReplyBox }) => {
  const { user } = useAuth();
    const [reply, setReply] = useState("");
    const saveReply = () => {
        setReplies([...replies, reply]);
        setReply("");
        setShowReplyBox(false);
    }
    return ( <ListItem alignItems="flex-start" fullWidth sx={{ pl: 6 }}>
      <ListItemAvatar>
        <Avatar alt={user.displayName} src={user.photoURL} />
      </ListItemAvatar>
      <TextField size="small" fullWidth value={reply} onChange={ (e) => setReply(e.target.value)}/>
          <Tooltip title="Add Reply">
            <IconButton flex="end" onClick={() => saveReply()}><SendIcon /></IconButton>
      </Tooltip>
    </ListItem> );
}
 
export default AddCommentReply;