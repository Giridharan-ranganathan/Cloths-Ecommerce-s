import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import {useState} from 'react';
import { TextField , FormControl , InputLabel ,OutlinedInput , InputAdornment} from '@mui/material';

export default function Header({cart}) {
 
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid contOne">
    <div className='flex'>
   <span class="qwigley-regular">Shopping Zone</span>
    </div>
    <div>
    {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
    <FormControl sx={{ width: 710 }} fullWidth >
          <InputLabel htmlFor="outlined-adornment-amount">Search</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start"></InputAdornment>}
            label="Amount"
          />
        </FormControl>
    </div>
    <div>
    <Link type="button" className="btn btn-outline-warning" to={"/Cart.jsx"}  
     ><span><i class="fa-solid fa-cart-shopping"></i></span> Cart <span > - {cart.length} </span></Link>
      </div>
  </div>
</nav>
        </>
    )
}