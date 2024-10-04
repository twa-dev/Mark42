import { useCallback, useEffect, useRef } from 'react';

type UseTimeout = () => [
  (cb: VoidFunction, time: number) => void,
  number | undefined,
];

export const useTimeout: UseTimeout = () => {
  const timeoutRef = useRef<number>();

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const setTimeoutFn = useCallback((cb: () => void, time: number) => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(cb, time);
  }, []);

  return [setTimeoutFn, timeoutRef.current];
};
