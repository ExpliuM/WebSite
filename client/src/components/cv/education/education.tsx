import { Box, BoxProps, Typography } from "@mui/material";
import { GiSkills } from "react-icons/gi";
import React from "react";

const Education = (props: BoxProps) => (
  <Box {...props}>
    EDUCATION Bachelor of Computer Science | Technion-Israel Institute of
    Technology (The best University in Israel) | Projects  Assignment in
    Introduction to Artificial Intelligence – Implementation of self-playing
    Pac-Man using Decision Tree based AI algorithms (minimax, Expectiminimax,
    Alpha-beta pruning) (Python)  Project in Computer Communication -
    Manipulation of Dynamic Adaptive Streaming over HTTP algorithm into
    real-time video streaming. (C/C++, Python, MPEG-DASH, Open Source)  Project
    in Robotics – development of a robot that uses sensors and orientation data
    to perform mapping and path calculations to travel safely from point A to B.
    (C++, Arduino)  Project in Arduino & IoT – Autonomous car with lane
    detection, follow, and change abilities. (C++, Arduino, NodeMCU)  Project
    in Software – Comparison between Microsoft Azure and Google Cloud (Azure,
    GCP)
  </Box>
);

export default Education;
