import React from 'react';
import { Button } from 'react95';

interface GameButtonProps {
  onClick: () => void;
}

const GameButton: React.FC<GameButtonProps> = ({ onClick }) => {
  return (
    <Button square onClick={onClick} size="lg">
      <span role="img" aria-label="game-button">
        😎
      </span>
    </Button>
  );
};

export default React.memo(GameButton);
