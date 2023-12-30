import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import { useNavigate } from "react-router-dom";

const JobCard = ({ id, title, img, location, role, yoe }) => {
  const navigate = useNavigate();
  const viewDetails = () => {
    navigate("/details", {
      state: {
        title: title,
        role: role,
        location: location,
      },
    });
  };
  const formapply = () => {
    navigate("/forms");
  };
  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia component="img" alt="green iguana" height="140" image={img} />
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
        <Button
          size="small"
          variant="contained"
          color="success"
          onClick={formapply}
        >
          Apply
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="success"
          onClick={viewDetails}
        >
          View Details
        </Button>
      </CardActions>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h8" color="text.secondary">
          <LocationOnIcon />
          <span style={{ verticalAlign: "4px" }}>{location}</span>
        </Typography>
        <Typography variant="h8" color="text.secondary">
          <BusinessCenterIcon />
          <span style={{ verticalAlign: "4px", paddingLeft: "2px" }}>
            {role}
          </span>
        </Typography>
        <Typography variant="h8" color="text.secondary">
          {yoe}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default JobCard;
