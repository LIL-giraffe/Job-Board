import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack,Button } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" edge='start' color="inherit" aria-label="logo">
         
         <Sidebar/>
        </IconButton>
        <CatchingPokemonIcon/>
        <Typography variant="h6" component='div' sx={{flexGrow:1}}>
            App
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color="inherit">Feature</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Profile</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
