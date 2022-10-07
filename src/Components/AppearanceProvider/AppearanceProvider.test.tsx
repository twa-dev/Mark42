import { cleanup, getByTestId, render } from "@testing-library/react";
import { AppearanceProvider } from "./AppearanceProvider";
import { useTheme } from "../../hooks/useTheme";
import { usePlatform } from "../../hooks/usePlatform";

afterEach(cleanup);

const App = () => {
  const theme = useTheme();
  const platform = usePlatform();
  return (
    <>
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
  expect(getByTestId(container, "theme").textContent).toEqual("material");
  expect(getByTestId(container, "platform").textContent).toEqual("unknown");
});

it("checks usage with props", () => {
  const { rerender, container } = render(
    <AppearanceProvider theme="apple" platform="android">
      <App />
    </AppearanceProvider>
  );
  expect(getByTestId(container, "theme").textContent).toEqual("apple");
  expect(getByTestId(container, "platform").textContent).toEqual("android");

  rerender(
    <AppearanceProvider platform="android">
      <App />
    </AppearanceProvider>
  );

  expect(getByTestId(container, "theme").textContent).toEqual("material");
});

it("works fine without provider", () => {
  const { container } = render(<App />);
  expect(getByTestId(container, "theme").textContent).toEqual("material");
  expect(getByTestId(container, "platform").textContent).toEqual("unknown");
});
