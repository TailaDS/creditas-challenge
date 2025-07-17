import React, { useState } from "react"

function App() {
  const [ loanValue, setLoanValue ] = useState<number>(0);
  const [ paymentDeadline, setPaymentDeadline ] = useState<number>(0);
  const [ birthdate, setBirthdate ] = useState<Date>();
  const [ age, setAge ] = useState<number>();
  const [ interestRate, setInterestRate ] = useState<number>(0);
  const [ monthlyPayment, setMonthlyPayment ] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (!loanValue || !paymentDeadline || !birthdate) {
      alert("Preencha os campos");
      return;
    }

    const age = calculateAge();
    const rate = calculateInterestRate(age);
    console.log(loanValue, rate, paymentDeadline)
    const pmt = calculateMonthlyPayment(loanValue, rate, paymentDeadline);

    setAge(age);
    setInterestRate(rate);
    setMonthlyPayment(pmt);
  }

  const handleLoanChange = (value: string) => {
    const numbers = parseFloat(value.replace(/[^\d,]/g, ''));
    setLoanValue(numbers);
  }

  const handlePaymentChange = (value: string) => {
    const numbers = parseInt(value.replace(/[^\d,]/g, ''));
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
    if (age <= 25) return 0.05;
    if (age >= 26 && age < 40) return 0.03;
    if (age >= 41 && age < 60) return 0.02;
    return 0.04;
  }

  function calculateMonthlyPayment(loan: number, annualRate: number, n: number): number {
    const r = annualRate / 12;
    const pmt = (loan * r) / (1 - Math.pow(1 + r, -n));
    return pmt;
  }

  return (
    <>
      <div>
        <h1>Simule seu Empréstimo</h1>
        <form id="simulation-values" onSubmit={handleSubmit}>
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

          <button type="submit">Simular Empréstimo</button>
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
          <p>{(interestRate * 100)}%</p>
        </div>
        <div>
          <label htmlFor="installment">Parcela Mensal:</label>
          <p>R$ {monthlyPayment?.toFixed(2)}</p>
        </div>
        <div>
          <label htmlFor="total-amount">Total a Pagar:</label>
          <p>R$ {(monthlyPayment * (paymentDeadline ?? 0)).toFixed(2)}</p>
        </div>
        <div>
          <label htmlFor="total-interest">Total de Juros:</label>
          <p>R$ {(monthlyPayment * (paymentDeadline ?? 0) - (loanValue ?? 0)).toFixed(2)}</p>
        </div>
      </div>
    </>
  )
}

export default App
