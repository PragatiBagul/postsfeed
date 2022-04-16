import { Grid, Box, Fab,Typography,Stack,Button,Skeleton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TopicThumbnail from "./TopicThumbail";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { deepPurple } from "@mui/material/colors";
import React, { useState,useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { getAllTopics } from "../../utils/RequestEndPoints";
const ViewAllTopics = ({ setView,setSelected }) => {
  const { height, width } = useWindowDimensions();
  const [isPending, setIsPending] = useState(true);
  const [topics, setTopics] = useState();
  useEffect(() => {
    
    const fetch = async() => {
      var response = await getAllTopics();
      return response;
    };
    setTimeout(async() => {
      const response = await fetch();
      console.log(response);
      setTopics(response);
      setIsPending(false);
    },1000);
  },[]);
    return (
      <Box className="infinitescroll" style={{ height: height, padding: "2%", backgroundColor: deepPurple[50] }}>
        {/*<Typography variant="h4">
          Topics
    </Typography>*/}
            <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Button variant="outlined" sx={{color:"primary"}}><ChevronLeftIcon/>&nbsp;Back</Button>
          </Stack>
        </Stack>

        <Grid container spacing={4}>
          {isPending && ([...Array(24)].map((topic, i) =>(
              <Grid key={i} item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Skeleton variant="rectangular" width={"100%"} height={"300px"} sx={{borderRadius:"25px"}} />
           </Grid>
          )))}
          {!isPending && topics.map((topic, i) => <TopicThumbnail key={i} topic={topic} setView={setView} setSelected={ setSelected}/>)}
            </Grid>
            <Fab color="primary" aria-label="add" style={{ position: "absolute", right: "0", bottom: "0", margin: "2.5%" }} onClick={() => setView("create")}>
        <AddIcon />
      </Fab>
            </Box> );
}
 
export default ViewAllTopics;

