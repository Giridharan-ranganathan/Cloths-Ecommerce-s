import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import { MainBarFilters } from './newFashionData';
import ProductDetailsModal from './ProductDetailsModal';
import { useState } from 'react';

export default function NewFashionMainBab() {

    const [open, setOpen] = useState(false);
    const [selectedProduct, setselectedProduct] = useState("");

    const handleCardClick = (id) => {
        setselectedProduct(id);
        setOpen(true);
    }

  return (
    <>
      <Grid container spacing={3} columns={12}>
        {Object.keys(MainBarFilters).map((categoryKey) =>
          MainBarFilters[categoryKey].map((element) => (
            <Grid item xs={12} sm={6} md={4} key={element.id}
            onClick={() => handleCardClick(element.id)} >
              <Card style={{height:'450px'}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="325"
                    image={element.imageUrl}
                    alt={element.name}
                  />
                  <CardContent>
                    <Typography gutterBottom><p class="font-italic">{element.name}</p>
                      
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {element.description}
                    </Typography>
                    <Typography variant='h5'>$:{element.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
        <ProductDetailsModal  
        selectedProduct={selectedProduct}
        open={open}
        handleClose={() => {
            setOpen(false);
          }}
          />
      </Grid>
    </>
  );
}
