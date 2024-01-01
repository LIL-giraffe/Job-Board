import React, { useState, useEffect, useCallback } from "react";
import JobCard from "./JobCard";
import Header from "./Header";
import {
  Box,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useSelector,useDispatch } from "react-redux";
import { getAllJobs } from "../features/jobSlice";


const Home = () => {
  const dispatch=useDispatch()
  const data= useSelector((state)=>{
    return state.app
  })

  useEffect(() => {
    dispatch(getAllJobs())
  });
  const [filters, setFilters] = useState({});

  const updateFilter = useCallback((e) => {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [e.target.name]: e.target.value,
    }));
  },[]);

  const activeFilters = Object.keys(filters).filter(
    (filter) => filters[filter] !== "All"
  );

  let filteredJobs = data.jobs.filter((job) => {
    return activeFilters.every((key) => job[key] === filters[key]);
  });


  return (
    <div>
      <Header />
      <Card
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          padding: "12px",
        }}
      >
        <Typography sx={{paddingTop:"14px", paddingRight:"20px"}}>Apply Filters</Typography>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select name="location" onChange={updateFilter}>
              <MenuItem value="All"> All</MenuItem>
              <MenuItem value="Bengaluru">Bengaluru</MenuItem>
              <MenuItem value="Pune">Pune</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="New Delhi">New Delhi</MenuItem>
              <MenuItem value="Gurugram">Gurugram</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel>Experience</InputLabel>
            <Select name="yoe" onChange={updateFilter}>
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Internship">Internship</MenuItem>
              <MenuItem value="Fresher">Fresher</MenuItem>
              <MenuItem value="Early Professional">Early Professional</MenuItem>
              <MenuItem value="Professional">Professional</MenuItem>
            </Select>
          </FormControl>
        </Box>
        
      </Card>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "8px",
          gap: "4px",
          justifyContent: "center",
          marginTop: "8px",
        }}
      >
        {filteredJobs?.map(({ id, title, img, location, role, yoe }) => {
          return (
            <JobCard
              key={id}
              id={id}
              title={title}
              img={img}
              location={location}
              role={role}
              yoe={yoe}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
