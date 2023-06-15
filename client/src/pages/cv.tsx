import React from "react";
import { Box, Typography } from "@mui/material";

import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { BiCode } from "react-icons/Bi";
import { GiSkills } from "react-icons/Gi";

const CV = () => (
  <Box>
    <Typography align="center" color="text.primary" variant="h3">
      Alexander Khvolis
    </Typography>
    <Typography color="text.primary">
      <p>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          width="100%"
        >
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            marginRight="1rem"
          >
            <AiOutlineHome />
            Crailsheim, Germany
          </Box>
          |
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            marginRight="1rem"
            marginLeft="1rem"
          >
            <AiOutlinePhone /> 017620126517
          </Box>
          |
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            marginRight="1rem"
            marginLeft="1rem"
          >
            <AiOutlineLinkedin /> www.linkedin.com/in/alex-khvolis
          </Box>
          |
          <Box
            alignItems="center"
            display="flex"
            flexDirection="row"
            gap="0.5rem"
            marginLeft="1rem"
          >
            <AiOutlineMail /> alex1309@gmail.com
          </Box>
          <br />
        </Box>
        <Box
          display="flex"
          gap="0.5rem"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <GiSkills />
          <Typography variant="subtitle2">SKILLS</Typography>
        </Box>
        <br />
        <BiCode /> Programming Languages: JavaScript, C++, C, Bash, Python,
        Perl,java. Environment: VSCode, IntelliJ, Visual Studio, Eclipse.
        Operation Systems: MacOS, Ubuntu, CentOS, VxWorks, Unix. APIs:
        React,NodeJS, Redux Tools: Git, Monday, Jira Cloud: GCP, Azure.
        Databases: Neo4J, Datastore, Firebase, PostgreSQL.
      </p>
      <p>
        EXPERIENCE
        <p>
          Full-Stack developer - Marketing Squad Tech Lead | EquityBee | 06/2021
          – Today JavaScript, React, Redux, NodeJS, Git, VSCode, GCP, Neo4j,
          Datastore, Firebase, MacOS, Bash Tech leader of Equitybee's marketing
          squad - Owner of solution design, architecture, development, code
          reviews, team members technical training and growth, and project and
          code documentation. Dynamic funnels – Designing, modelling, and
          templating the sign-up process into a dynamic funnel sign-up system,
          allowing the company to create and deliver new complex funnels quickly
          and easily. Website – Improving client-side performance, developing
          complex components and expanding design system base components,
          implementing and refactoring client-side pages, implementing a
          form/input wrapper that extends them with validators, state
          management, and syncing mechanism. Automation and System - Migrating
          the internal Marketing Email Automation System into HubSpot CRM
          Automation and implementing Neo4J to HubSpot’s data syncer. DB -
          Expanding schemas, managing data structures, and the efficiency of the
          calculated fields.
        </p>
        <p>
          Software Engineer | Forescout Technologies | 08/2019 – 06/2021 Java,
          Perl, C++, Python, Bash, PostgreSQL, Ubuntu, CentOS, Unix, IntelliJ,
          Visual Studio, Jira Refactor, and Feature implementation –
          Implementation data back-up and restore system, Refactoring of
          Networking Switch and Router management system. PT and CVE Research
          and development of security vulnerability fixes – Java
          deserialization, Database permissions, Race conditions,
          Server-side/Client-side attacks.
        </p>
        <p>
          Real-Time Embedded Software Engineer | Rafael Advanced Defense Systems
          | 05/2017 – 08/2019 C++, Visual Studio, VxWorks Development of a
          missile navigation system that integrates algorithms (Navigation and
          Mapping) and hardware (IMU, Servo Motors, Cameras). Fixing issues with
          serial driver implementation.
        </p>
      </p>
      <p>
        EDUCATION Bachelor of Computer Science | Technion-Israel Institute of
        Technology (The best University in Israel) | Projects  Assignment in
        Introduction to Artificial Intelligence – Implementation of self-playing
        Pac-Man using Decision Tree based AI algorithms (minimax,
        Expectiminimax, Alpha-beta pruning) (Python)  Project in Computer
        Communication - Manipulation of Dynamic Adaptive Streaming over HTTP
        algorithm into real-time video streaming. (C/C++, Python, MPEG-DASH,
        Open Source)  Project in Robotics – development of a robot that uses
        sensors and orientation data to perform mapping and path calculations to
        travel safely from point A to B. (C++, Arduino)  Project in Arduino &
        IoT – Autonomous car with lane detection, follow, and change abilities.
        (C++, Arduino, NodeMCU)  Project in Software – Comparison between
        Microsoft Azure and Google Cloud (Azure, GCP)
      </p>
      <p>
        MISC  Languages: English, Hebrew, and Russian.  Volunteer programs:
        MADA (Ambulance first AID assist),  CCNA (Cisco Certified Network
        Associate) Melech Project (Donation program, computers for everyone)
      </p>
    </Typography>
  </Box>
);

export default CV;
