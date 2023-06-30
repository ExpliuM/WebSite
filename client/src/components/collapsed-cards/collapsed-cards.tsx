import {
  Box,
  BoxProps,
  Card,
  CardActions,
  Collapse,
  IconButton,
} from "@mui/material";
import { CgArrowsExpandLeft } from "react-icons/cg";
import React, { ElementType, Fragment, useState } from "react";

export type CollapsedCardData = {
  CardContent: ElementType<any>;
  CardHeader: ElementType<any>;
  CollapsedCardContent: ElementType<any>;
};

export type CollapsedCardsData = Array<CollapsedCardData>;

export type CollapsedCardsProps = BoxProps & {
  cards?: CollapsedCardsData;
};

const CollapsedCards = (props: CollapsedCardsProps) => {
  const { cards = [], ...otherProps } = props;
  const [expanded, setExpanded] = useState(-1);
  const [focused, setFocused] = useState(0);

  // const handleExpand1Click = (cardIndex: number) => () => {
  //   setExpanded(cardIndex === expanded ? -1 : cardIndex);
  // };

  const handleMouseOverCapture = (cardIndex: number) => () => {
    cardIndex != focused && setExpanded(-1);
    setFocused(cardIndex);
  };

  return (
    <Box {...otherProps}>
      {cards.map(
        ({ CardContent, CardHeader, CollapsedCardContent }, cardIndex) => (
          <Card
            key={cardIndex}
            onMouseOverCapture={handleMouseOverCapture(cardIndex)}
            sx={{
              backgroundColor:
                focused === cardIndex ? "primary.light" : "primary.main",
              borderRadius: "1rem",
              width: focused === cardIndex ? "90%" : "5%",
            }}
          >
            {CardHeader && (
              <CardHeader
                sideways={focused !== cardIndex}
                sx={{ padding: "0.5rem" }}
              />
            )}
            {focused === cardIndex ? (
              <Fragment>
                {CardContent && <CardContent sx={{ padding: "0.1rem" }} />}
                {CollapsedCardContent && (
                  <Collapse
                    in={expanded === cardIndex}
                    timeout="auto"
                    unmountOnExit
                  >
                    <CollapsedCardContent />
                  </Collapse>
                )}
                {/* <Box bottom="2.5rem" position="absolute" height="5rem">
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="left"
                      onClick={handleExpand1Click(cardIndex)}
                    >
                      <CgArrowsExpandLeft style={{ color: "text.primary" }} />
                    </IconButton>
                  </CardActions>
                </Box> */}
              </Fragment>
            ) : null}
          </Card>
        )
      )}
    </Box>
  );
};

export default CollapsedCards;
