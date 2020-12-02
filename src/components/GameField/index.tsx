import React from 'react';

import {
  getIconByFieldCell,
  leftClickOnCell,
  revealField,
  rightClickOnCell,
} from '../../helpers/field';
import { FieldArray } from '../../models/GameModels';

import { GameFieldContainer, FixedButton } from './styled';

interface GameFieldProps {
  onGameOver: (trigger: React.Dispatch<React.SetStateAction<boolean>>) => void;
  onFlagged: (flag: number) => void;
}

const GameField: React.ForwardRefRenderFunction<FieldArray, GameFieldProps> = (
  { onGameOver, onFlagged },
  fieldRef: any,
): any => {
  const [_, setTrigger] = React.useState(false);

  const handleClick = ({ target }: React.MouseEvent<HTMLDivElement>) => {
    if (target) {
      const { x, y } = (target as HTMLDivElement).dataset;
      const wasBomb = leftClickOnCell(fieldRef.current, { x: Number(x), y: Number(y) });
      if (wasBomb) {
        revealField(fieldRef.current);
        onGameOver(setTrigger);
      }
      setTrigger((prev) => !prev);
    }
  };

  const handleRightClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (event.target) {
      const { x, y } = (event.target as HTMLDivElement).dataset;
      if (x && y) {
        const flagged = rightClickOnCell(fieldRef.current, { x: Number(x), y: Number(y) });
        onFlagged(flagged);
        setTrigger((prev) => !prev);
      }
    }
  };

  return (
    <GameFieldContainer onClick={handleClick} onContextMenu={handleRightClick}>
      {(fieldRef.current as FieldArray).map((x, indexX) => {
        return (
          <div key={indexX}>
            {x.map((y, indexY) => (
              <FixedButton
                key={`${indexX}-${indexY}`}
                data-x={indexX}
                data-y={indexY}
                sqaure
                number={y.bombsAround}
                active={y.isOpened}
                size="md"
              >
                <span>{getIconByFieldCell(y)}</span>
              </FixedButton>
            ))}
          </div>
        );
      })}
    </GameFieldContainer>
  );
};

export default React.memo(React.forwardRef(GameField));
