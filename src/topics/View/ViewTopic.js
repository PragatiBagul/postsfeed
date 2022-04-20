import * as React from 'react';
import { Fab, Button,Chip, Typography, Container, CssBaseline, Grid, Stack } from "@mui/material";
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from "@mui/material/colors";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import NewPost from '../../feed/Creation/NewPost';
import useWindowDimensions from "../../utils/useWindowDimensions";
import { useState,useEffect } from 'react';
import { fetchPostsByTopic } from "../../utils/RequestEndPoints";
import PostSkeleton from '../../feed/skeleton/PostSkeleton';
import Post from "../../feed/View/Post";
import PagesIcon from '@mui/icons-material/Pages';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const theme = createTheme();

export default function ViewTopic({ setView, topic,isSelf }) {

  const [posts, setPosts] = useState([]);
  const { height, width } = useWindowDimensions();
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      var response = await fetchPostsByTopic(topic.id);
      return response;
    };
    setTimeout(async () => {
      const response = await fetch();
      setPosts(response);
      setIsPending(false);
    }, 1000);
  }, []);

  const followTopic = () => {

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
              {topic.topicName}
            </Typography>
            <Typography variant="h5" align="center" color="white" paragraph>
              {topic.topicDescription}
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Chip icon={<PeopleAltIcon />} sx={{ p: 2, backgroundColor: "white" }} color="secondary" label="Followers" variant='outlined' />
              {!isSelf && <Button flex="end" color="secondary" variant="contained" sx={{ borderRadius: "25px" }} onClick={followTopic}>
                  Follow &nbsp; <AddIcon/>                                                                                                                                                                                                                                                                                                                                                                                          
              </Button>}
              <Chip icon={<PagesIcon />} sx={{ p: 2, backgroundColor: "white" }} color="secondary" label="n items" variant='outlined' />
            </Stack>
          </Container>
          
        </Box>
        <Container sx={{ py: 8,px:8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {isPending && [...Array(24)].map((card,index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <PostSkeleton key={index}/>
              </Grid>
            ))}
            {!isPending && posts.length == 0 && 
              <Box component="span" sx={{
                p: 2,
                border: '1px dashed grey',
                height: "500",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                <Typography variant='inherit'>No posts yet</Typography>
              </Box>}
            {!isPending &&
              posts.length != 0 && 
              posts.map((post, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Post key={index} post={post} />
                  </Grid>
              ))}
          </Grid>
        </Container>
      </main>
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
    </ThemeProvider>
  );
}