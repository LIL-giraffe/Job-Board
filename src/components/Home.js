import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Header from "./Header";

const Home = () => {
  const [jobs, setJobs] = useState();
  const [filteredJobs, setFilteredJobs] = useState();
  const jobData = async () => {
    const data = await fetch(" http://localhost:3031/jobs");
    const json = await data.json();
    setJobs(json);
    setFilteredJobs(json);
  };

  useEffect(() => {
    jobData();
  }, []);

 
  const cityFilter = (e) => {
    if (e.target.value === "All") {
      const newJobs = jobs;
      setFilteredJobs(newJobs);
    } else {
      const newJobs = jobs.filter((val) => val.location === e.target.value);
      setFilteredJobs(newJobs);
    }
  };

  const expFilter=(e)=>{
    if(e.target.value==="All"){
        const newJobs=jobs;
        setFilteredJobs(newJobs)
    }else{
        const newJobs=jobs.filter((val)=>val.yoe===e.target.value)
        setFilteredJobs(newJobs)
    }
  }

  return (
    <div>
      <Header />
      <div>
        <select name="select city"  onChange={cityFilter}>
          <option value="All"> All</option>
          <option value="Bengaluru">Bengaluru</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Gurugram">Gurugram</option>
        </select>
      </div>
      <div>
        <select name="select experience" onChange={expFilter}>
            <option value="All">All</option>
            <option value="Internship">Internship</option>
            <option value="Fresher">Fresher</option>
            <option value="Early Professional">Early Professional</option>
            <option value="Professional">Professional</option>
        </select>
      </div>
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
        {filteredJobs?.map(({ id, title, img, location, role,yoe }) => {
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
