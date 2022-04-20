import { Grid,Card, CardContent,Typography, CardHeader, Chip } from "@mui/material";
import PagesIcon from '@mui/icons-material/Pages';
import { useEffect } from "react";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const TopicThumnail = ({ topic,setView,setSelected }) => {
    return (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Card
                sx={{
                    backgroundColor: "#a4508b",
                    backgroundImage: "linear-gradient(326deg, #a4508b 0%, #5f0a87 74%)",
                    borderRadius: "25px",
                    height: "100%"
                }} onClick={() => {
                    setView("viewTopic");
                    setSelected(topic);
            }}>
                <CardHeader />
        <CardContent>
                    <Typography color="white" variant="h5">{topic.topicName}</Typography>
                    <Typography color="white" >{topic.topicDescription}</Typography>        
        </CardContent>
    </Card></Grid> );
}
 
export default TopicThumnail;