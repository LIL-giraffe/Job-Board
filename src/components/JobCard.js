import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const JobCard = ({id,title,img,location,role,yoe}) => {
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color:'green'}}>Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
      <CardContent sx={{display:"flex", justifyContent: 'space-between'}}>
        <Typography variant='h8' >{location}</Typography>
        <Typography variant='h8'>{role}</Typography>
        <Typography variant='h8'>{yoe}</Typography>
      </CardContent>
    </Card>
  )
}

export default JobCard