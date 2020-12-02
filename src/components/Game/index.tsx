import React from 'react';
import { WindowHeader } from 'react95';

import BombsCounter from '../BombsCounter';
import TimeCounter from '../TimeCounter';
import GameButton from '../GameButton';
import GameField from '../GameField';

import { GameInfoRow, WindowPanel, GameInfoPanel, FieldPanel, WindowContainer } from './styled';
import { createGameField } from '../../helpers/field';
import { useTimer } from '../../hooks/useTimer';

interface GameProps {
  width: number;
  height: number;
  bombs: number;
}

const Game: React.FC<GameProps> = ({ width, height, bombs }) => {
  const [passedTime, setPassedTime, stopTimer] = useTimer();
  const [bombsCount, setBombsCount] = React.useState(bombs);
  const [flaggedCount, setFlaggedCount] = React.useState(0);
  const field = React.useRef(createGameField(width, height, bombs));

  const onGameButtonClick = React.useCallback(() => {
    // field.current = createGameField(width, height, bombs);
    setPassedTime(0);
    setBombsCount(bombs);
  }, [setPassedTime, setBombsCount, bombs]);

  const handleGameOver = React.useCallback(() => {
    console.log('game over!');
    stopTimer();
  }, [stopTimer]);

  const handleFlagged = React.useCallback(
    (flag) => {
      setFlaggedCount((prev) => prev + flag);
    },
    [setFlaggedCount],
  );

  return (
    <WindowContainer>
      <WindowHeader className="window-header">
        <span>minesweeper.exe</span>
      </WindowHeader>
      <WindowPanel variant="outside">
        <GameInfoPanel variant="well">
          <GameInfoRow>
            <BombsCounter bombs={bombsCount - flaggedCount} />
            <GameButton onClick={onGameButtonClick} />
            <TimeCounter passed={passedTime} />
          </GameInfoRow>
        </GameInfoPanel>
        <FieldPanel variant="well">
          <GameField ref={field} onGameOver={handleGameOver} onFlagged={handleFlagged} />
        </FieldPanel>
      </WindowPanel>
    </WindowContainer>
  );
};

export default React.memo(Game);
