import * as React from 'react';
import { Fab,Button,Card,CardActions,CardContent,CardMedia,Typography,Container,CssBaseline,Grid, Stack} from "@mui/material";
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple } from "@mui/material/colors";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddIcon from '@mui/icons-material/Add';
import NewPost from '../../feed/Creation/NewPost';
import useWindowDimensions from "../../utils/useWindowDimensions";
const theme = createTheme();

export default function ViewTopic({ setView, topic }) {
    const { height, width } = useWindowDimensions();
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
            m:2,
            pt: 2,
            pb: 2,
          }}
              >
        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-start" sx={{ mb: 1 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <Button sx={{color:"white",ml:4}} onClick={() => setView("view")}><ChevronLeftIcon/>&nbsp;Back</Button>
          </Stack>
        </Stack>

          <Container maxWidth="sm">
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
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {[...Array(24)].map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
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
          <Fab color="primary"
              aria-label="add"
              style={{ position: "absolute", right: "0", bottom: "0", margin: "2.5%" }}
              onClick={() => setView("newPost")}>
              <AddIcon />
          </Fab>
    </ThemeProvider>
  );
}