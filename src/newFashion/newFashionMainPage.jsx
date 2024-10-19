import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';

import NewFashionSideBab from './newFashionSideBar';
import NewFashionMainBab from './newFashionMianBar'

export default function NewFashionManiPage(){
    return(
        <>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
        <Grid size={3}>
          <NewFashionSideBab/>
        </Grid>
        <Grid size={9}>
          <NewFashionMainBab/>
        </Grid>
      </Grid>
    </Box>
        </>
    )
}