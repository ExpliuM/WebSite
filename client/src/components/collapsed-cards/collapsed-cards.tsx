import { Box, BoxProps, Card, Collapse } from "@mui/material";
import React, { ElementType, Fragment, useState } from "react";

export type CollapsedCardData = {
  CardContent: ElementType<any>;
  CardHeader: ElementType<any>;
};

export type CollapsedCardsData = Array<CollapsedCardData>;

export type CollapsedCardsProps = BoxProps & {
  cards?: CollapsedCardsData;
};

const CollapsedCards = (props: CollapsedCardsProps) => {
  const { cards = [], ...otherProps } = props;

  const [focused, setFocused] = useState(0);

  const handleMouseOverCapture = (cardIndex: number) => () => {
    setFocused(cardIndex);
  };

  return (
    <Box {...otherProps}>
      {cards.map(({ CardContent, CardHeader }, cardIndex) => (
        <Card
          key={cardIndex}
          onMouseOverCapture={handleMouseOverCapture(cardIndex)}
          sx={{
            backgroundColor:
              focused === cardIndex ? "primary.light" : "primary.dark",
            borderRadius: "1rem",
            width: focused === cardIndex ? "90%" : "5%",
          }}
        >
          {CardHeader && (
            <CardHeader
              sideways={focused !== cardIndex}
              sx={{
                padding: "0.5rem",
                color: focused === cardIndex ? "text.main" : "text.disabled",
              }}
            />
          )}
          {focused === cardIndex ? (
            <Fragment>
              {CardContent && <CardContent sx={{ padding: "0.1rem" }} />}
            </Fragment>
          ) : null}
        </Card>
      ))}
    </Box>
  );
};

export default CollapsedCards;
