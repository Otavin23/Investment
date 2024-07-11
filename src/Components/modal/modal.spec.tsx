import {
  fireEvent,
  getByTestId,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import ModalInvestment from "./index";
import { Providers } from "@/app/app.providers";

describe("Modal Page", () => {
  const renderModal = () =>
    render(
      <Providers>
        <ModalInvestment Data={[]} isClose={() => {}} setData={() => {}} />
      </Providers>
    );

  it("should be able render Modal", () => {
    render(
      <Providers>
        <ModalInvestment Data={[]} isClose={() => {}} setData={() => {}} />
      </Providers>
    );
  });

  it("should be able render Button criar investimento", () => {
    renderModal();

    expect(screen.getByText("Criar investimento")).toBeInTheDocument();
  });

  it("should be able show label proprietario", () => {
    renderModal();

    expect(screen.getByText("Proprietario")).toBeInTheDocument();
  });

  it("should be able click in the Data criação and show calender", () => {
    renderModal();

    fireEvent.click(screen.getByText("Data criação"));

    const calender = screen.getByTestId("calender");

    expect(calender).toBeInTheDocument();
  });

  it("should be able show label valor inicial", () => {
    renderModal();

    expect(screen.getByText("Valor inicial")).toBeInTheDocument();
  });

  it("should be able to close modal", () => {
    renderModal();

    fireEvent.click(screen.getByTestId("closeModal"));

    expect(screen.getByText("Crie um investimento")).not.toHaveStyle(
      "display: none"
    );
  });
});
