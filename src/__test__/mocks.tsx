import SimulationResult from "../components/SimulationResult";
import SimulationValues from "../components/SimulationValues";
import useLoanSimulation from "../hooks/useLoanSimulation";

export const LoanSimulationMock = () => {
  const {
    loanValue,
    paymentDeadline,
    birthdate,
    age,
    interestRate,
    monthlyPayment,
    isCalculated,
    setLoanValue,
    setPaymentDeadline,
    setBirthdate,
    handleSubmit
  } = useLoanSimulation();

  return (
    <>
      <SimulationValues
        loanValue={loanValue}
        paymentDeadline={paymentDeadline}
        setLoanValue={setLoanValue}
        setPaymentDeadline={setPaymentDeadline}
        setBirthdate={setBirthdate}
        handleSubmit={handleSubmit}
      />
      <SimulationResult
        age={age}
        interestRate={interestRate}
        monthlyPayment={monthlyPayment}
        paymentDeadline={paymentDeadline}
        loanValue={loanValue}
        isCalculated={isCalculated}
      />
    </>
  );
};