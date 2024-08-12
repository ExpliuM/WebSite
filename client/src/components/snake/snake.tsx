import { Box, BoxProps } from '@mui/material';

import Board from './components/board';
import ResetButton from './components/reset-button';
import Fireworks from '@fireworks-js/react';
import { setNextDirection, step } from './Redux/slice';
import { Direction } from './Functions/interfaces/direction';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import StartButton from './components/start-button';
import PauseButton from './components/pause-button';
import { selectGameState } from './Redux/selectors';

const Snake = (props: BoxProps) => {
  const { won, lost, isStarted, activeDirection } =
    useSelector(selectGameState);

  const dispatch = useDispatch();

  useEffect(() => {
    // Set up the interval
    function timedTask() {
      dispatch(step());
    }
    const intervalId = isStarted && setInterval(timedTask, 200);

    // Cleanup function to clear the interval when the component is unmounted
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [dispatch, isStarted]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      let nextDirection: Direction | undefined = undefined;
      switch (event.key) {
        case 'ArrowDown':
          event.preventDefault();
          if (activeDirection !== Direction.Down) {
            nextDirection = Direction.Up;
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          if (activeDirection !== Direction.Right) {
            nextDirection = Direction.Left;
          }
          break;
        case 'ArrowRight':
          event.preventDefault();
          if (activeDirection !== Direction.Left) {
            nextDirection = Direction.Right;
          }
          break;
        case 'ArrowUp':
          event.preventDefault();
          if (activeDirection !== Direction.Up) {
            nextDirection = Direction.Down;
          }
          break;
        default:
      }
      if (nextDirection !== undefined) {
        dispatch(setNextDirection({ nextDirection }));
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeDirection]);

  return (
    <Box
      sx={{
        '&:focus': {
          outline: '0px solid #000', // Customize the focus outline
        },
      }}
      {...props}
    >
      {won && (
        <Fireworks
          style={{
            height: '100%',
            position: 'fixed',
            width: '100%',
            zIndex: 1,
          }}
        />
      )}
      <Box
        sx={{
          display: 'grid',
        }}
      >
        <Board
          tabIndex={-1}
          sx={{
            gridRow: 1,
            gridColumn: 1,
            zIndex: 0,
          }}
        />
        {!isStarted && (
          <StartButton
            sx={{
              gridRow: 1,
              gridColumn: 1,
            }}
          />
        )}
      </Box>
      <Box marginTop="1rem" marginBottom="1rem" zIndex="1">
        {won && <>you won</>}
        {lost && <>you lost</>}
        <PauseButton />
        <ResetButton />
      </Box>
    </Box>
  );
};

export default Snake;
