import React, { useState } from "react";
import Header from "./Header";
import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const ApplicationForm = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setActive(true)
  };
  const goto = () => {
    navigate("/");
  };
  return (
    <>
      <Header />
      <Typography
        variant="h6"
        sx={{ display: "flex", justifyContent: "center", margin: "16px" }}
      >
        Fill in the Details
      </Typography>
      <Box display="flex" justifyContent="center">
        {!active ? (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightcyan",
              color: "white",
              padding: "16px",
              width: "700px",
            }}
          >
            <Grid container spacing={3} sx={{ width: "700px" }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  autoComplete="given-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  autoComplete="family-name"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  autoComplete="Email"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="location"
                  name="location"
                  label="Current Location"
                  fullWidth
                  autoComplete="Current Location"
                  variant="standard"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="outlined-number"
                  label="Years of experience"
                  fullWidth
                  type="number"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Message"
                  label="Message to hiring Manager"
                  multiline
                  fullWidth
                  rows={8}
                  variant="filled"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField disabled id="resume" label="Upload Resume" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  size="small"
                  variant="contained"
                  component="label"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  Upload File
                  <input type="file" hidden />
                </Button>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightcyan",
              color: "white",
              padding: "16px",
              width: "700px",
              gap:"8px",
              flexDirection:"column",
            }}
          >
            <TextField disabled label="Thanks for applying" />
            <Button size="small" variant="contained" onClick={goto}>
              Search more jobs...
            </Button>
          </Box>
        )}
      </Box>
      {!active && (<Box sx={{ display: "flex",  justifyContent: "center", marginTop: "8px" }}>
        <Button size="small" variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </Box>)}
    </>
  );
};

export default ApplicationForm;
