import WebApp from "@twa-dev/sdk";

export function resolveTheme() {
  return WebApp.platform === "macos" || WebApp.platform === "ios"
    ? "apple"
    : "material";
}

export function repeat<T>(cb: (i: number) => T, times = 1): T[] {
  const res = [];

  for (let i = 0; i < times; i++) {
    res.push(cb(i));
  }

  return res;
}

export function isUnicode(char: string): boolean {
  return /^[\p{L}\p{N}]*$/u.test(char);
}
