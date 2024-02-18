import { PropsOf } from '@emotion/react';
import { Box, BoxProps, Card } from '@mui/material';
import React, { ElementType, Fragment, useState } from 'react';

export type CollapsedCardData = {
  CardContent: ElementType;
  cardContentProps: PropsOf<ElementType>;
  CardHeader: ElementType;
  cardHeaderProps: PropsOf<ElementType>;
};

export type CollapsedCardsData = Array<CollapsedCardData>;

export type CollapsedCardsProps = BoxProps & {
  collapsedCardsData?: CollapsedCardsData;
};

const CollapsedCards = (props: CollapsedCardsProps) => {
  const { collapsedCardsData = [], ...otherProps } = props;

  const [focused, setFocused] = useState(0);

  const handleMouseOverCapture = (cardIndex: number) => () => {
    setFocused(cardIndex);
  };

  return (
    <Box {...otherProps}>
      {collapsedCardsData.map(
        (
          { CardContent, cardContentProps, CardHeader, cardHeaderProps },
          cardIndex,
        ) => (
          <Card
            key={cardIndex}
            onMouseOverCapture={handleMouseOverCapture(cardIndex)}
            sx={{
              backgroundColor:
                focused === cardIndex ? 'primary.light' : 'primary.dark',
              borderRadius: '1rem',
              width: focused === cardIndex ? '90%' : '5%',
            }}
          >
            {CardHeader && (
              <CardHeader
                sideways={focused !== cardIndex}
                sx={{
                  color: focused === cardIndex ? 'text.main' : 'text.disabled',
                }}
                {...cardHeaderProps}
              />
            )}
            {focused === cardIndex ? (
              <Fragment>
                {CardContent && <CardContent {...cardContentProps} />}
              </Fragment>
            ) : null}
          </Card>
        ),
      )}
    </Box>
  );
};

export default CollapsedCards;
