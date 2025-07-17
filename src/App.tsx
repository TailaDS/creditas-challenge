import { useState } from "react"

function App() {

  const [ loanValue, setLoanValue ] = useState<string>();
  const [ paymentDeadline, setPaymentDeadline ] = useState<string>();
  const [ birthdate, setBirthdate ] = useState<Date>();

  const handleSubmit = () => {
    alert(`Fazer cálculo com os dados do forms: ${loanValue}, ${paymentDeadline}, ${birthdate}`)
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
    const date: Date = new Date(value)
    setBirthdate(date);
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
            required
          /><br/>

          <label htmlFor="payment-deadline">Prazo para Pagamento</label><br/>
          <input
            type="number"
            id="payment-deadline"
            min="0"
            onChange={(event) => handlePaymentChange(event.currentTarget.value)}
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
        // TODO: remover tag e adicionar sessão de resultados
      </div>
    </>
  )
}

export default App
