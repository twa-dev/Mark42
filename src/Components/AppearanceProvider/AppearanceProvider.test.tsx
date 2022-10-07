import { cleanup, getByTestId, render } from "@testing-library/react";
import { AppearanceProvider } from "./AppearanceProvider";
import { useTheme } from "../../hooks/useTheme";

afterEach(cleanup);

const App = () => {
  const theme = useTheme();
  return (
    <>
      <div data-testid="theme">{theme}</div>
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
});

it("checks usage with props", () => {
  const { container } = render(
    <AppearanceProvider theme="apple">
      <App />
    </AppearanceProvider>
  );
  expect(getByTestId(container, "theme").textContent).toEqual("apple");
});

it("works fine without provider", () => {
  const { container } = render(<App />);
  expect(getByTestId(container, "theme").textContent).toEqual("material");
});
