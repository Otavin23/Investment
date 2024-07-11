import { getByTestId, getByText, render, screen } from "@testing-library/react";
import Home from "./page";
import { Providers } from "./app.providers";

describe("Home Page", () => {
  const renderHome = () =>
    render(
      <Providers>
        <Home />
      </Providers>
    );

  it("should be able render Home", () => {
    render(
      <Providers>
        <Home />
      </Providers>
    );
  });

  it("wait for the button to be in the document", () => {
    renderHome();

    expect(screen.getByText("Criar investimento")).toBeInTheDocument();
  });
});
