import { Card,Box,CardContent,Button, CardHeader,Avatar,IconButton,Divider, TextField, Typography, Stack,Tooltip,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { deepPurple } from "@mui/material/colors";
import AttachmentIcon from '@mui/icons-material/Attachment';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import useWindowDimensions from "../../utils/useWindowDimensions";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import GetDate from "../../utils/GetDate";
import { useEffect } from "react";
import { createPost } from "../../utils/RequestEndPoints";
const NewPost = ({setView,topic }) => {
    const { height, width } = useWindowDimensions();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [attachments, setAttachments] = useState([]);
    const { user } = useAuth();
    const [date, setDate] = useState(GetDate);

    const savePost = async() => {
        const post = {
            "postTitle": title,
            "postDescription": description,
            "topic": topic
        }
        setView("viewTopic");
        const res = await createPost(post);
    }
    useEffect(() => {
        console.log(topic);
    },[]);
    return (
        <Box className="infinitescroll" style={{ height: height, padding: "2%", backgroundColor: deepPurple[50] }}>
        {/*<Typography variant="h4">
          Topics
    </Typography>*/}
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Button variant="outlined" sx={{color:"primary"}}  onClick={() => setView("viewTopic")}><ChevronLeftIcon/>&nbsp;Back</Button>
          </Stack>
        </Stack>

        <Card style={{ borderRadius: "25px" }}>
        <CardHeader
            sx={{backgroundColor:deepPurple[500],color:"white",}}
        avatar={
            <Avatar alt={user.displayName} src={user.photoURL} />
        }
        action={
          <IconButton aria-label="settings" sx={{color:"white"}}>
            <MoreVertIcon />
          </IconButton>
        }
        title={<Typography variant="h6">Create New Post</Typography>}
            subheader={<span style={{color:"white"}}>{date}</span>}    
      /> 
        <CardContent>
            <TextField label="Title" variant="standard" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth size="medium" />
            <TextField label="Description" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} 
          variant="standard" fullWidth size="medium"/>
        </CardContent>
        <Stack
  direction="row"
  justifyContent="flex-end"
  alignItems="center"
            spacing={2}
            padding={2}
            divider={<Divider orientation="vertical" flexItem />}
        >
                    <Typography variant="inherit">{topic.topicName}</Typography>
            <Tooltip title="Add Attachment">
                <IconButton>
                    <AttachmentIcon/>
                </IconButton>
                </Tooltip>
                <Tooltip title="Add Image">
                <IconButton>
                    <ImageOutlinedIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Flash Card">
                <IconButton>
                <StyleOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Mock Test">
                <IconButton>
                <RuleOutlinedIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Course">
                <IconButton>
                <CastForEducationOutlinedIcon />
                </IconButton>
            </Tooltip>
                <Button flex="end" color="secondary" variant="contained" sx={{borderRadius:"25px"}} onClick={savePost}>Post</Button>
                </Stack>
            </Card>
    </Box>        );
}
 
export default NewPost;