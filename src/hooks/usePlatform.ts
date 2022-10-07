import { useContext } from "react";
import { AppearanceContext } from "../Components/AppearanceProvider";
import { Platforms } from "@twa-dev/types";

export function usePlatform(): Platforms {
  const { platform } = useContext(AppearanceContext);

  return platform;
}
