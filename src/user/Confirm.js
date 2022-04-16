import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useAuth } from "../hooks/useAuth";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import { userSignJWTVerification } from "../utils/RequestEndPoints";
const Confirm = () => {
  const { SignInWithEmailLink } = useAuth();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await SignInWithEmailLink(email, window.location.href);
      const response = await userSignJWTVerification(res.user);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div>
        {error && <Alert severity="error">Invalid email address</Alert>}

        <form onSubmit={handleEmailSignIn}>
          <TextField
            id="outlined-basic"
            label="email"
            variant="outlined"
            value={email}
            onInput={(e) => setEmail(e.target.value)}
          />

          <Button variant="outlined" type="submit">
            Confirm Email
          </Button>
        </form>
      </div>
    </>
  );
};

export default Confirm;
