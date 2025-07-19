import SimulationValues from "./components/SimulationValues";
import SimulationResult from "./components/SimulationResult";
import useLoanSimulation from "./hooks/useLoanSimulation";
import { Container, Main, Title } from "./styles/styles";

function App() {
  const {
    loanValue,
    paymentDeadline,
    age,
    interestRate,
    monthlyPayment,
    setLoanValue,
    setPaymentDeadline,
    setBirthdate,
    handleSubmit,
  } = useLoanSimulation();

  return (
    <Main>
      <Title>Simule seu Empréstimo</Title>
      <Container>
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
        />
      </Container>
    </Main>
  )
}

export default App
