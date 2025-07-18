import SimulationValues from "./components/SimulationValues";
import SimulationResult from "./components/SimulationResult";
import useLoanSimulation from "./hooks/useLoanSimulation";

function App() {
  const {
    loanValue,
    paymentDeadline,
    age,
    interestRate,
    monthlyPayment,
    setLoanValue,
    setPaymentDeadline,
    setBirthDate,
    handleSubmit,
  } = useLoanSimulation();

  return (
    <>
      <div>
        <h1>Simule seu Empréstimo</h1>
        <SimulationValues
          loanValue={loanValue}
          paymentDeadline={paymentDeadline}
          setLoanValue={setLoanValue}
          setPaymentDeadline={setPaymentDeadline}
          setBirthDate={setBirthDate}
          handleSubmit={handleSubmit}
        />
      </div>

      <div>
        <p>Preencha os dados para visualizar o resultado da simulação</p>
        <SimulationResult
          age={age}
          interestRate={interestRate}
          monthlyPayment={monthlyPayment}
          paymentDeadline={paymentDeadline}
          loanValue={loanValue}
        />
      </div>
    </>
  )
}

export default App
