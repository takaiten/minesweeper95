import React from 'react';
import { Counter } from 'react95';

interface TimeCounterProps {
  passed: number;
}

const TimeCounter: React.FC<TimeCounterProps> = ({ passed }) => {
  return <Counter value={passed} minLength={3} />;
};

export default React.memo(TimeCounter);
