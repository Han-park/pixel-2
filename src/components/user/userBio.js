import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Link from '@mui/material/Link';


import CarterProfile from "../../imgExample/carterProfile.jpg";


export default function UserBio() {
  return (
    <Card sx={{ maxWidth: 200, borderRadius: 0, display: { md: 'none',  sm: 'none', xs: 'none', lg: 'block'} }} elevation={0}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={CarterProfile}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cater
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{display: 'inline'}}>
        " Work hard, be kind, and amazing things will happen. " 
        </Typography>
        {/* <Link href="#" color="inherit" sx={{display: 'inline', fontSize: 14}}>
            더보기
        </Link> */}
      </CardContent>
      <CardActions>
        <Button size="small" sx={{textTransform: 'none', fontSize: 15}}>Blog</Button>
        <Button size="small" sx={{textTransform: 'none', fontSize: 15}}>Instagram</Button>
      </CardActions>
    </Card>
  );
}