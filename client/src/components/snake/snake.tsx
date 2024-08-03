import { Box, BoxProps } from '@mui/material';

import Board from './components/board';
import ResetButton from './components/reset-button';
import Fireworks from '@fireworks-js/react';
import { setDirection, step } from './Redux/slice';
import { Direction } from './Functions/direction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import StartButton from './components/start-button';
import PauseButton from './components/pause-button';
import {
  selectDirection,
  selectIsStarted,
  selectLost,
  selectWon,
} from './Redux/selectors';

const Snake = (props: BoxProps) => {
  const isStarted = useSelector(selectIsStarted);
  const lost = useSelector(selectLost);
  const won = useSelector(selectWon);
  let direction = useSelector(selectDirection);

  const dispatch = useDispatch();

  useEffect(() => {
    // Set up the interval
    function timedTask() {
      dispatch(step());
    }
    const intervalId = isStarted && setInterval(timedTask, 200);
    console.log('🚀 ~ useEffect ~ isStarted:', isStarted);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [isStarted]);

  const handleKeyDown = (event: KeyboardEvent): void => {
    event.preventDefault();
    switch (event.key) {
      case 'ArrowDown':
        if (direction !== Direction.Down) {
          direction = Direction.Up;
        }
        break;
      case 'ArrowLeft':
        if (direction !== Direction.Right) {
          direction = Direction.Left;
        }
        break;
      case 'ArrowRight':
        if (direction !== Direction.Left) {
          direction = Direction.Right;
        }
        break;
      case 'ArrowUp':
      default:
        if (direction !== Direction.Up) {
          direction = Direction.Down;
        }
    }
    dispatch(setDirection({ direction }));
  };

  return (
    <Box {...props}>
      {won && (
        <Fireworks
          style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            zIndex: 1,
          }}
        />
      )}
      <Board onKeyDown={handleKeyDown} tabIndex={-1} zIndex="0" />
      <Box marginTop="1rem" marginBottom="1rem" zIndex="1">
        {won && <>you won</>}
        {lost && <>you lost</>}
        <StartButton />
        <PauseButton />
        <ResetButton />
      </Box>
    </Box>
  );
};

export default Snake;
