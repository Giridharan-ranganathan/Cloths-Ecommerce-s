import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import { TextField , FormControl , InputLabel ,OutlinedInput , InputAdornment} from '@mui/material';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';


export default function Header({cart}) {
 return(
        <>
           <Box sx={{ flexGrow: 1,
                     marginTop:2,
            }}>
      <Grid container spacing={5} textAlign={"center"}>
        <Grid size="grow">
          <Link to={'Layout.jsx'} ><span class="qwigley-regular">Shopping Zone</span></Link>
        </Grid>
        <Grid size={6} textAlign={'center'} style={{marginTop:6}} >
        <FormControl sx={{ width: 710 }} fullWidth >
          <TextField label="Search" color="dark" focused />
        </FormControl>
        </Grid>
        <Grid size="grow" style={{marginTop:16}} >
        <Link type="button" className="btn btn-outline-warning" to={"/Cart.jsx"}><span><i class="fa-solid fa-cart-shopping"></i></span> Cart <span > - {cart.length} </span></Link>
        </Grid>
      </Grid>
    </Box>
        </>
    )
}