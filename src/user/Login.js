import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../hooks/useAuth";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { Container,Card,Box, CardActions, List, ListItem, CardContent, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import { userSignJWTVerification } from "../utils/RequestEndPoints";
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const theme = createTheme();
const Login = () => {
  const { SendSignInLinkToEmail, googleSignIn, githubSignIn, facebookSignIn } =
    useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const navigate = useNavigate();

  const FacebookLoginButton = () => {
    return (<Button onClick={handleFacebookSignIn }> Login with Facebook</Button>);
  }
  const GithubLoginButton = () => {
    return (<Button onClick={handleGithubSignIn}> Login with Github</Button>);
  }
  const GoogleLoginButton = () => {
    return (<Button onClick={handleGoogleSignIn}> Login with Google</Button>);
  }
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await googleSignIn();
      const response = await userSignJWTVerification(res.user);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleGithubSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await githubSignIn();
      const response = await userSignJWTVerification(res.user);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleFacebookSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await facebookSignIn();
      const response = await userSignJWTVerification(res.user);
      navigate("/");
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    }
  };

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      await SendSignInLinkToEmail(email);
      setEmailSent(true);
      console.log("email sent");
    } catch (err) {
      setError(err.message);
      console.log(err);
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          mt={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <CssBaseline />
    <Card style={{ width: "fit-content" }}>
            <CardContent>
            <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
                </Typography>
                </Box>
      </CardContent>

      <CardActions>
        <List>
          {error && <ListItem><Alert severity="error">{error}</Alert></ListItem>}
        {emailSent && (
          <ListItem><Alert severity="success">Check your email to complete login</Alert></ListItem>
        )}
        <form onSubmit={handleEmailSignIn}>
          <ListItem>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            value={email}
                onInput={(e) => setEmail(e.target.value)}
                fullWidth
          />
          </ListItem>
          <ListItem>
          <Button variant="outlined" type="submit" size="large" fullWidth>
            <EmailIcon color="primary"/>&emsp;Send Link to email 
          </Button>
          </ListItem>
            </form>
          <ListItem>
          <GoogleLoginButton onClick={handleGoogleSignIn}/>
          </ListItem>
          <ListItem>
          <GithubLoginButton onClick={handleGithubSignIn}/>
          </ListItem>
          <ListItem>
          <FacebookLoginButton onClick={handleFacebookSignIn}/>
          </ListItem>
        </List>
      </CardActions>
          </Card>
          </Box>
      </Container>
      </ThemeProvider>
  );
};

export default Login;
