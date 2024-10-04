// TODO delete me after migration to React 19 https://react.dev/reference/react/experimental_useEffectEvent
import { useLayoutEffect, useMemo, useRef } from "react";

type Fn<ARGS extends unknown[], R> = (...args: ARGS) => R;
export const useEffectEvent = <A extends unknown[], R>(
  fn: Fn<A, R>,
): Fn<A, R> => {
  const ref = useRef<Fn<A, R>>(fn);
  useLayoutEffect(() => {
    ref.current = fn;
  });
  return useMemo(
    () =>
      (...args: A): R => {
        const { current } = ref;
        return current(...args);
      },
    [],
  );
};
