import CardContent, { CardContentProps } from "@mui/material/CardContent";
import React, { ElementType } from "react";
// import Typography from "@mui/material/Typography";

const CollapsedCardContent: ElementType = (props: CardContentProps) => (
  <CardContent {...props}>
    {/* <Typography color="text.primary" paragraph>
      Designing, modelling, and templating the sign-up process into a dynamic
      funnel sign-up system, allowing the company to create and deliver new
      complex funnels quickly and easily.
    </Typography>
    <Typography color="text.primary" paragraph>
      Website - Improving the client-side performance, developing complex
      components and expanding design system base components, implementing and
      refactoring client-side pages, implementing a form/input wrapper that
      extends them with validators, state management, and syncing mechanism.
    </Typography>
    <Typography color="text.primary" paragraph>
      Automation and System - Migrating the internal Marketing Email Automation
      System into HubSpot CRM Automation and implementing Neo4J to HubSpot’s
      data syncer.
    </Typography>
    <Typography color="text.primary" paragraph>
      DB - Expanding schemas, managing data structures, and the efficiency of
      the calculated fields.
    </Typography> */}
  </CardContent>
);

export default CollapsedCardContent;
