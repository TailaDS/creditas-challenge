import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom';
import SimulationValues from "../components/SimulationValues";
import { LoanSimulationMock } from "./mocks";

describe('Loan Simulation - Unit tests', () => {
  let loanValue = "";
  let paymentDeadline = "";

  const setLoanValue = jest.fn((value) => loanValue = value);
  const setPaymentDeadline = jest.fn((value) => paymentDeadline = value);
  const setBirthdate = jest.fn();

  beforeEach(() => {
    render(
      <SimulationValues
        loanValue={loanValue}
        paymentDeadline={paymentDeadline}
        setLoanValue={setLoanValue}
        setPaymentDeadline={setPaymentDeadline}
        setBirthdate={setBirthdate}
        handleSubmit={() => {}}
      />
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('insert loan value on input', () => {
    const input = screen.getByTestId("loan-value-input");

    fireEvent.change(input, { target: { value: 200000 } });

    expect(setLoanValue).toHaveBeenCalledTimes(1);
    expect(setLoanValue).toHaveBeenCalledWith("200000");
  });

  it('insert payment deadline on input', () => {
    const input = screen.getByTestId("payment-deadline-input");

    fireEvent.change(input, { target: { value: 24 } });

    expect(setPaymentDeadline).toHaveBeenCalledTimes(1);
    expect(setPaymentDeadline).toHaveBeenCalledWith("24");
  });

  it('insert birthdate on input', () => {
    const birthdayMock = "2001-02-28"
    const [year, month, day] = birthdayMock.split('-').map(Number);
    const date: Date = new Date(year, month -1, day)

    const input = screen.getByTestId("birthdate-input");

    fireEvent.change(input, { target: { value: birthdayMock } });

    expect(setBirthdate).toHaveBeenCalledTimes(1);
    expect(setBirthdate).toHaveBeenCalledWith(date);
  });
});

describe('Loan Simulation - Integration test', () => {
  beforeEach(() => {
    render(<LoanSimulationMock />);
  });

  afterEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  it('when the form receives correct data, the result should be displayed on the screen', async () => {
    const loanValueInput = screen.getByTestId("loan-value-input");
    const paymentDeadlineInput = screen.getByTestId("payment-deadline-input");
    const birthdateInput = screen.getByTestId("birthdate-input");
    const submitButton = screen.getByText("Simular Empréstimo");

    await userEvent.type(loanValueInput, "20000")
    await userEvent.type(paymentDeadlineInput, "12")
    await userEvent.type(birthdateInput, "2001-02-28")
    await userEvent.click(submitButton)

    expect(screen.getByTestId("age")).toHaveTextContent("24 anos")
    expect(screen.getByTestId("interest-rate-value")).toHaveTextContent("5%")
    expect(screen.getByTestId("installment-value")).toHaveTextContent("R$ 1712.15")
    expect(screen.getByTestId("total-amount-value")).toHaveTextContent("R$ 20545.80")
    expect(screen.getByTestId("total-interest-value")).toHaveTextContent("R$ 545.80")
  });
});
