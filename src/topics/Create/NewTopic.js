import { Card,CardActions,Box,CardContent,Button, CardHeader,Avatar,IconButton,Divider, TextField, Typography, Stack,Tooltip,FormControl,InputLabel,Select,MenuItem } from "@mui/material";
import { useState } from "react";
import { deepPurple } from "@mui/material/colors";
import { useAuth } from "../../hooks/useAuth";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {getDate} from "../../utils/GetDate";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import useWindowDimensions from "../../utils/useWindowDimensions";
import { createTopic } from "../../utils/RequestEndPoints";
const NewTopic = ({setView}) => {
    const [topicName, setTopicName] = useState("");
    const [topicDescription, setTopicDescription] = useState("");
    const [date, setDate] = useState(getDate);
    const { user } = useAuth();
    const { height, width } = useWindowDimensions();
    
    const saveTopic = async() => {
      const topic = {
        "topicName":topicName,
        "topicDescription":topicDescription};
      const response = await createTopic(topic);
      setView("view");
    }
    return (
        <Box className="infinitescroll" style={{ height: height, padding: "2%", backgroundColor: deepPurple[50] }}>
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Button variant="outlined" sx={{color:"primary"}} onClick={() => setView("view")}><ChevronLeftIcon/>&nbsp;Back</Button>
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
    title={<Typography variant="h6">Create New Topic</Typography>}
        subheader={<span style={{color:"white"}}>{date}</span>}    
  /> 
    <CardContent>
            <TextField label="Title" variant="standard" fullWidth size="medium" value={topicName} onChange={ (e) => setTopicName(e.target.value)}/>
        <TextField label="Description" multiline rows={4} variant="standard" fullWidth size="medium" value={topicDescription} onChange={(e) => setTopicDescription(e.target.value)}/>
    </CardContent>
    <Stack
direction="row"
justifyContent="flex-end"
alignItems="center"
        spacing={2}
        padding={2}
        divider={<Divider orientation="vertical" flexItem />}
    >
                <Button flex="end" color="secondary" variant="contained" sx={{borderRadius:"25px"}} onClick={saveTopic}>Save</Button>
            </Stack>
        </Card>
      </Box>);
}
 
export default NewTopic;