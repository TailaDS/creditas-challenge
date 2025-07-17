import { useState } from "react"

function App() {

  const [ loanValue, setLoanValue ] = useState<string>();
  const [ paymentDeadline, setPaymentDeadline ] = useState<string>();
  const [ birthdate, setBirthdate ] = useState<Date>();
  const [ age, setAge ] = useState<number>();
  const [ interestRate, setInterestRate ] = useState<number>();

  const handleSubmit = () => {
    const age = calculateAge()
    setAge(age)

    const rate = calculateInterestRate(age)
    setInterestRate(rate)
  }

  const handleLoanChange = (value: string) => {
    const numbers = value.replace(/[^\d,]/g, '');
    setLoanValue(numbers);
  }

  const handlePaymentChange = (value: string) => {
    const numbers = value.replace(/[^\d,]/g, '');
    setPaymentDeadline(numbers);
  }

  const handleBirthdateChange = (value: string) => {
    const [year, month, day] = value.split('-').map(Number);
    const date: Date = new Date(year, month -1, day)
    setBirthdate(date);
  }

  function calculateAge() {
    const date = new Date();
    const today = date.getDate();
    const currentMonth = date.getMonth();

    let age = date.getFullYear() - birthdate!.getFullYear();

    if (
      currentMonth < birthdate!.getMonth()
      || (currentMonth === birthdate?.getMonth() && today < birthdate?.getDate())
    ) {
      age--;
    }
    return age
  }

  function calculateInterestRate(age: number) {
    let rate: number = 0;

    if (age < 25) {
      console.log("25")
      rate = 0.05;
      console.log(rate)
    } else if (age >= 26 && age < 40) {
      console.log("26-40")
      rate = 0.03;
      console.log(rate)
    } else if (age >= 41 && age < 60) {
      console.log("41-60")
      rate = 0.02;
      console.log(rate)
    } else {
      console.log("else")
      rate = 0.04;
      console.log(rate)
    }

    return rate;
  }

  return (
    <>
      <div>
        <h1>Simule seu Empréstimo</h1>
        <form id="simulation-values">
          <label>Dados da Simulação</label><br /> <br />

          <label htmlFor="loan-value">Valor do Empréstimo</label><br/>
          <input
            id="loan-value"
            min="0"
            type="number"
            onChange={(e) => handleLoanChange(e.target.value)}
            value={loanValue}
            required
          /><br/>

          <label htmlFor="payment-deadline">Prazo para Pagamento</label><br/>
          <input
            type="number"
            id="payment-deadline"
            min="0"
            value={paymentDeadline}
            onChange={(event) => handlePaymentChange(event.target.value)}
            required
          /><br/>

          <label htmlFor="birthday">Data de Nascimento</label><br/>
          <input
            type="date"
            id="birthday"
            min="1910-01-01"
            max="2025-01-01"
            onChange={(e) => handleBirthdateChange(e.target.value)}
            required
          /><br /> <br />

          <button onClick={handleSubmit}>Simular Empréstimo</button>
        </form>
      </div>

      <div>
        <p>Preencha os dados para visualizar o resultado da simulação</p>
        <div>
          <label htmlFor="age">Sua Idade:</label>
          <p>{age} anos</p>
        </div>
        <div>
          <label htmlFor="rate">Taxa de Juros:</label>
          <p>{interestRate}</p>
        </div>
        <div>
          <label htmlFor="installment">Parcela Mensal:</label>
          <p>R$ 80,00</p>
        </div>
        <div>
          <label htmlFor="total-amount">Total a Pagar:</label>
          <p>R$ 1080,00</p>
        </div>
        <div>
          <label htmlFor="total-interest">Total de Juros:</label>
          <p>R$ 5,00</p>
        </div>
      </div>
    </>
  )
}

export default App
