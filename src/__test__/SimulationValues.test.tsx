import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import SimulationValues from "../components/SimulationValues";

describe('SimulationValues - Unit tests', () => {
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

//describe('Integration tests', () => {
//  it('', () => {});
//})
