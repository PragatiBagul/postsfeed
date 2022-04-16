import { Stack, Grid, Fab, Backdrop, Box } from "@mui/material";
import Post from "./View/Post";
import AddIcon from '@mui/icons-material/Add';
import "../css/general.css";
import NewPost from "./Creation/NewPost";
import useWindowDimensions from "../utils/useWindowDimensions";
import { useState } from "react";
import { deepPurple } from "@mui/material/colors";
const Feed = () => {
  const { height, width } = useWindowDimensions();
  return (
    <Box className="infinitescroll" style={{ height: height, padding: "2%",backgroundColor: deepPurple[50]}}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Stack style={{ alignSelf: "center" }} spacing={2}>
            {[...Array(20)].map((e, i) => (
              <Post key={i} />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>);
}

export default Feed;