import React from 'react';
import { Counter } from 'react95';

interface BombsCounterProps {
  bombs: number;
}

const BombsCounter: React.FC<BombsCounterProps> = ({ bombs }) => {
  return <Counter value={bombs} minLength={3} />;
};

export default React.memo(BombsCounter);
