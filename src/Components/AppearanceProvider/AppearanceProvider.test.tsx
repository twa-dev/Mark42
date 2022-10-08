import { cleanup, getByTestId, render } from "@testing-library/react";
import { AppearanceProvider } from "./AppearanceProvider";
import { useTheme } from "../../hooks/useTheme";
import { usePlatform } from "../../hooks/usePlatform";
import { useColorScheme } from "../../hooks/useColorScheme";

const defaults = {
  colorScheme: "light",
  theme: "material",
  platform: "unknown",
};

afterEach(cleanup);
afterEach(() => {
  document.body.setAttribute("data-color-scheme", defaults.colorScheme);
  document.body.setAttribute("data-theme", defaults.theme);
});

const App = () => {
  const theme = useTheme();
  const platform = usePlatform();
  const colorScheme = useColorScheme();
  return (
    <>
      <div data-testid="colorScheme">{colorScheme}</div>
      <div data-testid="theme">{theme}</div>
      <div data-testid="platform">{platform}</div>
    </>
  );
};

it("checks basic usage", () => {
  const { container } = render(
    <AppearanceProvider>
      <App />
    </AppearanceProvider>
  );
  expect(getByTestId(container, "colorScheme").textContent).toEqual(
    defaults.colorScheme
  );
  expect(document.body.dataset.colorScheme).toEqual(defaults.colorScheme);
  expect(getByTestId(container, "theme").textContent).toEqual(defaults.theme);
  expect(document.body.dataset.theme).toEqual(defaults.theme);
  expect(getByTestId(container, "platform").textContent).toEqual(
    defaults.platform
  );
});

it("checks usage with props", () => {
  const { rerender, container } = render(
    <AppearanceProvider theme="apple" platform="android" colorScheme="dark">
      <App />
    </AppearanceProvider>
  );
  expect(getByTestId(container, "colorScheme").textContent).toEqual("dark");
  expect(document.body.dataset.colorScheme).toEqual("dark");
  expect(getByTestId(container, "theme").textContent).toEqual("apple");
  expect(document.body.dataset.theme).toEqual("apple");
  expect(getByTestId(container, "platform").textContent).toEqual("android");

  rerender(
    <AppearanceProvider platform="android">
      <App />
    </AppearanceProvider>
  );

  expect(getByTestId(container, "theme").textContent).toEqual("material");
  expect(document.body.dataset.theme).toEqual("material");
});

it("works fine without provider", () => {
  const { container } = render(<App />);
  expect(getByTestId(container, "colorScheme").textContent).toEqual(
    defaults.colorScheme
  );
  expect(document.body.dataset.colorScheme).toEqual(defaults.colorScheme);
  expect(getByTestId(container, "theme").textContent).toEqual(defaults.theme);
  expect(document.body.dataset.theme).toEqual(defaults.theme);
  expect(getByTestId(container, "platform").textContent).toEqual(
    defaults.platform
  );
});
