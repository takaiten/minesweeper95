import React from 'react';

type UseTimerResult = [number, React.Dispatch<React.SetStateAction<number>>, () => void];

export function useTimer(): UseTimerResult {
  const [passedTime, setPassedTime] = React.useState(0);
  const [intervalHandle, setIntervalHandle] = React.useState<number | undefined>();

  React.useEffect(() => {
    const handle = setInterval(() => {
      setPassedTime((time) => time + 1);
    }, 1000);
    setIntervalHandle(handle);
    return () => clearInterval(handle);
  }, [setPassedTime]);

  const stopTimer = React.useCallback(() => {
    clearInterval(intervalHandle);
    setIntervalHandle(undefined);
  }, [intervalHandle, setIntervalHandle]);

  return [passedTime, setPassedTime, stopTimer];
}
