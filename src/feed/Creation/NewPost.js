import { Card, Box, CardContent, Container, Chip, Button, Grid, CardHeader, Avatar, IconButton, Divider, TextField, Typography, Stack, Tooltip, FormControl, InputLabel, Select, MenuItem, CardMedia } from "@mui/material";
import { useAuth } from "../../hooks/useAuth";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import { deepPurple } from "@mui/material/colors";
import AttachmentIcon from '@mui/icons-material/Attachment';
import RuleOutlinedIcon from "@mui/icons-material/RuleOutlined";
import StyleOutlinedIcon from "@mui/icons-material/StyleOutlined";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import useWindowDimensions from "../../utils/useWindowDimensions";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getDate } from "../../utils/GetDate";
import { useEffect } from "react";
import { createPost, addPostContent } from "../../utils/RequestEndPoints";
import Dropzone from "./Dropzone";
import "./NewPost";
import { styled, createTheme, ThemeProvider } from '@mui/system';

const CardMediaComponent = styled("div")(({ theme }) => ({
    padding:"2%",
    [theme.breakpoints.up('xs')]: {
        height: "100px",
        width:"100px"
      },
      [theme.breakpoints.up('sm')]: {
        height: "200px",
        width:"200px"
      },
      [theme.breakpoints.up('md')]: {
        height: "300px",
        width:"300px"
      },
    [theme.breakpoints.up('lg')]: {
        height: "400px",
        width:"400px"
      },
      [theme.breakpoints.up('xl')]: {
        height: "500px",
        width:"500px"
      }
  }));
  
const NewPost = ({ setView, topic }) => {
    const { height, width } = useWindowDimensions();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [attachment, setAttachment] = useState();
    const [contentType, setContentType] = useState("");
    const { user } = useAuth();
    const [date, setDate] = useState(getDate);

    const savePost = async () => {
        const post = {
            "postTitle": title,
            "postDescription": description,
            "topic": topic
        }
        const res = await createPost(post);

        if (attachment != null) {
            const formData = new FormData();
            formData.append("file", attachment);
            const savedPost = await addPostContent(formData, res.id);
        }
        setView("viewTopic");
    }
    return (
        <Box className="infinitescroll" style={{ height: height, padding: "2%", backgroundColor: deepPurple[50] }}>
            {/*<Typography variant="h4">
          Topics
    </Typography>*/}
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 5 }}>
                <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
                    <Button variant="outlined" sx={{ color: "primary" }} onClick={() => setView("viewTopic")}><ChevronLeftIcon />&nbsp;Back</Button>
                </Stack>
            </Stack>

            <Card style={{ borderRadius: "25px" }}>
                <CardHeader
                    sx={{ backgroundColor: deepPurple[500], color: "white", }}
                    avatar={
                        <Avatar alt={user.displayName} src={user.photoURL} />
                    }
                    action={
                        <>
                        <Chip label={date} color="secondary"  />
                        <IconButton aria-label="settings" sx={{ color: "white" }}>
                            <MoreVertIcon />
                            </IconButton>
                            </>
                    }
                    title={<Typography variant="h6">{topic.topicName}</Typography>}
                    subheader={<span style={{ color: "white" }}>Create new post</span>}
                />
                {contentType == "image" && (
                    <Grid
                    container
                    spacing={1}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                  
                    <Grid item xs={3}>
                        <CardMedia sx={ 
                            (theme) => ({
                                [theme.breakpoints.up('xs')]: {
                                    height: "100%",
                                width: "100%"
                                  },
                                  [theme.breakpoints.up('sm')]: {
                                    height: "100%",
                                    width:"100%"
                                  },
                                  [theme.breakpoints.up('md')]: {
                                    height: "400px",
                                    width:"400px"
                                  },
                                [theme.breakpoints.up('lg')]: {
                                    height: "500px",
                                    width:"500px"
                                  },
                                  [theme.breakpoints.up('xl')]: {
                                    height: "500px",
                                    width:"500px"
                                  }
      })} component="img" image={URL.createObjectURL(attachment)} alt={title} />
                        {/*</CardMediaComponent>*/}
                        </Grid>
                    </Grid>)}
                <CardContent>
                    <TextField label="Title" variant="standard" value={title} onChange={(e) => setTitle(e.target.value)} fullWidth size="medium" />
                    <TextField label="Description" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)}
                        variant="standard" fullWidth size="medium" />
                </CardContent>
                <Stack
                    direction="row"
                    justifyContent="flex-end"
                    alignItems="center"
                    spacing={2}
                    padding={2}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    
                    <Tooltip title="Add Attachment">
                        <IconButton>
                            <AttachmentIcon />
                        </IconButton>
                    </Tooltip>
                    <Dropzone setAttachment={setAttachment} contentType={"image"} setContentType={setContentType} />
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
                    <Button flex="end" color="secondary" variant="contained" sx={{ borderRadius: "25px" }} onClick={savePost}>Post</Button>
                </Stack>
            </Card>
        </Box>);
}

export default NewPost;