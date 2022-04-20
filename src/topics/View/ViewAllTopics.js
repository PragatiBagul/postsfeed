import { IconButton,Tooltip,Grid, Box, Fab,Typography,Stack,Button,Skeleton,Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TopicThumbnail from "./TopicThumbail";
import { CssBaseline } from "@mui/material";
import useWindowDimensions from "../../utils/useWindowDimensions";
import { deepPurple } from "@mui/material/colors";
import React, { useState,useEffect } from 'react';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { getAllTopics, getAllTopicsOfUser } from "../../utils/RequestEndPoints";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
const theme = createTheme();

const ViewAllTopics = ({ setView,setSelected,currentUser,isSelf }) => {
  const { height, width } = useWindowDimensions();
  const [isPending, setIsPending] = useState(true);
  const [topics, setTopics] = useState();
  useEffect(() => {
    const fetch = async () => {
        var response = await getAllTopicsOfUser(currentUser.uid);
        return response;  
    };
    setTimeout(async() => {
      const response = await fetch();
      setTopics(response);
      setIsPending(false);
    },1000);
  }, []);
  
  const followUser = () => {

  }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <main className="infinitescroll" style={{ height: height }}>
      {/* Hero unit */}
      <Box
        sx={{
          backgroundColor: "#a4508b",
          backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)",
          borderRadius: '25px',
          m: 2,
          pt: 2,
          pb: 2,
        }}
      >
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 1 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Button sx={{ color: "white", ml: 4 }} onClick={() => setView("view")}><ChevronLeftIcon />&nbsp;Back</Button>
          </Stack>
        </Stack>

        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="white"
            gutterBottom
          >
            {currentUser.name}
          </Typography>

          {!isSelf && (<Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          ><Button flex="end" color="secondary" variant="contained" sx={{ borderRadius: "25px" }} onClick={followUser}>
                Follow &nbsp; <AddIcon/>                                                                                                                                                                                                                                                                                                                                                                                          
            </Button></Stack>)}
          
            <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Tooltip title="LinkedIn"><IconButton sx={{color:"white"}}><LinkedInIcon/></IconButton></Tooltip>
              <Tooltip title="Facebook"><IconButton sx={{color:"white"}}><FacebookIcon /></IconButton></Tooltip>
              <Tooltip title="Website"><IconButton sx={{color:"white"}}><LanguageIcon/></IconButton></Tooltip>
          </Stack>
        </Container>
        
      </Box>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {isPending && ([...Array(24)].map((topic, i) =>(
              <Grid key={i} item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Skeleton variant="rectangular" width={"100%"} height={"300px"} sx={{borderRadius:"25px"}} />
           </Grid>
          )))}
          {!isPending && topics.map((topic, i) => <TopicThumbnail key={i} topic={topic} setView={setView} setSelected={ setSelected}/>)}
          </Grid>
        </Container>
        </main>
            <Fab color="primary" aria-label="add" style={{ position: "absolute", right: "0", bottom: "0", margin: "2.5%" }} onClick={() => setView("create")}>
        <AddIcon />
      </Fab>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          That's all
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          You have scrolled to the end
        </Typography>
      </Box>
      {/* End footer */}
      {isSelf && <Fab color="primary"
        aria-label="add"
        style={{ position: "absolute", right: "0", bottom: "0", margin: "2.5%" }}
        onClick={() => setView("newPost")}>
        <AddIcon />
      </Fab>}
    </ThemeProvider>);
}
 
export default ViewAllTopics;

