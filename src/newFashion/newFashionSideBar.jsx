import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import {AllCatagoryMens , FilterColors} from './newFashionData';

export default function NewFashionSideBab(){
    return(
        <>
         <Card sx={{ 
  minWidth: 275, 
  ml: '8px', 
  marginBottom: '5px',
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Black shadow
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)', // Darker shadow on hover
  }
}}>
  <CardContent>
    <Typography>
      <h3>Shop By Catagory</h3>
    </Typography>
    <FormGroup>
      {AllCatagoryMens?.length ? (
        AllCatagoryMens.map((element, index) => (
          <FormControlLabel
            value={element}
            key={index}
            control={<Checkbox />}
            label={element}
          />
        ))
      ) : (
        "No Data"
      )}
    </FormGroup>
  </CardContent>
</Card>

<Card sx={{ 
  minWidth: 275, 
  ml: '8px', 
  backgroundColor: 'white',
  borderRadius: '8px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Black shadow
  transition: 'box-shadow 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.7)', // Darker shadow on hover
  }
}}>
      <CardContent>
        <Typography ><h3>Colors</h3></Typography>
        <FormGroup>
  {AllCatagoryMens?.length ? (
    AllCatagoryMens.map((element, index) => (
      <FormControlLabel
        value={element}
        key={index}
        control={<Checkbox />}
        label={element}
      />
    ))
  ) : (
    "No Data"
  )}
</FormGroup>

      </CardContent>
    </Card>
        </>
    )
}