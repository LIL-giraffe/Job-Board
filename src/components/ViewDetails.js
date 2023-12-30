import React from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ViewDetails = () => {
  const location = useLocation();
  const title = location.state.title;
  const role = location.state.role;
  const place = location.state.location;
  const navigate = useNavigate();
  const applyForm = () => {
    navigate("/forms");
  };
  return (
    <div>
      <Header />
      <div
        style={{
          display: "flex",
          gap: "128px",
          justifyContent: "space-between",
          paddingTop: "32px",
          paddingLeft: "128px",
          paddingRight: "128px",
          paddingBottom: "32px",
          backgroundColor: "lightgray",
        }}
      >
        <div>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h6">{role}</Typography>
        </div>
        <div style={{ paddingTop: "18px" }}>
          <Button
            size="large"
            variant="contained"
            color="success"
            onClick={applyForm}
          >
            Apply
          </Button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "space-between",
          paddingTop: "32px",
          paddingLeft: "128px",
          paddingRight: "128px",
          paddingBottom: "32px",
        }}
      >
        <div style={{ paddingRight: "48px", width: "1050px" }}>
          <Typography variant="h6" sx={{ paddingBottom: "6px" }}>
            DESCRIPTION{" "}
          </Typography>
          <Typography variant="h8" s>
            At AWS AI, we want to make it easy for our customers to train their
            deep learning workload in the cloud. With Amazon SageMaker, AWS is
            building customer-facing services to empower data scientists and
            software engineers in their deep learning endeavors. As our
            customers rapidly adopt LLMs and Generative AI for their business,
            we’re building the next-generation AI platform to accelerate their
            development. We’re seeking a dedicated engineering team lead to
            drive building our next-generation AI compute platform that’s
            optimized for LLMs and distributed training. As an SDE, you will be
            responsible for designing, developing, testing, and deploying
            distributed machine learning systems and large-scale solutions for
            our world-wide customer base. In this, you will collaborate closely
            with a team of ML scientists and customers to influence our overall
            strategy and define the team’s roadmap. You'll assist in gathering
            and analyzing business and functional requirements, and translate
            requirements into technical specifications for robust, scalable,
            supportable solutions that work well within the overall system
            architecture. You will also drive the system architecture, spearhead
            best practices that enable a quality product, and help coach and
            develop junior engineers. A successful candidate will have an
            established background in engineering large scale software systems,
            a strong technical ability, great communication skills, and a
            motivation to achieve results in a fast paced environment.
          </Typography>
          <Typography variant="h6" sx={{ paddingBottom: "6px" }}>
            About You:
          </Typography>
          <Typography variant="h8">
            You are passionate about building platform and products for large
            scale deep learning model training (100+ billion parameter GPT,
            1000s of GPU devices). You have a proven track record of bringing
            innovative research to customers. You are able to thrive and succeed
            in an entrepreneurial environment and not be hindered by ambiguity
            or competing priorities. Ownership, delivering results, thinking big
            and analytical leadership are essential to success in this role. You
            have solid experience in multi-threaded asynchronous C++/Go
            development. You have prior experience in one of: resource
            orchestrators like slurm/kubernetes, high performance computing,
            building scalable systems, experience in large language model
            training. A successful candidate will possess both technical and
            customer-facing skills that will allow you to be the technical
            “face” of AWS within our solution providers’ ecosystem/environment
            as well as directly to end customers. You will be able to drive
            discussions with senior technical and management personnel within
            customers and partners, as well as the technical background that
            enables them to interact with and give guidance to software
            developers and applied scientists. This is a great team to come to
            have a huge impact on AWS and the world's customers we serve!
          </Typography>

          <Typography variant="h6" sx={{ paddingBottom: "6px" }}>
            QUALIFICATIONS -
          </Typography>
          <Typography variant="h8">
            5+ years of non-internship professional software development
            experience - 5+ years of programming with at least one software
            programming language experience - 5+ years of leading design or
            architecture (design patterns, reliability and scaling) of new and
            existing systems experience - Experience as a mentor, tech lead or
            leading an engineering team PREFERRED QUALIFICATIONS - 5+ years of
            full software development life cycle, including coding standards,
            code reviews, source control management, build processes, testing,
            and operations experience - Bachelor's degree in computer science or
            equivalent - Experience leading and influencing your team or
            organization - Experience with deep learning frameworks and
            libraries (any of PyTorch, TensorFlow, Huggingface, etc.) Amazon is
            committed to a diverse and inclusive workplace. Amazon is an equal
            opportunity employer and does not discriminate on the basis of race,
            national origin, gender, gender identity, sexual orientation,
            protected veteran status, disability, age, or other legally
            protected status. For individuals with disabilities who would like
            to request an accommodation, please visit
            https://www.amazon.jobs/en/disability/us. Our compensation reflects
            the cost of labor across several US geographic markets. The base pay
            for this position ranges from $134,500/year in our lowest geographic
            market up to $261,500/year in our highest geographic market. Pay is
            based on a number of factors including market location and may vary
            depending on job-related knowledge, skills, and experience. Amazon
            is a total compensation company. Dependent on the position offered,
            equity, sign-on payments, and other forms of compensation may be
            provided as part of a total compensation package, in addition to a
            full range of medical, financial, and/or other benefits. For more
            information, please visit
            https://www.aboutamazon.com/workplace/employee-benefits. Applicants
            should apply via our internal or external career site.
          </Typography>
        </div>
        <div>
          <Typography variant="h6" sx={{ paddingBottom: "10px" }}>
            Job Details
          </Typography>
          <Typography variant="h7" sx={{ paddingBottom: "6px" }}>
            <LocationOnIcon color="success" />
            <span style={{ verticalAlign: "5px", paddingLeft: "2px" }}>
              {place}
            </span>
          </Typography>
          <br />
          <Typography variant="h7">{role}</Typography>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
