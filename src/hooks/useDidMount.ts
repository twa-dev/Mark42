import { useEffect } from "react";

import { useEffectEvent } from "./useEffectEvent";

export const useDidMount = (fn: () => void | (() => void)) => {
  const onMount = useEffectEvent(fn);
  useEffect(onMount, [onMount]);
};
