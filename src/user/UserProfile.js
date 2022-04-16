import { setRef } from "@mui/material";
import { Box, Card, CardContent, Typography, TextField, Button, Grid, CardActions } from "@mui/material";
import { useEffect,useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { fetchUserProfile,updateUserDetails } from "../utils/RequestEndPoints";
const UserProfile = () => {

    const [email, setEmail] = useState();
    const [uid, setUid] = useState();
    const [name, setName] = useState();
    const [lastLogin, setLastLogin] = useState();
    const [websiteURL, setWebsiteURL] = useState();
    const [facebookURL, setFacebookURL] = useState();
    const [linkedInURL, setLinkedInURL] = useState();
    const [pronoun, setPronoun] = useState();
    const [qualification, setQualification] = useState();
    const [refresh, setRefresh] = useState(false);
    
    const { user, isAuthenticating } = useAuth();

    useEffect(() => {
        var res;
        const fetchData = async () => {
            res = await fetchUserProfile();   
        }
        setEmail(res.email);
        setUid(res.uid);
        setName(res.name);
        setLastLogin(res.lastLogin);
        setWebsiteURL(res.websiteURL);
        setLinkedInURL(res.linkedInURL);
        setFacebookURL(res.facebookURL);
        setPronoun(res.pronoun);
        setQualification(res.qualification);
        setRefresh(true);
    }, [refresh]);
    
    const updateDetails = async() => {
        const body = {
            "name": name,
            "email": email,
            "uid": user.uid,
            "lastLogin": user.lastLogin,
            "websiteURL": websiteURL,
            "linkedInURL": linkedInURL,
            "facebookURL": facebookURL,
            "pronoun": pronoun,
            "qualification": qualification,
        }
        const response = await updateUserDetails(body);
        console.log(response);
    }
    return ( <Box m={3}>
        {name && (
<Box>
                    <Grid container spacing={2}>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                            <Typography align="justify" variant="h6" >Name</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField variant="standard" size="medium" value={name == null ? "" :name} onChange={(e) => setName(e.target.value)} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                            <Typography align="justify" variant="h6" >Email</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField align="justify" variant="standard" value={email == null ? "" :email} onChange={(e) => setEmail(e.target.value)} fullWidth></TextField>
                        </Grid>

                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                            <Typography align="justify" variant="h6" >Pronoun</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField align="justify" variant="standard" value={pronoun == null ? "" :pronoun} onChange={(e) => setPronoun(e.target.value)} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                            <Typography align="justify" variant="h6" >Qualification</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                            <TextField align="justify" variant="standard" value={qualification == null ? "" :qualification} onChange={(e) => setQualification(e.target.value)} fullWidth></TextField>
                        </Grid>
                        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                            <Typography align="justify" variant="h6" >Website URL</Typography>
                        </Grid>
                        <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={websiteURL == null ? "" :websiteURL} onChange={(e) => setWebsiteURL(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" >LinkedIn URL</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField align="justify" variant="standard" value={linkedInURL == null ? "" :linkedInURL} onChange={(e) => setLinkedInURL(e.target.value)} fullWidth></TextField>
                            </Grid>
                            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                                <Typography align="justify" variant="h6" >Facebook URL</Typography>
                            </Grid>
                            <Grid item xs={9} sm={9} md={9} lg={9} xl={9}>
                                <TextField variant="standard" value={facebookURL == null ? "" :facebookURL} onChange={(e) => setFacebookURL(e.target.value)} fullWidth></TextField>
                            </Grid>
                        </Grid>
                        <br/>
                <Button variant="contained" onClick={updateDetails}>Save</Button>
                
                        </Box>  )}
        </Box>);
}
 
export default UserProfile;