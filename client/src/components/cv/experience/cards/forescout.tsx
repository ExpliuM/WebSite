import { Box, BoxProps, Typography } from "@mui/material";
import React from "react";

const Forescout = (props: BoxProps) => (
  <Box {...props}>
    <Typography paragraph>
      Software Engineer | Forescout Technologies | 08/2019 – 06/2021 Java, Perl,
      C++, Python, Bash, PostgreSQL, Ubuntu, CentOS, Unix, IntelliJ, Visual
      Studio, Jira Refactor, and Feature implementation – Implementation data
      back-up and restore system, Refactoring of Networking Switch and Router
      management system. PT and CVE Research and development of security
      vulnerability fixes – Java deserialization, Database permissions, Race
      conditions, Server-side/Client-side attacks.
    </Typography>
  </Box>
);

export default Forescout;
